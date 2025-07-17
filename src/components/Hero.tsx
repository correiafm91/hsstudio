
import { useEffect } from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-gothic text-foreground mb-6">
            Transforme seu <span className="text-primary">Airbnb</span> em máquina de reservas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Marketing estratégico e otimização completa que <span className="text-primary font-semibold">triplica suas reservas</span> 
            e aumenta sua receita em até 300% nos primeiros 90 dias.
          </p>
          <div className="flex justify-center">
            <a href="#contato" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors font-semibold">
              Quero 3x mais reservas agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
