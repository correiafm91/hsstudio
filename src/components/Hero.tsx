
import { useEffect } from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-offwhite animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-gothic text-darkgray mb-6">
            Ambientes que falam, encantam e vendem — design com alma.
          </h1>
          <p className="text-xl md:text-2xl text-darkgray/80 mb-8">
            Design de interiores que aumenta a satisfação dos clientes e impulsiona seus resultados. Especialistas em ambientes comerciais que geram impacto.
          </p>
          <a href="#contato" className="inline-block bg-coral text-white px-8 py-4 rounded-full hover:bg-coral/90 transition-colors">
            Transforme seu negócio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
