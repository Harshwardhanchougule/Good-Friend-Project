import { Button } from "@/components/ui/button";
import { Star, Home, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const ValueProposition = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Your Trusted Mortgage Partner
          </h2>
          <p className="text-neutral-700 text-lg">
            At Good Friend Mortgage, we specialize in guiding clients and families through the process of securing the most suitable mortgage loan for their current and future needs.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-neutral-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full md:w-1/3 hover:-translate-y-1 transition-standard"
            variants={itemVariants}
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Star className="text-secondary h-8 w-8" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3">5-Star Rated Service</h3>
            <p className="text-neutral-700">
              As a 5-star rated mortgage broker, we offer personalized, local access to comprehensive mortgage services and expert consulting.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-neutral-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full md:w-1/3 hover:-translate-y-1 transition-standard"
            variants={itemVariants}
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Home className="text-secondary h-8 w-8" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3">Local Expertise</h3>
            <p className="text-neutral-700">
              We understand Alpharetta and Roswell markets, providing insider knowledge to help you find the perfect mortgage solution.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-neutral-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full md:w-1/3 hover:-translate-y-1 transition-standard"
            variants={itemVariants}
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <CheckCircle className="text-secondary h-8 w-8" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3">A+ BBB Rating</h3>
            <p className="text-neutral-700">
              Our A+ Better Business Bureau rating reflects our commitment to excellence and customer satisfaction.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            asChild
            className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-heading font-medium transition-standard"
          >
            <a href="#contact">Contact Us Today</a>
          </Button>
          <p className="mt-4 text-neutral-700">
            Receive the knowledgeable advice you deserve to make informed decisions about your mortgage!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
