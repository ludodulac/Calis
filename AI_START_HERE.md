# AI START HERE — Calis

Point d’entrée obligatoire de tout agent IA reprenant Calis. Ce fichier indexe les sources de vérité et impose la continuité ; il ne remplace pas les documents produit existants.

## 1. Démarrage obligatoire

Avant toute modification :
1. vérifier l’état réel de `main`, les changements récents et les issues/PR pertinentes ;
2. lire `README.md` ;
3. lire `docs/CAHIER_DES_CHARGES.md`, `docs/MASTER_PLAN.md` et `docs/PRODUCT_VISION.md` ;
4. lire `docs/HISTORIQUE_FONDATEUR_2026-08-30.md` puis les historiques de continuité plus récents ;
5. lire `docs/PASSATION_ACTIVE.md` lorsqu’il existe : il décrit l’état de reprise opérationnel le plus récent ;
6. selon la tâche, consulter les documents spécialisés : modèle de contenu, architecture de l’information, SEO/clusters, briefs, illustrations, cycle éditorial, recherche scientifique, roadmap ;
7. inspecter l’application réelle (`app/`, `components/`, `lib/`) avant de proposer une nouvelle structure ;
8. vérifier la dernière CI de `main` avant de considérer l’état comme sain.

## 2. Principes produit à préserver

Calis est un écosystème francophone de progression en callisthénie, pas un blog générique ni une boutique avant tout. La logique centrale relie désir humain, objectif, capacité, progression, compréhension et seulement ensuite équipement pertinent.

- Utilité, honnêteté et qualité avant volume ou vente.
- Ne jamais inventer expertise, expérience vécue, témoignage, validation professionnelle ou partenariat.
- Le commerce reste contextuel et peut légitimement conclure qu’aucun achat n’est nécessaire.
- Favoriser ressources evergreen, données structurées et maintenance ciblée plutôt qu’un travail humain quotidien.
- Ne pas introduire une infrastructure lourde uniquement parce qu’elle figure dans la vision long terme.
- Architecture progressive : enrichir ce qui fonctionne sans reconstruction inutile.
- La sophistication du graphe, du SEO et du modèle doit rester derrière une interface très simple. Un non-initié doit pouvoir comprendre quoi faire sans apprendre le vocabulaire interne de Calis.
- Une idée du fondateur est un signal à évaluer : **idée ≠ décision ≠ priorité**.

## 3. Protection de l’existant

- Ajouter/étendre avant de remplacer ou supprimer.
- Ne jamais retirer un contenu, parcours, composant ou fonctionnalité utile uniquement pour introduire une nouvelle idée.
- Avant une suppression, vérifier si la demande exige réellement un retrait.
- Rechercher les concepts existants avant de créer un doublon.
- Respecter le modèle éditorial, le maillage et les clusters existants.
- Pour les affirmations sportives/scientifiques importantes, distinguer preuve, consensus, incertitude et conseil pratique ; conserver les sources appropriées.
- Pour une séquence visuelle complexe, ne jamais laisser une IA générative inventer seule la trajectoire : suivre `docs/VISUAL_TRUTH_WORKFLOW.md`.

## 4. Carte documentaire

- Direction générale : `README.md`.
- Référence structurante : `docs/CAHIER_DES_CHARGES.md`.
- Trajectoire : `docs/MASTER_PLAN.md`, `docs/ROADMAP.md`, `docs/PRODUCT_VISION.md`.
- Raisonnement fondateur : `docs/HISTORIQUE_FONDATEUR_2026-08-30.md`.
- Continuité récente : historiques `docs/HISTORIQUE_CONTINUITE_*.md`.
- État opérationnel de reprise : `docs/PASSATION_ACTIVE.md`.
- Contenu : `docs/CONTENT_MODEL.md`, `docs/CONTENT_BRIEFS_V1.md`, `docs/ADMIN_AND_CONTENT_LIFECYCLE.md`.
- SEO / parcours : `docs/SEO_UX_STRATEGY.md`, documents `SEO_CLUSTER_*` et `CLUSTER_*_STRATEGY.md`.
- Illustrations : `docs/ILLUSTRATION_SYSTEM.md`, `docs/ILLUSTRATION_SOURCES.md`, `docs/VISUAL_TRUTH_WORKFLOW.md`.
- Besoins/santé : documents de recherche dédiés dans `docs/`; ne pas transformer les signaux qualitatifs en preuves scientifiques.
- Architecture technique actuelle : `docs/TECHNICAL_ARCHITECTURE.md`.
- Produit réel : `app/`, `components/`, `lib/`, workflow GitHub Actions et site publié.

### Règle de priorité documentaire

Le cahier des charges conserve aussi des hypothèses historiques/cibles. Pour **l’état technique courant**, `docs/TECHNICAL_ARCHITECTURE.md`, le code et la CI réelle priment. Exemple : GitHub Pages est le déploiement V1 actuel même si Cloudflare apparaît encore comme cible possible dans des documents historiques.

## 5. Méthode d’exécution

Inspection → intention utilisateur → recherche de l’existant → solution minimale cohérente → implémentation → validation/build → contrôle contenu/SEO/UX si concerné → indexation → passation.

Ne pas transformer une tâche ciblée en refonte générale. Réserver les questions utilisateur aux décisions réellement subjectives ou inaccessibles.

## 6. Indexation et mémoire

Calis conserve deux niveaux de mémoire : sources structurantes durables + historique de continuité. Une décision récente ne doit pas effacer silencieusement une intention fondatrice encore pertinente.

Classer les informations :
- règle produit durable → cahier des charges/document canonique ;
- stratégie éditoriale/SEO → document spécialisé ;
- comportement logiciel → code + validation/test ;
- tâche restante → roadmap/issue/passation active ;
- raisonnement historique → historique de continuité ;
- état de reprise → `docs/PASSATION_ACTIVE.md`.

Éviter plusieurs documents prétendant être simultanément la même source de vérité. Si deux documents de recherche se chevauchent, les réconcilier additivement plutôt que supprimer des signaux/sources utiles.

## 7. Contrats éditoriaux récents à connaître

### Simplicité d’interface
Le visiteur doit pouvoir entrer par une phrase humaine : « je débute », « je veux réussir une traction », « je n’arrive pas à faire une pompe ». Ne pas exposer inutilement « hub », « cluster », « capacité », « régression » avant que ces notions aident réellement.

### Santé
Calis fournit des informations générales d’activité physique et d’apprentissage. Il ne diagnostique pas douleur/blessure/maladie et ne remplace pas un professionnel de santé. Les pages doivent distinguer effort attendu, difficulté et signaux inhabituels sans prétendre identifier leur cause.

### Vérité visuelle
Une image pédagogique est une affirmation technique. Mouvement complexe : référence réelle validée → images clés → représentation Calis → comparaison finale. Une génération photoréaliste crédible n’est pas une preuve biomécanique.

### Humain sans simulation
Créditer les vraies personnes quand elles contribuent ; ne jamais simuler auteur, coach, test, communauté, expérience vécue ou partenariat.

## 8. Protocole obligatoire avant passation

1. vérifier l’état réel de `main`, build/CI et issues/PR pertinentes ;
2. inventorier ce qui a été ajouté, modifié, validé ou abandonné ;
3. mettre les décisions durables dans leur document canonique ;
4. vérifier sitemap/maillage/modèle de contenu si de nouvelles ressources ou routes ont été ajoutées ;
5. vérifier que les sources scientifiques et attributions nécessaires sont conservées ;
6. rechercher contradictions et documentation obsolète ;
7. mettre à jour l’historique de continuité seulement pour ce qui mérite une mémoire historique ;
8. mettre à jour `docs/PASSATION_ACTIVE.md` avec : FAIT ET VÉRIFIÉ / EN COURS / OUVERT / DÉCISIONS / LIMITATIONS / PROCHAINE ÉTAPE / À NE PAS REFAIRE ;
9. vérifier que la dernière CI de `main` est verte ; si elle ne l’est pas, corriger ou déclarer explicitement le blocage ;
10. relire comme si le prochain agent ignorait toute conversation antérieure.

## 9. Instruction courte pour une nouvelle conversation

> Lis `AI_START_HERE.md`, vérifie l'état réel de `main` et reprends le projet.
