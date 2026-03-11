const stats = [
  { value: "12 000+", label: "Utilisateurs actifs" },
  { value: "4 500+", label: "Projets créés" },
  { value: "2,3 M€", label: "De budgets suivis" },
  { value: "4.8 ★", label: "Note App Store" },
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
