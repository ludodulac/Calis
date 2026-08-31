# Historique de continuité — chemins, audit produit et veille visuelle — 31 août 2026

Ce document conserve le raisonnement et les changements structurants de la session du 31 août 2026. L'état opérationnel courant reste `docs/PASSATION_ACTIVE.md`.

## Cap produit confirmé

Calis ne doit pas être reconstruit comme une copie de THENX, Caliverse, Hybrid ou d'une app à skill tree. La différenciation utile est : entrée par le désir humain, diagnostic de la situation actuelle, chemin explicite, critère de passage et prochaine étape. Le H1 d'accueil `Qu'est-ce que tu aimerais réussir avec ton corps ?` est conservé.

Le benchmark concurrentiel a montré qu'un skill tree n'est plus différenciant en soi. Les acteurs efficaces combinent plutôt destination humaine visible, promesse courte, prochaine action évidente et progression matérialisée. La décision visuelle durable est donc : **photo humaine forte pour donner envie → chemin/métadonnées réelles pour décider → illustration techniquement validée pour apprendre**. Voir `docs/VEILLE_VISUELLE_EDITORIALE_2026-08-31.md` et `docs/PHOTO_SOURCES_HOMEPAGE.md`.

## Chemins et modèle

Trois chemins canoniques existent désormais : traction (7 étapes), pompe (3 étapes) et handstand (3 étapes). Le handstand a reçu la ressource distincte `premiers-equilibres-handstand`, fondée prudemment sur la revue systématique McDonald et al. 2025 sans transformer les données de gymnastes en règle universelle débutant. Le composant partagé `ProgressionPath` rend les modèles canoniques définis dans `lib/content/v1.ts`.

Les cartes d'objectif de l'accueil tirent désormais leurs nombres d'étapes des modèles réels pour traction/pompe/handstand. Les autres cartes n'inventent pas de parcours : muscle-up annonce un diagnostic par maillon ; jambes et mobilité un point de départ. Les CTA ont été rendus honnêtes en conséquence.

## Audits et corrections UX/structure

- Bibliothèque raccourcie et réordonnée pour rendre le graphe visible avant le catalogue ; exploration libre limitée initialement à 9 ressources, filtres/recherche exhaustifs.
- `<main>` imbriqués supprimés sur bibliothèque et muscle-up.
- Métadonnées `ResourceCard` traduites en français.
- Overlay générique `bonne position / à corriger` désactivé lorsqu'une vraie image est fournie, car pompe et squat montrent des phases valides et non un couple bon/mauvais.
- `ProgressionPath` possède un rôle de groupe accessible ; focus global visible et structure clavier conservés.
- Audit d'artefact après ces corrections : 39 HTML, 427 liens internes contrôlés, aucun problème structurel/lien détecté ; toutes les vraies pages sont atteignables depuis l'accueil.
- Contrastes principaux vérifiés et suffisants ; pas de correction palette nécessaire.

## Vérité visuelle

Le SVG de contrôle scapulaire a été ré-audité et retiré de la page : sa géométrie pouvait faire croire à un changement de longueur des bras. La décision canonique est dans `docs/VALIDATION_VISUELLE_CONTROLE_SCAPULAIRE.md` : pas de réintégration avant deux keyframes modernes comparables et validation mains/coudes/tronc/absence d'élan. Une image absente est préférable à une biomécanique ambiguë.

Le registre historique `docs/ILLUSTRATION_SOURCES.md` contient encore des couches de recherche anciennes ; lorsqu'un statut ancien contredit la validation dédiée, la validation dédiée datée la plus récente fait foi. À la prochaine maintenance du registre, conserver l'historique mais marquer explicitement l'ancien statut scapulaire comme supersédé.

## Veille visuelle et photos d'accueil

PR #29 a ajouté la veille visuelle/éditoriale ; PR #30 le registre de sourcing photo. Six fichiers ont ensuite été fournis par l'utilisateur et inspectés. Quatre candidats sont exploitables pour prototype aspirationnel : Pexels 4803675 traction, 4803733 pompe, 8038575 handstand, 4803687 muscle-up. Deux ont été rejetés après inspection réelle : 4803862 montre un pistol squat trop avancé pour la carte jambes débutant ; 4426394 porte `KEEP GOING` de manière trop dominante pour la carte mobilité.

Les fichiers binaires fournis dans le chat ne sont pas dans le dépôt. Ne pas supposer qu'ils seront disponibles à la reprise. L'issue #31 décrit le re-sourcing, le stockage local, les crops et l'intégration. Ne jamais hotlinker Pexels en production et ne jamais présenter ces personnes comme utilisateurs/athlètes/ambassadeurs Calis.

## Lots fusionnés pendant la session

Après les chemins initiaux (#9–#21), les refinements importants ont été : PR #22 passation, #23 métadonnées réelles des objectifs, #24 labels ResourceCard français, #25 suppression de l'overlay comparatif trompeur, #26 CTA d'objectifs honnêtes, #27 sémantique accessible du chemin, #29 benchmark visuel/éditorial, #30 registre photo. La CI Pages est restée verte jusqu'au run #155 sur le commit `c30e1443544f8781a63c44e50b320f8ba27a90ec` avant la passation finale.

## À ne pas déduire de cette session

- Aucune identité graphique définitive/logo n'a été décidée.
- Aucune photo n'est encore intégrée en production.
- Les photos aspirationnelles ne sont pas des références techniques.
- Aucun nouveau chemin Dips ou Muscle-up n'est justifié par simple symétrie.
- Aucun compte, streak, progression personnelle ou communauté simulée n'est prévu à ce stade.