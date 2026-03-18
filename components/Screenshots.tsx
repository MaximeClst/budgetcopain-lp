import budgetImg from "@/assets/images/budget.png";
import depenseImg from "@/assets/images/depense.png";
import projetImg from "@/assets/images/projet.png";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
// import statistiqueImg from "@/assets/images/statistique.png";

const screenshots = [
  { src: budgetImg, alt: "Vue d'ensemble du budget" },
  { src: depenseImg, alt: "Catégories et dépenses" },
  { src: projetImg, alt: "Groupes d'épargne partagés" },
  { src: "/mockups/screen-4.png", alt: "Statistiques et tendances" },
];

export default function Screenshots() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          tag="Aperçu"
          title="Un design pensé pour la simplicité"
          description="Découvre l'interface claire et intuitive de Budget Copain."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {screenshots.map((s, i) => (
            <div
              key={s.alt}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-surface p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-9/19 overflow-hidden rounded-xl bg-linear-to-b from-primary/10 to-accent/10">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-muted">
                {s.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
