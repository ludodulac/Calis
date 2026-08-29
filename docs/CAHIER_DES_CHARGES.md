# CALIS — Cahier des charges

Version initiale — 29 août 2026

> **Principe directeur :** Calis doit devenir utile avant de devenir gros, crédible avant de devenir commercial, et extensible avant de devenir complexe.

## 1. Résumé exécutif

Calis est conçu comme une plateforme francophone de référence autour de la callisthénie. Le projet ne doit pas être pensé comme une simple boutique de dropshipping ni comme un blog chronologique : son cœur est une bibliothèque structurée qui aide les personnes à comprendre leur corps, apprendre des mouvements, développer leurs capacités et progresser par étapes.

Le projet doit démarrer avec un coût très faible puis grossir sans reconstruction majeure. La monétisation arrive progressivement par la vente de matériel réellement utile, l’affiliation transparente, des programmes premium, des outils/fonctionnalités premium éventuels et des partenariats clairement identifiés.

Architecture cible : GitHub pour le code et l’historique, Cloudflare pour le déploiement et l’infrastructure web, Supabase pour les données et fonctionnalités applicatives, Stripe pour les paiements. Les intégrations fournisseurs seront validées avant automatisation.

## 2. Vision, mission et philosophie

### Mission
Construire une bibliothèque vivante de la callisthénie francophone qui donne des informations fiables, compréhensibles et actionnables et montre à chacun un chemin de progression adapté à ses capacités.

### Promesse
**Apprendre son corps. Développer ses capacités. Progresser à son rythme.**

### Principes
- La capacité et la maîtrise du corps passent avant l’apparence.
- Comprendre avant d’exécuter ; essayer, ressentir, maîtriser puis complexifier.
- La progression doit être graduelle, mesurable et accessible aux personnes qui partent de zéro.
- Le matériel n’est recommandé que lorsqu’il apporte une utilité réelle.
- Un contenu peut conclure honnêtement qu’aucun achat n’est nécessaire.
- Les sujets de santé, douleur et blessure doivent être bornés et renvoyer vers des professionnels qualifiés lorsque nécessaire.
- Le projet peut être inspiré par la philosophie publique de pratiquants/auteurs, notamment Brieuc Le Dantec, sans jamais laisser entendre une approbation ou un partenariat sans accord explicite.

## 3. Public cible et inclusivité

Calis doit plaire autant aux femmes qu’aux hommes. Les parcours sont définis d’abord par les capacités, le niveau, les objectifs et le matériel disponible, et non par une séparation artificielle homme/femme.

Publics :
- débutants complets : première pompe, suspension, traction, mobilité ;
- intermédiaires : volume, technique, premières figures, surcharge progressive ;
- avancés : muscle-up, handstand, front lever, planche, streetlifting ;
- personnes pratiquant à domicile, dehors ou avec peu de matériel.

Les contenus spécifiques au sexe ou à une situation particulière ne sont créés que lorsqu’une différence est réellement pertinente et documentée.

## 4. Positionnement différenciant

Calis doit être un **atlas d’apprentissage et de progression**, pas une usine à articles SEO.

La différenciation vient de l’assemblage cohérent de :
- bibliothèque structurée et filtrable ;
- graphe de progression ;
- explications de biomécanique et de sensations ;
- tests et outils interactifs ;
- comparatifs indépendants ;
- commerce intégré sans dégrader l’information ;
- à terme, annuaire de l’écosystème.

## 5. Architecture de l’information

### Apprendre
Commencer de zéro, fondamentaux, exercices, figures, mobilité, récupération.

### Progresser
Parcours par objectif, progressions, programmes, tests de niveau, outils, journal futur.

### Comprendre
Biomécanique, anatomie fonctionnelle, force, hypertrophie, volume, intensité, récupération, sensations et contrôle.

### S’équiper
Guides d’achat, comparatifs, tests, catégories de matériel, boutique.

### Pratiquer — futur
Parcs, clubs, coachs, associations, événements et compétitions.

### Navigation par capacités
- pousser ;
- tirer ;
- tenir ;
- s’équilibrer ;
- se mouvoir ;
- devenir plus fort.

### Hubs prioritaires
Traction, pompes, dips, muscle-up, handstand, front lever, back lever, planche, human flag, L-sit.

Un hub est un dossier complet : guide, prérequis, technique, erreurs, régressions, progressions, programmes, questions connexes et matériel pertinent.

## 6. Modèle éditorial

### Fiche d’apprentissage type
1. Définition de la capacité ou du mouvement.
2. Pourquoi l’apprendre.
3. Prérequis.
4. Test de départ.
5. Technique.
6. Ce que l’on doit ressentir.
7. Ce que l’on ne devrait pas ressentir / signaux d’alerte.
8. Erreurs fréquentes.
9. Régressions.
10. Progressions.
11. Critères pour passer à l’étape suivante.
12. Variantes.
13. Matériel nécessaire, facultatif ou inutile.
14. Ressources liées.
15. Sources, date de mise à jour et relecteurs éventuels.

### Charte qualité
- Une intention humaine précise avant un mot-clé.
- Pas de publication massive automatisée sans valeur ajoutée.
- Ajouter tableaux, tests, critères, sources, exemples, comparaisons ou outils lorsque pertinent.
- Auteur, mise à jour, sources et relecture experte clairement identifiables.
- Distinguer faits, expérience, opinion, affiliation et sponsoring.
- Ne pas recopier les descriptions fournisseurs ou concurrentes.
- Prévoir des mises à jour des ressources importantes.

## 7. Stratégie SEO

Le SEO repose sur des clusters thématiques et un maillage utile, pas sur un flux chronologique.

Exemple de cluster Traction : guide complet, première traction, prises, lest, augmentation des répétitions, explosivité, traction à un bras, blocages, bandes d’assistance, barre de traction, programmes 1/10/20 tractions.

Maillage cible :

`question → concept → exercice → progression → programme → équipement pertinent`

### SEO technique
- HTML fiable pour l’indexation ;
- URLs lisibles et stables ;
- métadonnées uniques ;
- sitemap XML et robots.txt ;
- canonical lorsque nécessaire ;
- données structurées pertinentes ;
- bonnes performances Core Web Vitals ;
- images optimisées et alternatives textuelles ;
- fil d’Ariane et maillage contextuel ;
- pages produits originales avec prix, disponibilité, livraison et retours.

## 8. Fonctionnalités et phases

### V1 — Bibliothèque légère
- accueil ;
- bibliothèque filtrable ;
- navigation par objectif, niveau et capacité ;
- 5 hubs majeurs ;
- environ 20 ressources de haute qualité ;
- premières fiches d’exercices et progressions ;
- recherche simple ;
- pages méthodologie, sources et transparence ;
- SEO technique complet.

### V2 — Progression
- graphe de progression ;
- tests de niveau ;
- parcours première pompe / première traction / premiers dips ;
- premiers outils interactifs ;
- compte utilisateur seulement si son utilité est démontrée.

### V3 — Commerce
- guides d’équipement et comparatifs ;
- affiliation transparente ;
- catalogue sélectionné ;
- panier et Stripe ;
- commandes ;
- gestion fournisseurs, variantes, prix, délais et tracking ;
- webhooks sécurisés ;
- automatisation dropshipping après validation fournisseur.

### V4/V5
- journal de progression ;
- programmes personnalisables ;
- newsletter ;
- relectures expertes ;
- annuaire parcs/clubs/coachs/associations ;
- événements et partenariats.

## 9. Commerce et catalogue initial

Priorité forte : bandes de résistance, anneaux bois, parallettes, ceinture de lest, wrist wraps/grips. Ab wheel ensuite. Les barres de porte nécessitent un contrôle sécurité renforcé. Les gilets lestés sont à privilégier avec logistique européenne. Les grosses stations ne sont pas prioritaires.

Bundles envisagés : Première traction, Starter, Skills, Streetlifting et Home Gym.

### Multi-fournisseurs
Un produit Calis doit être distinct d’une offre fournisseur. Un même produit commercial doit pouvoir être associé à plusieurs offres afin de comparer coût, délai, disponibilité, qualité et pays d’expédition.

## 10. Modèle économique

- vente directe de matériel sélectionné ;
- affiliation transparente, y compris vers un meilleur produit externe lorsque pertinent ;
- programmes premium ;
- fonctionnalités premium éventuelles ;
- partenariats clairement signalés ;
- mise en relation avec professionnels/structures à terme.

Les revenus ne doivent pas dégrader l’indépendance éditoriale.

## 11. Architecture technique cible

- **GitHub** : code, versioning, historique, collaboration.
- **Cloudflare** : déploiement, CDN, domaine, sécurité et fonctions serveur selon l’architecture finale.
- **Supabase** : PostgreSQL, authentification éventuelle, stockage et données applicatives.
- **Stripe** : paiements, checkout et événements de paiement.
- **Fournisseurs** : approvisionnement et fulfillment, intégrations validées individuellement.

### Principes techniques
- architecture modulaire et progressive ;
- ne pas supprimer une fonctionnalité existante simplement pour en ajouter une autre ;
- séparer contenu, produits, offres fournisseurs et commandes ;
- secrets uniquement côté serveur ;
- RLS et politiques minimales sur Supabase ;
- validation serveur des paiements/webhooks ;
- journalisation des opérations importantes ;
- dépendances versionnées et lockfile ;
- sauvegarde/export des contenus et données importantes.

## 12. Modèle de données conceptuel

Entités principales : Resource, Exercise, Skill, ProgressionEdge, Program, Equipment, Product, SupplierOffer, Order, Source, Expert/Partner et, plus tard, Place.

Le graphe `ProgressionEdge` relie les capacités entre elles : prérequis, régression, progression et étape suivante.

## 13. Identité et naming

Le nom final doit contenir ou évoquer clairement « calisthenie » tout en restant distinct des acteurs existants. Pistes de travail : Calisthenie Atlas, Calisthenie Libre, Calisthenie Mouvement, Calisthenie Progress, etc.

Avant validation : domaines .fr/.com, marques FR/UE, sociétés, réseaux sociaux et proximité phonétique.

`Calis` reste le nom du dépôt et nom de travail tant que cette validation n’est pas terminée.

### Direction visuelle
- sobre, contemporaine, humaine et technique ;
- ni hypermasculine agressive ni artificiellement féminisée ;
- femmes et hommes représentés naturellement ;
- débutants et avancés ;
- mouvement, contrôle, progression et liberté avant l’esthétique.

## 14. Partenariats et écosystème

Coachs, clubs, associations, professionnels compétents pour relecture, compétiteurs, créateurs spécialisés, fabricants et organisateurs d’événements.

Un expert ou partenaire ne doit jamais être présenté comme cautionnant Calis sans accord explicite. Les liens externes doivent servir le lecteur même lorsqu’ils ne génèrent aucun revenu.

## 15. Conformité, confiance et risques

- RGPD et minimisation des données ;
- CGV, mentions légales, confidentialité, cookies et retours lors de l’activation e-commerce ;
- conformité et sécurité des produits UE ;
- traçabilité fournisseurs/produits ;
- contrôle qualité renforcé pour les équipements pouvant provoquer une chute ;
- pas de scraping ou automatisation fournisseur non autorisée ;
- limites claires sur les contenus santé ;
- affiliation et sponsoring signalés ;
- respect du droit d’auteur et médias originaux/licenciés.

## 16. Performance et qualité

- mobile-first ;
- chargement rapide ;
- accessibilité : sémantique, clavier, contrastes, labels, alternatives textuelles ;
- URLs/pages stables ;
- tests automatisés des fonctions critiques ;
- environnements distincts lorsque le projet devient transactionnel ;
- monitoring ;
- sauvegardes et restauration.

## 17. Mesure du succès

### V1
Indexation, impressions et clics SEO, navigation vers les ressources liées, qualité d’engagement.

### V2
Utilisation des tests/outils, visiteurs récurrents, progression dans les parcours.

### V3
Conversion guides→produits, panier moyen, marge contributive, retours et satisfaction.

### V4/V5
Utilisateurs récurrents, éventuels abonnements, partenaires, contributions et couverture de l’écosystème.

## 18. Hors périmètre initial

- application mobile native ;
- réseau social interne complet ;
- centaines de produits ;
- automatisation AliExpress totale dès le lancement ;
- gros stock propre ;
- abonnement complexe ;
- annuaire mondial complet ;
- production massive de contenu SEO automatisé.

## 19. Prochaines décisions avant développement

1. Cartographie concurrentielle détaillée France + international.
2. Carte SEO initiale : thèmes, intentions, clusters et priorités.
3. Choix des 5 hubs et ~20 ressources V1.
4. Recherche et validation du nom et des domaines.
5. Validation du framework exact avec les documentations Cloudflare et Supabase actuelles.
6. Schéma de données V1 minimal mais extensible.
7. Design system et wireframes : accueil, bibliothèque, hub, fiche d’apprentissage.
8. Squelette du site et déploiement Cloudflare.
9. Supabase seulement pour les besoins réellement présents en V1.
10. Stripe et fournisseurs après validation éditoriale et produits pilotes.

## 20. Critères d’acceptation V1

- site public fonctionnel mobile/desktop ;
- mission comprise en quelques secondes ;
- possibilité de partir de zéro ou de choisir un objectif ;
- 5 hubs et ~20 ressources bien maillés ;
- charte qualité, sources et dates respectées ;
- sitemap, métadonnées, URLs propres et indexabilité ;
- performances et accessibilité de base satisfaisantes ;
- aucune obligation d’avoir l’e-commerce pour réussir la V1 ;
- possibilité d’ajouter progression, outils et commerce sans réécriture complète.
