# Validation visuelle — contrôle scapulaire en suspension — 31 août 2026

## Objet

Auditer le SVG déjà intégré `public/illustrations/calis/tractions/controle-scapulaire.svg` avant de le considérer comme une référence pédagogique fiable.

## Références mécaniques retenues

### CrossFit — bar hanging / active shoulder

La ressource distingue un hang passif d'une position active et décrit, pour le transfert vers les tractions, des épaules légèrement éloignées des oreilles avec le tronc engagé.

Rôle ici : confirmer que le changement visuel utile porte sur l'organisation de la ceinture scapulaire, pas sur une flexion des coudes.

### CrossFit — pull-over / préparation

La progression décrit un départ suspendu avec les épaules légèrement éloignées des oreilles et les coudes verrouillés ; la page cite également les hanging scapular retractions / scapular pull-ups comme travail préparatoire.

Rôle ici : confirmer le maintien des bras tendus et l'absence de demi-traction.

### Prinold & Bull — scapular kinematics of pull-up techniques

Étude biomécanique ouverte (J Sci Med Sport, 2016, DOI 10.1016/j.jsams.2015.08.002) montrant que la cinématique scapulo-thoracique pendant les tractions est tridimensionnelle et dépend de la technique/prise.

Rôle ici : empêcher le dessin Calis de prétendre montrer une trajectoire scapulaire anatomiquement exacte à partir d'un simple pictogramme 2D.

## Ce que le visuel Calis doit pouvoir dire

Seulement :

1. les mains restent fixées à la barre ;
2. les coudes restent tendus ;
3. le corps reste calme, sans élan des jambes ;
4. la position active diffère légèrement de la suspension de départ ;
5. le mouvement est petit et ne doit pas ressembler à une demi-traction.

Le visuel ne doit pas servir à enseigner une largeur de prise exacte, un angle articulaire exact ou une trajectoire millimétrique des omoplates.

## Audit du SVG actuel

Le fichier montre bien deux états, une barre fixe et des membres inférieurs calmes. L'intention pédagogique est donc correcte.

En revanche, la géométrie du deuxième état raccourcit visiblement les segments graphiques entre les mains et la ceinture scapulaire tout en déplaçant le corps. Dans un schéma qui affirme `bras tendus`, cette simplification peut être interprétée comme un changement de longueur des bras plutôt que comme un changement d'organisation de l'épaule.

Le deuxième état ajoute aussi des traits autour des épaules sans convention graphique explicitée. Ils peuvent être lus comme une position anatomique précise alors qu'ils ne sont pas dérivés d'une référence keyframe validée.

## Décision

**SVG non validé comme illustration technique. À retirer temporairement de la page jusqu'à reconstruction à partir d'une référence visuelle moderne explicitement validée.**

Cette décision ne remet pas en cause le texte de la page : les repères `coudes tendus`, `épaules progressivement éloignées des oreilles`, `petit déplacement du corps`, `sans élan` sont cohérents avec les références retenues et restent volontairement qualitatifs.

## Suite nécessaire

Pour reconstruire l'illustration :

1. obtenir ou sélectionner une référence visuelle moderne montrant réellement les deux keyframes depuis un angle comparable ;
2. contrôler mains, coudes, position relative tête/épaules, tronc et absence d'élan ;
3. redessiner sans copier l'apparence de la source et sans prétendre représenter la scapula sous la peau ;
4. comparer le nouveau SVG aux keyframes avant intégration ;
5. conserver dans ce document la provenance et les limites.

Tant que ces cinq points ne sont pas remplis, **pas d'image est préférable à une image biomécaniquement ambiguë**.
