# CALIS — Modèle de contenu

## Objectif

Éviter de construire Calis comme une collection d'articles indépendants. Les connaissances doivent être structurées pour être réutilisées dans les pages SEO, la bibliothèque, les progressions, les tests, les programmes et plus tard la personnalisation.

## Entités conceptuelles

### Capability

Une capacité humaine générale.

Exemples : `pull`, `push`, `hold`, `balance`, `mobility`, `strength`, `coordination`.

Champs envisagés : id, slug, nom, description, ordre, statut.

### Exercise

Un mouvement entraînable.

Champs : id, slug, nom, résumé, niveau, capacité principale, équipement, muscles, instructions, sensations attendues, erreurs, sécurité, statut.

### Skill

Une capacité/figure cible qui peut nécessiter plusieurs exercices et prérequis.

Exemples : handstand, muscle-up, front lever.

### ProgressionEdge

Relation orientée entre deux objets.

Exemples :

- row incliné -> traction assistée ;
- traction assistée -> traction négative ;
- traction stricte -> traction explosive ;
- traction explosive + dips -> muscle-up.

Champs : source, destination, type, ordre, critères, commentaire éditorial.

### Requirement

Critère conseillé ou obligatoire avant une étape.

Exemples : durée de suspension, nombre de répétitions propres, amplitude, contrôle technique.

Les seuils doivent être présentés avec nuance lorsqu'ils ne reposent pas sur une norme scientifique stricte.

### Resource

Contenu éditorial publiable et indexable.

Types : guide, question, tutorial, comparison, explainer, program-intro, equipment-guide.

Champs : slug, titre, résumé, corps, intention, niveau, auteur, reviewer, published_at, updated_at, status, SEO metadata.

### Source

Référence liée à une affirmation ou une ressource.

Champs : titre, organisme/auteur, URL, date, type, date de consultation, notes.

### Equipment

Type de matériel indépendant des produits vendus.

Exemples : anneaux, bandes, barre, parallettes, ceinture de lest.

Champs : utilité, cas d'usage, limites, risques, niveau pertinent.

### Product

Produit commercial présenté par Calis.

Il référence un Equipment mais ne doit pas contenir directement la logique fournisseur.

### SupplierOffer

Offre d'un fournisseur pour un Product : fournisseur, référence externe, coût, devise, stock, entrepôt/pays, délai, MOQ, score qualité, statut.

Un Product peut avoir plusieurs SupplierOffer.

### Program

Parcours planifié avec objectif, niveau, durée, séances/étapes et critères d'adaptation.

### Expert

Auteur, relecteur, coach ou partenaire. Toute relation commerciale ou partenariat doit être explicitement représentable.

## Relations importantes

```text
Capability 1---N Exercise
Capability 1---N Skill
Exercise N---N Equipment
Skill N---N Exercise
Exercise/Skill N---N ProgressionEdge
Resource N---N Exercise/Skill/Capability
Resource N---N Source
Equipment 1---N Product
Product 1---N SupplierOffer
Program N---N Exercise
Expert N---N Resource
```

## Statuts éditoriaux

Proposition : `idea`, `brief`, `draft`, `review`, `published`, `update_required`, `archived`.

Archiver ne doit pas supprimer l'historique ni casser une URL publiée sans stratégie de redirection.

## Métadonnées de confiance

Toute ressource importante doit pouvoir stocker :

- auteur ;
- relecteur éventuel ;
- date de publication ;
- date de dernière vérification ;
- sources ;
- niveau de preuve/notes éditoriales si utile ;
- disclosure affiliation/sponsor ;
- historique de mise à jour.

## Modèle « sensations »

Pour les fiches d'exercice :

- `expected_cues` : sensations/repères attendus ;
- `common_compensations` : compensations fréquentes ;
- `warning_signs` : signaux nécessitant arrêt/adaptation/avis professionnel ;
- `self_check` : questions ou tests simples.

Ces champs ne constituent pas un diagnostic médical.

## Filtres bibliothèque

Le modèle doit supporter dès la V1 :

- niveau ;
- objectif ;
- capacité ;
- équipement ;
- type de ressource ;
- mouvement/skill.

## SEO

Les données SEO doivent être séparées du corps principal : title, description, canonical, indexation, données structurées calculables, image sociale éventuelle.

Les URLs sont déterminées par le type éditorial et doivent rester stables.

## Utilisateurs — plus tard

Lorsque les comptes deviennent utiles :

- UserProfile ;
- UserGoal ;
- UserAssessment ;
- UserProgress ;
- ProgramEnrollment ;
- SavedResource.

Les données privées utilisateur doivent être séparées des données éditoriales publiques et protégées par des politiques RLS appropriées.

## Principe Supabase

Le schéma SQL final ne doit pas être créé à partir de ce document sans nouvelle validation des besoins et de la documentation Supabase actuelle. Toute table exposée via l'API doit avoir un modèle d'accès explicite et RLS activé. Les clés privilégiées restent côté serveur.

## Principe d'évolution

Ajouter un nouvel usage doit autant que possible réutiliser les objets existants. Par exemple, le test « première traction » lit les mêmes Requirements et ProgressionEdges que la page SEO ; il ne duplique pas une deuxième progression codée en dur.