
import { useEffect } from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-gothic text-darkgray mb-6">
            Transforme seu Airbnb. Aumente suas reservas. Maximize sua receita.
          </h1>
          <p className="text-xl md:text-2xl text-darkgray/80 mb-8">
            Design de interiores especializado para Airbnb que cria experiências inesquecíveis 
            e gera mais reservas por preços premium.
          </p>
          <div className="flex justify-center">
            <a href="#contato" className="inline-block bg-lightblue text-white px-8 py-4 rounded-full hover:bg-lightblue/90 transition-colors">
              Quero aumentar minhas reservas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
