import SectionTitle from "./SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Combien coûte Budget Copain Premium ?",
    a: "Deux formules au choix : l'abonnement à 4,99 €/mois (avec 7 jours d'essai gratuit), ou l'accès à vie à 24,99 € en paiement unique, sans abonnement. Les deux débloquent toutes les fonctionnalités Premium.",
  },
  {
    q: "Y a-t-il un essai gratuit ?",
    a: "Oui, l'abonnement mensuel inclut 7 jours d'essai gratuit. Tu peux tout tester sans engagement et annuler avant la fin de l'essai si l'app ne te convient pas.",
  },
  {
    q: "Puis-je annuler mon abonnement Premium ?",
    a: "Oui. L'abonnement mensuel (4,99 €/mois) s'annule à tout moment depuis les réglages de ton compte Apple, et tu gardes l'accès jusqu'à la fin de la période en cours. L'accès à vie (24,99 €) est un achat unique : il n'y a rien à annuler.",
  },
  {
    q: "Est-ce que mes données sont privées ?",
    a: "Absolument. Tes données financières sont chiffrées et ne sont jamais revendues à des tiers.",
  },
  {
    q: "L'application est-elle gratuite ?",
    a: "Non. Budget Copain est une application payante, avec 7 jours d'essai gratuit pour tout tester sans engagement. Ensuite, tu peux choisir l'abonnement à 4,99 €/mois ou l'accès à vie à 24,99 € en paiement unique.",
  },
  {
    q: "Que comprend Premium ?",
    a: "Premium inclut : transactions et catégories illimitées, projets perso et communs illimités, alertes intelligentes, et toutes les futures mises à jour.",
  },
  {
    q: "Comment fonctionnent les projets partagés ?",
    a: "Crée un projet Perso pour épargner seul, ou Commun pour partager les dépenses à plusieurs. Pour un projet commun, partage le lien d'invitation : chaque membre ajoute ses dépenses et l'app calcule automatiquement les soldes et qui doit combien à qui. Tu restes l'admin du projet.",
  },
  {
    q: "Comment restaurer un achat ?",
    a: "Va dans Réglages > Premium > Restaurer les achats. Ton accès sera automatiquement restauré si tu utilises le même compte Apple.",
  },
  {
    q: "L'app est-elle disponible sur Android ?",
    a: "Pour le moment, Budget Copain est uniquement disponible sur iOS. La version Android est en cours de développement.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          tag="FAQ"
          title="Questions fréquentes"
          description="Tu as une question ? On a sûrement la réponse."
        />

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
