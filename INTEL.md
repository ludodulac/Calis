# INTEL — CALIS

> **Point d’entrée de passation complet pour reprendre Calis sans le contexte de conversation.**
>
> Instruction recommandée dans une nouvelle conversation : **« Consulte `INTEL.md`, puis vérifie l’état réel de `main`, des PR ouvertes et de la CI, et continue le projet. »**
>
> Ce document concentre le contexte produit, UX, technique, visuel et opérationnel le plus récent. Il complète `AI_START_HERE.md` et les documents canoniques ; il ne remplace pas le code ni la CI réelle.

Dernière consolidation : **1 septembre 2026**.

---

## 0. RÈGLE DE REPRISE

Avant toute modification :

1. Lire `INTEL.md` entièrement.
2. Lire `AI_START_HERE.md`.
3. Vérifier l’état réel de `main`, les PR ouvertes, leur CI et les commits récents.
4. Lire au minimum :
   - `docs/PRODUCT_VISION.md`
   - `docs/V1_UX_STRUCTURE.md`
   - `docs/CONTENT_MODEL.md`
   - `docs/PASSATION_ACTIVE.md`
5. Inspecter le code réel avant de proposer une nouvelle architecture.
6. Ne jamais reconstruire le projet depuis une hypothèse si le comportement existe déjà dans `app/`, `components/` ou `lib/`.

**Méthode souhaitée par le fondateur :** avancer par transformations cohérentes en blocs, sans refaire tous les contrôles après chaque micro-changement. Les contrôles complets servent surtout aux points de stabilisation / PR / fusion. Éviter le rythme « changement minuscule → relecture complète → changement minuscule ».

Toujours travailler par **branche → PR → CI → fusion**, sauf raison exceptionnelle explicitement documentée.

---

# 1. CE QU’EST CALIS

Calis est un **écosystème francophone de progression en callisthénie**, pas un blog générique, pas une boutique, pas une copie d’application fitness, pas un jeu.

La promesse mentale la plus importante est :

> **« Calis sait où j’en suis et sait quelle est ma prochaine étape. »**

Le critère ultime d’une bonne expérience est :

> **L’utilisateur ne doit jamais se demander : « OK… et maintenant je fais quoi ? »**

Architecture conceptuelle historique :

**DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**

Flux UI :

**OBJECTIF → SITUATION ACTUELLE → CHEMIN → PROCHAINE ÉTAPE**

La couche d’entraînement ajoutée en septembre 2026 complète ce modèle avec :

**diagnostic → programme → séance → mesure → décision → prochaine étape**

La distinction est fondamentale :

- un **chemin de progression** décrit A → B → C ;
- un **programme** dit quoi faire aujourd’hui, combien de séries/répétitions/temps, combien de repos, à quelle fréquence, comment mesurer et quoi changer selon le résultat.

Le vrai produit doit relier les deux.

---

# 2. PRINCIPES PRODUIT NON NÉGOCIABLES

## Simplicité

L’interface doit être compréhensible par une personne très peu familière avec le sport, par quelqu’un ayant des limitations, ou presque comme si elle s’adressait à un très jeune utilisateur.

Principes concrets :

- peu de mots ;
- peu de boutons ;
- un bouton = une idée ;
- labels courts ;
- grandes zones tactiles ;
- hiérarchie immédiatement visible ;
- image/pictogramme avant explication longue quand cela aide ;
- ne jamais résoudre un problème d’interface en ajoutant un paragraphe si l’interface peut être simplifiée.

Le cadre de travail explicite est :

**Content Design + Progressive Disclosure + UX Writing + faible charge cognitive.**

## Pas de fausse gamification

Interdit :

- streaks artificiels ;
- badges décoratifs présentés comme progrès ;
- récompenses manipulatoires ;
- progression fictive ;
- experts fictifs ;
- témoignages inventés ;
- communauté simulée ;
- preuve sociale artificielle.

La récompense doit être la **capacité réellement acquise**.

## Honnêteté

Calis ne doit jamais prétendre déduire automatiquement :

- la qualité technique réelle à partir de simples nombres ;
- une blessure ou un diagnostic médical ;
- la fatigue globale ;
- la douleur ;
- une expertise professionnelle qui n’existe pas.

Les décisions automatiques doivent rester **explicables** et basées sur les données réellement disponibles.

## Santé

Calis donne de l’information générale sur l’activité physique et l’apprentissage des mouvements. Il ne diagnostique pas et ne remplace pas un professionnel de santé.

---

# 3. RÈGLES UX MOBILE TRÈS IMPORTANTES

Le téléphone est un **cadre d’application fixe**.

Sur les écrans de décision :

- le document entier ne doit pas défiler ;
- le header et la navigation restent stables ;
- la zone principale doit tenir dans l’écran ;
- pas d’accordéons qui allongent la page ;
- les informations secondaires passent par une petite icône ouvrant une modale / couche temporaire ;
- si cette information secondaire est longue, **la modale défile**, pas la page principale.

Les articles et contenus longs peuvent naturellement utiliser une zone de contenu défilante.

Le composant partagé `InfoDialog` existe pour ce principe.

Sur mobile, la navigation principale actuelle est :

- Accueil
- Aujourd’hui
- Bibliothèque

Le bouton « Je débute » reste accessible dans le header vers `/commencer`.

---

# 4. HOMEPAGE ET IDENTITÉ DE PARCOURS

H1 canonique à préserver :

> **« Qu’est-ce que tu aimerais réussir avec ton corps ? »**

Ne pas le remplacer par une promesse fitness générique.

Images d’objectifs approuvées présentes dans le dépôt :

- `public/goals/traction.webp`
- `public/goals/pompes.webp`
- `public/goals/handstand.webp`
- `public/goals/muscle-up.webp`

Jambes et Mobilité restent sans image tant qu’une image réellement adaptée n’est pas validée.

Une image pédagogique est une affirmation technique. Pour les mouvements complexes, suivre `docs/VISUAL_TRUTH_WORKFLOW.md` ; ne jamais utiliser une génération crédible comme preuve biomécanique.

---

# 5. CHEMINS DE PROGRESSION CANONIQUES

Source principale : `lib/content/v1.ts`.

## Traction

**suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions**

Slugs importants :

- `suspension-barre`
- `controle-scapulaire`
- `rowing-incline`
- `traction-assistee`
- `traction-negative`
- `premiere-traction`
- `10-tractions`

## Pompe

**pompes inclinées → première pompe → pompe stable**

Ressources :

- `pompes-inclinees`
- `premiere-pompe`
- `pompe-technique`

## Handstand

**préparation des appuis → mur → premiers équilibres libres**

Ne pas créer automatiquement d’autres arbres uniquement pour remplir l’interface.

---

# 6. AUDIT PRODUIT À L’ORIGINE DE LA COUCHE D’ENTRAÎNEMENT

Diagnostic principal : Calis était déjà bon pour répondre **« où suis-je bloqué ? »**, mais ne constituait pas encore un système d’entraînement complet.

Les questions manquantes étaient :

- que faire aujourd’hui ?
- combien de séries / répétitions / temps ?
- combien de repos ?
- comment organiser la semaine ?
- comment équilibrer le corps entier ?
- comment enregistrer la pratique ?
- comment détecter la stagnation ?
- comment adapter le programme ?
- que faire avec la fatigue / récupération ?
- comment construire une trajectoire sur plusieurs années ?

Le manque central = **training layer**.

La notion de temps doit être réelle :

- aujourd’hui ;
- cette semaine ;
- ce cycle ;
- depuis le dernier test / changement.

Le but n’est pas d’ajouter 300 articles mais quelques vrais programmes cohérents et mesurables.

Carte de capacités à élargir plus tard :

- poussée horizontale ;
- poussée verticale ;
- tirage horizontal ;
- tirage vertical ;
- jambes bilatérales ;
- jambes unilatérales ;
- chaîne postérieure ;
- anti-extension ;
- compression / L-sit ;
- rotation / anti-rotation ;
- suspension ;
- mobilité épaules / poignets / hanches / chevilles ;
- équilibre ;
- explosivité ;
- contrôle corporel.

**Ne pas prétendre que la V1 actuelle couvre déjà tout cela.**

---

# 7. ÉTAT ACTUEL DU MOTEUR D’ENTRAÎNEMENT

Route principale : `/aujourdhui`.

Fichiers majeurs :

- `components/today-session.tsx`
- `components/training-assessment.tsx`
- `components/training-history.tsx`
- `lib/training/types.ts`
- `lib/training/v1.ts`
- `lib/training/adapt.ts`
- `lib/training/decision.ts`
- `lib/training/progress.ts`
- `app/aujourdhui/page.tsx`
- `app/aujourdhui/today.module.css`

Persistence actuelle : **localStorage**, sans compte ni Supabase.

Clés utilisées :

- `calis.training.v2.logs`
- `calis.training.v2.assessment`

L’ancien prototype V1 utilisait un espace local différent ; ne pas supprimer les anciennes données sans raison.

## Programme Fondations V1

Fréquence : **2 séances par semaine**.

La V1 a volontairement peu d’exercices par séance pour rester réellement exécutable et tenir dans l’écran fixe.

Le diagnostic initial pose **3 questions très courtes, une par écran**, basées sur des capacités concrètes plutôt que « débutant / intermédiaire » :

- poussée / pompe au sol ;
- tirage / suspension / scapula / rowing / traction ;
- squat.

Ensuite, `adaptFoundationProgram()` choisit le point de départ.

## Semaine

Quand les deux séances prévues sont terminées :

> **« Aujourd’hui : repos »**

Calis ne relance pas artificiellement une troisième séance.

Aucun streak ni culpabilisation.

## Fin de séance

Après `Terminer`, la séance ne disparaît plus immédiatement.

Une couche temporaire affiche :

- les résultats saisis ;
- la décision par exercice ;
- une éventuelle validation de progression ;
- la prochaine séance ou « Repos ».

Un seul bouton permet ensuite de voir la suite.

## Progression visible

Une petite entrée **« Ma progression »** ouvre une fenêtre secondaire qui montre :

- les exercices actuellement prescrits ;
- leur zone de travail ;
- les dernières séances ;
- les vrais résultats enregistrés.

Cette information ne surcharge pas l’écran principal.

---

# 8. MOTEUR DE DÉCISION

États existants / prévus :

- `À découvrir`
- `Continue`
- `Facilite un peu`
- `Prêt à progresser`
- `À revoir` (PR de stagnation actuellement ouverte au moment de cette consolidation)

Règles de base :

- pas de résultat → `À découvrir` ;
- sous la borne minimale → `Facilite un peu` ;
- dans la zone → `Continue` ;
- borne haute atteinte sur deux passages → `Prêt à progresser` ;
- après plusieurs passages comparables sans amélioration nette → `À revoir` (logique en cours d’intégration).

Les chiffres ne remplacent jamais le jugement sur la technique, la douleur ou la fatigue.

---

# 9. PROGRESSION AUTOMATIQUE CONSERVATRICE

Déjà implémentée / fusionnée pour les transitions suffisamment documentées :

## Tirage

- suspension → contrôle scapulaire
- contrôle scapulaire → rowing incliné
- rowing incliné → traction assistée

## Poussée

- pompes inclinées → pompes au sol

Condition : **borne haute atteinte sur deux passages**.

Le résumé peut afficher :

> `Validé → [nouvel exercice]`

La séance suivante utilise la nouvelle prescription.

Important : **ne pas inventer de progression automatique** pour les exercices dont l’étape suivante n’a pas encore une prescription suffisamment précise, notamment :

- squat ;
- traction assistée au-delà du réglage actuel ;
- pompes au sol au-delà du cadre actuel ;
- autres mouvements non modélisés.

Le moteur doit rester conservateur et explicable.

---

# 10. DÉTECTION DE STAGNATION — TRAVAIL EN COURS

PR propre ouverte au moment de la consolidation : **#46**

Branche : `feat/training-plateau-v2`

But : éviter que Calis dise `Continue` pendant des semaines si les résultats ne bougent plus.

Logique proposée :

- après quatre passages sur une même prescription ;
- si la personne reste dans la zone mais n’améliore pas nettement ses nombres ;
- état → **`À revoir`** ;
- recommander de vérifier le réglage de la variante et la qualité des répétitions ;
- ne pas ajouter automatiquement du volume.

Priorités :

1. `Facilite un peu` si dernier passage sous la zone ;
2. `Prêt à progresser` si borne haute validée deux fois ;
3. `À revoir` si plateau réel ;
4. sinon `Continue`.

La première branche empilée (#45) a été fermée car elle héritait de fichiers déjà fusionnés après squash. **Ne pas reprendre #45.** La version propre est #46 et ne doit toucher que le moteur de décision.

---

# 11. COHÉRENCE VISUELLE SPORTIVE — DIRECTION DÉCIDÉE

Le fondateur veut que les grandes sections du site soient **reconnaissables par la couleur**, mais sans complexifier l’interface ni créer un carnaval visuel.

Inspiration à reprendre de Clash Royale / Supercell :

- hiérarchie instantanée ;
- tactilité ;
- très bonne lisibilité mobile ;
- sections reconnaissables ;
- boutons clairement actionnables ;
- cohérence répétée partout.

**Ne pas copier son habillage gaming, son trade dress, ses couleurs ou sa gamification.**

Pour Calis, traduire ces principes dans un langage **sportif, physique, simple** :

- énergie ;
- solidité ;
- mouvement ;
- précision ;
- action claire.

## Direction couleur actuelle

Base neutre claire pour préserver la lecture.

Couleur d’action principale : **bleu énergique**.

Accents secondaires limités par famille pour l’orientation :

- entrée / action : bleu ;
- entraînement / progression : vert ;
- bibliothèque / exploration : violet ;
- décision / diagnostic : orange.

Ces couleurs doivent être des **accents**, pas des aplats massifs partout.

## Cohérence structurelle plus importante que la palette

Toutes les sections doivent partager :

- mêmes familles de rayons ;
- mêmes épaisseurs de bordure ;
- mêmes comportements tactiles ;
- même typographie ;
- mêmes surfaces ;
- mêmes espacements ;
- même logique d’état.

C’est cette géométrie répétée qui fait l’identité, les couleurs servent surtout à l’orientation.

## Boutons / cartes

Direction souhaitée :

- bordures plus franches, environ **2 px** sur les éléments interactifs principaux ;
- rayons un peu plus compacts que les anciennes grosses pilules ;
- légère ombre basse / effet tactile discret ;
- pas de néon ;
- pas de gradients décoratifs complexes ;
- pas de grosses ombres flottantes ;
- pas d’effets pseudo-3D excessifs.

L’utilisateur doit sentir immédiatement ce qui est cliquable sans que l’interface ressemble à un jeu.

## Accessibilité couleur

La couleur **ne doit jamais porter seule l’information**.

Exemple : un état vert reste accompagné de `Continue`, `Validé`, etc.

Préserver focus visible et contrastes.

---

# 12. PR VISUELLE EN COURS

PR ouverte au moment de cette consolidation : **#47**

Branche : `feat/sport-visual-system-v1`

Titre : `Give Calis a simple sport visual language`

Elle introduit le premier système visuel sportif global :

- variables de couleurs de sections ;
- bordures plus fortes ;
- sensation tactile légère ;
- styles cohérents sur cartes / choix / navigation / actions ;
- base neutre toujours dominante.

**Cette PR est aussi la branche sur laquelle `INTEL.md` a été consolidé.** Avant toute nouvelle action, vérifier si #47 a été fusionnée et si `INTEL.md` est bien présent sur `main`.

---

# 13. RECHERCHE UX / DESIGN DÉJÀ UTILISÉE

Principes importants issus de la recherche :

- GOV.UK Content Design : partir des besoins utilisateurs, du langage réel et des tâches ;
- GOV.UK Design Principles : start with user needs, do less, make it simple, design for everyone ;
- Nielsen Norman Group : Progressive Disclosure = afficher d’abord ce qui est important, révéler l’avancé à la demande ;
- GOV.UK UI writing : réduire la charge cognitive, commencer avec moins, corriger l’interface avant d’ajouter une explication ;
- « one thing per page » utile pour la concentration, le mobile et la reprise après interruption ;
- poser des questions simples au lieu de demander à l’utilisateur d’inférer un critère complexe.

Pour les écrans de décision Calis : **une question à la fois** est un très bon défaut.

---

# 14. RECHERCHE SUPERSELL / CLASH ROYALE DÉJÀ UTILISÉE

Leçons retenues :

- UX mobile-first ;
- limiter et bien placer les éléments de menu ;
- lisibilité et réponse tactile ;
- réduire la complexité des systèmes accumulés ;
- montrer clairement la proximité / prochaine étape ;
- rendre les accès importants directs ;
- un bouton peut ouvrir un univers d’options secondaires plutôt que tout afficher sur l’écran principal.

Maxime produit interne :

> **« Calis doit se comporter comme un très bon jeu mobile, mais rester un outil honnête. »**

Cela signifie : fluidité, clarté, feedback et hiérarchie — **pas manipulation, faux progrès ou récompenses artificielles**.

---

# 15. DONNÉES / BACKEND

Supabase a été inspecté précédemment : aucun projet Calis n’existait.

Décision actuelle : **pas besoin de Supabase pour la V1 locale**.

La boucle doit d’abord être validée avec stockage navigateur.

Supabase devient pertinent plus tard pour :

- comptes ;
- synchronisation multi-appareils ;
- sauvegarde durable ;
- historique partagé ;
- éventuelle personnalisation serveur.

Schéma futur plausible :

- UserGoal
- UserAssessment
- ProgramEnrollment
- SessionLog
- ExerciseLog
- AdaptationDecision

Avec RLS.

Ne pas introduire cette infrastructure avant besoin réel.

---

# 16. ÉLÉMENTS TECHNIQUES IMPORTANTS

Stack :

- Next.js 16
- React 19
- TypeScript
- export statique
- GitHub Actions
- GitHub Pages
- basePath `/Calis`

Site de test :

`https://ludodulac.github.io/Calis/`

Le site est un prototype public, pas nécessairement l’identité finale.

Les images locales doivent respecter le basePath GitHub Pages.

Le workflow PR `Check pull request` lance notamment :

- install
- typecheck
- build

Il n’y a pas de lockfile npm dans le dépôt ; le cache npm du setup-node avait déjà causé une CI inutilement cassée et a été retiré.

---

# 17. HISTORIQUE RÉCENT DES PR IMPORTANTES

Les numéros sont utiles pour comprendre le fil ; **toujours vérifier GitHub car l’état peut avoir changé après la rédaction de ce fichier.**

## #34 — fusionnée
Homepage : cartes visuelles d’objectifs + CI PR.

## #35 — fusionnée
Cadre d’application mobile fixe + navigation basse globale.

## #36 — fusionnée
Écran débutant ajusté au cadre mobile + correction basePath images GitHub Pages.

## #37 — fusionnée
`InfoDialog`, écrans de décision sans scroll, informations secondaires en modales, correction workflow CI npm.

## #38 — fusionnée
Première boucle `Aujourd’hui` avec programme Fondations, séries/répétitions/repos, logs locaux.

## #39 — fusionnée
Résultats → décisions simples + blocage des séances vides.

## #40 — fusionnée
Diagnostic court → prescription de départ adaptée.

## #41 — fusionnée
Résumé de séance avant passage à la suite.

## #42 — fusionnée
Respect de la fréquence hebdomadaire + écran repos après 2 séances.

## #43 — fusionnée
Progression réelle vers la prochaine variante documentée.

## #44 — fusionnée
Fenêtre `Ma progression` avec historique récent et données réelles.

## #45 — fermée, NON fusionnée
Branche de stagnation empilée devenue bruyante après squash. Remplacée par #46.

## #46 — ouverte au moment de cette consolidation
Stagnation / état `À revoir`, branche propre depuis main.

## #47 — ouverte au moment de cette consolidation
Premier langage visuel sportif global + cette passation `INTEL.md`.

---

# 18. PRIORITÉS APRÈS LA PASSATION

Ordre recommandé, sous réserve de l’état réel des PR au moment de la reprise :

1. **Stabiliser / fusionner #47** si CI verte et diff cohérent, car elle installe le langage visuel demandé explicitement.
2. **Stabiliser / fusionner #46** si encore ouverte et compatible avec le nouveau système visuel.
3. Reprendre la boucle d’entraînement par gros blocs, pas micro-PR si plusieurs changements forment une seule idée cohérente.
4. Faire que le programme connaisse davantage **l’objectif principal** de la personne, pas seulement ses capacités de départ.
5. Améliorer l’adaptation : plateau → décision explicable → éventuel recalibrage.
6. Ajouter progressivement les capacités manquantes (tronc, chaîne postérieure, poussée verticale, mobilité, etc.) uniquement lorsque les ressources et prescriptions sont assez précises.
7. Plus tard, introduire la notion de cycle / réévaluation périodique.
8. Supabase seulement lorsque la boucle locale prouve qu’un compte / sync apporte réellement de la valeur.

---

# 19. COMMENT TRAVAILLER À PARTIR DE MAINTENANT

Le fondateur souhaite un rythme plus rapide :

- éviter de relire tous les fichiers et toute la CI après chaque minuscule modification ;
- faire plusieurs transformations cohérentes dans un même lot ;
- réserver l’audit complet au moment où le lot est prêt ;
- signaler clairement lorsqu’une PR est ouverte / en cours / fusionnée ;
- ne pas promettre du travail en arrière-plan ;
- continuer de manière autonome quand l’intention est claire.

Si une branche empilée devient bruyante après squash : **ne pas bricoler longtemps** ; recréer une branche propre depuis `main`, comme cela a été fait pour #46.

---

# 20. CE QU’IL NE FAUT SURTOUT PAS REFAIRE

- Ne pas reconstruire Calis comme app fitness générique.
- Ne pas remplacer l’approche désir-first par un dashboard dense.
- Ne pas créer un questionnaire long.
- Ne pas mettre tout le texte à l’écran « au cas où ».
- Ne pas utiliser d’accordéons sur les écrans fixes de décision.
- Ne pas faire défiler le document mobile pour ces écrans.
- Ne pas créer de streaks / badges / confettis comme moteur principal.
- Ne pas afficher de faux progrès.
- Ne pas supposer qu’un chiffre = technique propre.
- Ne pas automatiser une progression non documentée.
- Ne pas prétendre que le programme est déjà whole-body complet.
- Ne pas créer Supabase juste parce que c’est techniquement possible.
- Ne pas copier visuellement Clash Royale ; reprendre seulement les principes d’UX et de cohérence.
- Ne pas transformer le nouveau système couleur en arc-en-ciel : **couleur = orientation, pas décoration permanente**.
- Ne pas supprimer des contenus ou chemins utiles pour introduire une nouvelle idée.
- Ne pas réintégrer des visuels techniques non validés.

---

# 21. CHECKLIST DE PASSATION FUTURE

À chaque nouvelle passation importante, mettre à jour ce fichier plutôt que créer un énième document concurrent.

Inclure :

- état réel de `main` ;
- PR ouvertes ;
- décisions récemment fusionnées ;
- changements de vision durable ;
- limitations connues ;
- prochaine étape concrète ;
- éléments à ne pas refaire.

Si une décision devient durable et générale, la recopier aussi dans son document canonique (`PRODUCT_VISION`, `CONTENT_MODEL`, etc.) puis laisser ici une synthèse opérationnelle.

---

# 22. PROMPT ULTRA-COURT POUR UNE NOUVELLE CONVERSATION

> **Consulte `INTEL.md` dans `ludodulac/Calis`, puis vérifie l’état réel de `main`, les PR ouvertes et la CI. Considère `INTEL.md` comme la passation opérationnelle la plus récente et continue le projet sans repartir de zéro. Avance par lots cohérents, conserve l’UX mobile fixe et simple, la boucle diagnostic → programme → séance → mesure → décision → prochaine étape, et le nouveau langage visuel sportif sobre.**
