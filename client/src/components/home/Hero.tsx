import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative">
      <div className="h-[70vh] md:h-[60vh] lg:h-[80vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
          alt="Beautiful homes in Alpharetta, GA" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            WE MAKE HOME HAPPEN!
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
            Roswell & Alpharetta's 5-Star Rated Mortgage Broker
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-6 rounded-lg font-heading font-medium text-lg w-full sm:w-auto transition-standard"
            >
              <a href="#contact">Get Started Today</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-6 rounded-lg font-heading font-medium text-lg w-full sm:w-auto transition-standard"
            >
              <a href="#rates">View Today's Rates</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
