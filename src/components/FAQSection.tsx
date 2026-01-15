import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quais tamanhos vêm no kit?",
    answer:
      "O kit vem com um mix de tamanhos: Solteiro, Casal e Queen. O Solteiro tem 2 peças (lençol de baixo com elástico + fronha) e o Casal/Queen tem 3 peças (lençol de baixo com elástico + lençol de cima + fronha). As estampas são sortidas para você ter variedade na hora de revender.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "Enviamos pra todo o Brasil! Prazo médio: São Paulo até 3 dias úteis, regiões próximas até 5 dias úteis, demais estados até 10 dias úteis. O envio é feito por Correios ou transportadora.",
  },
  {
    question: "Posso escolher as estampas?",
    answer:
      "As estampas são sortidas para garantir variedade e facilitar sua revenda. Assim você atende diferentes gostos de clientes. Todas as estampas são bonitas e de alta qualidade.",
  },
  {
    question: "Como faço para pagar?",
    answer:
      "Aceitamos Pix (aprovação instantânea) e cartão de crédito em até 10x sem juros. Você escolhe a melhor forma pra você!",
  },
  {
    question: "Posso trocar ou devolver?",
    answer:
      "Sim! Você tem até 7 dias após receber o produto para solicitar troca ou devolução, conforme o Código de Defesa do Consumidor. Sua satisfação é nossa prioridade!",
  },
  {
    question: "O lençol de malha encolhe na lavagem?",
    answer:
      "Nossos lençóis de malha são pré-encolhidos no processo de fabricação, então não encolhem significativamente. Podem ser lavados na máquina normalmente e secam super rápido!",
  },
  {
    question: "Quanto posso lucrar revendendo?",
    answer:
      "Cada jogo de lençol do kit sai por aproximadamente R$ 108. Revendedores costumam vender a partir de R$ 150 cada, tendo uma margem de lucro de R$ 40 ou mais por jogo! Com o kit completo, você pode faturar mais de R$ 250 de lucro.",
  },
  {
    question: "Preciso ter CNPJ para comprar?",
    answer:
      "Não! Qualquer pessoa pode comprar nosso kit de revenda. Você não precisa de CNPJ, não precisa ter loja física. Muitos revendedores começam vendendo pra família, amigos, pelo WhatsApp ou Instagram.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="w-8 h-8 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Perguntas Frequentes
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos produtos e como começar a revender
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
