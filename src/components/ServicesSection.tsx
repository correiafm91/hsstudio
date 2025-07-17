
import { useEffect, useRef } from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "📊",
      title: "Otimização de Anúncio",
      description: "Reescrevemos seu anúncio com técnicas de copywriting que convertem visitantes em reservas garantidas."
    },
    {
      icon: "⭐",
      title: "Gestão de Avaliações",
      description: "Sistema completo para conseguir mais avaliações 5 estrelas e responder reviews estrategicamente."
    },
    {
      icon: "💰",
      title: "Estratégia de Preços",
      description: "Definimos preços dinâmicos e promoções inteligentes que maximizam sua receita por noite."
    },
    {
      icon: "📸",
      title: "Fotos Profissionais",
      description: "Orientações para fotos que vendem: ângulos, iluminação e composição que triplicam as visualizações."
    },
    {
      icon: "🎯",
      title: "SEO do Airbnb",
      description: "Otimização completa para aparecer no topo das buscas e receber mais solicitações de reserva."
    },
    {
      icon: "📱",
      title: "Automação de Mensagens",
      description: "Templates de mensagens que impressionam hóspedes e garantem avaliações excelentes automaticamente."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-foreground mb-4 text-center">Como <span className="text-primary">triplicamos</span> suas reservas</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Metodologia completa de marketing que transforma seu Airbnb na opção #1 dos hóspedes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-muted">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
