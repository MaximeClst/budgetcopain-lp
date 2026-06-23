import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";
import Button from "./Button";
import { Badge } from "@/components/ui/badge";
import heroImg from "@/assets/images/hero-section.jpg";

const floatingCards = [
  { emoji: "🍽️", label: "Restaurants", sub: "120 € ce mois", side: "left" },
  { emoji: "🔔", label: "Budget courses", sub: "85 % utilisé", side: "right" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-surface via-white to-white pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Décor d'arrière-plan */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-linear-to-br from-primary/20 via-accent/15 to-transparent blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up text-center lg:text-left">
          <Badge
            variant="brand"
            className="mb-5 bg-white px-4 py-1.5 text-sm font-medium shadow-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponible sur iOS
          </Badge>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sache enfin où part{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              ton argent.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
            Suis tes dépenses du quotidien en deux taps, vois où va ton argent et
            garde le contrôle de ton budget — sans tableur ni prise de tête.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <AppStoreBadge />
            <Button href="#premium" variant="secondary" size="md">
              Découvrir Premium
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 text-sm text-muted lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-amber-400">★★★★★</span>
              <span className="font-medium text-foreground">5,0</span>
            </span>
            <span className="h-4 w-px bg-foreground/10" />
            <span>Gratuit pour commencer</span>
            <span className="h-4 w-px bg-foreground/10" />
            <span>100 % privé</span>
          </div>
        </div>

        <div className="animate-fade-in-up-delay-2 relative flex justify-center">
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-[3rem] bg-linear-to-br from-primary/25 to-accent/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/60 bg-white p-2 shadow-card">
              <Image
                src={heroImg}
                alt="Budget Copain — Écran principal de l'app"
                width={300}
                height={600}
                className="rounded-[2.25rem]"
                priority
                placeholder="blur"
              />
            </div>
          </div>

          {/* Cartes flottantes */}
          {floatingCards.map((c) => (
            <div
              key={c.label}
              className={`absolute flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-card backdrop-blur ${
                c.side === "left"
                  ? "-left-2 top-16 sm:-left-6"
                  : "-right-2 bottom-20 sm:-right-6"
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
                {c.emoji}
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  {c.label}
                </p>
                <p className="text-xs text-muted">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
