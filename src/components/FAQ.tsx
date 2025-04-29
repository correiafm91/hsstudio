
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Em quanto tempo o projeto fica pronto?",
      answer: "Nossos projetos comerciais geralmente levam de 3 a 6 semanas para serem concluídos, dependendo da complexidade e área do espaço comercial."
    },
    {
      question: "Quanto custa transformar meu espaço comercial?",
      answer: "O investimento é calculado por metro quadrado, considerando a complexidade do projeto e as especificações necessárias para valorizar seu espaço comercial e atrair mais clientes."
    },
    {
      question: "Vocês atendem empresas de qualquer segmento?",
      answer: "Sim, atendemos diversos segmentos comerciais como lojas de varejo, escritórios, clínicas, restaurantes e outros estabelecimentos que buscam um ambiente estrategicamente projetado para atrair e reter clientes."
    },
    {
      question: "O projeto inclui sugestão de móveis?",
      answer: "Sim, todos os nossos projetos incluem sugestão detalhada de mobiliário estratégico, especificação de materiais e consultoria para aquisição de peças que se encaixem perfeitamente na proposta visual e funcional do seu negócio."
    },
    {
      question: "Como funciona o processo de contratação?",
      answer: "Basta preencher nosso formulário de contato com as informações do seu espaço comercial. Nossa equipe entrará em contato para agendar uma visita inicial e entender melhor as necessidades específicas do seu negócio."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12">Dúvidas frequentes</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
