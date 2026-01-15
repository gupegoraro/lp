import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  Truck, 
  CreditCard, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Clock, 
  Shield, 
  Zap,
  Users,
  DollarSign,
  ShoppingBag,
  MessageCircle,
  ChevronRight
} from "lucide-react";
import UrgencyCounter from "@/components/UrgencyCounter";
import FAQSection from "@/components/FAQSection";
import ProductGallery from "@/components/ProductGallery";

const PAYMENT_LINK = "#"; // Substituir pelo link de pagamento real

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-xl text-foreground">KSA Enxovais</span>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <a href={PAYMENT_LINK}>Comprar Agora</a>
          </Button>
        </div>
      </header>

      {/* Urgency Counter */}
      <section className="bg-background py-4">
        <div className="container mx-auto px-4">
          <UrgencyCounter />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent to-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-center md:text-left order-2 md:order-1">
                <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold">
                  🔥 OPORTUNIDADE PARA REVENDEDORES
                </Badge>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                  Ganhe Dinheiro Revendendo{" "}
                  <span className="text-primary">Jogos de Lençol</span>{" "}
                  Direto da Fábrica
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Kit com 6 jogos de lençol de malha a preço de atacado. 
                  Produto de alta saída, fácil de vender e com margem de lucro garantida!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
                  <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                    <p className="text-muted-foreground text-sm mb-1">Kit Revenda (6 jogos)</p>
                    <p className="text-4xl md:text-5xl font-extrabold text-primary">R$ 650</p>
                    <p className="text-muted-foreground text-sm">ou 10x de R$ 65 sem juros</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <a href={PAYMENT_LINK} className="flex items-center gap-2">
                    QUERO COMEÇAR A REVENDER
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </Button>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary" /> Pronta Entrega
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary" /> Envio Imediato
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary" /> Parcelamento em 10x
                  </span>
                </div>
              </div>

              {/* Product Gallery */}
              <div className="order-1 md:order-2">
                <ProductGallery />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem é Ideal */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Esse Kit é Ideal Para Você Que...
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Se você se identifica com alguma dessas situações, esse produto foi feito pra você!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ShoppingBag, text: "Já vende em feiras, na rua ou porta a porta" },
              { icon: MessageCircle, text: "Revende pelo WhatsApp ou Instagram" },
              { icon: Users, text: "Tem uma lojinha pequena ou sacoleira" },
              { icon: TrendingUp, text: "Quer uma renda extra todo mês" },
              { icon: DollarSign, text: "Busca produtos com margem de lucro boa" },
              { icon: Zap, text: "Quer começar a empreender sem complicação" },
            ].map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios do Produto */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Por Que Lençol de Malha Vende Tanto?
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Produto prático, de qualidade e com alta procura. Perfeito pra quem quer lucrar!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Fácil de Lavar", desc: "Pode ir na máquina sem medo" },
              { icon: Clock, title: "Seca Rápido", desc: "Economiza tempo do seu cliente" },
              { icon: Star, title: "Macio e Confortável", desc: "Malha de qualidade superior" },
              { icon: TrendingUp, title: "Giro Rápido", desc: "Vende fácil e sem encalhe" },
            ].map((item, index) => (
              <Card key={index} className="text-center bg-background border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Vem no Kit */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            O Que Vem no Kit de Revenda?
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Kit completo com mix de tamanhos e estampas variadas pra você atender todos os clientes!
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary">
                      MAIS VENDIDO
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Kit Revenda - 6 Jogos de Lençol
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>6 jogos de lençol de malha</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Mix de tamanhos: Solteiro, Casal e Queen</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Estampas variadas (sortidas)</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Solteiro: 2 peças | Casal/Queen: 3 peças</span>
                      </li>
                      <li className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Embalagem pronta pra revenda</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center bg-muted p-6 rounded-2xl">
                    <p className="text-muted-foreground text-sm mb-1">Valor do Kit</p>
                    <p className="text-4xl font-extrabold text-primary mb-2">R$ 650</p>
                    <p className="text-muted-foreground text-sm mb-4">10x de R$ 65 sem juros</p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                      <a href={PAYMENT_LINK}>COMPRAR AGORA</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-background border-border text-center">
                <CardContent className="p-4">
                  <Package className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Produção Própria</p>
                  <p className="text-sm text-muted-foreground">Qualidade garantida</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border text-center">
                <CardContent className="p-4">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Preço de Fábrica</p>
                  <p className="text-sm text-muted-foreground">Sem intermediários</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border text-center">
                <CardContent className="p-4">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Pronta Entrega</p>
                  <p className="text-sm text-muted-foreground">Envio imediato</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Como Funciona Para Revender?
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            É simples, rápido e você pode começar a lucrar em poucos dias!
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Faça seu Pedido", desc: "Escolha seu kit e finalize a compra" },
                { step: "2", title: "Receba em Casa", desc: "Entrega rápida pra todo Brasil" },
                { step: "3", title: "Divulgue", desc: "WhatsApp, Instagram, feira, onde quiser" },
                { step: "4", title: "Lucre!", desc: "Venda e coloque dinheiro no bolso" },
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl">
              <a href={PAYMENT_LINK} className="flex items-center gap-2">
                QUERO COMEÇAR AGORA
                <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pagamento e Entrega */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pagamento */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Formas de Pagamento</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Pix com aprovação instantânea</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Cartão de crédito</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Parcelamento em até 10x sem juros</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Entrega */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Entrega Rápida</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>São Paulo: até 3 dias úteis</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Regiões próximas: até 5 dias úteis</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Demais estados: até 10 dias úteis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-background px-6 py-3 rounded-full border border-border">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Troca e devolução em até 7 dias (CDC)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            O Que Nossos Revendedores Dizem
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Pessoas reais que já estão lucrando com os produtos da KSA Enxovais
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Maria Silva",
                location: "São Paulo, SP",
                text: "Comecei a revender tem 3 meses e já é minha principal renda! O lençol de malha vende muito fácil, todo mundo quer.",
                stars: 5
              },
              {
                name: "João Santos",
                location: "Belo Horizonte, MG",
                text: "Melhor custo-benefício que já encontrei. O preço de fábrica faz toda diferença na hora de lucrar. Super recomendo!",
                stars: 5
              },
              {
                name: "Ana Costa",
                location: "Curitiba, PR",
                text: "Vendo na feira e pelo WhatsApp. O pessoal adora a qualidade e sempre volta pra comprar mais. Entrega super rápida!",
                stars: 5
              },
            ].map((item, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{item.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Final */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Comece a Lucrar Hoje Mesmo!
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
            Kit com 6 jogos de lençol de malha, pronta entrega, preço de fábrica.
            Não perca essa oportunidade de empreender!
          </p>

          <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8 max-w-md mx-auto mb-8">
            <p className="text-primary-foreground/80 text-sm mb-1">Kit Revenda</p>
            <p className="text-5xl font-extrabold text-primary-foreground mb-2">R$ 650</p>
            <p className="text-primary-foreground/80 text-sm mb-6">10x de R$ 65 sem juros</p>
            <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg py-6">
              <a href={PAYMENT_LINK} className="flex items-center justify-center gap-2">
                COMPRAR AGORA
                <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" /> Pronta Entrega
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" /> Envio Imediato
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" /> Garantia de 7 dias
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">K</span>
            </div>
            <span className="font-bold text-lg text-background">KSA Enxovais</span>
          </div>
          <p className="text-muted text-sm mb-4">
            Confecção própria de jogos de lençol • Atendemos todo o Brasil
          </p>
          <p className="text-muted/60 text-xs">
            © 2024 KSA Enxovais. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6">
          <a href={PAYMENT_LINK} className="flex items-center justify-center gap-2">
            COMPRAR AGORA - R$ 650
            <ChevronRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
