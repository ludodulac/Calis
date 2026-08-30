# Validation visuelle — traction négative

## Question visuelle

Montrer uniquement la logique utile à un débutant : atteindre proprement la position haute avec un support, retirer l'aide des pieds, puis contrôler la descente jusqu'aux bras tendus. Le visuel ne cherche pas à imposer un tempo universel ni une trajectoire millimétrée.

## Références techniques consultées

### ACE — *4 Moves to Help You Master the Pull-up*

- L'exercice « Eccentric Chin-ups » propose d'utiliser un step, une bande ou un départ assisté pour placer le menton au-dessus de la barre.
- La consigne centrale est ensuite de descendre lentement jusqu'à l'extension complète des bras.
- ACE précise que la durée de la descente peut varier pour régler la difficulté ; cela soutient la décision Calis de ne pas transformer un nombre de secondes précis en seuil universel.
- URL : https://www.acefitness.org/resources/pros/expert-articles/5565/4-moves-to-help-you-master-the-pull-up/
- Consulté : 2026-08-31.

### ACE — *Do It Better Series: Chin-ups*

- La ressource confirme une position haute avec le menton au-dessus de la barre puis un retour lent vers la position de départ.
- Elle met en garde contre le fait de simplement se laisser tomber et contre l'usage du balancement comme aide au mouvement.
- URL : https://www.acefitness.org/continuing-education/certified/february-2025/8800/the-ace-do-it-better-series-chin-ups/
- Consulté : 2026-08-31.

### Références visuelles de contrôle

Des démonstrations photographiques modernes de traction excentrique ont été consultées uniquement comme références internes de posture et de continuité. Elles ne sont ni copiées ni redistribuées dans l'asset Calis. Leur rôle est de vérifier que la séquence schématique reste cohérente avec un mouvement réel.

## Décisions Calis

- **Trois positions seulement** : haut assisté → milieu de descente → extension des bras.
- **Support visible uniquement au départ** afin de montrer l'installation sans suggérer un saut maximal.
- **Deux flèches descendantes discrètes** indiquent le sens de la séquence, pas une vitesse imposée.
- **Pas de chrono dans l'image** : la page explique déjà qu'il n'existe pas de seuil universel.
- **Pas de texte intégré au SVG** : les explications restent dans le HTML pour l'accessibilité, la traduction et la maintenance.
- **Pas de photographie générée par IA** : l'asset est un schéma vectoriel original, volontairement moins réaliste qu'une photo, afin de ne pas donner une fausse impression de précision anatomique.

## Vérifications mécaniques

- barre horizontale et fixe dans les trois états ;
- prise symétrique et continuité des mains sur la barre ;
- position haute avec coudes fléchis et tête au niveau/au-dessus de la barre ;
- position intermédiaire avec davantage d'extension des coudes ;
- position finale bras tendus ;
- jambes sous le corps, sans représentation de kipping ou de balancement volontaire ;
- le support n'est utilisé que pour l'installation initiale.

## Asset final

- Fichier : `public/illustrations/calis/tractions/traction-negative.svg`
- Page : `app/bibliotheque/traction-negative/page.tsx`
- Composant : `LearningIllustration`
- Statut : `intégré sous contrainte des références ci-dessus — à revalider après build et rendu publié`.

## Limites

Ce dessin n'est pas une analyse biomécanique frame-by-frame. Il enseigne une seule idée : **partir en haut avec une installation sûre et transformer la descente en mouvement volontaire au lieu de tomber**. Si Calis ajoute plus tard une démonstration vidéo humaine validée, elle devra devenir la référence de continuité prioritaire et pourra conduire à affiner ou remplacer ce schéma.
