import React, { useState, useEffect } from 'react';
import { Menu, X, Printer as Printer3d } from 'lucide-react';

const navLinks = [
  { title: 'Inicio', href: '#home' },
  { title: 'Servicios', href: '#services' },
  { title: 'Productos', href: '#products' },
  { title: 'Quiénes Somos', href: '#about' },
  { title: 'FAQs', href: '#faqs' },
  { title: 'Contacto', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <Printer3d size={32} className="text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-blue-600">FLOB</span>
            <img src="https://imgur.com/HMfDorn.jpg" alt="FLOB Logo" className="h-16 ml-5" />
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                  scrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {link.title}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;