# Calis — Admin actuel : espaces de travail statiques

Date : 3 septembre 2026

## But

Ce document décrit **ce qui existe réellement aujourd'hui** dans `/admin`. Il complète `ADMIN_AND_CONTENT_LIFECYCLE.md`, qui décrit surtout l'admin dynamique futur.

L'admin actuel reste volontairement statique et local au navigateur. Il n'introduit ni authentification, ni base de données, ni publication directe, ni modération publique.

## 1. Cockpit propriétaire — `/admin`

Rôle : point d'entrée de pilotage.

Il rassemble le cockpit business, la roadmap et les accès vers les ateliers de travail.

## 2. Atelier connaissances — `/admin/connaissances`

Rôle : **trier une matière avant qu'elle devienne du contenu ou une règle produit**.

Une fiche permet de conserver :

- provenance ;
- type de source ;
- thème ;
- matière brute ;
- affirmation / idée isolée ;
- valeur pratique possible ;
- niveau de risque ;
- état de preuve ;
- destination envisagée ;
- notes de vérification ;
- décision produit ;
- prochaine action.

Destinations possibles : bibliothèque, progression, moteur/séance, blog, backlog admin, rejet ou décision différée.

Principe : **une matière intéressante n'est pas automatiquement vraie, et une matière vraie n'est pas automatiquement utile au produit**.

Les fiches sont stockées dans `localStorage` sous la clé :

`calis.admin.knowledge.v1`

Elles restent locales tant que le propriétaire ne copie pas la fiche pour la transmettre dans une conversation ou un autre workflow.

## 3. Atelier blog — `/admin/blog`

Rôle : transformer un sujet déjà mûr en dossier éditorial : recherche, apport humain, plan, brouillon, SEO, maillage et déclinaisons.

La séparation avec l'atelier connaissances est volontaire :

```text
source / chapitre / vidéo / idée
        ↓
atelier connaissances
        ↓
verification + décision produit
        ↓
si destination éditoriale
        ↓
atelier blog
        ↓
revue humaine
        ↓
intégration publique contrôlée
```

## 4. Ce que ces ateliers ne sont pas

Ils ne sont pas :

- un CMS ;
- une base de données canonique ;
- un système de comptes ;
- un outil de publication automatique ;
- un remplacement des sources scientifiques ;
- une preuve que la matière saisie est correcte.

Une perte du stockage local du navigateur peut supprimer ces brouillons. Toute décision durable doit finir dans Git, dans un document canonique ou dans le code selon sa nature.

## 5. Matière Brieuc Le Dantec

L'inventaire initial du corpus de travail est documenté dans `BRIEUC_CONTENT_INTAKE.md`.

Ce corpus doit être traité fiche par fiche via l'atelier connaissances lorsque le fondateur souhaite approfondir une idée. Le document d'intake ne doit pas être transformé en backlog d'implémentation automatique.

## 6. Évolution future

Ne pas ajouter un backend uniquement pour rendre ces ateliers plus sophistiqués.

Le passage vers un admin dynamique reste conditionné aux déclencheurs réels définis dans `ADMIN_AND_CONTENT_LIFECYCLE.md` : plusieurs contributeurs, commentaires, comptes, données à modifier sans commit, besoin de révision important ou autre usage qui justifie réellement Auth + base de données.
