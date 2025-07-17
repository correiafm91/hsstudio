
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Em quanto tempo vou ver resultados nas reservas?",
      answer: "Nossos clientes veem aumento nas visualizações em 24-48h e as primeiras reservas extras aparecem em 7-14 dias após implementar nossas estratégias de marketing."
    },
    {
      question: "Quanto tempo demora para implementar todas as estratégias?",
      answer: "O processo completo leva entre 2 a 3 semanas: otimização do anúncio (3 dias), estratégia de preços (1 semana), implementação de automações (1 semana) e acompanhamento inicial."
    },
    {
      question: "Quanto custa o serviço de marketing para meu Airbnb?",
      answer: "O investimento varia conforme o tamanho da propriedade e nível de otimização necessário. Nossos clientes recuperam o investimento com as primeiras 3-5 reservas extras."
    },
    {
      question: "Vocês trabalham com qualquer tipo de propriedade?",
      answer: "Sim! Apartamentos, casas, lofts, chalés, fazendas - cada estratégia é personalizada para o tipo de propriedade e perfil do hóspede ideal."
    },
    {
      question: "O que está incluído no serviço completo?",
      answer: "Otimização completa do anúncio, estratégia de preços dinâmica, templates de mensagens, orientações para fotos, gestão de avaliações, SEO do Airbnb e automações de marketing."
    },
    {
      question: "Como funciona para propriedades em outras cidades?",
      answer: "Trabalhamos 100% online. Analisamos seu anúncio atual, implementamos as otimizações e fornecemos todo suporte via WhatsApp/Zoom durante o processo."
    },
    {
      question: "Vocês garantem aumento nas reservas?",
      answer: "Sim! Garantimos aumento mínimo de 200% nas reservas em 90 dias ou devolvemos 100% do investimento. Nossa metodologia tem 98% de taxa de sucesso."
    },
    {
      question: "Como vocês me ajudam a conseguir mais avaliações 5 estrelas?",
      answer: "Criamos um sistema completo: templates de mensagens que impressionam, check-list de experiência do hóspede, timing perfeito para pedir avaliações e estratégias para lidar com reviews negativos."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-foreground mb-12 text-center">Perguntas <span className="text-primary">frequentes</span></h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
