import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo variant="white" />
              <div className="font-heading font-bold text-lg">Good Friend Mortgage</div>
            </div>
            <p className="text-white/80 mb-4">
              Helping families across Alpharetta and Roswell find the perfect mortgage solution for their needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/GoodFriendMortgage/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-standard"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-standard"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-standard"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-standard">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-standard">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-white/80 hover:text-white transition-standard">
                  Calculators
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-standard">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-standard">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-standard">
                  Home Purchase
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-standard">
                  Refinancing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-standard">
                  HECM Mortgage
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-standard">
                  Families First Investing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-standard">
                  Mortgage Toolbox
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span>
                  902 Abbey Court<br />
                  Alpharetta, GA 30004
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:6787620127" className="text-white/80 hover:text-white transition-standard">
                  678-762-0127
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="mailto:loans@goodfriendmortgage.com" className="text-white/80 hover:text-white transition-standard">
                  loans@goodfriendmortgage.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/60 text-sm">
          <p>NMLS#: 160318 | Georgia Residential Mortgage Licensee#: 18978 | Florida License#: MBR1545</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Good Friend Mortgage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
