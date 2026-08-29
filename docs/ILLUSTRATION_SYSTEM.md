# Calis — système d’illustrations

## Objectif

Créer une identité visuelle pédagogique propre à Calis : élégante, calme, immédiatement lisible et suffisamment discrète pour accompagner le texte sans transformer les fiches en posters de fitness.

Les illustrations doivent aider à **comprendre une position, un mouvement, une trajectoire ou une erreur**. Elles ne sont pas décoratives.

## Direction artistique retenue

Style de référence : **planche pédagogique contemporaine inspirée du dessin technique sportif et des anciens manuels d’éducation physique**, mais sans effet rétro caricatural.

- fond transparent en priorité ; blanc pur si la transparence n’est pas possible ;
- dessin au trait fin et propre ;
- palette quasi monochrome : brun sépia / graphite chaud ;
- une seule couleur d’accent très discrète possible pour une flèche, une zone corporelle ou un repère ;
- anatomie humaine réaliste mais simplifiée ;
- silhouette athlétique naturelle, jamais bodybuildée ;
- pas de visage détaillé ;
- vêtements sportifs simples, neutres et intemporels ;
- aucun décor inutile ;
- équipement dessiné avec précision mais sans marque ;
- beaucoup d’espace négatif ;
- rendu éditorial premium, pas clipart, pas cartoon, pas publicité fitness ;
- même proportions, même épaisseur de trait et même langage graphique dans toute la bibliothèque.

### Inclusivité

Faire varier naturellement les morphologies et la présentation féminine/masculine au fil de la bibliothèque, sans changer le langage graphique et sans sexualisation. Le mouvement doit rester le sujet principal.

## Types d’illustrations

### A — Position clé

Une seule silhouette. À utiliser lorsqu’une posture suffit : suspension, position haute de traction, support de dips, handstand, L-sit.

### B — Départ / arrivée

Deux silhouettes maximum, côte à côte, même échelle et même angle. À privilégier pour un mouvement simple. Une flèche discrète peut montrer la direction lorsque cela clarifie réellement le mouvement.

### C — Séquence

Trois poses maximum pour un mouvement qui ne peut pas être compris avec deux. Utiliser les poses comme étapes distinctes ; éviter d’ajouter simultanément de nombreuses flèches et silhouettes fantômes.

### D — Bon / erreur

Deux vues comparables : forme correcte et erreur fréquente. Utiliser un repère très discret plutôt qu’une grande croix rouge agressive. Le défaut doit être anatomiquement évident.

### E — Focus technique

Une silhouette principale et un détail simple : trajectoire, angle, omoplates, alignement, prise ou zone d’effort. N’afficher que l’information nécessaire à la compréhension.

## Choix de la vue

Choisir l’angle qui expose le mieux l’information :

- profil pour alignement du corps, gainage, trajectoire verticale ou amplitude ;
- trois-quarts pour traction, dips et mouvements où bras + tronc doivent être visibles ;
- face/dos uniquement lorsque la symétrie, les omoplates ou la largeur de prise sont le sujet.

Ne jamais imposer systématiquement le même angle si celui-ci cache l’information importante.

## Règles de lisibilité

1. Une illustration = une idée principale.
2. Une image pédagogique standard contient idéalement 1 ou 2 poses ; 3 uniquement si nécessaire.
3. Les flèches ne sont utilisées que si la direction n’est pas évidente par les poses elles-mêmes.
4. Ne jamais mélanger beaucoup de poses fantômes + beaucoup de flèches + beaucoup d’annotations.
5. Aucun texte intégré dans l’image sauf demande explicite. Les légendes restent en HTML sur le site pour rester accessibles, traduisibles et modifiables.
6. Les mains, coudes, épaules, bassin et jambes doivent être anatomiquement cohérents : une belle image incorrecte est rejetée.
7. L’équipement doit être générique et mécaniquement plausible.
8. Les images doivent rester lisibles sur mobile.

## Format technique

### Master recommandé

- PNG avec transparence, plutôt que JPEG : JPEG ne gère pas la transparence.
- Ratio selon usage : 4:3 pour une fiche, 1:1 pour une carte, 16:9 pour une séquence large.
- Générer suffisamment grand pour permettre une compression propre.

### Version web

Conserver le master PNG transparent. Le site pourra ensuite produire/servir une version WebP ou AVIF optimisée si nécessaire.

Arborescence cible :

```text
public/
  illustrations/
    traction/
    pompe/
    dips/
    handstand/
    mobilite/
    jambes/
```

Convention de nommage :

```text
traction-suspension-position.png
traction-scapulaire-depart-arrivee.png
traction-negative-sequence.png
traction-erreur-elan.png
```

## Prompt maître — à réutiliser dans une future conversation

Quand on demande « ajoute les illustrations de telle fiche », commencer par lire ce document puis examiner le contenu exact de la fiche dans le dépôt. Déterminer d’abord quelles illustrations apportent une information pédagogique réelle. Ne pas illustrer chaque paragraphe.

### PROMPT

Créer une illustration pédagogique originale pour la bibliothèque Calis.

SUJET : [EXERCICE / MOUVEMENT / ERREUR À ILLUSTRER]
OBJECTIF PÉDAGOGIQUE : [CE QUE LE LECTEUR DOIT COMPRENDRE EN REGARDANT L’IMAGE]
TYPE : [POSITION CLÉ / DÉPART-ARRIVÉE / SÉQUENCE / BON-ERREUR / FOCUS TECHNIQUE]
ANGLE : [PROFIL / TROIS-QUARTS / FACE / DOS — choisir celui qui rend l’information la plus claire]
POSES : [DESCRIPTION ANATOMIQUE PRÉCISE DE CHAQUE POSE]
ÉQUIPEMENT : [BARRE / ANNEAUX / PARALLETTES / AUCUN / ETC.]
REPÈRE VISUEL : [FLÈCHE OU ZONE D’ACCENT UNIQUEMENT SI NÉCESSAIRE]

Direction artistique : illustration éditoriale sportive haut de gamme, minimaliste et intemporelle, dessin au trait fin et précis, légèrement organique comme une belle planche dessinée à l’encre, teinte brun sépia / graphite chaud, très légère variation de densité du trait, anatomie humaine crédible et proportions naturelles, silhouette sportive mais non bodybuildée, visage sans détail, vêtements d’entraînement simples et neutres, équipement générique sans logo, beaucoup d’espace négatif, composition calme et équilibrée, lisibilité immédiate, esthétique de manuel pédagogique contemporain avec une subtile inspiration des anciennes planches techniques, sans aspect vieilli ni papier jauni.

Fond entièrement transparent. Aucun décor. Aucun texte dans l’image. Aucun logo. Aucun filigrane. Aucun effet photo. Aucun rendu 3D. Aucun cartoon. Aucun manga. Aucun style clipart. Aucun muscle exagéré. Aucun élément décoratif qui n’aide pas à comprendre le mouvement.

La priorité absolue est l’exactitude du mouvement : position des mains, poignets, coudes, épaules, omoplates, colonne, bassin, genoux et pieds cohérente avec l’exercice décrit. Si plusieurs poses sont montrées, conserver exactement la même personne, les mêmes proportions, les mêmes vêtements, le même équipement, le même angle de caméra et la même échelle entre les poses.

Utiliser au maximum deux poses pour un mouvement simple. Utiliser trois poses uniquement si elles sont nécessaires à la compréhension. Ajouter une flèche fine et discrète uniquement lorsqu’elle apporte une information de trajectoire qui n’est pas évidente autrement.

L’image doit rester parfaitement compréhensible lorsqu’elle est affichée dans une fiche web sur mobile.

## Prompt négatif / contrôle qualité

Rejeter ou régénérer si l’image présente :

- anatomie incohérente ou membres supplémentaires ;
- mains déformées ou mauvaise prise sur l’équipement ;
- barre/anneaux physiquement incohérents ;
- mouvement techniquement faux ;
- différences de personnage entre deux poses ;
- perspective différente entre les étapes ;
- musculature excessive ;
- rendu glamour, publicitaire ou sexualisé ;
- fond de salle de sport, paysage ou accessoires décoratifs ;
- texte illisible généré dans l’image ;
- trop de flèches, annotations ou couleurs ;
- style cartoon, pictogramme générique ou stock illustration ;
- sépia trop jaune donnant un aspect « vieux papier ».

## Workflow futur

Quand une fiche est prête :

1. lire la fiche et identifier 1 à 3 difficultés visuelles réellement utiles ;
2. choisir pour chacune le type A/B/C/D/E ;
3. rédiger la description anatomique exacte avant génération ;
4. générer l’illustration selon le prompt maître ;
5. contrôler visuellement la biomécanique et la cohérence avec le texte ;
6. enregistrer le master dans `public/illustrations/<hub>/` ;
7. ajouter l’image à la fiche avec un `alt` décrivant l’information utile, pas l’esthétique ;
8. vérifier l’affichage desktop/mobile et le poids de l’image.

## Principe Calis

> Une illustration n’est réussie que si elle permet de comprendre plus vite quelque chose que le texte seul explique moins bien.
