# Calis — PASSATION ACTIVE

Dernière mise à jour : **1 septembre 2026**.

## Source de reprise prioritaire

La passation produit complète reste consolidée dans **`INTEL.md` à la racine du dépôt**. Pour l’**état opérationnel récent** des PR et du moteur d’entraînement, le présent fichier prévaut sur les sections historiques de `INTEL.md` qui n’ont pas encore été reconsolidées.

Instruction recommandée dans une nouvelle conversation :

> **Consulte `INTEL.md`, puis vérifie l’état réel de `main`, des PR ouvertes et de la CI, et continue le projet sans repartir de zéro.**

Toujours vérifier GitHub avant d’agir : ce fichier décrit l’état au moment de cette mise à jour, mais `main`, les PR et la CI restent la vérité opérationnelle.

## État opérationnel actuel

### Fusionné récemment

- #38 : première boucle `Aujourd’hui` et programme Fondations.
- #39 : décisions basées sur les résultats et blocage des séances vides.
- #40 : diagnostic court et choix du point de départ.
- #41 : résumé de séance.
- #42 : fréquence hebdomadaire réelle et repos après les séances prévues.
- #43 : progression automatique conservatrice vers les étapes documentées.
- #44 : fenêtre `Ma progression` avec historique et vrais résultats.
- #46 : détection prudente de stagnation avec état `À revoir`.
- #48 : langage visuel sportif global propre, recréé depuis `main` ; #47 a été fermé sans fusion car sa branche était devenue bruyante.
- #49 : l’objectif principal (`traction`, `pompes`, `jambes`, fondations) influence désormais la priorité des exercices sans retirer les autres fondations.
- #50 : les logs mémorisent la prescription réellement effectuée ; plateau et progression automatique ne comparent plus que des passages comparables.
- #51 : `À revoir` peut proposer un recalibrage volontaire vers une régression documentée, sans effacer l’historique ni modifier automatiquement le volume.

### PR ouvertes

Aucune PR de développement ne doit être supposée ouverte à partir de ce document. **Toujours vérifier GitHub** avant de commencer un nouveau lot.

## Décisions actuelles à préserver

- Calis doit répondre à « qu’est-ce que je fais maintenant ? ».
- Boucle centrale : `diagnostic → programme → séance → mesure → décision → prochaine étape`.
- Architecture produit : `désir → objectif → capacité → progression`.
- Interface mobile fixe pour les écrans de décision ; informations secondaires en modale, pas en accordéon qui allonge la page.
- Pas de streak, badge artificiel, faux progrès ou preuve sociale simulée.
- Les progressions automatiques restent explicables, conservatrices et limitées aux transitions documentées.
- Les décisions de plateau doivent comparer la **même prescription**, pas seulement le même slug d’exercice.
- Un recalibrage n’est appliqué qu’après action explicite de l’utilisateur et ne supprime pas son historique.
- Le stockage reste local-first tant qu’un compte/sync n’apporte pas une vraie valeur.
- Direction visuelle : base neutre + couleurs d’orientation par famille, géométrie commune, bordures plus franches et tactilité légère ; reprendre la cohérence UX d’un bon jeu mobile, pas son habillage ni sa gamification.
- Avancer par lots cohérents ; contrôle lourd aux points de stabilisation / PR / fusion.

## Limites connues du moteur

- Le programme reste volontairement compact : poussée, tirage et jambes comme fondations principales.
- L’objectif principal agit aujourd’hui surtout sur la priorité de la séance, pas encore sur une spécialisation complète de volume ou de fréquence.
- Handstand et muscle-up ont des parcours éditoriaux mais pas encore assez de prescriptions chiffrées et validées pour être injectés honnêtement dans `Aujourd’hui`.
- La traction négative est volontairement documentée sans « chrono magique » ; ne pas inventer un seuil numérique uniquement pour automatiser la progression.
- Les capacités comme poussée verticale, chaîne postérieure, tronc, mobilité structurée, équilibre et explosivité restent à couvrir progressivement quand le contenu et les prescriptions sont assez précis.

## Prochaine étape

1. Lire `INTEL.md` et vérifier `main`, les PR ouvertes et la CI.
2. Considérer les blocs objectif principal, stagnation, comparabilité des prescriptions et recalibrage comme déjà intégrés.
3. Continuer la **couverture progressive des capacités manquantes**, mais seulement lorsque les ressources permettent une prescription exécutable et une règle de progression honnête.
4. Prioriser d’abord les écarts où le contenu canonique existe déjà et peut être transformé sans inventer de seuils arbitraires.
5. Plus tard : cycles / réévaluation périodique, puis compte/sync uniquement si cela apporte une vraie valeur.

## À ne pas refaire

- Ne pas repartir d’une architecture générique.
- Ne pas remettre tout le texte à l’écran.
- Ne pas ajouter de gamification artificielle.
- Ne pas copier visuellement Clash Royale.
- Ne pas automatiser des progressions non documentées.
- Ne pas transformer des critères qualitatifs en chiffres arbitraires pour « compléter » le moteur.
- Ne pas effacer l’historique local lors d’un recalibrage simple.
- Ne pas réintroduire une infrastructure lourde sans besoin réel.
- Ne pas supprimer des contenus ou chemins utiles pour introduire une nouvelle idée.
