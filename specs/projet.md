# Refonte landing Budget Copain — angle « dépenses du quotidien » + pages légales

## Objectif

1. Recentrer le discours de la landing sur **la visibilité sur les dépenses du
   quotidien** (savoir où part l'argent, contrôle en temps réel, saisie rapide,
   sans prise de tête).
2. **Ne plus mettre en avant les groupes d'épargne** : le partage à plusieurs
   devient une simple fonctionnalité parmi d'autres.
3. Intégrer les **mentions légales directement dans le site** (pages internes
   `/privacy`, `/cgv`, `/support`) au lieu des liens Notion externes.
4. S'inspirer **légèrement** de l'UI/UX de pandacouple.melvynx.dev (sans refonte
   lourde : on garde le design system actuel).

## Besoins exacts

### Must-have

**A. Recentrage du message (dépenses du quotidien)**
- A1. `Hero` : titre = « Sache enfin où part ton argent. » (avec « ton argent »
  en dégradé primary→accent). Sous-titre orienté dépenses du quotidien :
  saisie en 2 taps, voir où va l'argent, garder le contrôle, sans tableur ni
  prise de tête. Retirer la formule « seul ou à plusieurs » et la mise en avant
  de l'épargne.
- A2. `Features` : réécrire/ordonner les cartes pour porter les 4 bénéfices —
  savoir où part l'argent, contrôle en temps réel, rapidité de saisie,
  simplicité/privé. La carte « Groupes d'épargne partagés » perd son `highlight`
  et devient une carte normale, reformulée autour du partage des dépenses à
  plusieurs (pas de mise en avant épargne).

**B. Rétrogradation des groupes d'épargne**
- B1. Supprimer le montage de la section `SharedGroups` dans `app/page.tsx`
  (la section dédiée `#groupes` disparaît de la page).
- B2. `lib/constants.ts` : retirer le lien de nav « Groupes » (`#groupes`).
- B3. `Screenshots` : renommer la légende « Groupes d'épargne partagés » en une
  légende neutre (ex. « Projets & objectifs »). Section conservée.
- B4. `FAQ` : la question « Comment fonctionnent les projets partagés ? » ne doit
  plus être en 1ʳᵉ position (la descendre plus bas). Contenu conservé.

**C. Pages légales internes**
- C1. Créer `/privacy` avec le contenu intégral de la politique de
  confidentialité (repris du Notion, verbatim) : sections Données collectées,
  Utilisation, Stockage (Supabase), Partage, Comptes, Abonnements, Sécurité,
  Vos droits, Contact (budgetcopain.app@gmail.com). Date : « Dernière mise à
  jour : janvier 2026 ».
- C2. Créer `/support` avec le contenu Support (repris du Notion, verbatim) :
  intro, Contact (contact.budgetcopain@gmail.com), Signaler un bug, Suggestions,
  Données et confidentialité.
- C3. Créer `/cgv` avec des **Conditions Générales d'Utilisation et de Vente
  standard** rédigées pour Budget Copain (app iOS ; Premium 4,99 €/mois avec
  7 j d'essai + accès à vie 24,99 € ; gestion/paiement via l'App Store ;
  éditeur Budget Copain ; droit applicable français). À faire relire.
- C4. Les 3 pages partagent une mise en page lisible et cohérente avec le site :
  `Header` en haut, contenu centré en colonne étroite (prose), `Footer` en bas,
  titres hiérarchisés, lien retour à l'accueil.
- C5. `Footer` : remplacer les 3 liens Notion externes par des liens internes
  (`/privacy`, `/cgv`, `/support`) — Next.js `Link`, plus de `target="_blank"`
  pour ces 3 liens. Corriger au passage le lien « Conditions » qui pointait vers
  la page Confidentialité.

**D. Inspiration UI légère (sans refonte du design system)**
- D1. `Footer` : passer à une présentation un peu plus structurée façon
  pandacouple (bloc identité + bloc Légal regroupant Confidentialité / CGV /
  Support), tout en restant sobre et cohérent avec l'existant.
- D2. `Hero` peut être rendu un peu plus aéré/centré, mais sans casser le layout
  deux colonnes existant ni le design system.

## Contraintes

- Stack existante : Next.js (App Router) + TypeScript strict + Tailwind v4.
- **Conserver le design system actuel** : palette primary/accent, dégradés,
  rayons `rounded-3xl`, ombres `shadow-soft`/`shadow-card`, classes utilitaires
  déjà en place. Pas de nouvelle dépendance.
- Mobile-first, responsive.
- `npm run build` doit passer (TypeScript + lint).
- Aucun lien mort (notamment plus de `#groupes`).
- Conserver les composants existants ; ne pas supprimer le fichier
  `SharedGroups.tsx` (juste ne plus le monter), sauf nécessité.
- Préserver les emails de contact tels quels (deux adresses différentes
  privacy/support, ne pas les unifier).

## Cas limites

- Le composant `MobileCTA` et `Header` doivent rester fonctionnels sur les
  nouvelles pages légales (vérifier les ancres de nav qui pointent vers la home,
  ex. `#premium`, `#faq` : depuis `/privacy` elles doivent renvoyer à
  l'accueil — utiliser `/#premium` si nécessaire, ou accepter qu'elles ne
  fonctionnent que sur la home).
- Les pages légales ne doivent pas afficher d'ancres cassées.

## Hors périmètre

- Pas de nouvelle section « showcase dépenses » dédiée.
- Pas de refonte du `Pricing`.
- Pas de nouveaux visuels/assets (on réutilise les images existantes).
- Pas de refonte lourde du design (inspiration pandacouple = légère uniquement).
- Pas de suppression du fichier composant `SharedGroups.tsx`.
- Pas de version Android, pas de i18n.

## Définition de « terminé »

- [ ] Hero porte le nouveau titre + sous-titre orientés dépenses (A1).
- [ ] Features réécrites, carte partage sans highlight (A2).
- [ ] Section SharedGroups retirée de la page + lien nav « Groupes » supprimé (B1, B2).
- [ ] Légende Screenshots « groupes » renommée (B3) ; FAQ réordonnée (B4).
- [ ] `/privacy`, `/support`, `/cgv` existent avec le bon contenu et une mise en
      page cohérente (C1–C4).
- [ ] Footer pointe vers les pages internes, plus de liens Notion (C5).
- [ ] Footer restructuré avec bloc Légal (D1).
- [ ] `npm run build` passe sans erreur ; aucun lien mort.
