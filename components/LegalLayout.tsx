import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-white pt-28 pb-20 sm:pt-36">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            ← Retour à l&apos;accueil
          </Link>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-3 text-sm text-muted">{lastUpdated}</p>
          )}

          <div className="legal-prose mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}
