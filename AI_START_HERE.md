# AI START HERE — Calis

Point d’entrée obligatoire de tout agent IA reprenant Calis. Ce fichier indexe les sources de vérité et impose la continuité ; il ne remplace pas les documents produit existants.

## 1. Démarrage obligatoire

Avant toute modification :
1. vérifier l’état réel de `main`, les changements récents et les issues/PR pertinentes ;
2. lire `README.md` ;
3. lire `docs/CAHIER_DES_CHARGES.md`, `docs/MASTER_PLAN.md` et `docs/PRODUCT_VISION.md` ;
4. lire `docs/HISTORIQUE_FONDATEUR_2026-08-30.md` pour comprendre les raisons des choix ;
5. selon la tâche, consulter les documents spécialisés : modèle de contenu, architecture de l’information, SEO/clusters, briefs, illustrations, cycle éditorial, recherche scientifique, roadmap ;
6. inspecter l’application réelle (`app/`, `components/`, `lib/`) avant de proposer une nouvelle structure.

## 2. Principes produit à préserver

Calis est un écosystème francophone de progression en callisthénie, pas un blog générique ni une boutique avant tout. La logique centrale relie désir humain, objectif, capacité, progression, compréhension et seulement ensuite équipement pertinent.

- Utilité, honnêteté et qualité avant volume ou vente.
- Ne jamais inventer expertise, expérience vécue, témoignage, validation professionnelle ou partenariat.
- Le commerce reste contextuel et peut légitimement conclure qu’aucun achat n’est nécessaire.
- Favoriser ressources evergreen, données structurées et maintenance ciblée plutôt qu’un travail humain quotidien.
- Ne pas introduire une infrastructure lourde uniquement parce qu’elle figure dans la vision long terme.
- Architecture progressive : enrichir ce qui fonctionne sans reconstruction inutile.

## 3. Protection de l’existant

- Ajouter/étendre avant de remplacer ou supprimer.
- Ne jamais retirer un contenu, parcours, composant ou fonctionnalité utile uniquement pour introduire une nouvelle idée.
- Avant une suppression, vérifier si la demande exige réellement un retrait.
- Rechercher les concepts existants avant de créer un doublon.
- Respecter le modèle éditorial, le maillage et les clusters existants.
- Pour les affirmations sportives/scientifiques importantes, distinguer preuve, consensus, incertitude et conseil pratique ; conserver les sources appropriées.

## 4. Carte documentaire

- Direction générale : `README.md`.
- Référence structurante : `docs/CAHIER_DES_CHARGES.md`.
- Trajectoire : `docs/MASTER_PLAN.md`, `docs/ROADMAP.md`, `docs/PRODUCT_VISION.md`.
- Raisonnement fondateur : `docs/HISTORIQUE_FONDATEUR_2026-08-30.md`.
- Contenu : `docs/CONTENT_MODEL.md`, `docs/CONTENT_BRIEFS_V1.md`, `docs/ADMIN_AND_CONTENT_LIFECYCLE.md`.
- SEO / parcours : documents de clusters et stratégie SEO dans `docs/`.
- Illustrations : `docs/ILLUSTRATION_SYSTEM.md`, `docs/ILLUSTRATION_SOURCES.md`.
- Produit réel : `app/`, `components/`, `lib/`, tests/build lorsqu’ils existent.

## 5. Méthode d’exécution

Inspection → intention utilisateur → recherche de l’existant → solution minimale cohérente → implémentation → validation/build → contrôle contenu/SEO/UX si concerné → indexation → passation.

Ne pas transformer une tâche ciblée en refonte générale. Réserver les questions utilisateur aux décisions réellement subjectives ou inaccessibles.

## 6. Indexation et mémoire

Calis doit conserver deux niveaux de mémoire : sources structurantes durables + historique de continuité. Une décision récente ne doit pas effacer silencieusement une intention fondatrice encore pertinente.

Classer les informations :
- règle produit durable → cahier des charges/document canonique ;
- stratégie éditoriale/SEO → document spécialisé ;
- comportement logiciel → code + validation/test ;
- tâche restante → issue/roadmap ;
- raisonnement historique → historique de continuité ;
- état de reprise → passation dédiée si nécessaire.

Éviter plusieurs documents prétendant être simultanément la même source de vérité.

## 7. Protocole obligatoire avant passation

1. vérifier l’état réel de `main`, build et issues/PR pertinentes ;
2. inventorier ce qui a été ajouté, modifié, validé ou abandonné ;
3. mettre les décisions durables dans leur document canonique ;
4. vérifier sitemap/maillage/modèle de contenu si de nouvelles ressources ou routes ont été ajoutées ;
5. vérifier que les sources scientifiques et attributions nécessaires sont conservées ;
6. rechercher contradictions et documentation obsolète ;
7. mettre à jour l’historique de continuité seulement pour ce qui mérite une mémoire historique ;
8. produire un état de reprise : FAIT ET VÉRIFIÉ / EN COURS / OUVERT / DÉCISIONS / PROCHAINE ÉTAPE / À NE PAS REFAIRE ;
9. relire comme si le prochain agent ignorait toute conversation antérieure.

## 8. Instruction courte pour une nouvelle conversation

> Consulte `AI_START_HERE.md`, suis son ordre de lecture et vérifie l’état réel du dépôt avant d’agir. Préserve l’intention fondatrice et l’architecture progressive de Calis. Avant toute passation, applique le protocole d’indexation afin qu’aucune décision importante ne reste uniquement dans la conversation.
