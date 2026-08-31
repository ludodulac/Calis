# Calis — PASSATION ACTIVE

Dernière mise à jour : 31 août 2026, après déploiement du troisième chemin canonique et audit exhaustif de l'artefact Pages #147.

Ce document est l'état opérationnel de reprise. Il complète les sources de vérité sans les remplacer. Toute nouvelle conversation doit commencer par `AI_START_HERE.md`, puis vérifier `main`, les PR/issues ouvertes et la CI avant d'agir.

## FAIT ET VÉRIFIÉ

### Produit / expérience

- Calis reste une plateforme francophone de progression en callisthénie, pas un blog générique ni une boutique en premier.
- Architecture mentale : **DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**.
- Traduction UI désormais visible : **OBJECTIF → SITUATION ACTUELLE → CHEMIN → PROCHAINE ÉTAPE**.
- Boucle pédagogique : **désirer → essayer → comprendre → ressentir → réussir → vouloir aller plus loin**.
- Règle business : utilité et confiance avant monétisation ; une page peut conclure qu'aucun achat n'est nécessaire.
- Règle humaine : ne jamais inventer auteur, expertise, expérience vécue, test, témoignage, communauté ou partenariat.
- Règle d'évolution : préserver l'existant utile ; enrichir/réorganiser avant de supprimer.
- Règle d'idéation : **idée ≠ décision ≠ priorité**.

### Simplicité UX

- Navigation principale : `Je débute / Choisir un objectif / Tout explorer`.
- Accueil centré sur `Qu'est-ce que tu aimerais réussir avec ton corps ?` ; conserver ce H1.
- Le hero contient un exemple concret de la logique Calis : objectif première traction → situation actuelle → rowing incliné → traction assistée → parcours complet.
- `/commencer` reste l'entrée humaine quand l'utilisateur ne connaît pas encore le vocabulaire ou son objectif exact.
- Les objectifs restent visibles tôt sur l'accueil ; ne pas les repousser derrière un onboarding lourd.
- Aucune personnalisation simulée, aucun compte obligatoire, streak ou état `locked/completed` sans données utilisateur réelles.

### Chemins de progression — trois formes canoniques

Le pattern est documenté dans `docs/PROGRESSION_PATH_PATTERN.md`. `components/progression-path.tsx` est uniquement un composant de rendu : les étapes, critères et relations restent canoniques dans `lib/content/v1.ts`.

1. **Traction** — chemin long : suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions ; ensuite branches facultatives hauteur / force / muscle-up.
2. **Pompe** — chemin court : pompes inclinées → première pompe → pompe stable ; dips comme branche facultative.
3. **Handstand** — chemin court : préparer les appuis → handstand au mur → premiers équilibres libres.

Règles du pattern :

- ne jamais créer un second graphe codé en dur dans l'UI ;
- un jalon correspond à un désir utilisateur clair, pas à un niveau de jeu ;
- aucune durée, répétition ou note universelle inventée pour rendre l'interface plus ludique ;
- une branche après un socle est un choix, pas une obligation ;
- mobile : chemin horizontal scannable plutôt qu'arbre comprimé ;
- `locked`, `completed`, pourcentages ou progression personnelle uniquement avec un vrai état utilisateur futur.

### Handstand — condition manquante désormais remplie

Le premier audit avait correctement conclu que Handstand n'était pas prêt pour `ProgressionPath` : `handstand-debutant` englobait tout le parcours et aucune ressource distincte ne représentait les premières corrections libres.

La condition a ensuite été remplie proprement :

- nouvelle ressource canonique `premiers-equilibres-handstand` ;
- relations `poignets-handstand → handstand-mur → premiers-equilibres-handstand` ;
- `handstandProgression` ajouté au modèle ;
- hub `/handstand` rendu avec le composant partagé ;
- `parallettes-handstand` reste hors chemin car matériel facultatif ;
- aucun nombre universel de secondes n'est utilisé comme examen.

Fondement scientifique principal : McDonald M, Baker JS, Gu Y, Ugbolue UC, *Biomechanical analyses of the handstand: a systematic review*, Frontiers in Sports and Active Living, 2025, DOI 10.3389/fspor.2025.1694648. La revue synthétise 21 études biomécaniques chez des gymnastes ; elle soutient l'existence d'un problème distinct de contrôle du centre de pression et décrit fréquemment une stratégie dominante au niveau des poignets, avec stratégies mixtes lorsque nécessaire. Ne pas transformer ces résultats en technique universelle pour débutants.

Document de décision : `docs/DECISION_CHEMIN_HANDSTAND_2026-08-31.md`.

### Bibliothèque — graphe avant catalogue

La bibliothèque a été corrigée après inspection visuelle réelle de l'artefact Pages :

- chemin traction remonté juste après les entrées rapides ;
- grilles éditoriales redondantes supprimées, sans supprimer aucune ressource ;
- exploration libre limitée à 9 fiches initialement, avec bouton pour afficher toutes les fiches ;
- recherche/filtre affiche tous les résultats correspondants ;
- filtre `Muscle-up` ajouté ;
- un seul landmark `<main>` après correction structurelle.

Mesures observées après correction : environ 4 786 px de hauteur desktop et 8 059 px mobile, contre environ 9 012 / 18 940 avant ; le chemin traction remonte vers 2 478 px desktop / 3 596 px mobile.

### Graphe de contenu

- Modèle V1 dans `lib/content/types.ts` et `lib/content/v1.ts`.
- Hubs actifs : commencer, tractions, pompes, dips, handstand, muscle-up.
- Les relations `next` et tableaux de progression doivent rester la source de vérité.
- Ne pas créer de pages minces pour remplir un arbre.
- Muscle-up reste une branche avancée issue du socle traction ; ne jamais le présenter comme la suite immédiate d'une première traction.

### Visuels pédagogiques / vérité du mouvement

- `docs/VISUAL_TRUTH_WORKFLOW.md` est obligatoire pour les mouvements techniques.
- Workflow : référence réelle validée → keyframes utiles → représentation Calis → comparaison finale.
- Une IA générative ne doit jamais être l'autorité biomécanique d'une séquence.
- Suspension : référence historique publique documentée.
- Rowing incliné : schéma conservé après validation moderne, limites explicites.
- Traction négative : séquence validée, premier dessin rejeté puis corrigé avant fusion.
- Pompe et squat : schémas validés ; premiers dessins rejetés lorsqu'ils créaient une lecture biomécanique ambiguë.
- **Contrôle scapulaire : le SVG précédemment intégré a été retiré de la page.** Son intention était correcte mais sa géométrie pouvait être lue comme un raccourcissement/flexion des bras entre les deux états. Le texte reste. Réintégrer une image seulement après verrouillage de deux keyframes modernes comparables avec mains fixes, coudes visuellement tendus, faible déplacement et corps calme. Voir `docs/VALIDATION_VISUELLE_CONTROLE_SCAPULAIRE.md`.
- Traction assistée : ne pas dessiner un montage d'élastique tant que l'installation exacte et sûre n'est pas représentable sans ambiguïté.
- Aucun visuel technique Handstand ou Muscle-up ne doit être produit à partir d'une trajectoire inventée.

### Accessibilité / structure / SEO technique

- Skip link, focus clavier visible et compensation du header sticky en place.
- 404 française spécifique à Calis.
- Les deux cas de `<main>` imbriqué détectés dans `/bibliotheque` puis `/muscle-up` ont été corrigés.
- Artefact Pages #147 audité exhaustivement : **39 HTML, 472 liens internes, 0 problème détecté** sur les contrôles suivants : liens `/Calis/`, nombre de `<main>`, H1 des pages réelles, IDs dupliqués, images sans `alt`.
- Nouvelle route Handstand présente dans l'artefact et automatiquement dans le sitemap.
- Toutes les vraies pages contrôlées ont title, description et canonical ; les variantes 404 sont hors sitemap et `noindex`.
- `robots.txt` et `sitemap.xml` sont cohérents avec le `basePath /Calis`.
- Favicon/icon/OG visuel et manifest restent ouverts : ne pas inventer une identité de marque définitive sans décision réelle.
- Données structurées uniquement lorsqu'elles décrivent quelque chose de vrai.

### Infrastructure actuelle

- Next.js 16 / React 19 / TypeScript.
- Export statique.
- Déploiement V1 via GitHub Actions + GitHub Pages.
- `basePath` actuel : `/Calis`.
- URL de test : `https://ludodulac.github.io/Calis/` ; ce n'est pas l'identité publique finale.
- Supabase, Stripe et autres briques historiques/futures ne doivent pas être réintroduits tant qu'un besoin produit réel ne les justifie pas.

### Derniers lots structurants

- PR #9 : premier chemin traction ; run #135 vert.
- PR #10 : chemin pompe ; run #137 vert.
- PR #11 : composant partagé ; run #138 vert.
- PR #12 : exemple concret dans le hero ; run #139 vert.
- PR #13 : chemin traction visible dans la bibliothèque ; run #140 vert.
- PR #15 : bibliothèque corrigée après audit visuel ; run #142 vert.
- PR #16 : passation active rafraîchie ; run #143 vert.
- PR #18 : décision Handstand initiale + retrait du visuel scapulaire ambigu ; run #144 vert.
- PR #19 : landmark bibliothèque ; run #145 vert.
- PR #20 : landmark muscle-up ; run #146 vert.
- PR #21 : ressource + chemin Handstand canonique ; run #147 vert, artefact exact audité.

## PRIORITÉS ACTIVES

### 1. Consolider les trois chemins avant d'en créer davantage

- Vérifier leur lisibilité réelle, notamment sur mobile et au clavier.
- Chercher les répétitions inutiles entre hub, chemin et grille de ressources.
- Ne pas ajouter un chemin Dips ou Muscle-up par symétrie : seulement si le modèle canonique justifie des étapes distinctes utiles.

### 2. Reprendre le contrôle scapulaire avec une vraie référence visuelle

- Trouver deux keyframes modernes comparables montrant la suspension de départ et l'état actif.
- Contrôler mains, coudes, tête/épaules, tronc et absence d'élan.
- Redessiner sans prétendre représenter précisément la scapula sous la peau.
- Comparer avant réintégration ; sinon conserver la page sans image.

### 3. Continuer l'audit produit sur artefact réel

- navigation clavier ;
- tailles tactiles ;
- contrastes ;
- lecture des chemins horizontaux ;
- comportement de l'aperçu bibliothèque ;
- densité et hiérarchie des hubs.

### 4. Identité visuelle / SEO social — futur point de décision humaine

- favicon, icône et image OG demandent une direction visuelle cohérente ; ne pas inventer un logo définitif par simple opportunisme technique ;
- domaine final plus tard ; ne pas coder l'identité autour de GitHub Pages ;
- manifest seulement s'il sert réellement l'expérience.

## NE PAS FAIRE

- Ne pas reconstruire Calis comme une app fitness générique à séances/streaks avant d'avoir validé le cœur pédagogique.
- Ne pas copier les skill trees gamifiés concurrents.
- Ne pas afficher de progression utilisateur fictive, pourcentage, cadenas ou accomplissement sans état réel.
- Ne pas créer de pages SEO minces pour donner l'impression que le graphe est plus grand.
- Ne pas forcer une illustration lorsqu'aucune référence fiable ne permet de garantir le mouvement.
- Ne pas simuler communauté, avis, experts, partenaires ou validations.
- Ne pas relancer une architecture backend lourde sans besoin concret.
- Ne pas construire prématurément une carte de parks ou une marketplace.

## PROCHAINE REPRISE RECOMMANDÉE

1. vérifier `main`, CI, PR/issues ouvertes ;
2. inspecter le rendu et l'accessibilité des trois chemins existants avant d'étendre le pattern ;
3. poursuivre la recherche de keyframes fiables pour le contrôle scapulaire ;
4. choisir le plus petit lot cohérent qui améliore réellement une décision utilisateur ;
5. branche → PR → squash merge → CI → inspection de l'artefact si UI/route modifiée ;
6. mettre à jour cette passation si le cap produit change.

## POINTS DE VIGILANCE HISTORIQUES

- Un ancien `noop` accidentel sur `main` a été immédiatement annulé ; ne pas réécrire l'historique pour le masquer.
- Un commit documentaire direct sur `main` a déjà été fait par erreur durant le travail sur le pattern ; les changements suivants doivent rester branche → PR.
- Plusieurs écritures ont été interceptées sur de mauvaises branches avant PR ; toujours vérifier le ref de départ et le diff avant fusion.
- Une tentative de compactage de `ILLUSTRATION_SOURCES.md` a été rejetée et restaurée sur sa branche sans toucher `main` ; conserver l'historique utile du registre.
- Une première image générative regroupant plusieurs mouvements a été rejetée : elle n'est pas une référence produit et ne doit jamais être intégrée.
