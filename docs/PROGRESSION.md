# Calis — PROGRESSION

Dernière consolidation : **4 septembre 2026**.

Ce document conserve la **direction de progression produit décidée avec le fondateur** afin qu’une nouvelle conversation puisse reprendre sans reconstruire les décisions depuis l’historique du chat.

Il ne remplace pas `AI_START_HERE.md`, `INTEL.md`, `docs/PASSATION_ACTIVE.md`, le code, les tests, les PR ou la CI. En cas de contradiction sur un état technique courant, **GitHub réel gagne**. En cas de contradiction avec une règle produit canonique plus précise, vérifier le document canonique avant d’agir.

---

## 1. Intention produit actuelle

Calis doit devenir **beaucoup plus immédiat à utiliser**.

Le problème observé par le fondateur n’est pas un manque de profondeur du produit. Au contraire, le produit possède déjà des parcours, de la pédagogie, un moteur et de nombreux contenus. Le problème est que cette profondeur peut être présentée trop tôt et donner l’impression qu’il faut lire/comprendre Calis avant de pouvoir bouger.

La direction décidée est donc :

> **La profondeur reste dans Calis, mais elle passe derrière le clic.**

Réflexe utilisateur recherché :

> **J’ouvre → je choisis ce que j’ai envie de travailler → j’agis → Calis m’aide à comprendre la suite.**

Le site ne doit pas demander à l’utilisateur d’apprendre son architecture avant de commencer.

---

## 2. Accueil : décision du 4 septembre 2026

L’accueil doit être testé comme un **écran de choix direct**, et non comme une longue page éditoriale.

Question principale :

> **Qu’est-ce que tu veux travailler aujourd’hui ?**

Directions visibles retenues pour le test :

- Tractions ;
- Pompes ;
- Dips ;
- Jambes ;
- Gainage ;
- Handstand ;
- Mobilité ;
- Muscle-up.

`Aujourd’hui` reste une entrée forte pour l’utilisateur qui veut simplement une séance guidée.

`Essayer quelque chose` et `Je ne sais pas par où commencer` restent accessibles en second niveau.

Cette simplification **ne signifie pas** qu’il faut supprimer les contenus, parcours, explications ou fonctionnalités existantes. Ils restent disponibles derrière les entrées pertinentes.

Première implémentation isolée : **PR #88 — Simplify home into direct training choices**, branche `ux/direct-home-grid`.

---

## 3. Principe d’interface à généraliser si le test est concluant

Ne pas appliquer mécaniquement la nouvelle home partout. L’étape suivante consiste à observer si cette direction paraît réellement plus naturelle, notamment sur téléphone.

Si elle est validée, appliquer progressivement le même principe aux hubs :

1. montrer immédiatement ce que l’utilisateur peut faire ;
2. rendre le chemin/progression visuel et compréhensible ;
3. mettre les explications détaillées derrière l’action ou au moment où elles deviennent utiles ;
4. ne jamais cacher une prochaine étape réellement importante ;
5. ne pas transformer le produit en dashboard dense ni en encyclopédie à lire.

Le langage `TU ES ICI → TU TRAVAILLES ÇA → ENSUITE` reste compatible avec cette direction, mais il doit servir l’action et non devenir une couche d’interface supplémentaire.

---

## 4. Exemple prioritaire : Tractions

Tractions est le premier parcours choisi pour tester la suite de cette philosophie parce qu’un chemin canonique existe déjà.

Expérience recherchée :

> **je choisis Tractions → je peux faire ma séance immédiatement OU choisir ma situation → je vois le chemin complet → j’approfondis seulement si j’en ai besoin.**

Chemin pédagogique déjà documenté à préserver :

**suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions**.

Ne pas confondre chemin pédagogique visible et progression automatique du moteur. Les limites d’observabilité déjà documentées restent vraies.

### Expérience testée dans la PR #88

La page Tractions de la branche `ux/direct-home-grid` est maintenant réordonnée pour tester l’action avant l’explication :

1. titre court et intention directe ;
2. bloc **Aujourd’hui → Faire ma séance** ;
3. choix humain direct : « je ne sais pas », « je tiens mal à la barre », « je ne monte pas », « j’y suis presque », « j’en fais déjà » ;
4. chemin complet de progression ;
5. détail sur les limites de l’automatisation replié derrière une divulgation volontaire.

Cette passe **ne modifie ni les étapes du chemin, ni le moteur, ni les critères de progression**. Elle teste uniquement l’ordre de révélation de l’information.

À terme, une étape peut réunir de manière naturelle :

- consigne courte ;
- démonstration visuelle / vidéo réelle quand disponible ;
- critères simples de réussite ;
- erreurs ou repères utiles ;
- étape suivante ;
- matériel pertinent seulement s’il apporte réellement quelque chose.

---

## 5. Vidéo et pédagogie

La vidéo est considérée comme particulièrement adaptée à la callisthénie parce qu’un mouvement se comprend souvent plus vite en le voyant qu’en lisant plusieurs paragraphes.

Direction : **voir → essayer → comprendre la suite**.

Cela ne justifie pas d’inventer des vidéos, démonstrations ou preuves techniques. Les règles de vérité visuelle restent obligatoires. Une vraie démonstration fiable vaut mieux qu’un visuel génératif techniquement ambigu.

Le texte reste utile, mais doit devenir plus contextuel : consigne, sécurité générale, critère, explication au bon moment, approfondissement volontaire.

---

## 6. Modèle économique envisagé sans dégrader le produit

La simplification de l’interface ne vise pas à transformer Calis en boutique.

Le modèle envisagé peut faire apparaître, **après la valeur pédagogique**, des prolongements cohérents :

- matériel réellement utile à une étape ;
- liens d’affiliation lorsque c’est pertinent et transparent ;
- éventuellement une formation / un parcours plus approfondi si une vraie proposition de valeur existe.

Ordre à préserver :

> **besoin utilisateur → progression → aide utile → éventuellement équipement / offre pertinente.**

Jamais l’inverse.

Une étape doit pouvoir conclure honnêtement qu’aucun achat n’est nécessaire.

Ne pas créer de faux partenariat, recommandation, test produit, expérience vécue ou expertise pour soutenir la monétisation.

---

## 7. Ce qui n’a PAS été décidé

Ne pas transformer les idées suivantes en décisions implicites :

- aucune refonte générale du moteur n’a été décidée ;
- aucune suppression des parcours existants n’a été décidée ;
- aucune nouvelle progression automatique n’a été décidée ;
- aucune progression Jambes canonique ne doit être inventée pour remplir l’interface ;
- aucun backend/Supabase n’est requis par cette direction UX ;
- aucun catalogue commercial massif n’est décidé ;
- aucune génération automatique de vidéos pédagogiques n’est décidée ;
- aucune copie d’un concurrent n’est recherchée.

La direction actuelle est une **simplification de l’accès**, pas une simplification destructrice du produit.

---

## 8. Méthode de travail décidée

Pour les prochaines conversations :

1. reconstruire l’état réel depuis GitHub avant de modifier ;
2. distinguer ce qui est déjà en production, ce qui est en PR/test et ce qui n’est encore qu’une idée ;
3. identifier la cible exacte avant de toucher au code ;
4. préserver l’existant ;
5. préférer une modification ciblée et réversible à une refonte générale ;
6. si une approche testée échoue, reconsidérer l’approche au lieu de réparer automatiquement la même solution ;
7. branche → PR → CI → vérification visuelle/Pages quand pertinent ;
8. inscrire les décisions importantes dans le dépôt plutôt que de les laisser uniquement dans la conversation.

Une nouvelle idée du fondateur doit être comprise dans le but global, mais reste à qualifier : **idée ≠ décision ≠ priorité**.

---

## 9. État de reprise au moment de cette consolidation

Au 4 septembre 2026 :

- `main` contient déjà les travaux UX précédents, notamment la réduction des décisions avant première valeur ;
- la PR #88 teste la home en choix directs et le hub Tractions en révélation progressive ;
- le dernier workflow vérifié de #88 avant la passe Tractions était vert ; après tout nouveau commit, revérifier la CI ;
- #88 ne modifie pas le moteur ;
- une inspection visuelle mobile reste nécessaire avant fusion ;
- après fusion éventuelle, vérifier le déploiement Pages avant de considérer ce test comme réellement en production.

Toujours revérifier ces faits dans GitHub : cette section est une photographie, pas une source éternelle.

---

## 10. Prompt de reprise conseillé

> **Consulte `AI_START_HERE.md`, `INTEL.md`, `docs/PASSATION_ACTIVE.md` et `docs/PROGRESSION.md` dans `ludodulac/Calis`. Vérifie ensuite l’état réel de `main`, les PR ouvertes, la CI, les issues pertinentes et le dernier déploiement Pages. Reprends la direction produit décidée sans repartir de zéro : Calis doit garder sa profondeur mais rendre l’action immédiate — j’ouvre, je choisis ce que je veux travailler, j’agis, puis Calis m’aide à comprendre la suite. Distingue toujours production, test en PR et idée non décidée. Préserve le moteur, les parcours et les contenus existants sauf décision explicite contraire.**
