# Vision produit

## Mission

Construire progressivement une bibliothèque vivante de la callisthénie francophone qui aide chacun à comprendre son corps, apprendre des mouvements et développer ses capacités.

Le commerce doit soutenir cette mission, pas la remplacer.

## Public

La plateforme est conçue dès l'origine pour les femmes et les hommes, sans séparer artificiellement les parcours. Les recommandations dépendent d'abord du niveau, des capacités, des objectifs et du matériel disponible.

Une attention particulière est portée aux personnes qui partent de zéro : première pompe, première suspension, première traction, mobilité de base et découverte du mouvement.

## Philosophie

Le projet s'inspire d'une vision de la callisthénie centrée sur l'apprentissage du corps et la progression des capacités. La transformation esthétique peut être une conséquence de la pratique, mais elle n'est pas la promesse centrale.

Principes éditoriaux :

- comprendre avant d'exécuter ;
- essayer et ressentir ;
- maîtriser avant de complexifier ;
- progresser par étapes mesurables ;
- ne pas inventer un besoin matériel ;
- signaler clairement les limites et les sujets nécessitant un professionnel qualifié ;
- citer les sources importantes et distinguer faits, expérience et opinion.

## Boucle produit centrale

Calis ne doit pas seulement savoir répondre à « où est-ce que je bloque ? ». Le fonctionnement central visé est :

**diagnostic → programme → séance → mesure → décision → prochaine étape**.

La phrase produit à protéger est : **« Calis sait où j'en suis et sait quelle est ma prochaine étape. »**

Le graphe de progression décrit les chemins possibles. La couche d'entraînement ajoute le temps : aujourd'hui, cette semaine, ce cycle et depuis la dernière progression. Une progression n'est donc pas un programme : un programme doit dire quoi faire maintenant, avec quel volume, quel repos, quel critère de réussite et quelle adaptation si le résultat réel diffère du scénario prévu.

La récompense n'est pas une monnaie, un badge ou une streak artificielle. La récompense est une capacité réelle devenue plus solide ou nouvellement acquise.

### Automatisation honnête

Une étape peut exister dans le graphe sans être automatisable. Calis ne doit déclencher automatiquement une progression que lorsque **la prochaine étape est documentée et que le critère nécessaire est réellement observable dans les données stockées**.

Si un réglage déterminant n'est pas mémorisé — par exemple hauteur d'un support, angle d'un rowing, charge précise ou assistance réglée — le moteur ne doit pas faire semblant de connaître ce réglage. Dans ce cas, il peut valider une base, expliquer la limite et laisser la progression manuelle ou la future instrumentation prendre le relais.

## Frontière de la première V1 stable

La V1 n'a pas besoin de couvrir toute la callisthénie. Elle doit couvrir une petite promesse de manière cohérente et fiable : permettre à un débutant de choisir un objectif, trouver son point de départ, faire ses séances Fondations, enregistrer ses résultats et comprendre sa prochaine étape.

**Règle de gel : une nouvelle capacité ne doit pas retarder la V1 sauf si son absence empêche réellement un débutant d'utiliser le parcours existant.**

Avant la release, la priorité est donc la stabilité de bout en bout, la vérité pédagogique des prescriptions, la cohérence entre bibliothèque et moteur, la résilience locale, la production et la compréhension sans assistance. Les extensions comme L-sit, HSPU, pistol squat, front lever, périodisation avancée, comptes ou synchronisation appartiennent à l'après-V1.

Une V1 stable doit pouvoir être utilisée sans le fondateur à côté de la personne. Le test central est : **« Est-ce que la personne sait quoi faire maintenant, pourquoi elle le fait et ce qui vient ensuite ? »**

## Simplicité de l'expérience

La profondeur de Calis doit être dans le système, pas imposée au visiteur. Une personne qui ne connaît ni la callisthénie ni son vocabulaire doit pouvoir comprendre rapidement ce qu'elle peut faire sur le site.

Test de conception : l'entrée principale doit rester compréhensible par un enfant d'environ 11 ans, une personne âgée peu familière de ce type de site ou une personne ayant des difficultés motrices ou cognitives. Les premiers choix utilisent donc des formulations humaines et concrètes — « je débute », « traction », « pompes », « équilibre » — avant d'exposer des notions techniques.

Cela ne signifie pas appauvrir les ressources. Les détails, la biomécanique, les sources, le graphe de progression et les critères restent disponibles après que le visiteur a choisi ce qu'il veut faire.

### Cadre de conception

Calis combine quatre disciplines complémentaires : **Content Design + Progressive Disclosure + UX Writing + faible charge cognitive**.

Concrètement : partir du besoin réel de la personne, montrer d'abord uniquement ce qui lui permet d'agir maintenant, écrire avec ses mots plutôt qu'avec le vocabulaire interne du produit, puis révéler les explications et options secondaires seulement lorsqu'elles deviennent utiles. La simplicité ne vient donc pas d'une suppression arbitraire de contenu, mais de son placement au bon niveau du parcours.

### Principes d'interface

Calis doit reprendre l'efficacité ergonomique des meilleures interfaces mobiles sans reprendre leurs mécanismes de manipulation :

- un écran de décision = une intention principale ;
- sur un écran de décision, le titre pose la question et les choix portent la réponse ; toute explication non nécessaire à cette décision vient après le choix ou derrière une ouverture volontaire ;
- un écran de décision mobile ne doit pas défiler : les choix principaux tiennent dans le cadre disponible ;
- les informations secondaires ne doivent pas allonger l'écran de décision : une petite commande dédiée peut les ouvrir dans une couche temporaire au-dessus de l'écran ; si ce contenu est long, c'est cette couche qui défile, pas l'écran principal ;
- sur ces écrans, éviter les accordéons qui agrandissent la page : préférer une logique de panneau ou fenêtre modale comme dans une interface mobile de jeu, avec retour immédiat à l'état précédent à la fermeture ;
- le visuel porte d'abord le sens, le texte court le confirme ;
- une action = une idée, jamais un paragraphe transformé en bouton ;
- grandes cibles tactiles et navigation primaire courte, utilisables au pouce ;
- l'action principale apparaît tôt dans le viewport ;
- sur téléphone, le cadre de l'application reste fixe : en-tête et navigation ne défilent pas avec le document ; seul le contenu central défile lorsqu'il dépasse l'espace disponible ;
- une page courte doit tenir dans ce cadre sans donner l'impression de faire défiler un site ; un article long peut défiler à l'intérieur de la zone de contenu ;
- la complexité est révélée après le choix plutôt qu'empilée avant ;
- l'état et la progression sont montrés visuellement lorsqu'un long texte n'est pas nécessaire ;
- simplifier la présentation ne signifie pas supprimer les capacités du produit : les fonctions secondaires restent accessibles à leur niveau logique.

Les jeux mobiles peuvent servir de référence pour la hiérarchie visuelle, la réactivité et la navigation compacte. Calis reste cependant un outil honnête : pas de monnaie artificielle, streak, urgence fabriquée, badge parasite, fausse progression ou récompense fictive.

## Mesure du produit

Le trafic SEO est un canal d'acquisition, pas la preuve principale de la valeur de Calis. Le funnel à suivre progressivement est :

**visiteur → objectif choisi → diagnostic terminé → première séance commencée → première séance terminée → deuxième séance → première décision utile → première progression réelle**.

Les mesures doivent rester proportionnées au stade du produit et ne justifient pas à elles seules un backend lourd avant qu'il soit nécessaire.

## Modèle à long terme

### Bibliothèque
Fiches structurées d'exercices, figures, capacités, méthodes et connaissances.

### Graphe de progression
Chaque capacité peut avoir des prérequis, régressions, progressions et étapes suivantes.

### Entraînement
Programmes, séances, prescriptions, critères d'adaptation et historique de résultats transforment le graphe en moteur de pratique. La première V1 peut rester locale au navigateur ; les comptes et la synchronisation viennent seulement lorsqu'ils apportent une vraie valeur.

### Outils
Tests de niveau, calculateurs et diagnostics doivent alimenter la même boucle d'entraînement, pas créer des systèmes parallèles.

### Équipement
Guides et comparatifs indépendants, affiliation pertinente et boutique spécialisée. Un guide peut explicitement conclure qu'aucun achat n'est nécessaire.

### Écosystème
À terme : coachs, clubs, parcs, associations, événements, experts et partenaires.

## Alimentation après la V1

Une fois la V1 stable matérialisée par une release/tag, le socle doit devenir relativement calme. Les nouvelles capacités entrent par clusters cohérents : besoin utilisateur → ressource canonique → contenus/exercices liés → progression documentée → prescription exécutable → intégration éventuelle dans `Aujourd'hui`.

Cette discipline évite de remplir une encyclopédie avant d'avoir des utilisateurs et permet à chaque nouveau contenu d'alimenter réellement le graphe pédagogique.

## Modèle économique envisagé

Le projet pourra combiner progressivement :

- vente de matériel sélectionné ;
- affiliation transparente ;
- programmes premium ;
- fonctionnalités premium éventuelles ;
- partenariats clairement identifiés ;
- mises en relation pertinentes avec des professionnels.

Aucune de ces sources de revenus ne doit dégrader l'indépendance éditoriale.

### Principe commercial durable

L'ordre doit rester : **besoin détecté → explication → options → achat éventuel**.

L'affiliation est une conséquence possible du graphe pédagogique, pas une raison de créer un besoin. Calis explique d'abord si du matériel est réellement utile, présente les alternatives et peut conclure qu'aucun achat n'est nécessaire. Les recommandations rémunérées doivent être identifiables et ne jamais modifier artificiellement une progression pour augmenter les opportunités commerciales.
