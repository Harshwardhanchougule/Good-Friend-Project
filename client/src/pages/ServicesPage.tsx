import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Key, DollarSign, Home, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import Cta from "@/components/home/Cta";
import { Helmet } from "react-helmet";

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  index: number;
}

const ServiceDetail = ({ title, description, icon, benefits, index }: ServiceDetailProps) => {
  return (
    <motion.div
      className="py-12 border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="bg-primary/10 p-4 rounded-full mb-4 inline-flex">
            {icon}
          </div>
          <h2 className="font-heading font-bold text-2xl text-primary mb-2">{title}</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-neutral-700 mb-6">{description}</p>
          <h3 className="font-heading font-semibold text-lg mb-3">Key Benefits:</h3>
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Button 
            asChild
            className="bg-primary hover:bg-primary-light text-white transition-standard"
          >
            <a href="#contact">Learn More About {title}</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Home Purchase Mortgages",
      description: "Whether you're a first-time homebuyer or looking to upgrade to your dream home, our purchase mortgage solutions are designed to make homeownership accessible and affordable. With over 100 loan programs available, we can find the perfect fit for your financial situation and goals.",
      icon: <Key className="text-secondary h-8 w-8" />,
      benefits: [
        "Access to over 100 different loan programs",
        "Specialized options for first-time homebuyers",
        "Competitive interest rates and terms",
        "Low down payment options available",
        "Expert guidance throughout the entire process"
      ]
    },
    {
      title: "Home Refinancing",
      description: "Refinancing your current mortgage can help you save money, pay off your home faster, or access equity for major expenses. Our refinancing options are tailored to help you achieve your financial goals with minimal hassle and maximum benefit.",
      icon: <DollarSign className="text-secondary h-8 w-8" />,
      benefits: [
        "Lower your monthly payments and interest rate",
        "Shorten your loan term to build equity faster",
        "Access cash from your home's equity",
        "Consolidate high-interest debt",
        "Switch from adjustable to fixed-rate terms"
      ]
    },
    {
      title: "HECM Mortgage",
      description: "A Home Equity Conversion Mortgage (HECM), commonly known as a reverse mortgage, allows homeowners aged 62 and older to convert part of their home equity into cash while still living in and owning their home. It's an excellent way to supplement retirement income.",
      icon: <Home className="text-secondary h-8 w-8" />,
      benefits: [
        "No monthly mortgage payments required",
        "Remain the owner of your home",
        "Use funds for any purpose",
        "Multiple payment options available",
        "FHA insurance protects you and your heirs"
      ]
    },
    {
      title: "Mortgage Tools & Resources",
      description: "Making informed mortgage decisions requires the right information and tools. We provide a comprehensive suite of calculators, guides, and resources to help you understand your options and plan effectively for your mortgage needs.",
      icon: <Calculator className="text-secondary h-8 w-8" />,
      benefits: [
        "Interactive mortgage payment calculators",
        "Refinance savings estimators",
        "Affordability and debt-to-income tools",
        "Amortization schedules and charts",
        "Educational resources and guides"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mortgage Services - Good Friend Mortgage</title>
        <meta name="description" content="Explore our comprehensive mortgage services including home purchase, refinancing, HECM mortgages, and helpful financial tools for Alpharetta and Roswell, GA residents." />
      </Helmet>
      
      <section className="relative bg-primary text-white py-16 px-4">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Mortgage Services
            </h1>
            <p className="text-xl opacity-90">
              Comprehensive mortgage solutions tailored to your unique needs
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-neutral-700">
              At Good Friend Mortgage, we offer a wide range of mortgage solutions designed to meet the diverse needs of our clients in Alpharetta, Roswell, and throughout Georgia. Our experienced team will guide you through the entire process, ensuring you find the perfect mortgage for your situation.
            </p>
          </div>
          
          <Card className="shadow-md mb-12">
            <CardContent className="p-0">
              {services.map((service, index) => (
                <ServiceDetail
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  benefits={service.benefits}
                  index={index}
                />
              ))}
            </CardContent>
          </Card>
          
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
              Our experienced mortgage professionals are here to help you navigate your options and find the perfect solution for your unique situation.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-heading font-medium transition-standard"
            >
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Cta />
    </>
  );
};

export default ServicesPage;
