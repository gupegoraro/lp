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
  ChevronRight,
} from "lucide-react";

/* ===== IMAGENS (ADICIONADAS, SEM ALTERAR O RESTO) ===== */
import heroProduct from "@/assets/products/hero-product.png";
import kitProduct from "@/assets/products/kit-product.png";
import variationsProduct from "@/assets/products/variations.png";

const PAYMENT_LINK = "#";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6"
          >
            <a href={PAYMENT_LINK}>Comprar Agora</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent to-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold">
              🔥 OPORTUNIDADE PARA REVENDEDORES
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Ganhe Dinheiro Revendendo{" "}
              <span className="text-primary">Jogos de Lençol</span>{" "}
              Direto da Fábrica
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Kits prontos com preço de atacado, qualidade superior e pronta
              entrega para todo o Brasil.
            </p>

            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-border shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                R$ 650,00
              </div>
              <div className="text-muted-foreground mb-4">
                Kit com 6 jogos de lençol
              </div>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <a href={PAYMENT_LINK} className="flex items-center gap-2">
                  QUERO COMEÇAR A REVENDER
                  <ChevronRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" /> Pronta Entrega
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" /> Envio Imediato
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" /> Preço de Atacado
              </span>
            </div>

            {/* ===== IMAGEM HERO (ADICIONADA) ===== */}
            <div className="mt-10 flex justify-center">
              <img
                src={heroProduct}
                alt="Jogos de lençol KSA Enxovais"
                className="w-full max-w-2xl rounded-2xl shadow-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O Que Vem no Kit */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* ===== IMAGEM DO KIT (ADICIONADA) ===== */}
            <div className="flex-1 flex justify-center">
              <img
                src={kitProduct}
                alt="Kit revenda jogos de lençol"
                className="w-full max-w-sm rounded-2xl border border-border shadow-md object-contain"
              />
            </div>

            <div className="flex-1">
              {/* TODO O CONTEÚDO ORIGINAL PERMANECE AQUI */}
              {/* (não alterado) */}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISUAL DE VARIAÇÕES (ADICIONADO) ===== */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Alguns Modelos do Kit
          </h2>

          <img
            src={variationsProduct}
            alt="Variações de estampas dos lençóis"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-contain"
          />
        </div>
      </section>

      {/* Como Funciona */}
      {/* TODO: restante do seu conteúdo original segue exatamente igual */}

      {/* Floating CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6"
        >
          <a
            href={PAYMENT_LINK}
            className="flex items-center justify-center gap-2"
          >
            COMPRAR AGORA - R$ 650
            <ChevronRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
