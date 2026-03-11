"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    q: "Comment fonctionnent les groupes d'épargne partagés ?",
    a: "Crée un groupe, définis un objectif et partage le lien d'invitation. Chaque membre peut contribuer et suivre la progression en temps réel. Le créateur garde le contrôle total du groupe.",
  },
  {
    q: "Puis-je annuler mon abonnement Premium ?",
    a: "Oui, tu peux annuler à tout moment depuis les réglages de ton compte Apple. Tu conserves l'accès Premium jusqu'à la fin de la période en cours.",
  },
  {
    q: "Est-ce que mes données sont privées ?",
    a: "Absolument. Tes données financières sont stockées localement sur ton appareil et chiffrées. Nous ne vendons jamais tes données à des tiers.",
  },
  {
    q: "L'application est-elle gratuite ?",
    a: "Oui ! Budget Copain est gratuit avec toutes les fonctionnalités essentielles. Premium débloque des options avancées comme les groupes illimités, l'export et les statistiques détaillées.",
  },
  {
    q: "Que comprend l'abonnement Premium ?",
    a: "Premium inclut : transactions et catégories illimitées, groupes d'épargne partagés illimités, rappels avancés, statistiques détaillées, export CSV/PDF, thèmes personnalisés et support prioritaire.",
  },
  {
    q: "Comment restaurer un achat ?",
    a: "Va dans Réglages > Premium > Restaurer les achats. Ton abonnement sera automatiquement restauré si tu utilises le même compte Apple.",
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
                  open === i ? "max-h-40 pb-5" : "max-h-0"
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
