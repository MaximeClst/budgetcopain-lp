import Button from "./Button";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    step: "1",
    title: "Crée un groupe",
    description:
      "Donne un nom à ton projet : voyage, mariage, maison, cadeau commun…",
  },
  {
    step: "2",
    title: "Invite tes proches",
    description: "Partage un lien unique. Ils rejoignent le groupe en un tap.",
  },
  {
    step: "3",
    title: "Épargnez ensemble",
    description:
      "Suivez votre progression en temps réel et atteignez votre objectif.",
  },
];

const useCases = [
  { emoji: "✈️", label: "Voyage entre amis" },
  { emoji: "💍", label: "Mariage" },
  { emoji: "🏠", label: "Achat immobilier" },
  { emoji: "🎁", label: "Cadeau commun" },
];

export default function SharedGroups() {
  return (
    <section id="groupes" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          tag="Nouveauté"
          title="Groupes d'épargne partagés"
          description="Épargnez à plusieurs pour vos projets communs. Simple, transparent, motivant."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl bg-white p-6 shadow-sm"
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => (
            <div
              key={uc.label}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-2xl">{uc.emoji}</span>
              <span className="font-medium text-foreground">{uc.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/5 to-accent/5 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                🔒 Sécurité & contrôle
              </h3>
              <p className="mt-1 text-sm text-muted">
                Seul le créateur du groupe gère les membres. Les données restent
                privées et chiffrées. Tu gardes le contrôle total.
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
