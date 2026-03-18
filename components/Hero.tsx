import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";
import Button from "./Button";
import heroImg from "@/assets/images/hero-section.jpg";

const bullets = [
  { icon: "✦", text: "Simple" },
  { icon: "⚡", text: "Rapide" },
  { icon: "♡", text: "Pensé pour le quotidien" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-surface pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponible sur iOS
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Reprends le contrôle de ton budget,{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              sans prise de tête.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Suis tes dépenses et recettes, crée des catégories, reçois des
            alertes et atteins tes objectifs d&apos;épargne — seul ou en groupe.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <AppStoreBadge />
            <Button href="#premium" variant="secondary" size="md">
              Découvrir Premium
            </Button>
          </div>
        </div>

        <div className="animate-fade-in-up-delay-2 relative flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-2 shadow-2xl">
              <Image
                src={heroImg}
                alt="Budget Copain — Écran principal de l'app"
                width={300}
                height={600}
                className="rounded-4xl"
                priority
                placeholder="blur"
              />
            </div>
          </div>

          <div className="absolute -right-2 top-12 flex flex-col gap-3 sm:right-0">
            {bullets.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-foreground shadow-lg"
              >
                <span className="text-primary">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
