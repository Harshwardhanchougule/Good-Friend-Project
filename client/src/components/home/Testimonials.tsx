import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  initials: string;
  index: number;
}

const TestimonialCard = ({ quote, name, location, initials, index }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-neutral-50 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex text-secondary mb-3">
        <Star className="fill-secondary stroke-0 h-5 w-5" />
        <Star className="fill-secondary stroke-0 h-5 w-5" />
        <Star className="fill-secondary stroke-0 h-5 w-5" />
        <Star className="fill-secondary stroke-0 h-5 w-5" />
        <Star className="fill-secondary stroke-0 h-5 w-5" />
      </div>
      <p className="italic text-neutral-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
          {initials}
        </div>
        <div className="ml-3">
          <div className="font-medium">{name}</div>
          <div className="text-sm text-neutral-700">{location}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Good Friend Mortgage made the entire home buying process so easy. As first-time homebuyers, we had a lot of questions, and they were patient and thorough in explaining everything to us.",
      name: "John D.",
      location: "Alpharetta, GA",
      initials: "JD"
    },
    {
      quote: "We were able to refinance our mortgage and save over $300 per month! The team was professional, responsive, and made the entire process smooth and stress-free.",
      name: "Sarah M.",
      location: "Roswell, GA",
      initials: "SM"
    },
    {
      quote: "I've worked with several mortgage brokers over the years, and Good Friend Mortgage stands out for their expertise and personalized service. They found options I didn't know existed!",
      name: "Robert L.",
      location: "Alpharetta, GA",
      initials: "RL"
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
            What Our Clients Say
          </h2>
          <p className="text-neutral-700">
            Don't just take our word for it. Hear from the families we've helped secure their dream homes.
          </p>
          
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex">
              <Star className="fill-secondary stroke-0 h-5 w-5" />
              <Star className="fill-secondary stroke-0 h-5 w-5" />
              <Star className="fill-secondary stroke-0 h-5 w-5" />
              <Star className="fill-secondary stroke-0 h-5 w-5" />
              <Star className="fill-secondary stroke-0 h-5 w-5" />
            </div>
            <span className="font-medium">5-Star Rating on Google & Facebook</span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
              initials={testimonial.initials}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap space-x-0 md:space-x-6 space-y-4 md:space-y-0 items-center">
            <a 
              href="https://www.google.com/search?q=good+friend+mortgage+reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-primary transition-standard"
            >
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#4285F4" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm80.827-76.413V106.3h-45.788v45.783h-45.784v45.784h45.784v45.783h45.788v-45.783H512v-45.784z"/>
              </svg>
              <span>Google Reviews</span>
            </a>
            <a 
              href="https://www.facebook.com/GoodFriendMortgage/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-primary transition-standard"
            >
              <svg className="h-6 w-6 mr-2 text-[#1877F2]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
              <span>Facebook Reviews</span>
            </a>
            <a 
              href="https://www.bbb.org/us/ga/alpharetta/profile/mortgage-broker/good-friend-mortgage-inc-0443-6010377" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-primary transition-standard"
            >
              <svg className="h-6 w-6 mr-2 text-[#0A3D8F]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L8 5H5v3L2 12l3 4v3h3l4 3 4-3h3v-3l3-4-3-4V5h-3L12 2zm0 5.694L14.25 10h2.25v1.75L18.75 14l-2.25 2.25V18h-2.25L12 20.25 9.75 18H7.5v-1.75L5.25 14l2.25-2.25V10H9.75L12 7.694z"/>
              </svg>
              <span>BBB A+ Rating</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
