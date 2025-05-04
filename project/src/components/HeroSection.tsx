import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Servicios de Impresión 3D <span className="text-blue-600">Profesionales</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Materializamos tus ideas con la más alta calidad en todo tipo de materiales: 
              PLA, PETG, ASA, ABS, TPU y Nylon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                Nuestros Servicios
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                Contactar
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src= "https://imgs.search.brave.com/ruzw135Hs2WB5gGeU9pm5PNQ1nnfy5LzGK0Og-5FZ2s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8zZHRv/d25wbHVzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/Ni9tYXRlcmlhbGVz/LWltcHJlc2lvbi0z/ZC5qcGc"
                alt="Impresora 3D profesional" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-sm font-medium text-gray-900">Materiales disponibles:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['PLA', 'PETG', 'ASA', 'ABS', 'TPU', 'NYLON'].map((material) => (
                  <span 
                    key={material} 
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;