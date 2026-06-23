import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Support — Budget Copain",
  description:
    "Une question, un bug ou une suggestion ? Le support de Budget Copain est là pour vous aider.",
};

export default function SupportPage() {
  return (
    <LegalLayout title="Support">
      <p>
        Bienvenue sur le support de Budget Copain 👋 Si vous avez une question, un
        problème ou une suggestion concernant l&apos;application, vous êtes au bon
        endroit.
      </p>

      <LegalSection title="📩 Contact">
        <p>Pour toute demande, vous pouvez nous écrire à :</p>
        <p>
          <a
            href="mailto:contact.budgetcopain@gmail.com"
            className="font-medium text-primary hover:underline"
          >
            contact.budgetcopain@gmail.com
          </a>
        </p>
        <p>Nous faisons de notre mieux pour répondre rapidement.</p>
      </LegalSection>

      <LegalSection title="🐞 Signaler un bug">
        <p>
          Si vous rencontrez un problème dans l&apos;application, merci
          d&apos;indiquer :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Le modèle de votre téléphone</li>
          <li>La version iOS</li>
          <li>La version de l&apos;application</li>
          <li>Une description du problème</li>
        </ul>
      </LegalSection>

      <LegalSection title="💡 Suggestions">
        <p>
          Les idées et retours sont toujours les bienvenus pour améliorer Budget
          Copain.
        </p>
      </LegalSection>

      <LegalSection title="🔐 Données et confidentialité">
        <p>
          Pour toute question concernant vos données personnelles, consultez
          notre{" "}
          <Link
            href="/privacy"
            className="font-medium text-primary hover:underline"
          >
            politique de confidentialité
          </Link>{" "}
          ou contactez-nous par email.
        </p>
      </LegalSection>

      <p>Merci d&apos;utiliser Budget Copain 💜</p>
    </LegalLayout>
  );
}
