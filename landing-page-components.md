# Landing page — composants & migration shadcn/ui

Migration de la landing Budget Copain vers l'écosystème **shadcn/ui** (Tailwind v4
+ Next.js 16 + React 19), en **préservant le design system existant** (palette
indigo/violet, ombres `shadow-soft`/`shadow-card`/`shadow-glow`, polices
Inter/Jakarta, animations `fade-in-up`/`float`).

## Setup

Installation **manuelle** (la CLI `shadcn init` récente utilise des « bases »
type `base-nova` qui réécrivent le thème — évité pour ne pas casser le design
system). Étapes :

- Dépendances : `class-variance-authority`, `clsx`, `tailwind-merge`,
  `lucide-react`, `@radix-ui/react-slot`, `@radix-ui/react-accordion`,
  `@radix-ui/react-dialog`, `@radix-ui/react-separator`, `tw-animate-css` (dev).
- `lib/utils.ts` → helper `cn()` (clsx + tailwind-merge).
- `components.json` → style `new-york`, baseColor `violet`, cssVariables true,
  alias `@/components`, `@/lib`, `@/components/ui`.
- `app/globals.css` → ajout **additif** des tokens sémantiques shadcn
  (`--background`, `--primary`, `--card`, `--border`, `--ring`, `--radius`…)
  mappés sur la palette de marque, + variables `--animate-accordion-*` et
  keyframes accordion. Les tokens de marque historiques (`--color-primary`,
  `--color-accent`, `--color-surface`, `--color-muted`, ombres, polices) sont
  conservés tels quels.

## Primitives (`components/ui/`)

| Fichier | Base | Notes de personnalisation |
|---|---|---|
| `button.tsx` | cva + Radix Slot | Variants `primary`/`secondary`/`outline` reproduisant le CTA pill dégradé `from-primary to-accent` + `shadow-glow` ; tailles `sm`/`md`/`lg`. `ghost`/`link` en bonus. |
| `card.tsx` | div + data-slot | Base `rounded-3xl border-primary/5 shadow-soft` pour coller au style existant. |
| `accordion.tsx` | `@radix-ui/react-accordion` | Chevron lucide, bordures `border-primary/10`, animations accordion. |
| `badge.tsx` | cva | Variant `brand` (`bg-primary/5 text-primary`) en plus de default/secondary/outline. |
| `separator.tsx` | `@radix-ui/react-separator` | Standard. |
| `sheet.tsx` | `@radix-ui/react-dialog` | Menu mobile ; overlay `bg-foreground/40` + blur, animations via tw-animate-css. |

## Sections migrées (`components/`)

- `Button.tsx` → surcouche du primitif `ui/button` (API `href/variant/size`
  conservée, donc aucun appelant cassé).
- `Header.tsx` → menu mobile en **Sheet**, CTA en **Button**.
- `Hero.tsx` → badge « Disponible sur iOS » en **Badge**.
- `SectionTitle.tsx` → tag en **Badge** (variant `brand`).
- `Features.tsx`, `Screenshots.tsx`, `SocialProof.tsx`, `Pricing.tsx` → conteneurs
  en **Card**.
- `Pricing.tsx` → badges « Le plus avantageux » / « Rentabilisé » en **Badge**.
- `FAQ.tsx` → **Accordion** (remplace l'accordéon maison à `useState`).
- `MobileCTA.tsx` → **Button** (asChild).

## Vérification

- `npm run build` ✓ (8 routes générées)
- `npx eslint app components lib` ✓ (0 erreur)
- Rendu vérifié desktop (1280px) + mobile (375px), menu Sheet et accordéon
  fonctionnels, hiérarchie de titres h1→h2→h3 correcte.

> Note : en `next dev`, les modifications de `@theme`/`:root` dans `globals.css`
> peuvent ne pas être hot-reloadées (staleness Turbopack) — un redémarrage du
> serveur dev applique les nouveaux tokens. Le build de production les compile
> correctement.
