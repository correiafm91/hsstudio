
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é o prazo médio de um projeto?",
      answer: "Nossos projetos geralmente levam de 2 a 3 semanas para serem concluídos, dependendo da área e complexidade do espaço."
    },
    {
      question: "Como é calculado o valor do projeto?",
      answer: "O valor é calculado por metro quadrado, considerando a complexidade do projeto e as especificações necessárias."
    },
    {
      question: "Como funciona o processo de contratação?",
      answer: "Basta preencher nosso formulário de contato com as informações do seu projeto. Nossa equipe entrará em contato para agendar uma conversa inicial."
    },
    {
      question: "Vocês atendem apenas projetos comerciais?",
      answer: "Não, atendemos tanto projetos comerciais quanto residenciais, sempre com o mesmo padrão de qualidade e atenção aos detalhes."
    },
    {
      question: "O que está incluso no projeto?",
      answer: "Nossos projetos incluem plantas técnicas, renderizações 3D, especificação de materiais e mobiliário, e acompanhamento durante a execução."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12">Perguntas Frequentes</h2>
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

