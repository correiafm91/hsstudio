
import { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white opacity-0 transition-opacity duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12 text-center">Nossos resultados falam por si</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-gothic text-coral mb-2">
              <AnimatedNumber end={24} suffix="+" />
            </div>
            <p className="text-darkgray">projetos entregues</p>
            <p className="text-sm text-darkgray/70 mt-2">Ambientes comerciais que viraram vitrines de sucesso</p>
          </div>
          <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-gothic text-coral mb-2">
              <AnimatedNumber end={840} prefix="R$" suffix="k+" />
            </div>
            <p className="text-darkgray">em lucros gerados</p>
            <p className="text-sm text-darkgray/70 mt-2">Para clientes que decidiram investir em experiência</p>
          </div>
          <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-gothic text-coral mb-2">
              <AnimatedNumber end={92} suffix=".3%" />
            </div>
            <p className="text-darkgray">de satisfação</p>
            <p className="text-sm text-darkgray/70 mt-2">Clientes que voltariam e indicariam sem pensar duas vezes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
