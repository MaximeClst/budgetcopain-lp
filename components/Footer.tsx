import logo from "@/assets/logo/Logo-bc.jpg";
import Image from "next/image";
import Link from "next/link";
import AppStoreBadge from "./AppStoreBadge";
import { NAV_LINKS } from "@/lib/constants";

const legalLinks = [
  { label: "Confidentialité", href: "/privacy" },
  { label: "Conditions (CGU/CGV)", href: "/cgv" },
  { label: "Support", href: "/support" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identité */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Image
                src={logo}
                alt="Budget Copain"
                width={32}
                height={32}
                className="rounded-lg"
              />
              Budget Copain
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Sache enfin où part ton argent. Le suivi de tes dépenses du
              quotidien, simple et privé.
            </p>
            <div className="mt-6">
              <AppStoreBadge />
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Produit</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Légal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-8 text-center text-xs text-muted/60">
          © {new Date().getFullYear()} Budget Copain. Tous droits réservés.
          <br />
          Fait avec soin pour t&apos;aider à mieux gérer ton argent.
        </div>
      </div>
    </footer>
  );
}
