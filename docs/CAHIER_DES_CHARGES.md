# CALIS — Cahier des charges

Version initiale — 29 août 2026

> **Principe directeur :** Calis doit devenir utile avant de devenir gros, crédible avant de devenir commercial, et extensible avant de devenir complexe.

## 1. Résumé exécutif

Calis est conçu comme une plateforme francophone de référence autour de la callisthénie. Le projet ne doit pas être pensé comme une simple boutique de dropshipping ni comme un blog chronologique : son cœur est une bibliothèque structurée qui aide les personnes à comprendre leur corps, apprendre des mouvements, développer leurs capacités et progresser par étapes.

Mais l'utilité seule ne suffit pas. Calis doit aussi donner envie. Une personne qui ne connaît rien à la callisthénie ne vient pas forcément en pensant « je dois développer ma capacité de tirage ». Elle peut vouloir se sentir plus forte, retrouver confiance dans son corps, réussir enfin une traction, apprendre une figure qui lui semblait impossible, construire un physique athlétique, bouger plus librement ou simplement être fière de ce que son corps sait faire. La plateforme doit accueillir ce désir, puis le traduire en capacités, apprentissages et étapes réalistes.

Le projet doit démarrer avec un coût très faible puis grossir sans reconstruction majeure. La monétisation arrive progressivement par la vente de matériel réellement utile, l’affiliation transparente, des programmes premium, des outils/fonctionnalités premium éventuels et des partenariats clairement identifiés.

Architecture cible : GitHub pour le code et l’historique, Cloudflare pour le déploiement et l’infrastructure web, Supabase pour les données et fonctionnalités applicatives, Stripe pour les paiements. Les intégrations fournisseurs seront validées avant automatisation.

## 2. Vision, mission et philosophie

### Mission
Construire une bibliothèque vivante de la callisthénie francophone qui donne des informations fiables, compréhensibles et actionnables, donne envie de découvrir ce dont son corps est capable et montre à chacun un chemin de progression adapté à ses capacités.

### Promesse
**Apprendre son corps. Développer ses capacités. Progresser à son rythme.**

### Transformation recherchée
Calis doit créer une boucle simple : **désirer → essayer → comprendre → ressentir → réussir → avoir envie d'aller plus loin**.

Le visiteur ne doit pas seulement repartir avec une information. Il doit pouvoir se dire : « ça me paraît possible », puis savoir exactement quelle petite étape essayer.

### Principes
- La capacité et la maîtrise du corps passent avant l’apparence, sans nier que l'envie d'un physique athlétique peut être une motivation réelle et légitime.
- Comprendre avant d’exécuter ; essayer, ressentir, maîtriser puis complexifier.
- La progression doit être graduelle, mesurable et accessible aux personnes qui partent de zéro.
- Montrer le possible sans intimider : une figure avancée peut créer le désir, à condition de rendre immédiatement visible le chemin qui y mène.
- Le matériel n’est recommandé que lorsqu’il apporte une utilité réelle.
- Un contenu peut conclure honnêtement qu’aucun achat n’est nécessaire.
- Les sujets de santé, douleur et blessure doivent être bornés et renvoyer vers des professionnels qualifiés lorsque nécessaire.
- Le projet peut être inspiré par la philosophie publique de pratiquants/auteurs, notamment Brieuc Le Dantec, sans jamais laisser entendre une approbation ou un partenariat sans accord explicite.

## 3. Public cible, désirs et inclusivité

Calis doit plaire autant aux femmes qu’aux hommes. Les parcours sont définis d’abord par les capacités, le niveau, les objectifs, les motivations et le matériel disponible, et non par une séparation artificielle homme/femme.

Publics :
- débutants complets : première pompe, suspension, traction, squat, mobilité ;
- intermédiaires : volume, technique, premières figures, surcharge progressive ;
- avancés : muscle-up, handstand, front lever, planche, streetlifting ;
- personnes pratiquant à domicile, dehors ou avec peu de matériel.

### Désirs humains à servir
La plateforme doit savoir reconnaître et utiliser, sans manipulation, plusieurs motivations qui peuvent se combiner :
- me sentir fort ou forte dans mon propre corps ;
- réussir quelque chose que je pensais inaccessible ;
- être fier ou fière d'une capacité acquise ;
- construire un physique athlétique et fonctionnel ;
- apprendre une figure impressionnante ;
- retrouver de la mobilité et me sentir moins limité dans mes mouvements ;
- reprendre une activité sans me sentir jugé ou hors niveau ;
- voir des progrès concrets et mesurables ;
- pratiquer avec peu de matériel, chez moi ou dehors ;
- mieux connaître mon corps et gagner en autonomie ;
- partager une pratique, un défi ou une progression avec d'autres personnes.

Ces désirs ne remplacent pas la navigation par capacités. Ils constituent la porte d'entrée émotionnelle ; Calis transforme ensuite le désir en objectif, l'objectif en capacités, et les capacités en prochaines étapes.

Les contenus spécifiques au sexe ou à une situation particulière ne sont créés que lorsqu’une différence est réellement pertinente et documentée.

## 4. Positionnement différenciant

Calis doit être un **atlas d’apprentissage et de progression qui donne envie d'agir**, pas une usine à articles SEO.

La différenciation vient de l’assemblage cohérent de :
- bibliothèque structurée et filtrable ;
- graphe de progression ;
- entrées par désir, objectif, niveau et capacité ;
- explications de biomécanique et de sensations ;
- visualisation du chemin entre « je n'y arrive pas » et « je sais le faire » ;
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

### Navigation par désir / résultat recherché
Le langage visible doit pouvoir partir du résultat que la personne imagine :
- « Je veux réussir ma première traction » ;
- « Je veux enfin faire de vraies pompes » ;
- « Je veux tenir sur les mains » ;
- « Je veux me sentir plus fort » ;
- « Je veux un corps plus athlétique » ;
- « Je veux bouger plus librement » ;
- « Je veux apprendre une figure » ;
- « Je ne sais pas encore ce que je peux faire ».

Chaque entrée doit déboucher rapidement sur un premier test ou une première action accessible.

### Hubs prioritaires
Traction, pompes, dips, muscle-up, handstand, front lever, back lever, planche, human flag, L-sit.

Un hub est un dossier complet : désir associé, résultat visible, guide, prérequis, technique, erreurs, régressions, progressions, programmes, questions connexes et matériel pertinent.

## 6. Modèle éditorial

### Fiche d’apprentissage type
1. Le résultat désiré : ce que cette capacité rend possible.
2. Définition de la capacité ou du mouvement.
3. Pourquoi l’apprendre.
4. Prérequis.
5. Test de départ.
6. Première action réalisable aujourd'hui.
7. Technique.
8. Ce que l’on doit ressentir.
9. Ce que l’on ne devrait pas ressentir / signaux d’alerte.
10. Erreurs fréquentes.
11. Régressions.
12. Progressions.
13. Critères pour passer à l’étape suivante.
14. Variantes.
15. Matériel nécessaire, facultatif ou inutile.
16. « Ce que tu débloques ensuite » pour matérialiser la progression et entretenir le désir.
17. Ressources liées.
18. Sources, date de mise à jour et relecteurs éventuels.

### Charte qualité
- Une intention humaine précise avant un mot-clé.
- Chaque page doit répondre à la fois à « pourquoi j'en ai envie ? », « qu'est-ce que je fais maintenant ? » et « comment saurai-je que je progresse ? » lorsque ces questions sont pertinentes.
- Ne pas transformer la motivation en promesse irréaliste, comparaison corporelle anxiogène ou culpabilisation.
- Montrer des personnes et niveaux auxquels le débutant peut s'identifier autant que des capacités qui donnent envie.
- Pas de publication massive automatisée sans valeur ajoutée.
- Ajouter tableaux, tests, critères, sources, exemples, comparaisons, illustrations ou outils lorsque pertinent.
- Auteur, mise à jour, sources et relecture experte clairement identifiables.
- Distinguer faits, expérience, opinion, affiliation et sponsoring.
- Ne pas recopier les descriptions fournisseurs ou concurrentes.
- Prévoir des mises à jour des ressources importantes.

## 7. Expérience : la machine à envie et à progression

L'expérience cible doit fonctionner même pour une personne qui ne connaît aucun nom d'exercice.

### Boucle principale
1. **Projeter** — montrer une capacité ou transformation désirable et crédible.
2. **Se situer** — test simple, question ou choix permettant de partir de son niveau réel.
3. **Agir maintenant** — proposer une étape faisable immédiatement.
4. **Comprendre et ressentir** — expliquer les repères qui permettent d'apprendre, pas seulement d'exécuter.
5. **Constater un progrès** — rendre visible une amélioration, même avant la réussite finale.
6. **Débloquer la suite** — montrer ce que cette nouvelle capacité permet d'apprendre ensuite.
7. **Revenir** — à terme, mémoriser l'étape atteinte, suggérer la suivante et permettre de suivre le chemin parcouru.

### Règle de conception
Une page ne doit pas seulement être correcte. Elle doit réduire la distance psychologique entre « ce n'est pas pour moi » et « je peux essayer ça aujourd'hui ».

### Rôle des illustrations
Les illustrations pédagogiques font partie du produit, pas de la décoration. Elles doivent :
- rendre une position ou une trajectoire compréhensible plus vite ;
- montrer la différence entre deux étapes lorsque le texte seul est ambigu ;
- rendre les progressions désirables sans transformer le site en galerie de physiques irréalistes ;
- représenter naturellement femmes et hommes, débutants et pratiquants avancés ;
- suivre le système graphique Calis défini dans `docs/ILLUSTRATION_SYSTEM.md`.

## 8. Stratégie SEO

Le SEO repose sur des clusters thématiques et un maillage utile, pas sur un flux chronologique.

La recherche SEO doit distinguer le vocabulaire technique du vocabulaire réel du public. Les pages peuvent répondre à des formulations comme « je n'arrive pas à faire une pompe », « comment réussir une traction », « apprendre à tenir sur les mains », « devenir plus fort au poids du corps » ou « commencer le sport chez soi », puis traduire cette intention vers le bon parcours Calis.

Exemple de cluster Traction : guide complet, première traction, prises, lest, augmentation des répétitions, explosivité, traction à un bras, blocages, bandes d’assistance, barre de traction, programmes 1/10/20 tractions.

Maillage cible :

`désir / question → test → concept → exercice → progression → programme → équipement pertinent`

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

## 9. Fonctionnalités et phases

### V1 — Bibliothèque légère et désirable
- accueil ;
- bibliothèque filtrable ;
- navigation par désir, objectif, niveau et capacité ;
- 5 hubs majeurs ;
- environ 20 ressources de haute qualité ;
- premières fiches d’exercices et progressions ;
- recherche simple ;
- premières illustrations pédagogiques Calis ;
- pages méthodologie, sources et transparence ;
- SEO technique complet.

### V2 — Progression
- graphe de progression ;
- tests de niveau ;
- parcours première pompe / première traction / premiers dips ;
- premiers outils interactifs ;
- suivi simple de « où j'en suis » et « ce que je débloque ensuite » ;
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

## 10. Commerce et catalogue initial

Priorité forte : bandes de résistance, anneaux bois, parallettes, ceinture de lest, wrist wraps/grips. Ab wheel ensuite. Les barres de porte nécessitent un contrôle sécurité renforcé. Les gilets lestés sont à privilégier avec logistique européenne. Les grosses stations ne sont pas prioritaires.

Bundles envisagés : Première traction, Starter, Skills, Streetlifting et Home Gym.

### Multi-fournisseurs
Un produit Calis doit être distinct d’une offre fournisseur. Un même produit commercial doit pouvoir être associé à plusieurs offres afin de comparer coût, délai, disponibilité, qualité et pays d’expédition.

## 11. Modèle économique

Le modèle économique suit la confiance et la progression de l'utilisateur. Calis ne doit pas forcer la monétisation avant d'avoir créé de la valeur.

### Revenus envisagés
- **affiliation transparente** : recommander un équipement externe pertinent lorsqu'il répond réellement au besoin ;
- **vente directe de matériel sélectionné** : produits simples et cohérents avec les parcours, éventuellement regroupés en bundles ;
- **programmes premium** : parcours plus structurés ou spécialisés lorsque la bibliothèque gratuite a déjà permis de progresser ;
- **fonctionnalités premium éventuelles** : personnalisation, suivi avancé ou outils dont l'utilité est démontrée ;
- **partenariats clairement signalés** avec marques, experts, événements ou acteurs de l'écosystème ;
- **mise en relation avec professionnels/structures** à terme ;
- **newsletter et audience propriétaire** comme actif de fidélisation, sans dépendre uniquement des plateformes sociales ou du SEO.

### Logique de conversion
`contenu gratuit utile → progression réelle → confiance → besoin identifié → recommandation pertinente → achat ou offre premium éventuelle`

Le commerce ne doit jamais inventer le besoin. Une fiche peut recommander zéro produit. À l'inverse, lorsqu'un matériel débloque réellement une étape — barre, anneaux, bande, parallettes, lest — la recommandation devient naturelle parce qu'elle apparaît exactement au moment du besoin.

Les revenus ne doivent pas dégrader l’indépendance éditoriale.

## 12. Architecture technique cible

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

## 13. Modèle de données conceptuel

Entités principales : Resource, Exercise, Skill, ProgressionEdge, Program, Equipment, Product, SupplierOffer, Order, Source, Expert/Partner et, plus tard, Place.

Le graphe `ProgressionEdge` relie les capacités entre elles : prérequis, régression, progression et étape suivante.

À terme, le modèle de parcours devra également pouvoir mémoriser une motivation ou un objectif utilisateur sans la confondre avec une capacité technique : le « pourquoi » oriente l'expérience, le graphe décrit le « comment ».

## 14. Identité et naming

Le nom final doit contenir ou évoquer clairement « calisthenie » tout en restant distinct des acteurs existants. Pistes de travail : Calisthenie Atlas, Calisthenie Libre, Calisthenie Mouvement, Calisthenie Progress, etc.

Avant validation : domaines .fr/.com, marques FR/UE, sociétés, réseaux sociaux et proximité phonétique.

`Calis` reste le nom du dépôt et nom de travail tant que cette validation n’est pas terminée.

### Direction visuelle
- sobre, contemporaine, humaine et technique ;
- ni hypermasculine agressive ni artificiellement féminisée ;
- femmes et hommes représentés naturellement ;
- débutants et avancés ;
- mouvement, contrôle, progression et liberté avant l’esthétique ;
- suffisamment aspirationnelle pour donner envie, suffisamment réaliste pour permettre l'identification.

## 15. Partenariats et écosystème

Coachs, clubs, associations, professionnels compétents pour relecture, compétiteurs, créateurs spécialisés, fabricants et organisateurs d’événements.

Un expert ou partenaire ne doit jamais être présenté comme cautionnant Calis sans accord explicite. Les liens externes doivent servir le lecteur même lorsqu’ils ne génèrent aucun revenu.

## 16. Conformité, confiance et risques

- RGPD et minimisation des données ;
- CGV, mentions légales, confidentialité, cookies et retours lors de l’activation e-commerce ;
- conformité et sécurité des produits UE ;
- traçabilité fournisseurs/produits ;
- contrôle qualité renforcé pour les équipements pouvant provoquer une chute ;
- pas de scraping ou automatisation fournisseur non autorisée ;
- limites claires sur les contenus santé ;
- affiliation et sponsoring signalés ;
- respect du droit d’auteur et médias originaux/licenciés.

## 17. Performance et qualité

- mobile-first ;
- chargement rapide ;
- accessibilité : sémantique, clavier, contrastes, labels, alternatives textuelles ;
- URLs/pages stables ;
- tests automatisés des fonctions critiques ;
- environnements distincts lorsque le projet devient transactionnel ;
- monitoring ;
- sauvegardes et restauration.

## 18. Mesure du succès

### V1
Indexation, impressions et clics SEO, navigation vers les ressources liées, qualité d’engagement, clics vers une première action et poursuite vers l'étape suivante.

### V2
Utilisation des tests/outils, visiteurs récurrents, progression dans les parcours, étapes déclarées comme acquises et retour vers un objectif commencé.

### V3
Conversion guides→produits lorsque le matériel est pertinent, panier moyen, marge contributive, retours et satisfaction ; conversion vers les offres premium sans dégrader l'usage gratuit.

### V4/V5
Utilisateurs récurrents, éventuels abonnements, partenaires, contributions et couverture de l’écosystème.

## 19. Hors périmètre initial

- application mobile native ;
- réseau social interne complet ;
- centaines de produits ;
- automatisation AliExpress totale dès le lancement ;
- gros stock propre ;
- abonnement complexe ;
- annuaire mondial complet ;
- production massive de contenu SEO automatisé.

## 20. Prochaines décisions et ordre de construction

L'ordre doit maximiser l'envie et l'utilité avant la complexité :

1. Stabiliser la proposition de valeur : désir → capacité → progression.
2. Faire de l'accueil et de « Je pars de zéro » des portes d'entrée compréhensibles sans vocabulaire technique.
3. Finaliser les hubs et fiches fondamentales avec première action, sensations et « ce que tu débloques ensuite ».
4. Produire et intégrer les premières illustrations pédagogiques Calis sur les mouvements où elles apportent une vraie compréhension.
5. Consolider la bibliothèque, recherche, filtres et maillage.
6. Ajouter les premiers tests de niveau et visualisations de progression.
7. Recherche et validation du nom et des domaines.
8. Validation du framework exact avec les documentations Cloudflare et Supabase actuelles lorsque ces briques deviennent nécessaires.
9. Supabase seulement pour les besoins réellement présents : suivi, compte ou données dynamiques.
10. Tester la monétisation d'abord par recommandations pertinentes et affiliation, puis produits/bundles et premium lorsque la confiance et l'audience existent.

## 21. Critères d’acceptation V1

- site public fonctionnel mobile/desktop ;
- mission et désir compris en quelques secondes ;
- une personne sans vocabulaire de callisthénie trouve une entrée qui lui parle ;
- possibilité de partir de zéro ou de choisir un résultat désiré ;
- chaque parcours prioritaire propose une première action réaliste ;
- 5 hubs et ~20 ressources bien maillés ;
- premières illustrations pédagogiques cohérentes avec l'identité Calis ;
- charte qualité, sources et dates respectées ;
- sitemap, métadonnées, URLs propres et indexabilité ;
- performances et accessibilité de base satisfaisantes ;
- aucune obligation d’avoir l’e-commerce pour réussir la V1 ;
- possibilité d’ajouter progression, outils et commerce sans réécriture complète.
