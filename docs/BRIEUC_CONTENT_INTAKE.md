# Calis — Intake de matière Brieuc Le Dantec

Date : 3 septembre 2026

## Statut de ce document

Ce fichier est un **inventaire de matière à traiter**, pas une source scientifique, pas une roadmap engagée et pas une nouvelle vérité produit.

La matière provient d'un document de travail du fondateur synthétisant de nombreux chapitres et contenus de Brieuc Le Dantec autour de la callisthénie, de l'entraînement, de la mobilité, de la récupération et de l'alimentation.

Règle : **matière source → affirmation isolée → vérification adaptée → décision produit → éventuelle intégration**.

Ne jamais copier une affirmation dans Calis uniquement parce qu'elle figure dans ce corpus.

## 1. Ce que ce corpus apporte surtout

La valeur principale n'est pas une liste supplémentaire d'exercices. Le corpus contient surtout des **principes de décision et de progression** potentiellement utiles au modèle Calis :

- ajuster la difficulté par l'angle, le levier, l'amplitude ou l'assistance ;
- utiliser une régression lorsque la variante courante ne permet plus une exécution propre ;
- distinguer apprentissage technique, force, volume et endurance ;
- organiser une séance autour de priorités et de la fatigue ;
- relier gainage, tirage, poussée, jambes et mobilité à des capacités réelles ;
- suivre les performances plutôt que s'entraîner au hasard ;
- préserver une logique de progression graduelle plutôt qu'un saut artificiel de niveau.

Ces thèmes sont compatibles avec la promesse Calis, mais ne doivent pas élargir la V1 avant stabilisation.

## 2. Backlog de traitement après V1 stable

### A. Difficulté observable d'une variante — priorité forte

Problème actuel : Calis sait compter des répétitions et des temps, mais ne mémorise pas encore certaines variables indispensables à une progression honnête, par exemple la hauteur d'un support de pompe inclinée ou l'angle d'un rowing.

Matière à explorer :

- hauteur de support ;
- angle / position d'appui ;
- amplitude choisie ;
- assistance utilisée ;
- variante exacte ;
- éventuellement lest lorsqu'il devient pertinent.

Objectif futur : permettre à Calis de comparer **la même difficulté** puis de recommander un changement lorsqu'il est réellement observable.

### B. Régression en cours de série — priorité forte

Hypothèse produit : lorsqu'une variante difficile ne permet plus une répétition propre, une prescription pourrait autoriser de terminer le volume avec une régression documentée.

À vérifier avant intégration :

- valeur pédagogique réelle ;
- critères d'arrêt technique ;
- situations où la méthode est pertinente ou inutile ;
- simplicité UX ;
- données nécessaires pour que le moteur ne prétende pas comprendre ce qu'il n'observe pas.

Destination possible : moteur de séance ou guide pédagogique, **pas V1 immédiate**.

### C. Core comme capacité transversale — priorité moyenne

Le corpus insiste fortement sur le rôle du tronc dans le transfert de force et le contrôle global.

Piste Calis : conserver le gainage comme fondation simple, puis étudier après V1 comment le contrôle du tronc peut être relié à certaines progressions sans inventer de diagnostic automatique.

À éviter : conclure qu'un blocage sur une traction, un handstand ou un muscle-up vient du core sans données suffisantes.

### D. Tirage post-première traction — priorité forte après V1

Le dépôt possède déjà le chemin canonique le plus riche côté tirage. Le corpus peut nourrir l'étape suivante :

- volume propre ;
- variations de prise lorsque pertinentes ;
- grip ;
- tirage explosif ;
- lest ;
- transition vers le muscle-up.

Chaque extension doit conserver la différence entre chemin pédagogique visible et automatisation réellement observable.

### E. Poussée verticale / handstand — priorité moyenne

Matière disponible : pike, pieds surélevés, mur, équilibre, négatives et HSPU.

Piste : mieux relier les familles de poussée et la verticalité sans faire croire que la progression est linéaire ou identique pour tous.

### F. Jambes — matière riche, modèle canonique absent

Le corpus fournit de nombreuses idées : squat, travail unilatéral, pistol squat, Cossack squat, fentes, chaîne postérieure, mollets, pliométrie, mobilité de cheville et de hanche.

Décision actuelle inchangée : **ne pas fabriquer un arbre Jambes uniquement pour obtenir une symétrie visuelle avec Traction et Pompes**. Une progression jambes doit d'abord être définie honnêtement et documentée.

### G. Échauffement contextuel — priorité moyenne

Piste future : prescrire un échauffement court selon le contenu réel de la séance plutôt qu'un bloc universel trop long.

Exemples de familles à étudier :

- tirage / scapulas / épaules ;
- poussée / poignets / épaules ;
- jambes / chevilles / hanches ;
- activation générale légère.

Ne pas transformer des routines personnelles ou des affirmations physiologiques non vérifiées en prescriptions universelles.

### H. Technique distincte du renforcement — priorité moyenne

Le corpus distingue plusieurs fois apprentissage moteur, travail de force et conditionnement.

Piste produit : un futur type de session « technique » pourrait avoir des règles différentes d'une séance de renforcement : faible fatigue, qualité d'exécution prioritaire, arrêt lorsque la précision se dégrade.

À définir seulement lorsque le besoin utilisateur et le modèle de données le justifient.

## 3. Familles d'affirmations à vérifier avec prudence

Le corpus contient aussi des affirmations qui ne doivent jamais entrer telles quelles dans Calis sans revue adaptée, notamment autour de :

- maladie et exercice ;
- sommeil et maintien d'intensité ;
- effets hormonaux supposés de certains formats ;
- froid et performance ;
- nutrition, jeûne et timing des glucides ;
- prévention ou rééducation des douleurs ;
- taux ou proportions de blessures prétendument évitables ;
- défis de volume extrême ;
- relations de causalité très affirmées entre un exercice et une adaptation biologique.

Pour ces sujets : distinguer expérience personnelle, hypothèse, consensus, preuve, incertitude et conseil de sécurité.

## 4. Workflow admin recommandé

Pour chaque idée issue du corpus :

1. créer une fiche dans `/admin/connaissances` ;
2. conserver la provenance ;
3. isoler **une affirmation ou un principe** à la fois ;
4. indiquer la valeur pratique possible ;
5. classer le risque ;
6. vérifier avec les sources adaptées si nécessaire ;
7. choisir une destination : bibliothèque, progression, moteur, blog, backlog admin ou rejet ;
8. écrire la décision produit et la prochaine action ;
9. seulement ensuite passer dans l'atelier blog ou ouvrir une modification du produit.

## 5. Ordre conseillé après la release V1

1. observer les premiers usages réels ;
2. traiter les défauts et incompréhensions observés ;
3. étudier la représentation de la difficulté réelle des variantes ;
4. approfondir le chemin Traction ;
5. tester la régression comme outil pédagogique avant toute automatisation ;
6. structurer ensuite les autres capacités selon les besoins réels ;
7. ne construire un backend admin dynamique que lorsque les déclencheurs documentés dans `ADMIN_AND_CONTENT_LIFECYCLE.md` existent réellement.

## 6. Règle de protection

Ce backlog ne doit jamais être utilisé comme justification pour retarder le gate V1 ou introduire simultanément toutes les idées du corpus.

**Le corpus augmente la réserve de connaissances de Calis ; il n'augmente pas automatiquement le périmètre de la prochaine release.**
