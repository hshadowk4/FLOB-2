import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Guía de materiales: ¿Qué usar para cada tipo de proyecto?',
    summary: 'Aprende a elegir el material correcto para tus impresiones 3D según las propiedades y uso final del objeto.',
    date: '15 Mayo, 2025',
    image: 'https://images.pexels.com/photos/5734586/pexels-photo-5734586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Materiales'
  },
  {
    id: 2,
    title: 'Cómo preparar correctamente tu modelo 3D para impresión',
    summary: 'Consejos prácticos para optimizar tus modelos 3D y evitar problemas durante la impresión.',
    date: '3 Mayo, 2025',
    image: 'https://images.pexels.com/photos/7256383/pexels-photo-7256383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Diseño'
  },
  {
    id: 3,
    title: 'Impresión 3D en la educación: transformando el aprendizaje',
    summary: 'Descubre cómo la impresión 3D está revolucionando los métodos de enseñanza y creando nuevas oportunidades educativas.',
    date: '22 Abril, 2025',
    image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Educación'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog & Recursos</h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Artículos, tutoriales y recursos para ayudarte a entender mejor el mundo de la impresión 3D.
            </p>
          </div>
          <a 
            href="#" 
            className="mt-6 md:mt-0 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 inline-flex items-center"
          >
            Ver todos los artículos
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-gray-500 mb-2">{post.date}</span>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{post.summary}</p>
                <a 
                  href="#" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 inline-flex items-center mt-auto"
                >
                  Leer más
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;