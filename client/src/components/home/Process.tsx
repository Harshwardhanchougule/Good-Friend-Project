import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep = ({ step, title, description, delay }: ProcessStepProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
        {step}
      </div>
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <p className="text-neutral-700">{description}</p>
    </motion.div>
  );
};

const Process = () => {
  const steps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Complete our simple online application from the comfort of your home, at your convenience."
    },
    {
      step: 2,
      title: "Get Personalized Options",
      description: "We'll analyze your situation and present custom mortgage solutions that fit your specific needs."
    },
    {
      step: 3,
      title: "Close With Confidence",
      description: "We guide you through closing, making sure everything goes smoothly so you can focus on your new home."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Simple Mortgage Process
          </h2>
          <p className="text-neutral-700">
            We've streamlined the mortgage process to make it as easy as possible for you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              delay={index * 0.1}
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
            className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-heading font-medium transition-standard"
          >
            <a href="#contact">Start Your Application</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
