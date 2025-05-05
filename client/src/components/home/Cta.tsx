import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="py-20 px-4 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Make Your Home Ownership Dreams a Reality?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            With a 5-Star Google Rating, 5-star Facebook rating, and an A+ BBB rating, you know you're working with experts who have integrity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-heading font-medium text-lg w-full sm:w-auto transition-standard"
            >
              <a href="#contact">Contact Us Today</a>
            </Button>
            <Button 
              asChild
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-heading font-medium text-lg w-full sm:w-auto transition-standard"
            >
              <a href="#contact">Apply Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
