# Décision — chemin Handstand — 31 août 2026

## Question

Le cluster handstand est-il prêt à devenir le troisième `ProgressionPath` Calis après traction et pompe ?

## État observé

Le hub `/handstand` présente déjà une séquence éditoriale utile :

`préparer → inverser → contrôler → équilibrer`

Mais le modèle canonique `lib/content/v1.ts` ne porte pas encore cette séquence comme une progression de ressources distinctes :

- `poignets-handstand` : préparation des appuis ;
- `handstand-mur` : travail assisté au mur ;
- `handstand-debutant` : ressource de progression globale qui englobe déjà appuis, inversion, sortie, mur et premières corrections ;
- `parallettes-handstand` : équipement facultatif, pas une étape obligatoire.

Il manque donc au moins une ressource canonique distincte pour représenter honnêtement la phase `équilibrer / premières corrections libres` sans réutiliser une page globale comme si elle était une étape précise.

## Décision

**Ne pas créer de `handstandProgression` pour l'instant.**

Créer maintenant un chemin visuel obligerait soit à :

1. faire passer `handstand-debutant` pour une étape finale alors qu'elle décrit tout le parcours ;
2. inventer une étape sans page dédiée ;
3. transformer `parallettes-handstand` en passage obligé alors que le matériel est explicitement facultatif.

Ces trois options contredisent le principe du pattern : le chemin visible doit révéler le modèle réel, pas fabriquer un graphe pour remplir l'interface.

## Travail préalable nécessaire

Avant de reconsidérer le chemin handstand :

1. clarifier les relations `next` des ressources handstand ;
2. décider si une ressource dédiée aux premières corrections / premiers équilibres libres apporte une vraie valeur pédagogique ;
3. vérifier cette ressource contre les sources biomécaniques déjà utilisées par `handstand-debutant` et les règles de sécurité du projet ;
4. seulement ensuite ajouter une progression canonique et la rendre avec `ProgressionPath`.

## Conséquence produit

Le hub handstand actuel reste préférable à un faux skill tree : il part des problèmes humains (`poignets`, `peur de tomber`, `mur`) et présente une direction générale sans prétendre que le modèle est plus précis qu'il ne l'est.

Le prochain lot utile peut donc revenir à une étape déjà exposée dans un chemin canonique : **le contrôle scapulaire de la traction**, dont le visuel existant doit encore être revalidé avec une référence moderne.
