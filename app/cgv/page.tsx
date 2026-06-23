import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation et de Vente — Budget Copain",
  description:
    "Conditions Générales d'Utilisation et de Vente de l'application Budget Copain.",
};

export default function CgvPage() {
  return (
    <LegalLayout
      title="Conditions Générales d'Utilisation et de Vente"
      lastUpdated="Dernière mise à jour : janvier 2026"
    >
      <p>
        Les présentes Conditions Générales d&apos;Utilisation et de Vente (les
        « Conditions ») régissent l&apos;accès et l&apos;utilisation de
        l&apos;application mobile Budget Copain (l&apos;« Application ») ainsi
        que la souscription aux offres Premium. En téléchargeant ou en utilisant
        l&apos;Application, vous acceptez sans réserve les présentes Conditions.
      </p>

      <LegalSection title="1. Éditeur">
        <p>
          L&apos;Application Budget Copain est éditée par Budget Copain. Pour
          toute question, vous pouvez nous contacter à{" "}
          <a
            href="mailto:contact.budgetcopain@gmail.com"
            className="font-medium text-primary hover:underline"
          >
            contact.budgetcopain@gmail.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Objet">
        <p>
          Budget Copain est une application de gestion de budget personnel
          permettant de suivre ses dépenses et revenus du quotidien, de créer des
          catégories, de recevoir des alertes et de gérer des projets perso ou
          communs. Une version gratuite est proposée, ainsi qu&apos;une offre
          Premium payante débloquant des fonctionnalités supplémentaires.
        </p>
      </LegalSection>

      <LegalSection title="3. Accès à l'application">
        <p>
          L&apos;Application est disponible sur iOS via l&apos;App Store. Certaines
          fonctionnalités nécessitent la création d&apos;un compte. Vous êtes
          responsable de la confidentialité de vos identifiants et de toute
          activité réalisée depuis votre compte.
        </p>
      </LegalSection>

      <LegalSection title="4. Offres et tarifs Premium">
        <p>Budget Copain Premium est proposé selon deux formules :</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Abonnement mensuel</strong> : 4,99 €/mois, incluant 7 jours
            d&apos;essai gratuit. L&apos;abonnement est reconduit
            automatiquement à chaque période sauf résiliation.
          </li>
          <li>
            <strong>Accès à vie</strong> : 24,99 € en paiement unique, sans
            reconduction.
          </li>
        </ul>
        <p>
          Les prix sont indiqués toutes taxes comprises. Les paiements,
          renouvellements et restaurations d&apos;achats sont gérés par l&apos;App
          Store d&apos;Apple. Budget Copain n&apos;a pas accès à vos informations
          de paiement.
        </p>
      </LegalSection>

      <LegalSection title="5. Résiliation et renouvellement">
        <p>
          L&apos;abonnement mensuel peut être résilié à tout moment depuis les
          réglages de votre compte Apple ; vous conservez l&apos;accès Premium
          jusqu&apos;à la fin de la période en cours. L&apos;accès à vie est un
          achat unique qui ne fait l&apos;objet d&apos;aucune reconduction. La
          gestion des abonnements relève des conditions de l&apos;App Store.
        </p>
      </LegalSection>

      <LegalSection title="6. Droit de rétractation">
        <p>
          Conformément à la réglementation applicable aux contenus numériques
          fournis immédiatement, et compte tenu de la période d&apos;essai
          gratuit proposée, le droit de rétractation peut ne pas s&apos;appliquer
          une fois l&apos;accès Premium activé. Les demandes de remboursement
          sont traitées par Apple selon les conditions de l&apos;App Store.
        </p>
      </LegalSection>

      <LegalSection title="7. Propriété intellectuelle">
        <p>
          L&apos;Application, sa marque, ses contenus et ses éléments graphiques
          sont protégés par le droit de la propriété intellectuelle. Toute
          reproduction ou utilisation non autorisée est interdite.
        </p>
      </LegalSection>

      <LegalSection title="8. Responsabilité">
        <p>
          Budget Copain est un outil d&apos;aide au suivi budgétaire et ne
          fournit aucun conseil financier. L&apos;Application est proposée « en
          l&apos;état » ; l&apos;éditeur ne saurait être tenu responsable des
          décisions prises sur la base des informations affichées, ni des
          éventuelles interruptions de service.
        </p>
      </LegalSection>

      <LegalSection title="9. Données personnelles">
        <p>
          Le traitement de vos données personnelles est décrit dans notre{" "}
          <Link
            href="/privacy"
            className="font-medium text-primary hover:underline"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="10. Modification des Conditions">
        <p>
          Budget Copain se réserve le droit de modifier les présentes Conditions
          à tout moment. La version applicable est celle en vigueur au moment de
          votre utilisation de l&apos;Application.
        </p>
      </LegalSection>

      <LegalSection title="11. Droit applicable">
        <p>
          Les présentes Conditions sont régies par le droit français. À défaut de
          résolution amiable, tout litige relèvera des tribunaux compétents.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
