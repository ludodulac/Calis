# CALIS — Modèle de contenu

## Objectif

Éviter de construire Calis comme une collection d'articles indépendants. Les connaissances doivent être structurées pour être réutilisées dans les pages SEO, la bibliothèque, les progressions, les tests, les programmes et plus tard la personnalisation.

## État V1 réel

Le modèle conceptuel ci-dessous reste la direction long terme. La V1 utilise volontairement une version légère dans `lib/content/types.ts` et `lib/content/v1.ts`.

Le type `Resource` actuel contient : `slug`, `title`, `summary`, `level`, `kind`, `capability`, `hub`, `equipment`, `next?`.

Hubs actuellement acceptés par le contrat TypeScript : `commencer`, `tractions`, `pompes`, `dips`, `handstand`, `muscle-up`.

`next` constitue une première matérialisation simple du graphe. Ne pas créer une deuxième progression parallèle pour les futurs tests/outils : enrichir ce modèle ou le faire évoluer vers les objets conceptuels ci-dessous.

La première couche d'entraînement concrète vit dans `lib/training/types.ts` et `lib/training/v1.ts`. Elle réutilise les `resourceSlug` existants au lieu de recopier une deuxième bibliothèque d'exercices.

## Entités conceptuelles

### Capability

Une capacité humaine générale.

Exemples : `pull`, `push`, `hold`, `balance`, `mobility`, `strength`, `coordination`, `legs`.

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
- traction explosive -> transition muscle-up ;
- transition muscle-up + poussée au-dessus de la barre -> muscle-up.

Champs : source, destination, type, ordre, critères, commentaire éditorial.

### Requirement

Critère conseillé ou obligatoire avant une étape.

Exemples : durée de suspension, nombre de répétitions propres, amplitude, contrôle technique.

Les seuils doivent être présentés avec nuance lorsqu'ils ne reposent pas sur une norme scientifique stricte. Un nombre de tractions ne doit notamment pas être transformé en garantie universelle de réussite d'un muscle-up.

### Resource

Contenu éditorial publiable et indexable.

Types conceptuels : guide, question, tutorial, comparison, explainer, program-intro, equipment-guide. La V1 code une union plus compacte dans `lib/content/types.ts`.

Champs futurs : slug, titre, résumé, corps, intention, niveau, auteur, reviewer, published_at, updated_at, status, SEO metadata.

### Source

Référence liée à une affirmation ou une ressource.

Champs : titre, organisme/auteur, URL, date, type, date de consultation, notes.

### VisualSource / VisualAsset — direction à prévoir

La vérité visuelle impose de pouvoir conserver provenance et validation des visuels pédagogiques importants : référence réelle, auteur/pratiquant, licence/autorisation, fichier source, fichier de travail, final Calis, raison pédagogique et validation éventuelle.

Ne pas construire une base dédiée en V1 : la provenance reste documentée dans `docs/ILLUSTRATION_SOURCES.md` et les fichiers du dépôt. Voir `docs/VISUAL_TRUTH_WORKFLOW.md`.

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

Parcours planifié avec objectif, public, fréquence, séances et critères d'adaptation. Un programme ne remplace pas le graphe : il choisit quoi entraîner maintenant dans ce graphe.

### TrainingSessionTemplate

Une séance réutilisable d'un programme. Elle ordonne plusieurs prescriptions et porte une intention courte.

### TrainingPrescription

Prescription liée à une ressource/exercice canonique : séries, plage de répétitions ou durée, récupération, repère d'effort et règle de progression. La prescription doit référencer un `resourceSlug` existant lorsque possible.

### SessionLog

Trace factuelle d'une séance réellement effectuée : date, modèle de séance, résultats par exercice et état de complétion. La V1 stocke cette trace localement dans le navigateur afin de tester la boucle produit avant d'introduire des comptes.

### AdaptationDecision

Décision produite à partir du programme, des critères du graphe et des résultats récents : conserver, faciliter, augmenter légèrement la difficulté, tester l'étape suivante ou demander davantage d'information. Une décision doit rester explicable à l'utilisateur.

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
Program 1---N TrainingSessionTemplate
TrainingSessionTemplate 1---N TrainingPrescription
TrainingPrescription N---1 Resource/Exercise
Program 1---N SessionLog
SessionLog 1---N ExerciseLog
SessionLog + Requirements + ProgressionEdge -> AdaptationDecision
Expert N---N Resource
```

## Boucle d'entraînement

Le moteur produit doit pouvoir relier :

```text
assessment -> current_step -> program -> today's_session -> session_log -> adaptation_decision -> next_step
```

La donnée « aujourd'hui » n'est pas un nouveau contenu éditorial. C'est une vue calculée à partir de l'état de la personne, du programme et de l'historique.

Les règles importantes doivent rester inspectables. Éviter une personnalisation opaque qui produit une séance sans pouvoir expliquer pourquoi elle a changé.

## Statuts éditoriaux

Proposition : `idea`, `brief`, `draft`, `review`, `published`, `update_required`, `archived`.

Archiver ne doit pas supprimer l'historique ni casser une URL publiée sans stratégie de redirection.

## Métadonnées de confiance

Toute ressource importante doit pouvoir stocker :

- auteur réel lorsque pertinent ;
- relecteur éventuel réel ;
- date de publication ;
- date de dernière vérification ;
- sources ;
- niveau de preuve/notes éditoriales si utile ;
- disclosure affiliation/sponsor ;
- historique de mise à jour.

Ne jamais remplir ces champs avec une identité ou une validation fictive pour donner une impression d'autorité.

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

Ces filtres sont des outils d'exploration. Ils ne doivent pas devenir l'unique porte d'entrée pour le débutant : la navigation visible peut utiliser des phrases plus simples.

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
- SessionLog synchronisé ;
- AdaptationDecision ;
- SavedResource.

Les données privées utilisateur doivent être séparées des données éditoriales publiques et protégées par des politiques RLS appropriées.

Le prototype local doit permettre de tester les objets et les décisions avant de figer un schéma serveur.

## Principe Supabase

Le schéma SQL final ne doit pas être créé à partir de ce document sans nouvelle validation des besoins et de la documentation Supabase actuelle. Toute table exposée via l'API doit avoir un modèle d'accès explicite et RLS activé. Les clés privilégiées restent côté serveur.

## Principe d'évolution

Ajouter un nouvel usage doit autant que possible réutiliser les objets existants. Par exemple, le test « première traction » doit lire la même progression que la page SEO ; il ne doit pas dupliquer une deuxième progression codée en dur.
