# Calis — Admin, commentaires et cycle de mise à jour

Date : 30 août 2026

## Intention

L'admin futur de Calis ne doit pas être un simple écran pour modifier du texte. Il doit devenir le poste de pilotage de la qualité du produit : contenu, retours utilisateurs, corrections, sources, progression, SEO, équipement, partenariats et historique des changements.

L'objectif reste cohérent avec la vision fondateur : **augmenter durablement la valeur de Calis sans créer une charge humaine permanente.**

## 1. Principe de commentaires

Les commentaires placés au bas des ressources servent d'abord de **capteurs de problèmes réels** : incompréhension, étape manquante, erreur potentielle, expérience différente, question récurrente, matériel ambigu, lien cassé ou demande de précision.

Ils ne doivent pas être considérés automatiquement comme vrais ni comme une preuve scientifique.

Un commentaire peut devenir :

- une question à laquelle la page répond déjà mais mal ;
- un signal qu'une phrase est ambiguë ;
- une hypothèse à vérifier ;
- une idée de nouvelle ressource ;
- un signal commercial pertinent ;
- du bruit, du spam ou une affirmation incorrecte.

## 2. Boucle de qualité souhaitée

```text
Commentaire / signal utilisateur
        ↓
Classification automatique
        ↓
Regroupement des signaux similaires
        ↓
Évaluation de l'importance
        ↓
Recherche si une correction est plausible
        ↓
Sources scientifiques / officielles / expertise réelle
        ↓
Proposition de modification
        ↓
Validation selon le niveau de risque
        ↓
Mise à jour de la ressource
        ↓
Historique de modification
        ↓
Nouvelle version publiée
```

La boucle doit permettre à terme une instruction simple telle que **« fais les mises à jour pertinentes »**, sans demander au fondateur de lire lui-même tous les commentaires.

## 3. Ce qui peut être automatisé

Le système peut :

- détecter les commentaires proches ou répétitifs ;
- classer les retours : erreur possible, question, expérience, suggestion, spam, matériel, sécurité ;
- signaler les pages qui accumulent les mêmes incompréhensions ;
- vérifier les liens ;
- lancer une recherche documentaire lorsqu'une affirmation est contestée ;
- proposer une reformulation ou une correction ;
- proposer de nouveaux liens internes ;
- identifier une ressource devenue obsolète ;
- préparer un résumé des changements ;
- conserver les sources et la justification de la modification.

## 4. Ce qui ne doit pas être automatisé aveuglément

Aucun commentaire ne doit modifier directement une page publique.

Une affirmation médicale, de sécurité, scientifique, juridique ou commerciale ne doit pas être corrigée uniquement parce qu'un commentaire paraît convaincant. Elle doit être vérifiée avec des sources adaptées.

Les témoignages et expériences personnelles ne doivent pas être transformés en vérités générales.

Les commentaires publics nécessitent une modération : spam, insultes, données personnelles, liens malveillants, publicité, contenu illicite et faux témoignages doivent pouvoir être filtrés ou masqués.

## 5. Affichage public souhaité

Au bas d'une ressource, Calis pourra expliquer clairement que :

- les ressources sont entretenues et peuvent évoluer ;
- les lecteurs peuvent signaler une erreur ou poser une question ;
- les retours peuvent conduire à une vérification et à une mise à jour ;
- un commentaire n'est pas une validation de son contenu par Calis ;
- les mises à jour importantes peuvent être datées et résumées.

Éviter de simuler une communauté active si elle n'existe pas encore. Aucun faux commentaire, faux compteur ou faux témoignage.

## 6. Architecture du futur admin

L'admin doit être conçu autour des **objets du produit**, pas autour d'un éditeur de pages générique.

### Tableau de bord

- pages à revoir ;
- commentaires nécessitant une analyse ;
- liens cassés ;
- ressources sans prochaine étape ;
- contenus anciens ou sources à revérifier ;
- opportunités SEO détectées ;
- changements récents ;
- éléments nécessitant une décision humaine.

### Ressources

Pour chaque ressource :

- titre, slug, résumé, niveau, type, capacité, hub ;
- contenu pédagogique structuré ;
- prérequis ;
- sensations ;
- erreurs ;
- critère de progression ;
- ressources précédentes et suivantes ;
- sources ;
- illustrations ;
- équipement contextuel ;
- métadonnées SEO ;
- état : brouillon, vérification, publié, à revoir ;
- historique des versions.

### Commentaires et retours

- file de modération ;
- regroupement par sujet ;
- score de répétition / importance ;
- lien avec la page concernée ;
- statut : nouveau, analysé, recherche nécessaire, corrigé, rejeté ;
- justification de la décision.

### Sources et expertise

- étude scientifique ;
- source officielle ;
- expert / coach réel ;
- vidéo ou ressource externe ;
- date de vérification ;
- affirmation(s) que la source soutient ;
- niveau de confiance / limites.

### SEO

- requêtes et intentions ciblées ;
- pages orphelines ;
- maillage ;
- titres / descriptions ;
- sitemap ;
- canonicals ;
- opportunités de consolidation plutôt que création automatique de pages faibles.

### Équipement et monétisation

- produits étudiés ;
- preuves et critères de sélection ;
- relations d'affiliation ;
- divulgation ;
- pages où le produit est réellement pertinent ;
- possibilité explicite de conclure : « rien à acheter ici ».

### Historique

Chaque modification importante doit pouvoir répondre à :

1. Qu'est-ce qui a changé ?
2. Pourquoi ?
3. Quel signal a déclenché la modification ?
4. Quelles sources ont été utilisées ?
5. Qui ou quoi a validé la publication ?

## 7. Permissions futures

Prévoir dès la conception plusieurs rôles sans les implémenter prématurément :

- propriétaire ;
- administrateur ;
- éditeur ;
- relecteur / expert invité ;
- modérateur.

Un expert réel pourra ainsi relire uniquement une ressource ou un domaine précis sans obtenir l'accès à toute l'administration.

## 8. Quand construire réellement l'admin

**Pas maintenant.**

La V1 statique sur GitHub permet encore de produire beaucoup de valeur à coût presque nul. Construire authentification, base de données, modération et back-office maintenant ajouterait une forte complexité avant d'avoir des utilisateurs et des retours à gérer.

Le déclencheur raisonnable pour une première version dynamique sera l'apparition d'au moins un besoin réel parmi :

- commentaires publics ;
- comptes utilisateurs ;
- progression personnelle ;
- données qui doivent être modifiées sans commit Git ;
- plusieurs contributeurs ;
- flux de révision trop important pour être maintenu proprement dans GitHub.

À ce moment, Supabase ou une solution équivalente pourra devenir justifiée pour Auth + PostgreSQL + RLS, avec un admin séparé et sécurisé.

## 9. Première version de l'admin à construire plus tard

Ne pas commencer par un « CMS complet ». Commencer par :

1. connexion propriétaire sécurisée ;
2. liste des ressources ;
3. file des retours/commentaires ;
4. fiche d'analyse d'un retour ;
5. proposition de mise à jour ;
6. historique des modifications ;
7. publication contrôlée.

Puis seulement ajouter SEO, partenaires, équipement, experts, comptes et outils lorsque les usages l'exigent.

## 10. Règle directrice

**Le commentaire n'est pas du contenu à afficher : c'est d'abord une donnée qui peut améliorer le produit.**

Et l'admin n'est pas seulement un outil pour gérer le site : **c'est le système qui doit permettre à Calis de s'améliorer avec de moins en moins de travail manuel du fondateur.**
