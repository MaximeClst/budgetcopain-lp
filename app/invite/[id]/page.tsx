import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rejoindre un projet — Budget Copain",
  description:
    "Tu as été invité à rejoindre un projet d'épargne sur Budget Copain.",
};

export default function InvitePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-5 py-16 max-w-md mx-auto">
      <div className="text-6xl mb-4">☁️</div>

      <h1 className="text-2xl font-extrabold mb-2 text-center">
        Budget Copain
      </h1>

      <p className="text-gray-500 text-center mb-8">
        Tu as été invité à rejoindre un projet d&#39;épargne commun. Télécharge
        l&#39;app pour accepter l&#39;invitation.
      </p>

      <a
        href="https://apps.apple.com/fr/app/budget-copain/id6757801224"
        className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full no-underline mb-3 block"
      >
        📱 Télécharger sur l&#39;App Store
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.maxclst.budgetcopain"
        className="w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full no-underline block"
      >
        🤖 Télécharger sur Google Play
      </a>

      <p className="mt-8 text-xs text-gray-400 text-center">
        Si tu as déjà l&#39;app installée, ouvre ce lien depuis ton iPhone.
      </p>
      <p className="mt-8 text-xs text-gray-400 text-center">
        Une fois l&#39;app installée, redemande le lien d&#39;invitation à ton
        ami pour rejoindre le projet.
      </p>
    </main>
  );
}
