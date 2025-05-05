import { Button } from "@/components/ui/button";
import { Key, DollarSign, Home, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  linkUrl: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, imageUrl, linkUrl, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transition-standard hover:shadow-lg">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-standard hover:scale-105" 
          />
        </div>
        <CardContent className="p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              {icon}
            </div>
          </div>
          <h3 className="font-heading font-semibold text-xl text-center mb-3">{title}</h3>
          <p className="text-neutral-700 text-center mb-4">{description}</p>
          <a 
            href={linkUrl} 
            className="block text-center text-primary font-medium hover:text-primary-light transition-standard"
          >
            Learn More <span aria-hidden="true">→</span>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "HOME PURCHASING",
      description: "Access over 100 purchase loan programs tailored to fit the unique needs of our clients.",
      icon: <Key className="text-secondary h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      linkUrl: "#"
    },
    {
      title: "HOME REFINANCING",
      description: "Choose from over 60 refinance loan programs designed to lower your rate or tap into equity.",
      icon: <DollarSign className="text-secondary h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      linkUrl: "#"
    },
    {
      title: "HECM MORTGAGE",
      description: "Convert home equity to usable cash with a Home Equity Conversion Mortgage (reverse mortgage).",
      icon: <Home className="text-secondary h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      linkUrl: "#"
    },
    {
      title: "MORTGAGE TOOLBOX",
      description: "Access helpful tools and calculators to make educated mortgage decisions.",
      icon: <Calculator className="text-secondary h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1634733988138-5e19e8dbd4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      linkUrl: "/calculators"
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-neutral-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Our Mortgage Services
          </h2>
          <p className="text-neutral-700">
            We offer a comprehensive range of mortgage solutions tailored to your specific needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              linkUrl={service.linkUrl}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            asChild
            className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-heading font-medium transition-standard"
          >
            <a href="#contact">Discuss Your Options</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
