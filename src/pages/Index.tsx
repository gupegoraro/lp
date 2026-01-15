import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Truck, CreditCard, Factory } from "lucide-react"

// IMAGENS (placeholders por enquanto)
import heroImage from "@/assets/hero/hero-placeholder.png"
import kitImage from "@/assets/kits/kit-placeholder.png"

const PAYMENT_LINK = "#"

export default function Index() {
  return (
    <main className="flex flex-col">

      {/* ================= HERO ================= */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">

          <div className="grid gap-10 md:grid-cols-2 md:items-center max-w-6xl mx-auto">

            {/* TEXTO */}
            <div className="text-center md:text-left">

              <Badge className="mb-4 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold">
                🔥 OPORTUNIDADE PARA REVENDEDORES
              </Badge>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                Ganhe Dinheiro Revendendo{" "}
                <span className="text-primary">Jogos de Lençol</span>{" "}
                Direto da Fábrica
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Kits prontos, estampas variadas e valores pensados para revenda em todo o Brasil.
              </p>

              <p className="text-2xl font-bold mb-8">
                Kit com 6 jogos a partir de <span className="text-primary">R$ 650,00</span>
              </p>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-xl"
              >
                <a href={PAYMENT_LINK}>
                  QUERO COMEÇAR A REVENDER
                </a>
              </Button>
            </div>

            {/* IMAGEM HERO */}
            <div className="flex justify-center">
              <img
                src={heroImage}
                alt="Kit de lençóis para revenda"
                className="w-full max-w-md rounded-2xl object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= O QUE VEM NO KIT ================= */}
      <section className="w-full py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">

          <h2 className="text-3xl font-bold text-center mb-12">
            O Que Vem no Kit
          </h2>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* IMAGEM DO KIT */}
            <div className="flex justify-center">
              <img
                src={kitImage}
                alt="Conteúdo do kit de lençóis"
                className="w-full max-w-sm rounded-2xl object-contain border"
              />
            </div>

            {/* TEXTO */}
            <div className="space-y-4">
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  Kits para solteiro, casal e queen
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  Estampas variadas no mesmo kit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  Tecido malha: conforto e durabilidade
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  Fácil de lavar e secagem rápida
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BENEFÍCIOS ================= */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 max-w-6xl">

          <h2 className="text-3xl font-bold text-center mb-12">
            Por Que Comprar da KSA Enxovais?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

            <Card>
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <Factory className="h-10 w-10 text-primary" />
                <p className="font-semibold">Produção Própria</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <CreditCard className="h-10 w-10 text-primary" />
                <p className="font-semibold">Até 10x sem juros</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <Truck className="h-10 w-10 text-primary" />
                <p className="font-semibold">Entrega em todo o Brasil</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <CheckCircle className="h-10 w-10 text-primary" />
                <p className="font-semibold">Preço para Revenda</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Comece a Revender Ainda Hoje
          </h2>

          <p className="text-lg">
            Estoque limitado, pronta entrega e condições especiais para quem quer empreender.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-background text-primary font-bold px-8 py-6 rounded-xl"
          >
            <a href={PAYMENT_LINK}>
              COMPRAR AGORA
            </a>
          </Button>

        </div>
      </section>

    </main>
  )
}