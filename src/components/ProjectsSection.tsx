
import { useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Clínica Estética Lumière",
      category: "Clínica",
      description: "Design sofisticado que transmite confiança e bem-estar",
      image: "/lovable-uploads/9de47147-d90a-458b-9030-513ff7dee7f2.png"
    },
    {
      title: "Café Modernista",
      category: "Restaurante",
      description: "Ambiente acolhedor que aumentou o tempo médio de permanência em 45%",
      image: "photo-1487958449943-2429e8be8625"
    },
    {
      title: "Boutique Vitrine",
      category: "Loja",
      description: "Layout que otimizou o fluxo de clientes e aumentou as vendas",
      image: "photo-1483058712412-4245e9b90334"
    },
    {
      title: "Consultório Elite",
      category: "Clínica Médica",
      description: "Design que inspira confiança e tranquilidade",
      image: "photo-1460574283810-2aab119d8511"
    },
    {
      title: "Restaurante Fusion",
      category: "Restaurante",
      description: "Ambiente que elevou a experiência gastronômica",
      image: "photo-1449157291145-7efd050a4d0e"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12 text-center">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-center w-full">
                  <h3 className="text-white text-xl font-gothic">{project.title}</h3>
                  <p className="text-white/80 mb-2">{project.category}</p>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
