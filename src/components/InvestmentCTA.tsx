
import { useEffect, useRef } from 'react';

const InvestmentCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-gothic text-foreground text-center leading-tight max-w-4xl mx-auto">
            Cada real investido em <span className="text-primary">marketing</span> retorna <span className="text-primary">R$ 5-10</span>.<br />
            Nossos clientes pagam o investimento com as <span className="text-primary">primeiras 3 reservas</span> extras.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;
