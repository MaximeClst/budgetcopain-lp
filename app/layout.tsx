import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const title = "Budget Copain — Reprends le contrôle de ton budget";
const description =
  "Suivi de dépenses simple et amical. Catégories, alertes, projets d'épargne partagés et bien plus. Télécharge gratuitement sur l'App Store.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "budget",
    "finance personnelle",
    "épargne",
    "suivi dépenses",
    "app iOS",
    "groupes épargne",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
    url: "https://budgetcopain.com",
    siteName: "Budget Copain",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Budget Copain — Gère ton budget facilement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://budgetcopain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
