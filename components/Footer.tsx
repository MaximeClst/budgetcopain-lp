import Link from "next/link";
import AppStoreBadge from "./AppStoreBadge";

const links = [
  { label: "Politique de confidentialité", href: "/privacy" },
  { label: "Conditions d'utilisation", href: "/terms" },
  { label: "Support", href: "mailto:support@budgetcopain.app" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <div className="flex items-center justify-center gap-2 text-xl font-bold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm text-white">
                B
              </span>
              Budget Copain
            </div>
            <p className="mt-2 text-sm text-muted">
              Ton copain budget, toujours dans ta poche.
            </p>
          </div>

          <AppStoreBadge />

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-xs text-muted/60">
            © {new Date().getFullYear()} Budget Copain. Tous droits réservés.
            <br />
            Fait avec soin pour t&apos;aider à mieux gérer ton argent.
          </div>
        </div>
      </div>
    </footer>
  );
}
