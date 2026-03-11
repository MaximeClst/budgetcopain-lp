import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { APP_STORE_URL } from "@/lib/constants";

const plans = [
  {
    name: "Mensuel",
    price: "2,99 €",
    period: "/mois",
    badge: null,
    features: [
      "Transactions illimitées",
      "Catégories personnalisées",
      "Groupes partagés (3 max)",
      "Rappels avancés",
      "Statistiques détaillées",
    ],
  },
  {
    name: "Annuel",
    price: "19,99 €",
    period: "/an",
    badge: "Meilleure offre",
    features: [
      "Tout du Mensuel",
      "Groupes partagés illimités",
      "Export CSV & PDF",
      "Thèmes personnalisés",
      "Support prioritaire",
      "Économise 44 %",
    ],
  },
  {
    name: "À vie",
    price: "49,99 €",
    period: "unique",
    badge: null,
    features: [
      "Tout du plan Annuel",
      "Accès à vie",
      "Toutes les futures mises à jour",
      "Soutiens le développement",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="premium" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          tag="Premium"
          title="Passe au niveau supérieur"
          description="Débloquer Budget Copain Premium pour profiter de toutes les fonctionnalités sans limites."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const isHighlight = plan.badge !== null;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-200 sm:p-8 ${
                  isHighlight
                    ? "border-primary bg-white shadow-xl shadow-primary/10 scale-[1.02]"
                    : "border-gray-200 bg-white hover:shadow-lg"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-bold text-white">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href={APP_STORE_URL}
                  variant={isHighlight ? "primary" : "secondary"}
                  size="md"
                  className="mt-8 w-full"
                  external
                >
                  Passer Premium
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Annule à tout moment. Aucun engagement. Satisfait ou remboursé.
        </p>
      </div>
    </section>
  );
}
