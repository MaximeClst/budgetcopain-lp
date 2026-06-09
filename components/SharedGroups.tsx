import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import apercuImg from "@/assets/images/projet-commun-apercu.png";
import depensesImg from "@/assets/images/projet-commun-depenses.png";
import membreImg from "@/assets/images/projet-commun-membre.png";

const modes = [
  {
    emoji: "🎯",
    title: "Projet perso",
    description:
      "Une cagnotte rien qu'à toi. Fixe un objectif, suis ta progression et mets de l'argent de côté pour ce qui compte vraiment.",
  },
  {
    emoji: "👥",
    title: "Projet commun",
    description:
      "Vacances, coloc, sorties entre amis… Chacun ajoute ses dépenses, l'app répartit les parts et te dit en un coup d'œil le solde de chaque membre. Fini les tableurs et les « tu me dois combien déjà ? ».",
    highlight: true,
  },
];

const steps = [
  {
    step: "1",
    title: "Crée ton projet",
    description:
      "Choisis Perso pour épargner seul, ou Commun pour partager les dépenses à plusieurs.",
  },
  {
    step: "2",
    title: "Invite tes proches",
    description:
      "Un lien unique, ils rejoignent en un tap. Tu restes l'admin du projet.",
  },
  {
    step: "3",
    title: "Suivez tout en temps réel",
    description:
      "Chaque dépense est catégorisée et partagée. L'app calcule les soldes automatiquement.",
  },
];

const screenshots = [
  { src: apercuImg, alt: "Vue d'ensemble du projet" },
  { src: depensesImg, alt: "Dépenses catégorisées" },
  { src: membreImg, alt: "Le détail par membre" },
];

const useCases = [
  { emoji: "✈️", label: "Voyage entre amis" },
  { emoji: "🏖️", label: "Vacances en groupe" },
  { emoji: "🏠", label: "Coloc & vie commune" },
  { emoji: "🎁", label: "Cadeau commun" },
  { emoji: "💍", label: "Mariage" },
];

export default function SharedGroups() {
  return (
    <section id="groupes" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          tag="Projets partagés"
          title="Vos projets à plusieurs, sans le casse-tête des comptes"
          description="Que ce soit pour épargner ensemble ou partager les dépenses d'un voyage, Budget Copain calcule automatiquement qui a payé quoi — et qui doit combien à qui."
        />

        {/* Les deux modes */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {modes.map((m) => (
            <div
              key={m.title}
              className={`rounded-3xl border p-7 sm:p-8 ${
                m.highlight
                  ? "border-primary/20 bg-linear-to-br from-primary/8 to-accent/8 shadow-card"
                  : "border-primary/5 bg-white shadow-soft"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${
                  m.highlight ? "bg-primary/10" : "bg-surface"
                }`}
              >
                {m.emoji}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        {/* Screenshots du mode commun */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {screenshots.map((s, i) => (
            <div
              key={s.alt}
              className="group overflow-hidden rounded-3xl border border-primary/5 bg-white p-2 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div className="relative aspect-9/19 overflow-hidden rounded-xl bg-linear-to-b from-primary/10 to-accent/10">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-muted">
                {s.alt}
              </p>
            </div>
          ))}
        </div>

        {/* Les 3 étapes */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-3xl border border-primary/5 bg-white p-6 shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-sm font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.description}
              </p>
              {Number(s.step) < 3 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 text-2xl text-primary/30 md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cas d'usage */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {useCases.map((uc) => (
            <div
              key={uc.label}
              className="flex items-center gap-3 rounded-2xl border border-primary/5 bg-white px-5 py-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="text-2xl">{uc.emoji}</span>
              <span className="font-medium text-foreground">{uc.label}</span>
            </div>
          ))}
        </div>

        {/* Réassurance */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/5 to-accent/5 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                🔒 Transparent et privé
              </h3>
              <p className="mt-1 text-sm text-muted">
                Chaque membre voit les mêmes chiffres, en temps réel. Seul
                l&apos;admin gère le projet et les membres. Tes données restent
                chiffrées et ne sont jamais revendues.
              </p>
            </div>
            <Button
              href="#premium"
              variant="primary"
              size="sm"
              className="shrink-0"
            >
              Essayer maintenant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
