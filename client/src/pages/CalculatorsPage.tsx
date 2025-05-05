import MortgageCalculator from "@/components/calculators/MortgageCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, Home, Percent, DollarSign, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  coming: boolean;
  index: number;
}

const CalculatorCard = ({ title, description, icon, coming, index }: CalculatorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-standard hover:shadow-md">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full mr-3">
              {icon}
            </div>
            <h3 className="font-heading font-semibold text-lg">{title}</h3>
          </div>
          <p className="text-neutral-700 flex-grow">{description}</p>
          {coming && (
            <div className="mt-4 text-sm bg-secondary/10 text-secondary py-1 px-3 rounded inline-block">
              Coming Soon
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CalculatorsPage = () => {
  const calculators = [
    {
      title: "Mortgage Payment Calculator",
      description: "Calculate your estimated monthly mortgage payment based on loan amount, interest rate, and term.",
      icon: <Calculator className="text-secondary h-5 w-5" />,
      coming: false
    },
    {
      title: "Refinance Savings Calculator",
      description: "Determine how much you could save by refinancing your current mortgage to a new rate and term.",
      icon: <TrendingUp className="text-secondary h-5 w-5" />,
      coming: true
    },
    {
      title: "Home Affordability Calculator",
      description: "Find out how much house you can afford based on your income, expenses, and desired payment.",
      icon: <Home className="text-secondary h-5 w-5" />,
      coming: true
    },
    {
      title: "Interest Rate Comparison",
      description: "Compare different interest rates and terms to see the impact on your monthly payment and total interest paid.",
      icon: <Percent className="text-secondary h-5 w-5" />,
      coming: true
    },
    {
      title: "Extra Payment Calculator",
      description: "See how making extra payments can reduce your mortgage term and save thousands in interest.",
      icon: <DollarSign className="text-secondary h-5 w-5" />,
      coming: true
    },
    {
      title: "Amortization Schedule",
      description: "View a detailed breakdown of each payment, including principal and interest allocation over the loan term.",
      icon: <Calendar className="text-secondary h-5 w-5" />,
      coming: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mortgage Calculators - Good Friend Mortgage</title>
        <meta name="description" content="Use our mortgage calculators to estimate payments, compare options, and make informed decisions about your home financing." />
      </Helmet>
      
      <section className="py-16 px-4 bg-neutral-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Mortgage Calculators
            </h1>
            <p className="text-neutral-700">
              Use our financial tools to estimate payments, compare options, and make informed decisions about your mortgage.
            </p>
          </div>
          
          <MortgageCalculator />
          
          <div className="mt-16">
            <h2 className="font-heading text-xl font-bold text-primary mb-8 text-center">
              More Financial Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {calculators.slice(1).map((calculator, index) => (
                <CalculatorCard
                  key={calculator.title}
                  title={calculator.title}
                  description={calculator.description}
                  icon={calculator.icon}
                  coming={calculator.coming}
                  index={index}
                />
              ))}
            </div>
            
            <motion.div 
              className="text-center bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-2">Need Help Understanding Your Options?</h3>
              <p className="text-neutral-700 mb-4">
                While our calculators provide estimates, nothing beats personalized advice tailored to your specific situation. Our mortgage experts are ready to help you navigate your options.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-lg font-medium transition-standard"
              >
                Talk to a Mortgage Expert
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorsPage;
