# Calis — PASSATION ACTIVE

Dernière mise à jour : 31 août 2026, après déploiement et audit visuel du système de chemins.

Ce document est l'état opérationnel de reprise. Il complète les sources de vérité sans les remplacer. Toute nouvelle conversation doit commencer par `AI_START_HERE.md`, puis vérifier `main`, les PR/issues ouvertes et la CI avant d'agir.

## FAIT ET VÉRIFIÉ

### Produit / expérience

- Calis reste une plateforme francophone de progression en callisthénie, pas un blog générique ni une boutique en premier.
- Architecture mentale : **DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**.
- Traduction UI désormais réellement visible : **OBJECTIF → SITUATION ACTUELLE → CHEMIN → PROCHAINE ÉTAPE**.
- Boucle pédagogique : **désirer → essayer → comprendre → ressentir → réussir → vouloir aller plus loin**.
- Règle business : utilité et confiance avant monétisation ; une page peut conclure qu'aucun achat n'est nécessaire.
- Règle humaine : ne jamais inventer auteur, expertise, expérience vécue, test, témoignage, communauté ou partenariat.
- Règle d'évolution : préserver l'existant utile ; enrichir/réorganiser avant de supprimer.
- Règle d'idéation : **idée ≠ décision ≠ priorité**.

### Simplicité UX — cap actuel

- Navigation principale : `Je débute / Choisir un objectif / Tout explorer`.
- Accueil centré sur `Qu'est-ce que tu aimerais réussir avec ton corps ?`.
- Le hero contient maintenant un exemple concret de la logique Calis : objectif première traction → situation actuelle → rowing incliné → traction assistée → parcours complet.
- `/commencer` reste l'entrée humaine quand l'utilisateur ne connaît pas encore le vocabulaire ou son objectif exact.
- Les objectifs restent visibles tôt sur l'accueil ; ne pas les repousser derrière un onboarding lourd.
- Aucune personnalisation simulée, aucun compte obligatoire, aucun streak, aucun état `locked/completed` sans données utilisateur réelles.

### Chemins de progression — système validé

Le pattern est documenté dans `docs/PROGRESSION_PATH_PATTERN.md` et la continuité détaillée dans `docs/HISTORIQUE_CONTINUITE_2026-08-31_SYSTEME_CHEMINS.md`.

- `components/progression-path.tsx` est le composant partagé de rendu.
- Les données et critères restent canoniques dans `lib/content/v1.ts` ; ne pas créer un graphe parallèle dans l'UI.
- Traction : suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions ; ensuite seulement branches hauteur / force / muscle-up.
- Pompe : pompes inclinées → première pompe → pompe stable ; dips comme branche facultative.
- Le pattern a été validé sur un chemin long et un chemin court avant extraction du composant.
- Sur mobile, le chemin reste horizontal et scannable plutôt que transformé en arbre illisible.
- Les jalons correspondent à un désir humain clair (`Première traction`, `Première pompe`) et ne sont pas des niveaux de jeu inventés.

PR/CI structurantes :

- PR #9 : premier chemin traction ; run #135 vert.
- PR #10 : chemin pompe ; run #137 vert.
- PR #11 : composant partagé ; run #138 vert.
- PR #12 : exemple concret dans le hero ; run #139 vert.
- PR #13 : chemin traction visible dans la bibliothèque ; run #140 vert.
- PR #14 : synchronisation documentaire du système de chemins.
- PR #15 : correction de la bibliothèque après audit visuel réel ; run #142 vert.

### Bibliothèque — audit visuel réel effectué

Le premier déploiement du chemin traction dans `/bibliotheque` était techniquement correct mais encore noyé par le catalogue : environ 7 066 px avant le chemin sur desktop et 15 128 px sur mobile.

La PR #15 a corrigé ce problème observé sur l'artefact GitHub Pages :

- chemin traction remonté juste après les entrées rapides ;
- suppression des grilles éditoriales qui répétaient des fiches déjà présentes dans `LibraryBrowser` ;
- aucune ressource supprimée ;
- exploration libre limitée à un aperçu initial de 9 fiches, avec bouton pour afficher les 27 ;
- dès qu'une recherche ou un filtre est utilisé, tous les résultats correspondants s'affichent ;
- filtre `Muscle-up` ajouté au sélecteur de parcours.

Après correction : page d'environ 4 786 px sur desktop et 8 059 px sur mobile ; chemin traction vers 2 478 px desktop et 3 596 px mobile. Aucun débordement horizontal global observé. Le rendu desktop/mobile de l'artefact #142 a été contrôlé visuellement.

### Graphe de contenu

- Modèle V1 dans `lib/content/types.ts` et `lib/content/v1.ts`.
- Les relations `next` et les tableaux de progression doivent rester la source de vérité des chemins visibles.
- Hubs actifs : commencer, tractions, pompes, dips, handstand, muscle-up.
- Le cluster muscle-up existe déjà ; ne pas créer de pages minces uniquement pour remplir un arbre.
- La bibliothèque doit fonctionner comme interface du graphe et comme recherche, pas comme répétition de plusieurs catalogues successifs.

### Visuels pédagogiques / vérité du mouvement

- `docs/VISUAL_TRUTH_WORKFLOW.md` reste obligatoire pour les mouvements techniques.
- Une IA générative ne doit jamais être l'autorité biomécanique d'une séquence.
- Workflow : référence réelle validée → keyframes utiles → représentation Calis → comparaison finale.
- `suspension-barre.svg` est issu d'une référence historique publique documentée.
- Le rowing incliné existant a été validé comme schéma pédagogique moderne avec limites explicites ; voir `docs/VALIDATION_VISUELLE_ROWING_INCLINE.md`.
- Le contrôle scapulaire reste un prochain candidat sérieux à revalider contre des références modernes : deux positions, coudes tendus, petit déplacement du corps, aucun élan, ne pas transformer le geste en demi-traction.
- Les visuels doivent désormais servir une étape ou une décision du graphe ; ne pas poursuivre une série d'illustrations isolées juste pour remplir le site.

### Accessibilité / qualité déjà renforcée

- Skip link vers le contenu principal.
- Focus clavier visible.
- Compensation du header sticky pour l'ancre objectifs.
- 404 française spécifique à Calis.
- Audit structurel déjà effectué : un H1 par page, pas de duplicate IDs détectés, pas de liens internes cassés dans l'artefact contrôlé, pas d'images sans alt détectées lors de l'audit précédent.

### Infrastructure actuelle

- Next.js 16 / React 19 / TypeScript.
- Export statique.
- Déploiement V1 via GitHub Actions + GitHub Pages.
- `basePath` actuel : `/Calis`.
- URL de test : `https://ludodulac.github.io/Calis/` ; ce n'est pas l'identité publique finale.
- Supabase, Stripe et autres briques historiques/futures ne doivent pas être réintroduits tant qu'un besoin produit réel ne les justifie pas.

## PRIORITÉS ACTIVES

### 1. Consolider les chemins existants avant d'étendre l'arbre

- Continuer à vérifier le rendu réel de l'accueil, `/tractions`, `/pompes`, `/bibliotheque` et `/commencer` après les évolutions.
- Corriger uniquement les problèmes observables : densité, mobile, clavier, hiérarchie, compréhension du prochain geste.
- Ne pas ajouter de gamification lourde pour ressembler aux apps de skill tree concurrentes.

### 2. Décider le prochain parcours à matérialiser à partir du contenu réel

- Ne pas créer automatiquement un chemin pour chaque hub.
- Handstand est le candidat naturel mais exige davantage de validation technique/sécurité ; inspecter d'abord ses ressources et leurs relations.
- Si le contenu handstand n'est pas assez fiable/dense pour un chemin canonique, densifier ou corriger le cluster avant toute visualisation.
- Muscle-up doit rester une branche avancée issue d'un socle traction fiable ; éviter de le présenter comme une suite immédiate de la première traction.

### 3. Sprint visuel utile au graphe

Ordre recommandé :

1. contrôle scapulaire ;
2. traction négative ;
3. traction assistée ;
4. ensuite seulement les visuels d'autres clusters si une page/étape en bénéficie réellement.

Pour chaque visuel : source exacte, droits, rôle pédagogique, limites, validation anatomique/mécanique, comparaison finale.

### 4. Mobile / accessibilité / SEO technique

- Continuer les audits sur artefact réellement compilé.
- Vérifier navigation clavier, contraste, tailles tactiles, lisibilité des chemins horizontaux et comportement des boutons d'expansion.
- Favicon/icon/OG et manifest seulement avec une identité visuelle réellement décidée ; ne pas inventer un logo définitif.
- Données structurées uniquement lorsqu'elles décrivent quelque chose de vrai.
- Domaine final plus tard ; ne pas coder l'identité autour de GitHub Pages.

## NE PAS FAIRE

- Ne pas reconstruire Calis comme une app fitness générique à séances/streaks avant d'avoir validé le cœur pédagogique.
- Ne pas copier les skill trees gamifiés concurrents : la différenciation Calis est de rendre le raisonnement pédagogique compréhensible.
- Ne pas afficher de progression utilisateur fictive, pourcentage, cadenas ou accomplissement sans état réel.
- Ne pas créer de pages SEO minces pour donner l'impression que le graphe est plus grand.
- Ne pas forcer une illustration lorsqu'aucune référence fiable ne permet de garantir le mouvement.
- Ne pas simuler communauté, avis, experts, partenaires ou validations.
- Ne pas relancer une architecture backend lourde sans besoin concret.
- Ne pas construire prématurément une carte de parks ou une marketplace.

## PROCHAINE REPRISE RECOMMANDÉE

1. vérifier `main`, CI, PR/issues ouvertes ;
2. inspecter le cluster handstand et ses relations pour déterminer s'il peut devenir le troisième chemin sans inventer d'étapes ;
3. en parallèle, reprendre la validation visuelle du contrôle scapulaire car cette étape appartient déjà au chemin traction déployé ;
4. choisir le plus petit lot cohérent qui améliore réellement une décision utilisateur ;
5. branche → PR → squash merge → CI → inspection de l'artefact si UI/route modifiée ;
6. mettre à jour cette passation si le cap produit change.

## POINTS DE VIGILANCE HISTORIQUES

- Un commit documentaire direct sur `main` a déjà été fait par erreur durant le travail sur le pattern ; l'historique n'a pas été réécrit. Revenir systématiquement au flux branche → PR.
- Un ancien `noop` accidentel sur `main` a été immédiatement annulé ; ne pas réécrire l'historique pour le masquer.
- Une première image générative regroupant plusieurs mouvements a été rejetée : elle n'est pas une référence produit et ne doit jamais être intégrée.
