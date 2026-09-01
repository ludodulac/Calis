# Calis — PASSATION ACTIVE

Dernière mise à jour : **1 septembre 2026**.

## Source de reprise prioritaire

La passation opérationnelle complète est désormais consolidée dans **`INTEL.md` à la racine du dépôt**.

Instruction recommandée dans une nouvelle conversation :

> **Consulte `INTEL.md`, puis vérifie l’état réel de `main`, des PR ouvertes et de la CI, et continue le projet sans repartir de zéro.**

`INTEL.md` contient :

- la vision produit ;
- les règles UX mobile ;
- la boucle d’entraînement ;
- l’état du moteur de décision et de progression ;
- les choix visuels et couleurs ;
- l’historique récent des PR ;
- les limitations ;
- les prochaines étapes ;
- les choses à ne pas refaire ;
- le rythme de travail attendu.

Ce fichier reste volontairement court pour éviter qu’une ancienne passation détaillée concurrence `INTEL.md`.

## État opérationnel au moment de cette mise à jour

### Fusionné récemment

- #38 : première boucle `Aujourd’hui` et programme Fondations.
- #39 : décisions basées sur les résultats et blocage des séances vides.
- #40 : diagnostic court et choix du point de départ.
- #41 : résumé de séance.
- #42 : fréquence hebdomadaire réelle et repos après les séances prévues.
- #43 : progression automatique conservatrice vers les étapes documentées.
- #44 : fenêtre `Ma progression` avec historique et vrais résultats.

### Ouvert

- **#46** — détection prudente de stagnation / état `À revoir` ; branche propre `feat/training-plateau-v2`.
- **#47** — langage visuel sportif simple ; branche `feat/sport-visual-system-v1`. Cette branche contient aussi la création de `INTEL.md` et la mise à jour des fichiers de passation.

Toujours vérifier GitHub : ces états peuvent avoir changé après la rédaction de ce document.

## Décisions actuelles à préserver

- Calis doit répondre à « qu’est-ce que je fais maintenant ? ».
- Boucle centrale : `diagnostic → programme → séance → mesure → décision → prochaine étape`.
- Interface mobile fixe pour les écrans de décision ; informations secondaires en modale, pas en accordéon qui allonge la page.
- Pas de streak, badge artificiel, faux progrès ou preuve sociale simulée.
- Les progressions automatiques restent explicables et conservatrices.
- Le stockage reste local-first tant qu’un compte/sync n’apporte pas une vraie valeur.
- Direction visuelle : base neutre + couleurs d’orientation par famille, géométrie commune, bordures plus franches et tactilité légère ; reprendre la cohérence UX d’un bon jeu mobile, pas son habillage ni sa gamification.
- Avancer par lots cohérents ; éviter les contrôles complets après chaque micro-changement. Contrôle lourd aux points de stabilisation / PR / fusion.

## Prochaine étape

1. Lire `INTEL.md`.
2. Vérifier l’état réel de #46 et #47 + CI.
3. Stabiliser/fusionner les lots propres.
4. Continuer le moteur d’entraînement : objectif principal, stagnation/recalibrage, puis couverture progressive des capacités manquantes.
5. Maintenir `INTEL.md` à jour à chaque nouvelle passation majeure.

## À ne pas refaire

- Ne pas repartir d’une architecture générique.
- Ne pas remettre tout le texte à l’écran.
- Ne pas ajouter de gamification artificielle.
- Ne pas copier visuellement Clash Royale.
- Ne pas automatiser des progressions non documentées.
- Ne pas réintroduire une infrastructure lourde sans besoin réel.
- Ne pas laisser un ancien document de passation contredire `INTEL.md` : mettre `INTEL.md` à jour.
