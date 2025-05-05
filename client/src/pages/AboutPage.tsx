import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Cta from "@/components/home/Cta";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>About Us - Good Friend Mortgage</title>
        <meta name="description" content="Learn about Good Friend Mortgage, a top-rated mortgage broker serving Alpharetta and Roswell, GA with personalized mortgage solutions." />
      </Helmet>
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                About Good Friend Mortgage
              </h1>
              <p className="text-neutral-700 mb-4">
                At Good Friend Mortgage, we believe that securing a mortgage should be a straightforward, personalized experience. Based in Alpharetta, Georgia, we've been serving the local community for years with expert mortgage guidance and exceptional customer service.
              </p>
              <p className="text-neutral-700 mb-4">
                Our team of mortgage professionals combines extensive industry knowledge with a genuine care for our clients' financial well-being. We take the time to understand your unique situation and goals, ensuring you receive the most suitable mortgage solution.
              </p>
              <p className="text-neutral-700 mb-6">
                With access to a wide range of loan programs and competitive rates, we're committed to making your homeownership dreams a reality. Our 5-star ratings and A+ BBB status reflect our dedication to excellence and client satisfaction.
              </p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="flex items-center" variants={itemVariants}>
                  <CheckCircle className="text-accent mr-2 h-5 w-5" />
                  <span>Local Expertise</span>
                </motion.div>
                <motion.div className="flex items-center" variants={itemVariants}>
                  <CheckCircle className="text-accent mr-2 h-5 w-5" />
                  <span>Personalized Service</span>
                </motion.div>
                <motion.div className="flex items-center" variants={itemVariants}>
                  <CheckCircle className="text-accent mr-2 h-5 w-5" />
                  <span>Competitive Rates</span>
                </motion.div>
                <motion.div className="flex items-center" variants={itemVariants}>
                  <CheckCircle className="text-accent mr-2 h-5 w-5" />
                  <span>Diverse Loan Programs</span>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80" 
                  alt="Good Friend Mortgage team" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Mortgage consultation" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Alpharetta homes" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 pt-12 border-t border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-xl font-bold text-primary mb-6 text-center">
              Our Certifications & Recognitions
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
                  <svg className="h-16 w-16 text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L8.5 18L9.5 14L6.5 11.5L10.5 11L12 7L13.5 11L17.5 11.5L14.5 14L15.5 18L12 15Z" fill="currentColor" />
                    <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-medium">Expertise.com Best of 2024</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
                  <svg className="h-16 w-16 text-secondary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <p className="font-medium">5-Star Google Rating</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
                  <svg className="h-16 w-16 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.129 22 16.99 22 12C22 6.477 17.523 2 12 2Z"/>
                  </svg>
                </div>
                <p className="font-medium">5-Star Facebook Rating</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
                  <svg className="h-16 w-16 text-[#0A3D8F]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L8 5H5v3L2 12l3 4v3h3l4 3 4-3h3v-3l3-4-3-4V5h-3L12 2zm0 5.694L14.25 10h2.25v1.75L18.75 14l-2.25 2.25V18h-2.25L12 20.25 9.75 18H7.5v-1.75L5.25 14l2.25-2.25V10H9.75L12 7.694z"/>
                  </svg>
                </div>
                <p className="font-medium">A+ BBB Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Cta />
    </>
  );
};

export default AboutPage;
