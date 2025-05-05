import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import MobileMenu from "./MobileMenu";
import { SquareMenu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/services", label: "SERVICES" },
    { path: "/calculators", label: "CALCULATORS" },
    { path: "/about", label: "ABOUT US" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full ${isScrolled ? "shadow-md" : ""} bg-white transition-standard`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <div>
              <div className="font-heading font-bold text-lg text-primary">Good Friend Mortgage</div>
              <div className="text-xs text-neutral-700">A Counseling and Financing Firm</div>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center"
            aria-label="Toggle mobile menu"
          >
            <SquareMenu className="text-primary h-6 w-6" />
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-sm font-medium transition-standard ${
                  location === link.path 
                    ? "text-primary" 
                    : "text-neutral-700 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-primary hover:bg-primary-light text-white transition-standard"
            >
              <a href="#contact">GET A QUOTE</a>
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        closeMenu={closeMenu} 
        navLinks={navLinks}
        currentPath={location}
      />
    </header>
  );
};

export default Header;
