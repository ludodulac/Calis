# Décision — chemin Handstand — 31 août 2026

## Question initiale

Le cluster handstand était-il prêt à devenir le troisième `ProgressionPath` Calis après traction et pompe ?

## Décision initiale

**Non, pas dans son état initial.**

Le hub `/handstand` présentait déjà une séquence éditoriale utile, mais le modèle canonique ne possédait pas de ressource distincte pour la phase `équilibrer / premières corrections libres`. `handstand-debutant` décrivait tout le parcours et `parallettes-handstand` est un équipement facultatif. Créer un chemin à ce moment-là aurait donc fabriqué une étape ou détourné une ressource existante.

Cette retenue a permis de préserver le principe du pattern : le chemin visible doit révéler le modèle réel, pas inventer un skill tree pour remplir l'interface.

## Réévaluation — condition désormais remplie

Une recherche ciblée sur le contrôle de l'équilibre en handstand a confirmé qu'il existe bien un problème pédagogique distinct après le travail au mur : apprendre à gérer de petits déséquilibres sans assistance, notamment via les changements de pression sous les mains et le contrôle du centre de pression.

La revue systématique de MacDonald et al. (2025), fondée sur 21 études biomécaniques, rapporte que les gymnastes utilisent fréquemment une stratégie dominante au niveau des poignets pour contrôler l'équilibre ; lorsque cette stratégie ne suffit pas, des stratégies mixtes impliquant épaules, hanches et coudes peuvent apparaître. Ces données ne définissent pas une technique unique pour tous les débutants, mais elles soutiennent la séparation pédagogique entre `travail assisté au mur` et `premiers équilibres libres`.

Source principale :

- MacDonald M, Baker JS, Gu Y, Ugbolue UC. *Biomechanical analyses of the handstand: a systematic review*. Frontiers in Sports and Active Living, 2025. DOI 10.3389/fspor.2025.1694648.

## Décision actuelle

**Créer le troisième `ProgressionPath` est maintenant justifié**, parce que la condition qui manquait a été remplie par une vraie ressource dédiée :

`poignets-handstand → handstand-mur → premiers-equilibres-handstand`

Le nouveau nœud `premiers-equilibres-handstand` ne fixe aucun nombre universel de secondes. Il vise seulement à rendre explicite le passage entre une position assistée et de courts instants sans aide où l'utilisateur peut commencer à sentir un déséquilibre, tenter une petite correction et sortir volontairement.

## Ce qui reste hors du chemin principal

- `handstand-debutant` reste la ressource d'orientation globale ;
- `parallettes-handstand` reste un choix matériel facultatif ;
- aucune durée universelle n'est utilisée comme examen ;
- aucun statut `débloqué`, `terminé` ou pourcentage n'est simulé ;
- aucun visuel technique de handstand n'est produit sans référence biomécanique suffisamment contrainte.

## Règle à préserver

Cette évolution ne contredit pas la décision initiale : elle montre au contraire le fonctionnement attendu de Calis. **On ne dessine pas d'abord un chemin pour ensuite chercher du contenu qui le justifie. On crée le maillon pédagogique réel, on le valide, puis le chemin peut enfin l'afficher.**
