
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
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-foreground mb-12 text-center">Resultados <span className="text-primary">comprovados</span> dos nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-gothic text-primary mb-2">
              <AnimatedNumber end={850} suffix="%" />
            </div>
            <p className="text-foreground">Aumento médio nas reservas</p>
            <p className="text-sm text-muted-foreground mt-2">Nossos clientes multiplicam as reservas em 90 dias</p>
          </div>
          <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-gothic text-primary mb-2">
              <AnimatedNumber end={12} suffix=" mil" />
            </div>
            <p className="text-foreground">Receita adicional média/mês</p>
            <p className="text-sm text-muted-foreground mt-2">Aumento real na receita dos nossos clientes</p>
          </div>
          <div className="p-6 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-gothic text-primary mb-2">
              <AnimatedNumber end={7} suffix=" dias" />
            </div>
            <p className="text-foreground">Para ver os primeiros resultados</p>
            <p className="text-sm text-muted-foreground mt-2">Aumento nas visualizações e primeiras reservas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
