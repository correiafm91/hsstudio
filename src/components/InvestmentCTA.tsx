
import { useEffect, useRef } from 'react';

const InvestmentCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-4xl md:text-5xl font-gothic text-darkgray text-center leading-tight max-w-4xl mx-auto">
            Cada real investido em design volta multiplicado.<br />
            Design para Airbnb é estratégia de receita — o retorno começa na primeira reserva premium.
          </h2>
          <div className="w-full max-w-3xl flex justify-center">
            <img 
              src="https://i.postimg.cc/qBPz9Z5Z/A-glowing-bioluminescent-logo-for-a-realistic-clothing-store-interior-design-using-geometric-shapes.jpg"
              alt="ROI em design para Airbnb"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;
