# Calis

Calis est un projet de plateforme francophone autour de la callisthénie : apprendre à connaître son corps, développer ses capacités et progresser à son rythme.

Le projet est pensé pour grandir progressivement : une première version légère et peu coûteuse, puis une bibliothèque de connaissances, des parcours de progression, des outils, des guides d'équipement et une boutique spécialisée.

## Reprise du projet

Tout agent IA ou nouvelle conversation doit commencer par lire `AI_START_HERE.md`, puis vérifier l'état réel de `main` avant d'agir. Ce fichier indexe les sources de vérité et le protocole de passation.

## Principes

- Capacité et maîtrise du corps avant l'apparence.
- Accessible aux femmes comme aux hommes, du niveau zéro au niveau avancé.
- Information utile, sourcée et honnête avant la vente.
- Le matériel n'est recommandé que lorsqu'il apporte une vraie utilité.
- Architecture progressive : on enrichit le projet sans reconstruire ce qui fonctionne.
- SEO fondé sur une bibliothèque structurée plutôt que sur une production massive d'articles.
- Interface compréhensible sans connaître le vocabulaire technique : la complexité du graphe et du contenu doit rester derrière des entrées simples par objectif ou situation.

## Piliers du site

1. **Apprendre** — fondamentaux, exercices, figures, anatomie, mobilité, récupération.
2. **Progresser** — prérequis, régressions, progressions, tests de niveau et programmes.
3. **Comprendre** — biomécanique, sensations, principes d'entraînement et réponses approfondies.
4. **S'équiper** — guides, comparatifs, tests et, progressivement, boutique.
5. **Pratiquer** — à terme : parcs, clubs, coachs, associations, événements et partenaires.

## État technique actuel

La V1 est une application Next.js/TypeScript exportée statiquement et déployée gratuitement sur GitHub Pages depuis `main` via GitHub Actions. L'URL `https://ludodulac.github.io/Calis/` est une adresse de construction et de test, pas l'identité publique définitive. Le domaine final sera configuré plus tard lorsqu'il apportera une valeur claire.

Supabase, Stripe et une infrastructure plus lourde restent des options futures déclenchées par un besoin produit réel ; ils ne font pas partie de l'architecture nécessaire à la V1 actuelle. L'hypothèse Cloudflare est conservée comme piste historique/future dans `docs/TECHNICAL_ARCHITECTURE.md`, mais ne décrit plus le déploiement courant.

Voir `docs/` pour la vision produit, l'architecture éditoriale, les règles visuelles, la recherche et l'état de continuité.
