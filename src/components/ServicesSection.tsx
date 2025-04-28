
const ServicesSection = () => {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12 text-center">Nossos Serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center">
          <div className="transform transition-all duration-300 hover:translate-y-[-10px]">
            <h3 className="text-3xl font-gothic text-coral mb-4">Criação de planta 3D</h3>
            <p className="text-lg text-darkgray/80 mb-6">
              Transformamos seu espaço através de estratégias de design inteligentes, 
              otimizando a iluminação e distribuição de móveis para criar ambientes 
              funcionais e esteticamente agradáveis que valorizam seu imóvel.
            </p>
            <ul className="list-disc list-inside text-darkgray/80 space-y-2 ml-4">
              <li>Projetos personalizados de layout</li>
              <li>Soluções de iluminação eficientes</li>
              <li>Móveis sofisticados</li>
            </ul>
          </div>
          <div className="transform transition-all duration-300 hover:scale-105">
            <img 
              src="https://i.postimg.cc/B6NpycVw/A-digitally-rendered-image-in-a-modern-flat-design-depicting-a-realistic-interior-with-a-gentle-and.jpg" 
              alt="Projeto 3D de interiores" 
              className="rounded-lg shadow-lg w-full animate-fadeIn"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 transform transition-all duration-300 hover:scale-105">
            <img 
              src="https://i.postimg.cc/VsWPf333/A-3-D-interior-house-view-Casa-3-D-de-interior-de-uma-casa-vista-por-cia-depicted-with-strong-hard.jpg" 
              alt="Móveis sofisticados" 
              className="rounded-lg shadow-lg w-full animate-fadeIn"
            />
          </div>
          <div className="order-1 md:order-2 transform transition-all duration-300 hover:translate-y-[-10px]">
            <h3 className="text-3xl font-gothic text-coral mb-4">Seleção de móveis sofisticados</h3>
            <p className="text-lg text-darkgray/80 mb-6">
              Oferecemos um serviço completo de seleção de mobiliário, 
              priorizando peças sofisticadas que se adequam ao seu espaço 
              e estilo, garantindo elegância e funcionalidade para valorizar 
              seu imóvel.
            </p>
            <ul className="list-disc list-inside text-darkgray/80 space-y-2 ml-4">
              <li>Curadoria personalizada de móveis</li>
              <li>Escolha de materiais de alta qualidade</li>
              <li>Combinação de peças para máxima harmonia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
