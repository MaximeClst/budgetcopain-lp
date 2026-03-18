import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { APP_STORE_URL } from "@/lib/constants";

const features = [
  "Vision claire de vos dépenses",
  "Alertes intelligentes avec suggestions",
  "Catégories adaptées à votre vie",
  "Projets d'épargne partagés avec vos proches",
  "Accès à vie",
  "Toutes les futures mises à jour",
];

export default function Pricing() {
  return (
    <section id="premium" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          tag="Premium"
          title="Passe au niveau supérieur"
          description="Débloquer Budget Copain Premium pour profiter de toutes les fonctionnalités sans limites."
        />

        <div className="mt-16">
          <div className="relative flex flex-col rounded-2xl border border-primary bg-white p-8 shadow-xl shadow-primary/10 sm:p-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-primary to-accent px-4 py-1 text-xs font-bold text-white">
              Paiement unique
            </span>

            <h3 className="text-center text-lg font-semibold text-foreground">
              À vie
            </h3>

            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-5xl font-extrabold text-foreground">
                24,99&nbsp;€
              </span>
              <span className="text-sm text-muted">unique</span>
            </div>

            <p className="mt-2 text-center text-sm text-muted">
              Un seul paiement, pas d&apos;abonnement
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Button
              href={APP_STORE_URL}
              variant="primary"
              size="md"
              className="mt-10 w-full"
              external
            >
              Passer Premium
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Satisfait ou remboursé. Aucun abonnement.
        </p>
      </div>
    </section>
  );
}
