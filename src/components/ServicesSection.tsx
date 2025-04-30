
import { useEffect, useRef } from 'react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12 text-center">O que fazemos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center">
          <div className="transform transition-all duration-300 hover:translate-y-[-10px] text-center">
            <h3 className="text-3xl font-gothic text-coral mb-4">Projeto 3D de interiores comerciais</h3>
            <p className="text-lg text-darkgray/80 mb-6">
              Não criamos apenas espaços bonitos. Criamos ambientes estratégicos que estimulam 
              a permanência, o consumo e a confiança do cliente.
            </p>
            <ul className="list-disc list-inside text-darkgray/80 space-y-2 ml-4">
              <li>Layouts que aumentam a circulação e o foco nos produtos/serviços</li>
              <li>Iluminação pensada para criar sensações e valorizar a marca</li>
              <li>Distribuição inteligente que transforma cada metro em lucro</li>
            </ul>
          </div>
          <div className="transform transition-all duration-300 hover:scale-105 flex justify-center">
            <img 
              src="https://i.postimg.cc/B6NpycVw/A-digitally-rendered-image-in-a-modern-flat-design-depicting-a-realistic-interior-with-a-gentle-and.jpg" 
              alt="Projeto 3D de interiores" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 transform transition-all duration-300 hover:scale-105 flex justify-center">
            <img 
              src="https://i.postimg.cc/VsWPf333/A-3-D-interior-house-view-Casa-3-D-de-interior-de-uma-casa-vista-por-cia-depicted-with-strong-hard.jpg" 
              alt="Seleção de móveis e materiais" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 md:order-2 transform transition-all duration-300 hover:translate-y-[-10px] text-center">
            <h3 className="text-3xl font-gothic text-coral mb-4">Seleção de móveis e materiais que vendem</h3>
            <p className="text-lg text-darkgray/80 mb-6">
              Cada escolha tem um propósito: valorizar sua marca e elevar a percepção de qualidade.
            </p>
            <ul className="list-disc list-inside text-darkgray/80 space-y-2 ml-4">
              <li>Mobiliário estratégico e sofisticado</li>
              <li>Materiais que impressionam e transmitem confiança</li>
              <li>Combinações que criam ambientes memoráveis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
