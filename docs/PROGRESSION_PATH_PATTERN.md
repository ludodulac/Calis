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

## Premier prototype validé

Le parcours traction utilise `pullUpProgression` pour afficher : suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions, puis un carrefour facultatif vers hauteur, force ou muscle-up.

Ce pattern doit maintenant être testé sur un parcours plus court avant toute généralisation à l'accueil ou à la bibliothèque.