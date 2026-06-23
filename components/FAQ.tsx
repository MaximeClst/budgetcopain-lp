"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

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
    a: "Oui ! Budget Copain est gratuit avec toutes les fonctionnalités essentielles pour gérer ton budget. Premium débloque les options avancées comme les projets perso et communs illimités.",
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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          tag="FAQ"
          title="Questions fréquentes"
          description="Tu as une question ? On a sûrement la réponse."
        />

        <div className="mt-12 divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
              >
                <span className="pr-4 text-base font-medium text-foreground">
                  {faq.q}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-80 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
