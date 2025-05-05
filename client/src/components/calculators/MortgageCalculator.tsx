import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Home, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [principalInterest, setPrincipalInterest] = useState<number>(0);
  const [taxes, setTaxes] = useState<number>(0);
  const [insurance, setInsurance] = useState<number>(0);

  const calculateMortgage = () => {
    // Convert annual interest rate to monthly rate
    const monthlyInterestRate = (interestRate / 100) / 12;
    // Convert loan term to months
    const termInMonths = loanTerm * 12;
    
    // Calculate monthly payment (P&I) using the formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const x = Math.pow(1 + monthlyInterestRate, termInMonths);
    const monthlyPayment = (loanAmount * x * monthlyInterestRate) / (x - 1);
    
    // Estimate property taxes (around 2% of home value annually)
    const estimatedHomeValue = loanAmount / 0.8; // Assuming 20% down payment
    const annualTaxes = estimatedHomeValue * 0.02;
    const monthlyTaxes = annualTaxes / 12;
    
    // Estimate insurance (around 0.5% of home value annually)
    const annualInsurance = estimatedHomeValue * 0.005;
    const monthlyInsurance = annualInsurance / 12;
    
    // Update state
    setPrincipalInterest(monthlyPayment);
    setTaxes(monthlyTaxes);
    setInsurance(monthlyInsurance);
    setMonthlyPayment(monthlyPayment + monthlyTaxes + monthlyInsurance);
  };

  // Calculate on initial render and when values change
  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <section id="calculators" className="py-16 px-4 bg-neutral-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Mortgage Calculators
          </h2>
          <p className="text-neutral-700">
            Use our financial tools to estimate payments, compare options, and make informed decisions.
          </p>
        </motion.div>
        
        <Card className="bg-white rounded-lg shadow-lg mb-12">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="font-heading font-semibold text-xl mb-4">Mortgage Payment Calculator</h3>
                <p className="text-neutral-700 mb-6">
                  Estimate your monthly mortgage payments based on loan amount, interest rate, and term.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="loan-amount" className="text-sm font-medium text-neutral-700 mb-1">
                      Loan Amount
                    </Label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-700">$</span>
                      <Input
                        type="number"
                        id="loan-amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        min={10000}
                        max={10000000}
                        step={10000}
                        className="pl-8"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="interest-rate" className="text-sm font-medium text-neutral-700 mb-1">
                      Interest Rate (%)
                    </Label>
                    <Input
                      type="number"
                      id="interest-rate"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      min={0.1}
                      max={25}
                      step={0.1}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="loan-term" className="text-sm font-medium text-neutral-700 mb-1">
                      Loan Term (years)
                    </Label>
                    <Select
                      value={loanTerm.toString()}
                      onValueChange={(value) => setLoanTerm(Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 Years</SelectItem>
                        <SelectItem value="20">20 Years</SelectItem>
                        <SelectItem value="15">15 Years</SelectItem>
                        <SelectItem value="10">10 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="button"
                    onClick={calculateMortgage}
                    className="w-full bg-primary hover:bg-primary-light text-white transition-standard"
                  >
                    Calculate
                  </Button>
                </form>
              </div>
              
              <div className="col-span-1 lg:col-span-2">
                <div className="h-full flex flex-col justify-center">
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h4 className="font-heading font-semibold text-lg mb-4">Estimated Monthly Payment</h4>
                    
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-4">
                        {formatCurrency(monthlyPayment)}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-white p-3 rounded shadow-sm">
                          <div className="text-neutral-700">Principal & Interest</div>
                          <div className="font-semibold mt-1">{formatCurrency(principalInterest)}</div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                          <div className="text-neutral-700">Property Taxes (est.)</div>
                          <div className="font-semibold mt-1">{formatCurrency(taxes)}</div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                          <div className="text-neutral-700">Insurance (est.)</div>
                          <div className="font-semibold mt-1">{formatCurrency(insurance)}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-sm text-neutral-700">
                      <p>This is an estimate only. Contact us for a personalized quote based on your specific situation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="#" 
            className="inline-flex items-center bg-white px-5 py-3 rounded-lg shadow hover:shadow-md transition-standard"
          >
            <TrendingUp className="text-secondary mr-3 h-5 w-5" />
            <span className="font-medium">Refinance Calculator</span>
          </a>
          <a 
            href="#" 
            className="inline-flex items-center bg-white px-5 py-3 rounded-lg shadow hover:shadow-md transition-standard"
          >
            <Home className="text-secondary mr-3 h-5 w-5" />
            <span className="font-medium">Affordability Calculator</span>
          </a>
          <a 
            href="#" 
            className="inline-flex items-center bg-white px-5 py-3 rounded-lg shadow hover:shadow-md transition-standard"
          >
            <Calculator className="text-secondary mr-3 h-5 w-5" />
            <span className="font-medium">Amortization Schedule</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
