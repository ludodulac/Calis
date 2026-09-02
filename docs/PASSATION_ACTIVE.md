# Calis — PASSATION ACTIVE

Dernière mise à jour : **2 septembre 2026**.

## Source de reprise prioritaire

Pour reprendre Calis dans une nouvelle conversation :

1. lire **`AI_START_HERE.md`** ;
2. lire **`INTEL.md`** pour les décisions durables et le contexte consolidé ;
3. lire **ce fichier (`docs/PASSATION_ACTIVE.md`) pour l’état opérationnel le plus récent** ;
4. vérifier GitHub avant toute action : `main`, PR ouvertes, CI, issues pertinentes et dernier déploiement Pages restent la vérité.

Si un SHA ou un état de PR diffère entre un document et GitHub, **GitHub gagne toujours**.

### Prompt de reprise recommandé

> **Consulte `AI_START_HERE.md`, `INTEL.md` et `docs/PASSATION_ACTIVE.md` dans `ludodulac/Calis`. Vérifie ensuite l’état réel de `main`, les PR ouvertes, la CI, l’issue #62 et le dernier déploiement GitHub Pages. Reprends exactement là où le projet s’est arrêté : Calis est dans une passe Design / UX / identité visuelle qui doit rendre le produit plus évident, humain, sportif et pédagogique sans toucher inutilement au moteur V1. Préserve la promesse « Calis sait où j’en suis et sait quelle est ma prochaine étape », n’invente aucune progression automatique et travaille par petites PR relisibles. Le dernier lot fusionné est #72 sur le hub Traction ; le prochain lot logique est le hub Pompes en rendant son chemin visible sans prétendre automatiser `pompes inclinées → pompe au sol`, car la hauteur du support n’est pas stockée.**

---

# 1. État opérationnel vérifié

Dernier `main` vérifié : **`3f0a4a944efe631cb33e98ef015531c90b9c2c81`**, fusion de **PR #72 — Make the pull-up path visible**.

Au moment de cette passation :

- aucune PR ouverte après la fusion de #72 ;
- CI de #72 verte : install, typecheck et build statique réussis ;
- déploiement GitHub Pages **#203** entièrement vert : build, artefact et publication réussis ;
- export statique / GitHub Pages / `basePath /Calis` restent les contraintes de production.

Toujours revérifier cet état au début d’une nouvelle conversation.

---

# 2. Promesse à protéger

Promesse centrale :

> **« Calis sait où j’en suis et sait quelle est ma prochaine étape. »**

Critère UX fondamental :

> **L’utilisateur ne doit jamais se demander : « OK… et maintenant je fais quoi ? »**

Architecture : **DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**.

Boucle : **diagnostic → programme → séance → mesure → décision → prochaine étape**.

La passe design actuelle ne doit pas ajouter une couche décorative sur le moteur. Elle doit rendre cette intelligence **perceptible**.

---

# 3. Direction Design / UX décidée

Nom de travail : **Terrain calme**.

Calis doit ressembler à un croisement entre :

- carnet d’entraînement ;
- magazine sportif éditorial ;
- outil de progression très simple.

Direction :

- calme ;
- sportive ;
- tactile ;
- lisible ;
- humaine ;
- pédagogique ;
- légèrement premium ;
- crédible sans agressivité fitness.

À éviter : gradients gratuits, esthétique SaaS générique, noir + néon, dashboard dense, effets spectaculaires, streaks, XP, badges artificiels, confettis, copies de Thenx/Calistree/Freeletics, énormes grilles de cartes photo.

Principe visuel distinctif : **le chemin**.

Langage recherché :

**TU ES ICI → TU TRAVAILLES ÇA → ENSUITE**

Pas de skill tree gigantesque, pas de niveaux fictifs.

---

# 4. Photographie de marque

Six photographies ont été fournies par le fondateur dans la conversation :

1. traction ;
2. pompe ;
3. handstand ;
4. travail unilatéral / jambes ;
5. mobilité / stretching ;
6. dips.

Décision : **photographie de marque ≠ visuel pédagogique**.

Les photos servent à l’identité, l’aspiration, l’humanisation, les hubs et la respiration éditoriale. Elles ne doivent pas être utilisées comme preuve technique d’un mouvement.

Usage retenu pour la home :

- traction : entrée / commencer ;
- pompe : construire ;
- handstand : maîtriser.

Narration : **commencer → construire → maîtriser**.

Jambes, mobilité et dips sont réservées à leurs pages / usages futurs plutôt que forcées sur l’accueil.

Les illustrations techniques restent séparées et doivent suivre la vérité visuelle documentée (`docs/VISUAL_TRUTH_WORKFLOW.md`).

---

# 5. Lots Design déjà fusionnés

## #65 — illustrations existantes réellement raccordées

Six SVG déjà présents dans `public/illustrations/calis/` ont été raccordés aux fiches correspondantes : suspension, contrôle scapulaire, rowing incliné, traction négative, pompe technique, squat poids du corps.

Important : ces SVG pédagogiques et les six photographies de marque sont deux systèmes différents.

## #66 — fondations visuelles

Premier socle de redesign : palette plus calme, fond plus chaud, hiérarchie typographique améliorée, rayons / bordures / surfaces moins uniformes, prescriptions numériques plus lisibles.

Aucune logique produit modifiée.

## #67 — shell / navigation

- glyphes provisoires remplacés par une petite famille d’icônes cohérentes ;
- état actif de la navigation mobile ;
- header mieux hiérarchisé ;
- `Vie privée` reste accessible mais n’a plus le même poids visuel que l’entrée produit.

## #68 — nouvelle home

La grille 2×3 d’objectifs n’est plus la composition principale.

La home raconte désormais :

**commencer → construire → maîtriser**

et rend visible :

**Tu es ici → Tu travailles ça → Ensuite**.

Les destinations utiles restent accessibles. Trois photographies seulement sont utilisées comme narration : traction, pompe, handstand.

Deux anciens assets annoncés comme WebP étaient en réalité invalides ; les photos nécessaires ont été remplacées / ajoutées comme vrais fichiers WebP valides.

## #69 — fin de séance

Le résumé de séance a été rehiérarchisé sans changer le moteur :

- moins « quatre cartes + badges » ;
- davantage « séance enregistrée → ce que ça signifie → prochaine étape » ;
- une progression réellement calculée ressort visuellement ;
- la prochaine étape devient le dernier repère fort.

Pas de gamification artificielle.

## #70 — Aujourd’hui / séance

Lot CSS-only :

- les quatre exercices sont lus comme une séquence `01 → 04` ;
- prescriptions plus présentes ;
- saisies de résultats visuellement secondaires ;
- impression de formulaire réduite ;
- aucune prescription, donnée, règle ou persistance modifiée.

## #71 — Commencer / objectifs

`/commencer` a été recentré sur les objectifs réellement compris par Aujourd’hui V1 :

- traction ;
- pompes ;
- jambes ;
- base générale.

Mobilité et handstand restent accessibles en exploration, mais ne sont pas présentés comme des objectifs pilotés par le moteur V1.

Chaque direction permet de comprendre le parcours ou de démarrer directement avec le bon paramètre `goal`.

## #72 — hub Traction : progression visible

Le chemin canonique traction n’est plus caché dans une modale. Il devient une partie visible du hub :

**suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions**.

La page distingue explicitement :

- ce que Calis peut réellement décider automatiquement : `suspension → contrôle scapulaire → rowing incliné` ;
- le reste du chemin, visible comme progression pédagogique mais **non automatisée**.

CTA : **Trouver mon point de départ** → `/aujourdhui?goal=traction`.

Les cinq situations d’entrée et les questions fréquentes restent présentes.

---

# 6. Prochain lot Design recommandé

## Hub Pompes

Reprendre le principe de #72, mais **ne pas copier mécaniquement** le hub Traction.

Chemin canonique :

**pompes inclinées → première pompe → pompe stable**.

Point essentiel : la V1 ne stocke pas la hauteur du support des pompes inclinées. Donc Calis ne peut pas honnêtement automatiser :

`pompes inclinées → pompe au sol`.

Le hub doit donner une sensation claire de chemin sans suggérer une automatisation inexistante.

Objectif UX :

**voici le chemin → voici comment choisir une difficulté utile → Calis peut t’entraîner aujourd’hui, mais ne prétend pas déduire automatiquement ton changement de hauteur**.

Ne pas modifier le moteur pour « compléter » le design.

Après Pompes, évaluer séparément :

- hubs / objectifs restants ;
- dé-cardification progressive des ressources pédagogiques ;
- grammaire future des visuels techniques ;
- polish responsive / accessibilité final.

---

# 7. Vérité des progressions à ne jamais casser

Une progression automatique exige :

1. une prochaine étape documentée ;
2. un critère observable dans les données réellement stockées.

Progressions automatiques V1 conservées :

- `suspension → contrôle scapulaire` ;
- `contrôle scapulaire → rowing incliné`.

Pas d’automatisation :

- `rowing incliné → traction assistée` car l’angle n’est pas stocké ;
- `pompes inclinées → pompe au sol` car la hauteur du support n’est pas stockée.

Quand la borne haute est reproductible mais sans suite observable fiable : **Base validée**.

---

# 8. Moteur / mémoire : ne pas toucher sans raison

Clés locales principales :

- `calis.training.v2.logs` ;
- `calis.training.v2.assessment` ;
- `calis.training.v2.goal`.

Réévaluation / recalibrage :

- conserve l’historique complet ;
- ouvre une nouvelle fenêtre de décision ;
- les anciennes séances restent visibles mais ne déclenchent pas une progression dans le nouveau point de départ ;
- les séances déjà faites dans la semaine continuent de compter pour la fréquence.

Programme Fondations : deux séances / semaine, quatre exercices par séance.

Ne pas supprimer d’exercice ou de fondation uniquement pour rendre l’écran plus minimaliste.

---

# 9. Release gate toujours ouvert : issue #62

Issue : **#62 — Final V1 release gate: real-phone pass and publisher details**.

Elle reste ouverte.

Deux gates humains ne doivent pas être simulés :

## A. Test réel sur téléphone

Scénario :

`Accueil → objectif → orientation → Aujourd’hui → diagnostic → séance A → résultats → résumé → fermeture du navigateur → retour ultérieur → séance B → résultats → repos → historique → progression / Base validée / recalibrage`

À vérifier notamment : quatre exercices utilisables, Terminer accessible, modales internes scrollables, persistance après fermeture, historique préservé lors d’une réévaluation, ancienne fenêtre de décision isolée, Vie privée accessible, aucun contrôle important coupé.

## B. Informations réelles d’éditeur

Ne jamais inventer : identité / raison sociale, statut, adresse légalement requise, contact public, directeur de publication si applicable.

Hébergement déjà documenté : GitHub Pages / GitHub, Inc. La confidentialité distingue les données techniques d’hébergement des données d’entraînement Calis locales.

Le texte de #62 peut contenir un ancien SHA technique : **utiliser #62 pour les gates, mais GitHub `main` / Pages pour l’état opérationnel réel**.

Pas de tag/release `V1 stable` tant que ces gates ne sont pas réellement satisfaits, sauf décision explicite du fondateur d’accepter le risque.

---

# 10. Contraintes et principes de travail

- branche → PR → CI → fusion ;
- petites PR relisibles ;
- pas de fusion si typecheck/build ne sont pas verts ;
- vérifier Pages après fusion ;
- préserver les contenus, parcours et fonctionnalités utiles ;
- pas de Supabase / backend pendant cette passe ;
- pas de nouvelles capacités avancées pour remplir l’interface ;
- pas de progression automatique non documentée / non observable ;
- export statique et `basePath` obligatoires ;
- mobile et accessibilité à préserver ;
- informations secondaires dans `InfoDialog` lorsque cela protège l’écran principal ;
- ne pas transformer les photographies de marque en tutoriels techniques ;
- ne pas reprendre une ancienne version de Calis : toujours inspecter le code actuel.

---

# 11. Critère de design

Pour chaque proposition :

> **Est-ce que ça aide réellement quelqu’un à comprendre son corps, savoir quoi faire et progresser ?**

Si non, c’est probablement décoratif.

Le résultat recherché n’est pas seulement :

> « Calis est plus joli. »

mais :

> **« Calis est plus évident, plus agréable, plus humain et plus crédible, tout en restant aussi simple. »**
