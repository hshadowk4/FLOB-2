import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana García',
    role: 'Arquitecta',
    company: 'Estudio ARQA',
    content: 'FLOB transformó por completo nuestra forma de crear maquetas arquitectónicas. La calidad y precisión de sus impresiones 3D superaron todas nuestras expectativas. El equipo fue extremadamente profesional y nos ayudó a optimizar nuestros diseños para conseguir los mejores resultados.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Martínez',
    role: 'Ingeniero de Producto',
    company: 'TechInnovate',
    content: 'Llevamos colaborando con FLOB más de un año para nuestros prototipos y no podríamos estar más satisfechos. Su conocimiento técnico y capacidad para trabajar con materiales especializados nos ha permitido acelerar nuestro ciclo de desarrollo de producto significativamente.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    role: 'Directora Creativa',
    company: 'Estudio Creativo Impulso',
    content: 'Necesitábamos producir piezas personalizadas para una campaña publicitaria con un plazo muy ajustado. FLOB no solo cumplió con el plazo, sino que la calidad de las piezas fue excepcional. Su atención al detalle marca realmente la diferencia.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Historias de éxito y experiencias de quienes han confiado en nosotros para sus proyectos de impresión 3D.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop version */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 ${
                    index === activeIndex 
                      ? 'ring-2 ring-blue-500 shadow-lg transform scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-sm">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile version */}
          <div className="md:hidden">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonials[activeIndex].content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevTestimonial} 
                className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <span 
                    key={index} 
                    className={`block w-2 h-2 rounded-full ${
                      index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial} 
                className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;