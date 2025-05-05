import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  navLinks: { path: string; label: string }[];
  currentPath: string;
}

const MobileMenu = ({ isOpen, closeMenu, navLinks, currentPath }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute w-full z-50"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className={`font-medium text-sm py-2 border-b border-neutral-100 ${
                  currentPath === link.path 
                    ? "text-primary" 
                    : "text-neutral-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="w-full bg-primary hover:bg-primary-light text-white transition-standard"
              onClick={closeMenu}
            >
              <a href="#contact">GET A QUOTE</a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
