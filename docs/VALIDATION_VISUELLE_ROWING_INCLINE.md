# Calis — Validation visuelle : rowing incliné

Date de validation : 2026-08-31

## Pourquoi ce document existe

Le fichier `public/illustrations/calis/tractions/rowing-incline.svg` est déjà intégré au parcours traction. Le registre historique le classait encore `à étudier`. Cette note vérifie donc le dessin existant contre des références techniques modernes avant de considérer sa géométrie comme une base pédagogique acceptable.

Cette validation ne transforme pas une source externe en direction artistique Calis et ne prétend pas qu'une image seule décrit toute la technique. Elle vérifie uniquement les repères que le visuel doit réellement communiquer.

## Références techniques retenues

### ACE — étude sur les exercices du dos

Source : https://acefitnessmediastorage.blob.core.windows.net/webcontent/April2018/ACE_BackExerStudy.pdf

La description de l'inverted row donne les repères utiles suivants : barre vers la hauteur de taille, corps droit, talons au sol, bras complètement tendus au départ, flexion des coudes pour rapprocher la poitrine de la barre, puis retour contrôlé vers l'extension des bras.

Rôle dans Calis : référence moderne principale pour les deux états montrés par l'illustration, pas pour imposer une largeur de prise unique.

### U.S. Marine Corps — Force Fitness Exercise Guidebook

Source : https://www.tbs.marines.mil/Portals/230/Force%20Fitness%20Exercise%20Guidebook.pdf

La fiche `Inverted Row` décrit une barre stable à hauteur de taille, une position de planche modifiée avec uniquement les talons au sol, puis un tirage du torse vers la barre avec retour lent vers le départ.

Rôle dans Calis : contrôle indépendant de la stabilité de l'agrès, de l'alignement corporel et du déplacement du torse.

## Contrôle du SVG Calis existant

Fichier : `public/illustrations/calis/tractions/rowing-incline.svg`

### Repères conformes

- deux états distincts sont montrés : départ et tirage ;
- la barre est basse et représentée comme un support fixe ;
- les pieds restent au sol ;
- le départ représente les bras plus longs et le torse plus éloigné de la barre ;
- l'arrivée rapproche le haut du corps de la barre avec flexion des coudes ;
- la silhouette conserve une ligne globale tronc-bassin-jambes au lieu de montrer une impulsion volontaire du bassin ;
- aucun swing, saut ou mouvement acrobatique n'est suggéré.

### Limites du dessin

- le dessin est volontairement schématique : il ne doit pas servir à enseigner une largeur de prise précise, un angle de coude universel ou un point de contact anatomique millimétrique ;
- la perspective simplifiée rend la lecture des épaules moins précise qu'une référence photographique ;
- l'illustration doit donc rester accompagnée de sa légende et des repères textuels de la page.

## Décision

**Statut : `retenu comme schéma pédagogique Calis pour départ → tirage, avec limites explicites`.**

Le SVG existant peut rester en production : les informations visuelles qu'il cherche à transmettre concordent avec les références modernes retenues. Il n'est pas nécessaire de le remplacer par une image générée plus réaliste ; un remplacement n'aurait de sens que s'il améliore objectivement la lecture de l'alignement et du rapprochement de la poitrine sans ajouter d'ambiguïté biomécanique.

## Conséquence produit

Pour cette page, la bonne action n'est donc pas de produire davantage d'images. Le visuel actuel remplit déjà son rôle minimal. Le prochain travail visuel traction doit se concentrer sur les mouvements encore insuffisamment verrouillés, notamment le contrôle scapulaire, la traction négative et la traction assistée.
