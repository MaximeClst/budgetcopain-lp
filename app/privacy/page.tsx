import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Budget Copain",
  description:
    "Comment Budget Copain collecte, utilise et protège vos données personnelles.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      lastUpdated="Dernière mise à jour : janvier 2026"
    >
      <p>
        Budget Copain respecte votre vie privée et s&apos;engage à protéger vos
        données personnelles.
      </p>

      <LegalSection title="Données collectées">
        <p>Budget Copain peut collecter les informations suivantes :</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Adresse email (lors de la création du compte)</li>
          <li>
            Informations liées à votre budget (dépenses, revenus, catégories,
            objectifs)
          </li>
          <li>Informations liées à votre abonnement (type de plan)</li>
        </ul>
        <p>
          Aucune donnée bancaire n&apos;est collectée dans la version actuelle de
          l&apos;application.
        </p>
      </LegalSection>

      <LegalSection title="Utilisation des données">
        <p>Les données sont utilisées uniquement pour :</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Fournir les fonctionnalités de l&apos;application</li>
          <li>Sauvegarder votre budget et vos préférences</li>
          <li>Gérer votre abonnement</li>
          <li>Améliorer l&apos;expérience utilisateur</li>
        </ul>
      </LegalSection>

      <LegalSection title="Stockage des données">
        <p>
          Les données sont stockées de manière sécurisée via des services tiers
          conformes aux standards de sécurité (Supabase).
        </p>
      </LegalSection>

      <LegalSection title="Partage des données">
        <p>
          Budget Copain ne vend, ne loue et ne partage aucune donnée personnelle
          avec des tiers à des fins commerciales.
        </p>
      </LegalSection>

      <LegalSection title="Comptes utilisateurs">
        <p>
          Un compte est nécessaire pour utiliser certaines fonctionnalités de
          Budget Copain. Vous pouvez demander la suppression de votre compte et
          de vos données à tout moment en nous contactant.
        </p>
      </LegalSection>

      <LegalSection title="Abonnements">
        <p>
          Les abonnements sont gérés via l&apos;App Store. Budget Copain
          n&apos;a pas accès à vos informations de paiement.
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles pour
          protéger vos données contre tout accès non autorisé.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément à la réglementation applicable, vous disposez d&apos;un
          droit d&apos;accès, de rectification et de suppression de vos données
          personnelles.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question concernant la confidentialité ou vos données
          personnelles, vous pouvez nous contacter à :{" "}
          <a
            href="mailto:contact.budgetcopain@gmail.com"
            className="font-medium text-primary hover:underline"
          >
            contact.budgetcopain@gmail.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
