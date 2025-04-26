
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-gothic text-darkgray mb-6">
            Transformando espaços em experiências únicas
          </h1>
          <p className="text-xl md:text-2xl text-darkgray/80 mb-8">
            Especialistas em design de interiores comerciais e residenciais, criando ambientes que inspiram e encantam.
          </p>
          <a href="#contato" className="inline-block bg-coral text-white px-8 py-4 rounded-full hover:bg-coral/90 transition-colors">
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

