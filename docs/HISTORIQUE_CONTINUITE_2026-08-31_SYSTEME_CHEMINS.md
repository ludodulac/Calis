# Continuité — système de chemins de progression — 31 août 2026

## Pourquoi ce virage

Une analyse comparative de Calis avec THENX, Caliverse et Hybrid a renforcé un diagnostic : Calis possède déjà une architecture pédagogique différenciante, mais elle était encore plus visible dans le code et les textes que dans l'interface.

Décision retenue : ne pas reconstruire Calis comme une application fitness générique. Faire apparaître ce qui existe déjà :

`OBJECTIF → SITUATION ACTUELLE → CHEMIN → PROCHAINE ÉTAPE`.

Le H1 d'accueil `Qu'est-ce que tu aimerais réussir avec ton corps ?` est conservé. L'entrée `/commencer` reste simple et humaine. Communauté, streaks, gamification lourde, compte obligatoire et faux états de progression restent hors priorité.

## Implémentations réalisées

### Traction — premier chemin

- `pullUpProgression` reste la source de données.
- `/tractions` affiche désormais le parcours sous forme de chemin horizontal.
- `Première traction` est un jalon visuel.
- Le carrefour intervient après `Plusieurs tractions`, pas immédiatement après la première répétition.
- Branches : hauteur, force, muscle-up.
- PR #9, commit fusionné `235f9eae861cc0706ccff6536e178e2d59019c88`.
- GitHub Pages run #135 validé et artefact vérifié.

### Documentation du pattern

- `docs/PROGRESSION_PATH_PATTERN.md` créé.
- Un commit documentaire a été fait directement sur `main` par erreur de workflow : `0af551f8e616b2238d6531b52dc93485c7f269ad`.
- Le contenu était voulu ; l'historique n'a pas été réécrit.
- Run #136 vert.
- Les changements suivants sont revenus au flux branche → PR → merge.

### Pompe — second test

- `pushUpProgression` ajouté à `lib/content/v1.ts`.
- Chemin court : pompes inclinées → première pompe → pompe stable.
- Dips conservés comme branche facultative, pas comme obligation.
- Variante compacte spécifique aux chemins courts.
- PR #10, commit fusionné `8b83812bd8eeb06338ba871e11381c3b543f5910`.
- Run #137 vert ; artefact exact vérifié.

### Composant partagé

- `components/progression-path.tsx` extrait après validation sur deux formes de parcours.
- Les critères et étapes restent dans `lib/content/v1.ts` ; le composant ne contient pas de progression métier.
- PR #11, commit fusionné `5998ad961d10362615634bba824fdba4cf4ebc56`.
- Run #138 vert ; artefact traction + pompe vérifié.

### Accueil — démonstration de la promesse

Le panneau `Comment ça marche ?`, trop abstrait, a été remplacé par un exemple explicitement présenté comme tel :

- Objectif : première traction ;
- Aujourd'hui : je tiens à la barre ;
- Maintenant : rowing incliné ;
- Ensuite : traction assistée ;
- CTA vers le parcours complet.

Le H1, les CTA et l'ordre des sections n'ont pas été changés.

- PR #12, commit fusionné `882a5afd85ba18b35cc20e336062fb1dacc0fdf7`.
- Run #139 vert ; artefact vérifié avec liens `/Calis/...` corrects.

### Bibliothèque — première matérialisation du graphe

La bibliothèque avait déjà des entrées par désir/problème et une recherche filtrée. Le principal doublon restant était la section traction, qui réaffichait les ressources comme une grille tout en affirmant qu'elles formaient un graphe.

Cette grille a été remplacée par le vrai `ProgressionPath` traction. Les diagnostics, équipements et variantes restent disponibles dans `LibraryBrowser` sans être forcés dans le chemin principal.

- PR #13, commit fusionné `18928d0ff1f5a7e56817a17ff33c50e2c8bcfa2e`.
- Run #140 à vérifier avant clôture de cette continuité.

## Ce que cela change pour la suite

Le sprint visuel de mouvements reste utile, mais il ne doit plus être poursuivi mécaniquement comme une série d'illustrations isolées. Les visuels fiables doivent servir les objectifs, étapes et chemins.

Prochaines questions produit, dans cet ordre :

1. vérifier le rendu réel des nouveaux chemins et du hero sur desktop/mobile ;
2. décider si la bibliothèque doit montrer un deuxième chemin (pompe) ou si traction suffit comme démonstrateur ;
3. seulement ensuite étudier un chemin handstand, car il exige davantage de validation technique et de sécurité ;
4. continuer les illustrations pédagogiques fiables lorsqu'elles renforcent réellement une étape du graphe ;
5. ne faire évoluer la navigation que lorsque `Exercices` / `Programmes` représentent de vraies destinations produit assez fortes.

## À préserver

- désir humain avant taxonomie ;
- aucune personnalisation simulée ;
- aucun pourcentage ou statut `locked/completed` sans état utilisateur réel ;
- chemins issus du modèle canonique, jamais un graphe parallèle dans l'UI ;
- branche après le socle = choix, pas obligation ;
- pas de clone THENX/Caliverse ;
- la différenciation est la transparence pédagogique du chemin, pas la gamification du skill tree.