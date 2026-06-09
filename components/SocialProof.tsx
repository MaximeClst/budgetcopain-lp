const stats = [
  { value: "5,0 ★", label: "Note sur l'App Store" },
  { value: "5", label: "Avis vérifiés" },
  { value: "0 €", label: "Pour commencer" },
  { value: "100 %", label: "Privé & chiffré" },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-primary/5 bg-surface p-6 shadow-soft sm:gap-6 md:grid-cols-4 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-linear-to-r from-primary to-accent bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm font-medium text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
