import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Material {
  name: string;
  description: string;
  characteristics: string[];
  applications: string[];
  technicalSpecs: {
    [key: string]: string;
  };
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  material: string;
  materialDetails: Material;
}

const materialDetails: { [key: string]: Material } = {
  PLA: {
    name: 'PLA (Ácido Poliláctico)',
    description: 'Material biodegradable derivado de recursos renovables como el almidón de maíz. Ideal para piezas decorativas y prototipos.',
    characteristics: [
      'Biodegradable y ecológico',
      'Fácil de imprimir',
      'Acabado brillante',
      'Buena precisión dimensional',
      'Baja resistencia al calor'
    ],
    applications: [
      'Prototipos visuales',
      'Maquetas arquitectónicas',
      'Figuras decorativas',
      'Proyectos educativos',
      'Piezas no funcionales'
    ],
    technicalSpecs: {
      'Temperatura de impresión': '190-220°C',
      'Temperatura de cama': '50-60°C',
      'Densidad': '1.24 g/cm³',
      'Resistencia a la tracción': '50-60 MPa',
      'Temperatura de deformación': '55-60°C'
    }
  },
  PETG: {
    name: 'PETG (Tereftalato de Polietileno Modificado)',
    description: 'Material que combina durabilidad y facilidad de impresión. Excelente para piezas funcionales que requieren resistencia química.',
    characteristics: [
      'Resistente a impactos',
      'Buena resistencia química',
      'Transparente y brillante',
      'Flexible y duradero',
      'Resistente al agua'
    ],
    applications: [
      'Contenedores de alimentos',
      'Piezas mecánicas',
      'Prototipos funcionales',
      'Componentes de máquinas',
      'Proyectos de exterior'
    ],
    technicalSpecs: {
      'Temperatura de impresión': '230-250°C',
      'Temperatura de cama': '70-80°C',
      'Densidad': '1.27 g/cm³',
      'Resistencia a la tracción': '50 MPa',
      'Temperatura de deformación': '70°C'
    }
  },
  ASA: {
    name: 'ASA (Acrilonitrilo Estireno Acrilato)',
    description: 'Material resistente a la intemperie y rayos UV. Perfecto para aplicaciones en exterior.',
    characteristics: [
      'Resistente a UV',
      'Estable en exteriores',
      'Buena resistencia química',
      'Acabado mate',
      'Resistente a impactos'
    ],
    applications: [
      'Piezas de exterior',
      'Carcasas de dispositivos',
      'Componentes automotrices',
      'Señalización',
      'Mobiliario exterior'
    ],
    technicalSpecs: {
      'Temperatura de impresión': '235-255°C',
      'Temperatura de cama': '90-110°C',
      'Densidad': '1.07 g/cm³',
      'Resistencia a la tracción': '40-45 MPa',
      'Temperatura de deformación': '98°C'
    }
  },
  ABS: {
    name: 'ABS (Acrilonitrilo Butadieno Estireno)',
    description: 'Material resistente y duradero, ideal para piezas mecánicas y funcionales que requieren resistencia al impacto.',
    characteristics: [
      'Alta resistencia al impacto',
      'Buena resistencia térmica',
      'Mecanizable post-impresión',
      'Resistente a químicos',
      'Ligero pero robusto'
    ],
    applications: [
      'Piezas mecánicas',
      'Prototipos funcionales',
      'Carcasas de dispositivos',
      'Componentes automotrices',
      'Herramientas'
    ],
    technicalSpecs: {
      'Temperatura de impresión': '230-250°C',
      'Temperatura de cama': '95-110°C',
      'Densidad': '1.04 g/cm³',
      'Resistencia a la tracción': '43 MPa',
      'Temperatura de deformación': '98°C'
    }
  },
  TPU: {
    name: 'TPU (Poliuretano Termoplástico)',
    description: 'Material flexible y elástico, perfecto para piezas que requieren flexibilidad y resistencia al desgaste.',
    characteristics: [
      'Altamente flexible',
      'Resistente a la abrasión',
      'Buena memoria de forma',
      'Resistente a impactos',
      'Durabilidad excepcional'
    ],
    applications: [
      'Juntas y sellos',
      'Protectores y fundas',
      'Componentes flexibles',
      'Calzado personalizado',
      'Amortiguadores'
    ],
    technicalSpecs: {
      'Temperatura de impresión': '220-235°C',
      'Temperatura de cama': '50-60°C',
      'Densidad': '1.21 g/cm³',
      'Elongación a la rotura': '580%',
      'Dureza Shore': '95A'
    }
  },
  NYLON: {
    name: 'NYLON (Poliamida)',
    description: 'Material con excelentes propiedades mecánicas, ideal para piezas que requieren alta resistencia y durabilidad.',
    characteristics: [
      'Alta resistencia mecánica',
      'Excelente durabilidad',
      'Resistente a la fatiga',
      'Bajo coeficiente de fricción',
      'Flexible y resistente'
    ],
    applications: [
      'Engranajes',
      'Herramientas',
      'Piezas de alto desgaste',
      'Componentes mecánicos',
      'Prototipos funcionales'
    ],
    technicalSpecs: {
      'Temperatura de impresión': '240-260°C',
      'Temperatura de cama': '70-90°C',
      'Densidad': '1.14 g/cm³',
      'Resistencia a la tracción': '78 MPa',
      'Temperatura de deformación': '97°C'
    }
  }
};

const products: Product[] = [
  {
    id: 1,
    name: 'Piezas Mecánicas',
    description: 'Fabricación de piezas mecánicas funcionales en ABS de alta resistencia. Ideal para prototipos y piezas de repuesto con excelente resistencia mecánica y térmica.',
    image: 'https://imgs.search.brave.com/QDmbjJ5xhXN8A5pRzwmLE6sukOR34BeA2ss0Z5ZEOdE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y2hhbm5lbHBhcnRu/ZXIuZXMvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDcvMjEx/MDIzMzYvaW1wcmVz/aW9uLTNELmpwZw',
    material: 'ABS',
    materialDetails: materialDetails.ABS
  },
  {
    id: 2,
    name: 'Figuras y Miniaturas',
    description: 'Creación de figuras decorativas y miniaturas con alto nivel de detalle en PLA. Perfecto para coleccionistas, maquetas y decoración.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    material: 'PLA',
    materialDetails: materialDetails.PLA
  },
  {
    id: 3,
    name: 'Componentes Flexibles',
    description: 'Fabricación de piezas flexibles y elásticas en TPU. Ideal para juntas, amortiguadores y componentes que requieren flexibilidad.',
    image: 'https://images.pexels.com/photos/8885722/pexels-photo-8885722.jpeg',
    material: 'TPU',
    materialDetails: materialDetails.TPU
  },
  {
    id: 4,
    name: 'Piezas Resistentes',
    description: 'Componentes de alta durabilidad en Nylon. Excelente para piezas que requieren resistencia al desgaste y propiedades mecánicas superiores.',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
    material: 'NYLON',
    materialDetails: materialDetails.NYLON
  },
  {
    id: 5,
    name: 'Prototipos Funcionales',
    description: 'Creación de prototipos y modelos de presentación en PETG. Material versátil con buena resistencia y acabado brillante.',
    image: 'https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg',
    material: 'PETG',
    materialDetails: materialDetails.PETG
  },
  {
    id: 6,
    name: 'Piezas Resistentes al Calor',
    description: 'Fabricación de componentes resistentes a la intemperie y rayos UV en ASA. Ideal para piezas que estarán expuestas al exterior.',
    image: 'https://images.pexels.com/photos/8885173/pexels-photo-8885173.jpeg',
    material: 'ASA',
    materialDetails: materialDetails.ASA
  }
];

const materials = ['Todos', 'PLA', 'PETG', 'ABS', 'TPU', 'NYLON', 'ASA'];

const ProductsSection: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(product => product.material === filter);

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ejemplos de productos que podemos crear con diferentes materiales, adaptándonos a las necesidades específicas de cada proyecto.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {materials.map((material) => (
            <button
              key={material}
              onClick={() => setFilter(material)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === material
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {material}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.material}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 inline-flex items-center"
                >
                  Más Información
                  <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para detalles del material */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.materialDetails.name}</h3>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-700 mb-6">{selectedProduct.materialDetails.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900">Características</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {selectedProduct.materialDetails.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900">Aplicaciones</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {selectedProduct.materialDetails.applications.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-bold mb-3 text-gray-900">Especificaciones Técnicas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedProduct.materialDetails.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="ml-2 text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a 
                    href="#contact" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Solicitar Presupuesto
                    <ChevronRight size={20} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;