import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Printer as Printer3d } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Printer3d size={32} className="text-blue-400 mr-2" />
              <span className="text-2xl font-bold">FLOB</span>
            </div>
            <p className="text-gray-400 mb-6">
              Servicios profesionales de impresión 3D con todo tipo de materiales para dar vida a tus ideas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Servicios</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-300">Productos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">Quiénes Somos</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors duration-300">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+34 616 32 76 61</li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">flobiiid@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FLOB. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Política de Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Términos y Condiciones</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer