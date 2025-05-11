
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const InvestmentCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-4xl md:text-5xl font-gothic text-darkgray text-center leading-tight max-w-4xl mx-auto">
            Não é só design. É estratégia visual.<br />
            Design de interiores comercial e residencial é investimento — e o retorno começa no primeiro olhar.
          </h2>
          
          <div className="w-full max-w-5xl">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <img 
                    src="https://i.postimg.cc/qBPz9Z5Z/A-glowing-bioluminescent-logo-for-a-realistic-clothing-store-interior-design-using-geometric-shapes.jpg"
                    alt="Projeto de loja comercial"
                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://i.postimg.cc/MGCdLL73/A-modern-apartment-living-room-with-minimalist-design-natural-light-and-pastel-colors-with-a-coastal.jpg"
                    alt="Design de sala de estar moderna"
                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://i.postimg.cc/GpLPFCD0/Luxurious-boutique-interior-design-with-elegant-displays-soft-lighting-and-high-end-finishes.jpg"
                    alt="Interior de boutique de luxo"
                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://i.postimg.cc/SRs8BZ94/Modern-kitchen-with-island-marble-countertops-and-contemporary-design-elements.jpg"
                    alt="Cozinha moderna com ilha"
                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static translate-y-0 mr-2" />
                <CarouselNext className="relative static translate-y-0 ml-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;
