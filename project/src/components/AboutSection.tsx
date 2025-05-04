import React from 'react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const values = [
  {
    icon: <CheckCircle size={24} />,
    title: 'Calidad Superior',
    description: 'Nos comprometemos a ofrecer impresiones 3D de alta calidad, utilizando los mejores materiales disponibles.'
  },
  {
    icon: <Award size={24} />,
    title: 'Experiencia',
    description: 'Contamos con experiencia en impresión 3D y optimización de modelos para obtener los mejores resultados.'
  },
  {
    icon: <Users size={24} />,
    title: 'Atención Personalizada',
    description: 'Cada proyecto es único, por eso ofrecemos un servicio adaptado a las necesidades de cada cliente.'
  },
  {
    icon: <Target size={24} />,
    title: 'Innovación',
    description: 'Nos mantenemos actualizados con las últimas tecnologías para ofrecer las mejores soluciones.'
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://imgs.search.brave.com/pBp8gnyyUyA5OcE_vUJzKXBrBcxqhRFjgeLTkYRhdTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hYmF4/M2R0ZWNoLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/Ni90YW55YS1rdXNv/dmEtekRfN2xIVmtP/WUUtdW5zcGxhc2gt/MTA4MHg2NzUtMS0x/MDI0eDY0MC5qcGc"
                  alt="Impresora 3D FLOB" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-lg p-6 max-w-xs shadow-lg">
                <p className="text-lg font-bold mb-1">Desde 2023</p>
                <p className="text-sm">Imprimiendo tus ideas en 3D</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quiénes Somos</h2>
            <p className="text-lg text-gray-700 mb-6">
              En FLOB, somos un equipo de apasionados por la impresión 3D y la innovación tecnológica. Desde 2023, nos hemos especializado en ofrecer servicios de impresión 3D de alta calidad para profesionales y particulares.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nuestra misión es ayudar a materializar ideas y proyectos a través de la tecnología de impresión 3D, ofreciendo soluciones personalizadas con los más altos estándares de calidad.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;