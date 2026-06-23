import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { APP_STORE_URL } from "@/lib/constants";

const plans = [
  {
    name: "Mensuel",
    price: "4,99 €",
    period: "/ mois",
    note: "7 jours d'essai gratuit",
    cta: "Commencer l'essai",
    variant: "secondary" as const,
    highlight: false,
  },
  {
    name: "À vie",
    price: "24,99 €",
    period: "une fois",
    note: "Un seul paiement, sans abonnement",
    cta: "Passer à vie",
    variant: "primary" as const,
    highlight: true,
    badge: "Le plus avantageux",
    hint: "Rentabilisé en ~5 mois",
  },
];

const features = [
  "Transactions & catégories illimitées",
  "Projets perso & communs illimités",
  "Alertes intelligentes de budget",
  "Suivi et statistiques détaillés",
  "Sauvegarde et synchronisation",
  "Toutes les futures mises à jour",
];

export default function Pricing() {
  return (
    <section id="premium" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle
          tag="Premium"
          title="Choisis ta formule"
          description="Toutes les fonctionnalités Premium, sans limite. Commence par l'essai gratuit, ou débloque l'accès à vie en un paiement."
        />

        {/* Offres */}
        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative gap-0 rounded-[2rem] p-8 ${
                plan.highlight
                  ? "border-primary/30 shadow-card"
                  : "border-primary/10"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-r from-primary to-accent px-4 py-1.5 text-xs font-bold text-white shadow-glow">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold text-foreground">
                {plan.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-5xl font-extrabold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted">{plan.period}</span>
              </div>

              <p className="mt-2 text-sm text-muted">{plan.note}</p>

              {plan.hint && (
                <Badge variant="brand" className="mt-3 px-3 py-1">
                  ✦ {plan.hint}
                </Badge>
              )}

              <Button
                href={APP_STORE_URL}
                variant={plan.variant}
                size="md"
                className="mt-auto w-full"
                external
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Fonctionnalités incluses */}
        <Card className="mt-8 gap-0 rounded-[2rem] border-primary/10 p-8">
          <p className="text-center text-sm font-semibold text-foreground">
            Les deux formules incluent
          </p>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-3 w-3 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </Card>

        <p className="mt-8 text-center text-sm text-muted">
          Essai gratuit de 7 jours sur l&apos;abonnement · Sans engagement ·
          Paiement sécurisé via l&apos;App Store
        </p>
      </div>
    </section>
  );
}
