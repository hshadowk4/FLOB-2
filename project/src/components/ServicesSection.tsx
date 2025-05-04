import React from 'react';
import { Printer, ShieldCheck, Settings } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full">
      <div className="p-3 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
    </div>
  );
};

const services = [
  {
    icon: <Printer size={24} />,
    title: 'Impresión 3D Personalizada',
    description: 'Creamos tus diseños personalizados con la más alta calidad y precisión, ajustándonos a tus necesidades específicas.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Control de Calidad',
    description: 'Cada impresión pasa por un riguroso control de calidad para garantizar acabados perfectos y durabilidad.'
  },
  {
    icon: <Settings size={24} />,
    title: 'Variedad de Materiales',
    description: 'Trabajamos con una amplia gama de materiales: PLA, PETG, ASA, ABS, TPU y Nylon para adaptarnos a tus necesidades.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ofrecemos servicios de impresión 3D de calidad para dar vida a tus ideas, con atención personalizada en cada proyecto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas un servicio personalizado?</h3>
              <p className="text-blue-100 text-lg">
                Contáctanos para discutir tus necesidades específicas y obtener una cotización personalizada. Estamos aquí para ayudarte a hacer realidad tu proyecto.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;