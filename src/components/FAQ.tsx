
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é o prazo médio de um projeto residencial?",
      answer: "Nossos projetos residenciais geralmente levam de 2 a 4 semanas para serem concluídos, dependendo da área e complexidade do imóvel."
    },
    {
      question: "Como é calculado o valor do projeto?",
      answer: "O valor é calculado por metro quadrado, considerando a complexidade do projeto e as especificações necessárias para valorizar seu imóvel residencial."
    },
    {
      question: "Como funciona o processo de contratação?",
      answer: "Basta preencher nosso formulário de contato com as informações do seu imóvel. Nossa equipe entrará em contato para agendar uma visita inicial e avaliar o espaço."
    },
    {
      question: "Vocês trabalham com imóveis para aluguel ou venda?",
      answer: "Sim, trabalhamos com ambos. Nossos projetos são ideais tanto para proprietários que desejam valorizar seu imóvel para venda quanto para aumentar o potencial de locação."
    },
    {
      question: "O que está incluso no projeto residencial?",
      answer: "Nossos projetos incluem plantas técnicas, renderizações 3D, especificação de materiais e mobiliário, tudo pensado para maximizar o valor e a atratividade do seu imóvel residencial."
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
