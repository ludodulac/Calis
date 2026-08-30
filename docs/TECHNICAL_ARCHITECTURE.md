# Architecture technique V1

## Décision actuelle

Calis utilise actuellement une application Next.js standard en TypeScript, exportée statiquement et déployée sur **GitHub Pages** depuis `main` via `.github/workflows/deploy-pages.yml`.

Cette solution est volontaire pour la phase de construction : coût nul, contenu versionné, déploiement simple et architecture suffisamment proche du produit final. L'URL GitHub Pages est une URL de test/construction ; un domaine français propre sera configuré plus tard lorsque le site sera suffisamment mûr.

L'ancienne hypothèse Cloudflare Workers/vinext reste une piste historique/future, pas l'architecture de déploiement courante. Elle ne doit pas provoquer de migration tant qu'un besoin réel ne le justifie pas.

## Principes

- Le contenu V1 reste versionné dans GitHub afin de limiter coûts et complexité.
- Supabase n'est ajouté que lorsqu'une donnée dynamique le justifie : comptes, progression, commentaires, outils, commandes ou back-office.
- Stripe n'est ajouté que lorsque le commerce direct devient réel.
- Les objets de domaine sont séparés des composants visuels.
- Les routes sont pensées pour le SEO dès le départ.
- Aucun secret n'est commité.
- Une nouvelle fonctionnalité enrichit l'existant ; elle ne supprime pas arbitrairement ce qui fonctionne.
- La complexité technique et éditoriale doit rester derrière une interface compréhensible par un non-initié.

## Stack actuelle vérifiée

- Next.js 16
- React 19
- TypeScript
- CSS natif
- GitHub
- GitHub Actions
- GitHub Pages avec `basePath` `/Calis`
- export statique Next.js
- contenu éditorial typé dans le dépôt
- Supabase ultérieurement si besoin démontré
- Stripe ultérieurement si besoin démontré

## Structure réelle importante

```text
app/
  page.tsx
  layout.tsx
  globals.css
  commencer/
  bibliotheque/
  tractions/
  pompes/
  dips/
  handstand/
  muscle-up/
  sitemap.ts
  robots.ts

components/
  site-header.tsx
  learning-illustration.tsx
  resource-card.tsx

lib/content/
  types.ts
  v1.ts

docs/
  ...

public/illustrations/
  sources/
  work/
  calis/
```

## Contenu V1

Les ressources principales ne sont pas encore stockées dans une base. Elles sont représentées comme objets typés et pages versionnées dans le dépôt. Cela permet revue Git, historique clair, affichage sans base, génération statique et migration ultérieure sans rendre Supabase obligatoire prématurément.

Le modèle `Resource` inclut aujourd'hui les hubs `commencer`, `tractions`, `pompes`, `dips`, `handstand` et `muscle-up`.

## Déploiement et CI

Le workflow GitHub Pages doit au minimum :

1. installer les dépendances ;
2. exécuter `npm run typecheck` ;
3. exécuter le build/export statique ;
4. publier l'artefact Pages.

Une passation n'est pas considérée comme techniquement vérifiée si le dernier workflow de `main` échoue. Il faut lire le log, corriger la cause et attendre un run final réussi.

## Supabase futur

Quand une donnée dynamique le justifie : clients navigateur/serveur séparés, clés privilégiées uniquement serveur, RLS sur les tables exposées, politiques par usage réel et migrations versionnées. Les commentaires, comptes, progression et édition multi-contributeur sont des déclencheurs possibles ; ils ne sont pas des dépendances V1.

## Cloudflare : statut historique/futur

Cloudflare Workers/vinext a été étudié comme cible potentielle. Cette option n'est pas abandonnée, mais **GitHub Pages est la réalité actuelle**. Ne pas lancer de migration de plateforme sans gain concret en coût, performance, fonctionnalité ou maintenance.

## SEO

- App Router et Metadata API.
- HTML indexable sans JavaScript obligatoire pour le contenu principal.
- URLs stables.
- sitemap et robots présents.
- bibliothèque filtrable sans création automatique de milliers d'URLs indexables.
- lors du passage au domaine final, mettre à jour `metadataBase`, canonicals, sitemap, robots, Open Graph et liens internes puis gérer la migration proprement.

## Sécurité et qualité

- TypeScript strict.
- Pas de `any` volontaire dans le domaine.
- Validation des données externes lorsqu'elles apparaîtront.
- Pas de secret dans `NEXT_PUBLIC_*` sauf information réellement publique.
- Les affirmations sportives importantes doivent suivre les règles scientifiques et médicales définies dans la documentation éditoriale.
