
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo demora para finalizar o projeto?",
      answer: "O projeto completo é finalizado entre 2 a 3 semanas, incluindo a criação do design 3D, lista detalhada de compras e todas as orientações para implementação."
    },
    {
      question: "Em quanto tempo vou ver aumento nas reservas?",
      answer: "Nossos clientes relatam aumento significativo nas visualizações e reservas já nas primeiras semanas após a implementação do projeto e atualização das fotos do anúncio."
    },
    {
      question: "Quanto custa o projeto para meu Airbnb?",
      answer: "O investimento varia conforme o tamanho e complexidade da propriedade. Calculamos por metro quadrado, considerando que o retorno costuma pagar o projeto nos primeiros 2-3 meses de operação."
    },
    {
      question: "Vocês trabalham com qual tipo de propriedade?",
      answer: "Atendemos todos os tipos: apartamentos, casas, lofts, chalés, fazendas e propriedades comerciais convertidas para hospedagem. Cada projeto é personalizado para o perfil do hóspede ideal."
    },
    {
      question: "O projeto inclui lista de compras detalhada?",
      answer: "Sim! Entregamos projeto 3D completo, lista detalhada de móveis, decoração, eletrodomésticos e todos os itens necessários, com links para compra e orientações de instalação."
    },
    {
      question: "Como funciona o processo para propriedades em outras cidades?",
      answer: "Trabalhamos 100% online. Você envia fotos e medidas da propriedade, criamos o projeto 3D personalizado e fornecemos todo suporte para implementação à distância."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-gothic text-darkgray mb-12 text-center">Dúvidas frequentes</h2>
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
