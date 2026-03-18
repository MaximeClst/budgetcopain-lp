import logo from "@/assets/logo/Logo-bc.jpg";
import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";

const links = [
  {
    label: "Politique de confidentialité",
    href: "https://thread-authority-138.notion.site/Politique-de-confidentialit-BudgetCopain-2ea135f92ea780558660e0265ae510d6?source=copy_link",
  },
  {
    label: "Conditions d'utilisation",
    href: "https://thread-authority-138.notion.site/Politique-de-confidentialit-BudgetCopain-2ea135f92ea780558660e0265ae510d6?source=copy_link",
  },
  {
    label: "Support",
    href: "https://thread-authority-138.notion.site/Support-BudgetCopain-2e1135f92ea780f7a152c7634a3f9b04?source=copy_link",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <div className="flex items-center justify-center gap-2 text-xl font-bold text-foreground">
              <Image
                src={logo}
                alt="Budget Copain"
                width={32}
                height={32}
                className="rounded-lg"
              />
              Budget Copain
            </div>
            <p className="mt-2 text-sm text-muted">
              Ton copain budget, toujours dans ta poche.
            </p>
          </div>

          <AppStoreBadge />

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
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
