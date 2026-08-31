# Calis — pattern de chemin de progression

## Rôle

Le chemin de progression sert à rendre visible une logique déjà présente dans le modèle de contenu. Il ne crée pas une seconde progression parallèle et ne transforme pas les étapes en examens obligatoires.

## Principe

`désir → situation actuelle → étape travaillable → critère de passage → suite`

Une page de parcours peut afficher les étapes principales comme des cartes reliées visuellement. Chaque carte doit pointer vers une vraie ressource et rester issue des données canoniques du projet.

## Règles

- la source de vérité reste `lib/content/v1.ts` et ses relations ;
- ne jamais inventer de pourcentage de progression ;
- ne jamais afficher `verrouillé`, `débloqué` ou `terminé` sans état utilisateur réel ;
- ne pas présenter chaque branche comme obligatoire ;
- un jalon peut être mis en évidence lorsqu'il correspond à un désir utilisateur clair (par exemple première traction ou première pompe) ;
- après un socle, montrer les branches comme des choix, pas comme une hiérarchie universelle ;
- sur mobile, privilégier un chemin horizontal scannable plutôt qu'un arbre illisible ;
- les critères affichés doivent venir du modèle ou d'une ressource validée, pas d'un seuil improvisé pour rendre l'interface plus ludique.

## État validé au 31 août 2026

### Parcours traction

`pullUpProgression` alimente le chemin : suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions, puis un carrefour facultatif vers hauteur, force ou muscle-up.

Le parcours long a validé :
- sept étapes scannables horizontalement ;
- un jalon visuel sur la première traction ;
- des branches optionnelles après le socle ;
- un rendu mobile horizontal plutôt qu'un arbre compressé.

### Parcours pompe

`pushUpProgression` valide le même langage sur un chemin court : pompes inclinées → première pompe → pompe stable, puis branche facultative vers les dips.

Ce deuxième test a confirmé qu'il ne faut pas gonfler artificiellement les chemins. Une variante compacte est utilisée lorsque le parcours contient peu d'étapes.

### Composant partagé

Le rendu commun est centralisé dans `components/progression-path.tsx`. Les pages fournissent les données, le jalon, l'accessibilité et les branches ; le composant n'invente aucune logique métier.

Utilisé actuellement sur :
- `/tractions` ;
- `/pompes` ;
- `/bibliotheque` pour rendre visible le chemin traction plutôt que réafficher une grille redondante.

### Accueil

L'accueil ne montre pas un arbre complet. Son panneau de hero utilise un exemple court et explicitement non personnalisé : `Objectif → Aujourd'hui → Maintenant → Ensuite`, avec un cas réel de première traction et des liens vers les ressources concernées.

## Décision stratégique

Le différenciateur recherché n'est pas « avoir un skill tree ». Des produits de callisthénie proposent déjà des arbres, ladders, nœuds verrouillés ou systèmes d'unlock.

Calis doit garder une autre séquence :

`ce que je veux réussir → où j'en suis humainement → ce que je peux travailler maintenant → pourquoi cette étape → ce qu'elle ouvre ensuite`.

La prochaine généralisation ne doit donc pas consister à ajouter des chemins partout. Avant chaque intégration, vérifier que le chemin aide réellement à décider quoi faire et qu'il est suffisamment soutenu par le modèle de contenu.