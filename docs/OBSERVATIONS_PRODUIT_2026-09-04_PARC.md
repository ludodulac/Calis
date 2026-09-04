# Observation produit — le parc comme porte d'entrée

Date : 2026-09-04
Statut : **observation fondateur → hypothèse produit à tester**

Ce document conserve une observation récente sans la transformer prématurément en fonctionnalité ou en priorité.

## Observation fondateur

Devant un parcours de workout extérieur comportant des barres et structures gratuites, une personne qui ne connaît pas la callisthénie peut voir l'équipement sans comprendre ce qu'il permet de faire.

Question naturelle :

> Qu'est-ce que je peux faire avec ces barres ?

Le potentiel de l'installation est physiquement présent mais presque invisible sans connaissance préalable.

## Hypothèse produit

Calis pourrait servir d'interface très courte entre l'équipement réel et une action compréhensible :

> Montre-moi ce que tu as devant toi. Je te montre ce que tu peux faire avec.

Parcours conceptuel :

1. je suis devant un équipement ;
2. je reconnais ou sélectionne ce que j'ai devant moi ;
3. Calis montre quelques possibilités pertinentes ;
4. je choisis une seule chose ;
5. je regarde un pictogramme ou une démonstration courte ;
6. je pose le téléphone ;
7. j'essaie ;
8. je reviens éventuellement indiquer « réussi », « presque » ou « trop difficile ».

Le succès n'est donc pas le temps passé dans Calis. Une bonne interaction peut volontairement se terminer rapidement par la fermeture du téléphone et une action physique.

## Équipements candidats, pas catalogue à construire

Premiers objets observables à considérer seulement si un prototype en a besoin :

- barre haute ;
- barre basse ;
- barres parallèles ;
- espalier ;
- monkey bars / échelle horizontale ;
- barres de différentes hauteurs ;
- banc ;
- équipement d'étirement ;
- sol uniquement.

Cette liste n'est ni une taxonomie définitive ni une demande d'implémentation exhaustive.

## Exemple minimal : barre haute

Une sélection « barre haute » pourrait rendre immédiatement visibles quelques possibilités déjà compatibles avec les connaissances Calis, par exemple :

- suspension ;
- contrôle scapulaire ;
- progression vers la première traction ;
- relevé de genoux, uniquement si la recommandation et sa présentation sont suffisamment documentées.

Chaque possibilité devrait privilégier :

- une compréhension visuelle immédiate ;
- une consigne très courte ;
- une difficulté approximative honnête ;
- « sollicite principalement… » / « développe notamment… » plutôt qu'une promesse musculaire simpliste ;
- ce que cela peut débloquer ensuite lorsque cette relation est documentée ;
- une explication détaillée seulement en second niveau.

## Connexion avec la direction produit actuelle

Cette hypothèse renforce, sans la remplacer, la direction testée par `/essayer` :

**DÉCOUVRIR → AVOIR ENVIE → ESSAYER → RÉUSSIR QUELQUE CHOSE → COMPRENDRE LA SUITE → PROGRESSER**

Elle se combine avec quatre dimensions possibles :

**qui je suis + ce que mon corps sait faire + ce que je veux + ce que j'ai à disposition = ce que je peux essayer maintenant**

Le système doit demander le minimum d'informations réellement nécessaires au moment où elles changent la recommandation. Âge, taille, poids ou sexe ne deviennent pas des champs obligatoires par convention fitness.

## Carte de ce que le corps sait faire

Autre hypothèse liée : représenter progressivement les capacités observées de l'utilisateur plutôt qu'un simple programme à suivre.

Progressions canoniques à réutiliser avant d'en inventer de nouvelles :

- traction : suspension → contrôle scapulaire → row incliné → traction assistée → négatives → première traction → plusieurs tractions ;
- pompes : pompes inclinées → première pompe → pompes stables ;
- handstand : préparation poignets/appuis → mur → premiers équilibres libres.

Ne pas inventer de progression jambes pour rendre une interface symétrique.

## Pictogrammes : besoin à explorer

L'observation de panneaux de parcours sportif suggère qu'un pictogramme simple « structure + personne + position (+ début/fin si nécessaire) » peut expliquer très vite une possibilité d'usage.

Cela justifie d'explorer une bibliothèque visuelle canonique Calis, mais pas de produire immédiatement une grande bibliothèque d'exercices.

Un mouvement devrait à terme pouvoir avoir un identifiant stable, par exemple `dead-hang`, `scapular-pull-up`, `incline-row`, `assisted-pull-up`, `negative-pull-up`, `pull-up`, `incline-push-up`, `push-up`, `squat`, `glute-bridge`, `plank`, `dip`, `wall-handstand`, `handstand`.

Pour chaque visuel retenu : source, auteur, licence, attribution, mouvement, équipement, éventuelles étapes et statut de validation doivent rester traçables.

Rôles à ne pas confondre :

- **pictogramme** : comprendre immédiatement ;
- **photo** : donner envie / montrer une pratique réelle ;
- **vidéo** : comprendre le mouvement dans le temps.

## Ce qu'on ne construit pas encore

À ce stade, ne pas :

- créer un énorme graphe de capacités ;
- lancer la reconnaissance automatique par caméra ;
- produire des centaines de pictogrammes ;
- créer un questionnaire de profil exhaustif ;
- fusionner les essais légers avec le moteur V1 ;
- modifier les progressions V1 pour servir cette hypothèse ;
- ajouter un backend ou des comptes pour ce besoin ;
- remplir les emplacements vidéo avec du contenu moyen.

## Expérience suivante la moins coûteuse

Avant de coder un explorateur de parc, tester la PR #84 déjà déployée **sur téléphone réel et devant de vraies barres**.

Observer notamment :

1. est-ce que l'accueil donne envie d'ouvrir `/essayer` dans ce contexte ?
2. est-ce qu'une proposition correspond à ce que la personne voit physiquement autour d'elle ?
3. comprend-elle quoi faire sans explication orale ?
4. pose-t-elle naturellement le téléphone pour essayer ?
5. au retour, a-t-elle envie d'indiquer le résultat et de voir une suite ?
6. à quel moment demande-t-elle spontanément « qu'est-ce que je peux faire avec cette barre ? » ?

Ce test doit décider si le contexte matériel mérite un prototype dédié. Il ne faut pas construire ce prototype uniquement parce que l'idée paraît séduisante.
