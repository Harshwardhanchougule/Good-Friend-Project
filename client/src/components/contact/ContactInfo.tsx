import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-white rounded-lg shadow-md">
        <CardContent className="p-6 md:p-8">
          <h3 className="font-heading text-xl font-bold text-primary mb-4">Our Office</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 w-10">
                <MapPin className="text-secondary h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Crabapple Village Office Park</p>
                <p>902 Abbey Court</p>
                <p>Alpharetta, GA 30004</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10">
                <Phone className="text-secondary h-5 w-5" />
              </div>
              <div>
                <p>
                  MAIN OFFICE: <a 
                    href="tel:6787620127" 
                    className="text-primary hover:text-primary-light transition-standard"
                  >
                    678-762-0127
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10">
                <Mail className="text-secondary h-5 w-5" />
              </div>
              <div>
                <p>
                  EMAIL: <a 
                    href="mailto:loans@goodfriendmortgage.com" 
                    className="text-primary hover:text-primary-light transition-standard"
                  >
                    loans@goodfriendmortgage.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10">
                <CreditCard className="text-secondary h-5 w-5" />
              </div>
              <div>
                <p>NMLS#: 160318</p>
                <p>Georgia Residential Mortgage Licensee#: 18978</p>
                <p>Florida License#: MBR1545</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="rounded-lg overflow-hidden shadow-md h-64">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.583310888325!2d-84.31547082394644!3d34.0200766211214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f576085d9f28f1%3A0x302ab78e02e1f8a9!2s902%20Abbey%20Ct%2C%20Alpharetta%2C%20GA%2030004!5e0!3m2!1sen!2sus!4v1698712345678!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Good Friend Mortgage Office Location"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
