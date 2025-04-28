
import { useEffect } from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-offwhite animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-gothic text-darkgray mb-6">
              Design que valoriza seu imóvel
            </h1>
            <p className="text-xl md:text-2xl text-darkgray/80 mb-8">
              Criamos projetos personalizados para valorizar seu espaço, otimizar layouts e atrair mais locatários ou compradores.
            </p>
            <a href="#contato" className="inline-block bg-coral text-white px-8 py-4 rounded-full hover:bg-coral/90 transition-colors">
              Transforme seu espaço
            </a>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://i.postimg.cc/RV1502yk/A-modern-flat-design-digital-artwork-of-a-realistic-home-interior-emphasizing-a-calm-and-soothing-a.jpg" 
              alt="Interior design showcase" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
