const stats = [
  { value: "5,0 ★", label: "Note sur l'App Store" },
  { value: "5", label: "Avis vérifiés" },
  { value: "0 €", label: "Pour commencer" },
  { value: "100 % privé", label: "Données chiffrées" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold text-foreground sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
