
const ProjectsSection = () => {
  const projects = [
    {
      title: "Café Modernista",
      category: "Comercial",
      image: "/lovable-uploads/9de47147-d90a-458b-9030-513ff7dee7f2.png"
    },
    {
      title: "Restaurante Minimalista",
      category: "Comercial",
      image: "photo-1487958449943-2429e8be8625"
    },
    {
      title: "Loja Conceito",
      category: "Comercial",
      image: "photo-1483058712412-4245e9b90334"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12">Projetos Selecionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-gothic">{project.title}</h3>
                  <p className="text-white/80">{project.category}</p>
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

