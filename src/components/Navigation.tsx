
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          Aryan<span className="text-purple-default">Shukla</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white hover:text-purple-default transition-colors">
            Home
          </a>
          <a href="#projects" className="text-white hover:text-purple-default transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-white hover:text-purple-default transition-colors">
            Skills
          </a>
          <a href="#certificates" className="text-white hover:text-purple-default transition-colors">
            Certificates
          </a>
          <a href="#about" className="text-white hover:text-purple-default transition-colors">
            About
          </a>
          <Button asChild>
            <a href="#contact" className="bg-purple-default hover:bg-purple-dark text-white">
              Contact Me
            </a>
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md p-5 absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-white hover:text-purple-default transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className="text-white hover:text-purple-default transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-white hover:text-purple-default transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#certificates" 
              className="text-white hover:text-purple-default transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Certificates
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-purple-default transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Button 
              asChild
              className="bg-purple-default hover:bg-purple-dark w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
