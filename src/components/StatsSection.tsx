
import { useState, useEffect } from 'react';

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
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-gothic text-coral mb-2">
              <AnimatedNumber end={24} suffix="+" />
            </div>
            <p className="text-darkgray">Projetos Realizados</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-gothic text-coral mb-2">
              <AnimatedNumber end={800} prefix="R$" suffix="k+" />
            </div>
            <p className="text-darkgray">Em Resultados Gerados</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-gothic text-coral mb-2">
              <AnimatedNumber end={92} suffix=".3%" />
            </div>
            <p className="text-darkgray">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
