# Calis — PASSATION ACTIVE

Dernière mise à jour : 31 août 2026, passation finale après veille visuelle/éditoriale et inspection des photos candidates.

Ce document est l'état opérationnel de reprise. Commencer impérativement par `AI_START_HERE.md`, puis vérifier l'état réel de `main`, les PR/issues et la dernière CI. Historique détaillé de la session : `docs/HISTORIQUE_CONTINUITE_2026-08-31_VISUEL_ET_CHEMINS.md`.

## FAIT ET VÉRIFIÉ

### Cap produit
- Calis = écosystème francophone de progression en callisthénie, pas blog/boutique/app fitness générique.
- Architecture : **DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION** ; UI : **OBJECTIF → SITUATION ACTUELLE → CHEMIN → PROCHAINE ÉTAPE**.
- Conserver le H1 `Qu'est-ce que tu aimerais réussir avec ton corps ?`.
- Pas de personnalisation simulée, compte obligatoire, streak, cadenas ou progression sans vraies données.
- Utilité et honnêteté avant commerce ; ne jamais inventer auteur, coach, témoignage, communauté, partenariat ou validation.

### Trois chemins canoniques
Source : `lib/content/v1.ts`; rendu : `components/progression-path.tsx`; contrat : `docs/PROGRESSION_PATH_PATTERN.md`.
1. Traction : suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions ; branches facultatives ensuite.
2. Pompe : pompes inclinées → première pompe → pompe stable ; dips facultatifs ensuite.
3. Handstand : préparer les appuis → handstand au mur → premiers équilibres libres.
Ne pas créer Dips/Muscle-up par symétrie.

### Accueil / bibliothèque
- Hero désir-first + exemple concret de chemin traction.
- Cartes `Je veux…` : nombres d'étapes dérivés des modèles pour traction/pompe/handstand ; muscle-up = diagnostic ; jambes/mobilité = point de départ.
- `Voir mon chemin` seulement quand un chemin canonique existe ; CTA spécifiques ailleurs.
- Bibliothèque : entrées rapides → chemin traction → exploration libre ; 9 fiches initiales puis expansion, filtres/recherche exhaustifs.
- `ResourceCard` affiche des labels français.

### Structure / accessibilité / audits
- `<main>` imbriqués corrigés sur bibliothèque et muscle-up.
- `ProgressionPath` est un groupe accessible ; focus clavier global visible.
- Overlay générique `bonne position / à corriger` neutralisé sur les vraies illustrations pour ne pas qualifier à tort deux phases valides.
- Audit exact après refinements : 39 HTML, 427 liens internes, 0 problème détecté sur liens/landmarks/H1/IDs/alt ; toutes les vraies pages atteignables depuis l'accueil.
- Contrastes principaux contrôlés et suffisants.

### Vérité visuelle
- `docs/VISUAL_TRUTH_WORKFLOW.md` obligatoire pour toute image technique.
- Suspension, rowing incliné, traction négative, pompe et squat ont des visuels documentés/validés dans leurs limites.
- **Contrôle scapulaire : aucun visuel technique validé sur la page.** L'ancien SVG a été retiré. Décision canonique : `docs/VALIDATION_VISUELLE_CONTROLE_SCAPULAIRE.md`; reconstruire seulement depuis deux keyframes modernes comparables.
- Traction assistée : pas de montage d'élastique ambigu.
- Aucun visuel technique Handstand/Muscle-up inventé par IA.

### Veille visuelle / éditoriale
Documents : `docs/VEILLE_VISUELLE_EDITORIALE_2026-08-31.md`, `docs/PHOTO_SOURCES_HOMEPAGE.md`, `docs/HISTORIQUE_CONTINUITE_2026-08-31_VISUEL_ET_CHEMINS.md`.

Décision durable : **photo humaine forte pour donner envie → chemin/métadonnées réelles pour décider → illustration validée pour apprendre**. Reprendre les mécanismes efficaces observés, pas copier une marque.

Photos inspectées : exploitables pour prototype aspirationnel = Pexels 4803675 traction, 4803733 pompe, 8038575 handstand, 4803687 muscle-up. Rejetées = 4803862 jambes (pistol squat trop avancé), 4426394 mobilité (`KEEP GOING` trop dominant). **Les fichiers binaires ne sont pas dans le dépôt.** Voir issue #31.

### Infrastructure / CI connue
- Next.js 16 / React 19 / TypeScript, export statique, GitHub Actions + GitHub Pages, basePath `/Calis`.
- URL de test : `https://ludodulac.github.io/Calis/`, pas identité publique finale.
- Avant cette passation : `main` = `c30e1443544f8781a63c44e50b320f8ba27a90ec`, run Pages #155 = **success**.
- Aucun PR ouvert et aucune issue ouverte avant création de l'issue de reprise #31.

## EN COURS
- Issue #31 : intégration future des photos d'objectifs après remplacement des deux candidats rejetés, stockage local, crops, alt, build et audit d'artefact.
- Branche `feat/home-goal-photography` créée mais identique à `main` au moment de la passation ; repartir de `main` si elle est toujours vide.

## OUVERT
1. Re-sourcer un squat bilatéral simple et une photo de mobilité sans texte/marque dominante ; inspecter les fichiers réels.
2. Stocker localement les six photos retenues avec auteur/source/licence/date ; jamais de hotlink Pexels.
3. Refaire les cartes `Je veux…` en préservant métadonnées/CTA vrais ; tester crops desktop/mobile.
4. Reprendre le contrôle scapulaire seulement avec keyframes modernes fiables.
5. Continuer audits d'artefact : clavier, tactile, chemins horizontaux, densité hubs.
6. Favicon/OG/identité restent ouverts ; aucune identité définitive décidée.

## DÉCISIONS
- Photo aspirationnelle = destination, jamais biomécanique ni preuve sociale.
- Cohérence de série secondaire à la clarté de chaque objectif.
- Personnes de banque d'images jamais présentées comme athlètes/utilisateurs/ambassadeurs Calis.
- Skill tree seul non différenciant ; valeur Calis = désir + diagnostic + chemin explicite + critère.

## LIMITATIONS / CONTRADICTIONS
- `docs/PHOTO_SOURCES_HOMEPAGE.md` a été corrigé : jambes 4803862 et mobilité 4426394 ne sont plus sélectionnées.
- `docs/ILLUSTRATION_SOURCES.md` conserve des couches historiques. Pour le contrôle scapulaire, tout ancien statut de conservation est **supersédé** par `docs/VALIDATION_VISUELLE_CONTROLE_SCAPULAIRE.md` et l'état réel de la page sans image. Conserver l'historique mais ne pas réintégrer l'ancien SVG.
- Les photos reçues dans le chat ne sont pas persistées dans le repo ; #31 l'explicite.

## PROCHAINE ÉTAPE
1. Lire `AI_START_HERE.md` et cette passation.
2. Re-vérifier `main`, CI, PR et #31.
3. Prendre #31 : re-sourcing des deux photos → stockage local des six retenues → prototype cartes → build → artefact exact → correction.
4. Branche → PR → squash merge → CI verte → inspection artefact.

## À NE PAS REFAIRE
- Ne pas reconstruire Calis comme app fitness générique/copie concurrente.
- Ne pas remplacer le H1 désir-first par une promesse générique.
- Ne pas ajouter de chemin pour remplir l'interface.
- Ne pas utiliser IA générative comme autorité biomécanique.
- Ne pas réintégrer l'ancien SVG scapulaire.
- Ne pas utiliser les deux photos rejetées.
- Ne pas hotlinker les banques d'images.
- Ne pas inventer preuve sociale/expertise/validation.
- Ne pas réintroduire backend/commerce lourd sans besoin réel.