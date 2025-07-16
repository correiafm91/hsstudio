
import { useEffect } from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-gothic text-darkgray mb-6">
              Transforme seu Airbnb. Aumente suas reservas. Maximize sua receita.
            </h1>
            <p className="text-xl md:text-2xl text-darkgray/80 mb-8">
              Design de interiores especializado para Airbnb que cria experiências inesquecíveis 
              e gera mais reservas por preços premium.
            </p>
            <div className="flex justify-center">
              <a href="#contato" className="inline-block bg-coral text-white px-8 py-4 rounded-full hover:bg-coral/90 transition-colors">
                Quero aumentar minhas reservas
              </a>
            </div>
          </div>
          <div className="md:block">
            <img 
              src="https://i.postimg.cc/DZ4MHZSD/Precise-architectural-photograph-of-Uma-Clinica-Odontologica-Realista-Iluminada-Design-de-Interiores.jpg" 
              alt="Design de interiores para Airbnb" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
