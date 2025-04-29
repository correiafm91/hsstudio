
import { useEffect } from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-offwhite animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-gothic text-darkgray mb-6">
              Transforme seu espaço. Valorize sua marca. Aumente seus resultados.
            </h1>
            <p className="text-xl md:text-2xl text-darkgray/80 mb-8">
              Criamos projetos de design de interiores comerciais que vão muito além da estética.
              Eles conectam, convertem e vendem.
            </p>
            <a href="#contato" className="inline-block bg-coral text-white px-8 py-4 rounded-full hover:bg-coral/90 transition-colors">
              Quero transformar meu espaço
            </a>
          </div>
          <div className="md:block">
            <img 
              src="https://i.postimg.cc/DZ4MHZSD/Precise-architectural-photograph-of-Uma-Clinica-Odontologica-Realista-Iluminada-Design-de-Interiores.jpg" 
              alt="Interior design showcase" 
              className="rounded-lg shadow-lg w-full object-cover animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
