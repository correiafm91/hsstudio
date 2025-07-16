
import { useEffect, useRef } from 'react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12 text-center">Como transformamos seu Airbnb</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center">
          <div className="transform transition-all duration-300 hover:translate-y-[-10px] text-center">
            <h3 className="text-3xl font-gothic text-coral mb-4">Design estratégico para fotos que vendem</h3>
            <p className="text-lg text-darkgray/80 mb-6">
              Criamos ambientes pensados para as fotos do anúncio. Cada detalhe é planejado 
              para gerar mais cliques, visualizações e reservas.
            </p>
            <ul className="list-disc list-inside text-darkgray/80 space-y-2 ml-4">
              <li>Layouts fotogênicos que destacam o espaço</li>
              <li>Iluminação perfeita para cada cômodo</li>
              <li>Composições visuais que impressionam hóspedes</li>
            </ul>
          </div>
          <div className="transform transition-all duration-300 hover:scale-105 flex justify-center">
            <img 
              src="https://i.postimg.cc/B6NpycVw/A-digitally-rendered-image-in-a-modern-flat-design-depicting-a-realistic-interior-with-a-gentle-and.jpg" 
              alt="Design para fotos de Airbnb" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 transform transition-all duration-300 hover:scale-105 flex justify-center">
            <img 
              src="https://i.postimg.cc/VsWPf333/A-3-D-interior-house-view-Casa-3-D-de-interior-de-uma-casa-vista-por-cia-depicted-with-strong-hard.jpg" 
              alt="Experiência premium para hóspedes" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 md:order-2 transform transition-all duration-300 hover:translate-y-[-10px] text-center">
            <h3 className="text-3xl font-gothic text-coral mb-4">Experiência premium que justifica preços altos</h3>
            <p className="text-lg text-darkgray/80 mb-6">
              Ambientes que criam conexão emocional e geram avaliações 5 estrelas espontâneas.
            </p>
            <ul className="list-disc list-inside text-darkgray/80 space-y-2 ml-4">
              <li>Conforto visual que relaxa e impressiona</li>
              <li>Detalhes únicos que viram destaque nas reviews</li>
              <li>Atmosfera acolhedora que fideliza hóspedes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
