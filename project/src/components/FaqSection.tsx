import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: '¿Qué materiales utilizan para la impresión 3D?',
    answer: 'Trabajamos con una amplia variedad de materiales, entre ellos PLA, PETG, ASA, ABS, TPU y Nylon. Cada material tiene propiedades específicas que se adaptan a diferentes necesidades como resistencia, flexibilidad, durabilidad o resistencia a temperaturas extremas.'
  },
  {
    question: '¿Cuánto tiempo tarda en completarse un pedido de impresión 3D?',
    answer: 'El tiempo de producción varía según la complejidad del diseño, el tamaño, el material elegido y nuestro volumen de trabajo actual. Para proyectos pequeños, podemos ofrecer un plazo de 2-3 días hábiles, mientras que proyectos más grandes pueden tardar entre 5-10 días.'
  },
  {
    question: '¿Qué formato de archivo debo proporcionar para la impresión 3D?',
    answer: 'Aceptamos los formatos más comunes para impresión 3D, incluyendo STL, OBJ, 3MF y STEP. Si tienes tu diseño en otro formato, consúltanos y veremos si podemos trabajar con él o convertirlo a un formato compatible.'
  },
  {
    question: '¿Ofrecen servicios de envío?',
    answer: 'Sí, ofrecemos envío a todo el país. El coste y el tiempo de entrega dependerán de la ubicación y del tamaño/peso del paquete. También ofrecemos la opción de recogida en nuestras instalaciones sin coste adicional.'
  },
  {
    question: '¿Puedo solicitar muestras antes de realizar un pedido grande?',
    answer: 'Absolutamente. Recomendamos solicitar muestras antes de proceder con producciones a gran escala, especialmente si es la primera vez que trabajas con cierto material o si necesitas verificar las tolerancias y acabados. Las muestras se cobran según el tamaño y material.'
  },
  {
    question: '¿Cómo puedo obtener un presupuesto para mi proyecto?',
    answer: 'Puedes solicitar un presupuesto a través de nuestro formulario de contacto, enviando detalles sobre tu proyecto como el tipo de pieza, dimensiones, material deseado y cantidad. También puedes adjuntar el archivo 3D si ya lo tienes.'
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faqs" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre nuestros servicios de impresión 3D. Si no encuentras lo que buscas, no dudes en contactarnos.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full flex justify-between items-center p-6 ${
                  openIndex === index 
                    ? 'bg-blue-600 text-white rounded-t-lg' 
                    : 'bg-white text-gray-900 rounded-lg hover:bg-gray-100'
                } transition-colors duration-300`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-left">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div 
                className={`bg-white p-6 rounded-b-lg ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
          >
            Contáctanos
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;