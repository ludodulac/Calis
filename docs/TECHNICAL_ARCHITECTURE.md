# Architecture technique V1

## Décision principale

Calis démarre avec une application Next.js standard, écrite en TypeScript et compatible avec un déploiement Cloudflare Workers.

Cloudflare recommande désormais Workers comme plateforme principale pour les nouveaux projets. Pour Next.js full-stack, Cloudflare recommande vinext. Comme vinext est encore en bêta, le code Calis doit rester au maximum compatible avec Next.js standard et éviter les dépendances spécifiques à vinext dans le domaine métier.

## Principes

- Le contenu V1 reste versionné dans GitHub afin de limiter coûts et complexité.
- Supabase n'est ajouté que lorsqu'une donnée dynamique le justifie : comptes, progression, outils, commandes ou back-office.
- Les objets de domaine sont séparés des composants visuels.
- Les routes sont pensées pour le SEO dès le départ.
- Les dépendances applicatives doivent être pinées et un lockfile sera commité dès la première installation locale/CI.
- Aucun secret n'est commité.
- Une nouvelle fonctionnalité enrichit l'existant ; elle ne supprime pas arbitrairement ce qui fonctionne.

## Stack initiale

- Next.js 16
- React 19
- TypeScript
- CSS natif pour éviter une dépendance de design inutile au démarrage
- GitHub
- Cloudflare Workers au déploiement
- Supabase ultérieurement
- Stripe ultérieurement

## Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  commencer/
    page.tsx
  bibliotheque/
    page.tsx
  tractions/
    page.tsx

components/
  site-header.tsx
  site-footer.tsx
  resource-card.tsx

lib/
  content/
    types.ts
    v1.ts

docs/
  ...
```

À terme :

```text
lib/
  domain/
  supabase/
  stripe/
  seo/
content/
  exercises/
  skills/
  guides/
  programs/
supabase/
  migrations/
```

## Contenu V1

Les premières ressources ne sont pas stockées dans une base de données. Elles sont représentées comme des objets typés dans le dépôt. Cela permet :

- revue Git ;
- historique clair ;
- zéro dépendance à une base pour afficher le site ;
- génération statique possible ;
- migration ultérieure vers Supabase ou un CMS sans changer les composants métier.

## Supabase futur

Quand Supabase devient nécessaire :

- clients navigateur et serveur séparés ;
- clés privilégiées exclusivement côté serveur ;
- RLS activé sur les tables exposées ;
- politiques d'accès par usage réel ;
- migrations versionnées ;
- aucune autorisation basée sur des métadonnées modifiables par l'utilisateur.

Entités prioritaires futures : `profiles`, `progress_entries`, `goals`, `program_enrollments`, puis commerce.

## Cloudflare

Avant le premier déploiement, exécuter le contrôle de compatibilité vinext sur le projet et valider les fonctionnalités Next.js réellement utilisées. Ne pas introduire de fonctionnalité Next expérimentale sans besoin démontré.

## SEO

- App Router et Metadata API.
- HTML indexable sans JavaScript obligatoire pour le contenu principal.
- URLs stables.
- sitemap et robots ajoutés avant mise en production.
- bibliothèque filtrable côté interface mais sans création automatique de milliers d'URLs indexables.

## Sécurité et qualité

- TypeScript strict.
- Pas de `any` volontaire dans le domaine.
- Validation des données externes lorsqu'elles apparaîtront.
- Pas de secret dans `NEXT_PUBLIC_*` sauf information réellement publique.
- Le premier pipeline devra au minimum lancer `npm run typecheck` et `npm run build`.

## Décision sur le lockfile

Les versions sont pinées dans `package.json`. Le lockfile doit être généré par `npm install` puis commité avant le premier déploiement. Il n'est pas fabriqué manuellement afin de garantir son intégrité.
