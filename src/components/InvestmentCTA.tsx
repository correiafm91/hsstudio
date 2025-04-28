
const InvestmentCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-4xl md:text-5xl font-gothic text-darkgray text-center leading-tight max-w-4xl mx-auto animate-fadeIn">
            Invista no seu imóvel. Mude seu design, troque de móveis e eleve o valor de mercado de venda e aluguel.
          </h2>
          <div className="w-full max-w-3xl">
            <img 
              src="https://i.postimg.cc/hvPbXTQm/A-candid-street-photograph-depicting-a-property-with-an-upward-trending-price-graph-icon-using-crea.jpg"
              alt="Valorização imobiliária"
              className="w-full h-auto rounded-lg shadow-xl animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;
