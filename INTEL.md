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
4. Lire au minimum : `docs/PRODUCT_VISION.md`, `docs/V1_UX_STRUCTURE.md`, `docs/CONTENT_MODEL.md`, `docs/PASSATION_ACTIVE.md`.
5. Inspecter le code réel avant de proposer une nouvelle architecture.
6. Ne jamais reconstruire le projet depuis une hypothèse si le comportement existe déjà dans `app/`, `components/` ou `lib/`.

**Méthode souhaitée par le fondateur :** avancer par transformations cohérentes en blocs, sans refaire tous les contrôles après chaque micro-changement. Les contrôles complets servent surtout aux points de stabilisation / PR / fusion.

Toujours travailler par **branche → PR → CI → fusion** pour le développement courant.

---

# 1. CE QU’EST CALIS

Calis est un **écosystème francophone de progression en callisthénie**, pas un blog générique, pas une boutique, pas une copie d’application fitness, pas un jeu.

La promesse mentale la plus importante est :

> **« Calis sait où j’en suis et sait quelle est ma prochaine étape. »**

Critère ultime :

> **L’utilisateur ne doit jamais se demander : « OK… et maintenant je fais quoi ? »**

Architecture conceptuelle : **DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**.

Flux UI : **OBJECTIF → SITUATION ACTUELLE → CHEMIN → PROCHAINE ÉTAPE**.

La couche d’entraînement complète ce modèle avec : **diagnostic → programme → séance → mesure → décision → prochaine étape**.

Un chemin décrit A → B → C. Un programme dit quoi faire aujourd’hui, combien, avec quel repos, à quelle fréquence, comment mesurer et quoi changer selon le résultat.

---

# 2. PRINCIPES PRODUIT NON NÉGOCIABLES

## Simplicité

L’interface doit être compréhensible par une personne très peu familière avec le sport, quelqu’un ayant des limitations, ou presque comme si elle s’adressait à un très jeune utilisateur.

- peu de mots ;
- peu de boutons ;
- un bouton = une idée ;
- labels courts ;
- grandes zones tactiles ;
- hiérarchie immédiatement visible ;
- image/pictogramme avant explication longue quand cela aide ;
- ne pas résoudre un problème d’interface en ajoutant du texte si l’interface peut être simplifiée.

Cadre explicite : **Content Design + Progressive Disclosure + UX Writing + faible charge cognitive**.

## Pas de fausse gamification

Pas de streaks artificiels, badges décoratifs présentés comme progrès, récompenses manipulatoires, progression fictive, experts fictifs, témoignages inventés, communauté simulée ou preuve sociale artificielle.

La récompense doit être la **capacité réellement acquise**.

## Honnêteté

Calis ne doit jamais prétendre déduire automatiquement la technique réelle, une blessure, la douleur ou la fatigue globale à partir de simples nombres.

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
- informations secondaires via petite icône ouvrant une modale / couche temporaire ;
- si l’information secondaire est longue, **la modale défile**, pas la page principale.

Les articles et contenus longs peuvent utiliser une zone défilante.

`InfoDialog` existe pour ce principe.

Navigation mobile actuelle : Accueil / Aujourd’hui / Bibliothèque. Le bouton « Je débute » reste accessible vers `/commencer`.

---

# 4. HOMEPAGE ET IDENTITÉ DE PARCOURS

H1 canonique : **« Qu’est-ce que tu aimerais réussir avec ton corps ? »**

Images approuvées :

- `public/goals/traction.webp`
- `public/goals/pompes.webp`
- `public/goals/handstand.webp`
- `public/goals/muscle-up.webp`

Jambes et Mobilité restent sans image tant qu’une image adaptée n’est pas validée.

Une image pédagogique est une affirmation technique. Pour les mouvements complexes, suivre `docs/VISUAL_TRUTH_WORKFLOW.md` ; une génération crédible n’est pas une preuve biomécanique.

---

# 5. CHEMINS DE PROGRESSION CANONIQUES

Source : `lib/content/v1.ts`.

## Traction

**suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions**

Slugs : `suspension-barre`, `controle-scapulaire`, `rowing-incline`, `traction-assistee`, `traction-negative`, `premiere-traction`, `10-tractions`.

## Pompe

**pompes inclinées → première pompe → pompe stable**

Ressources : `pompes-inclinees`, `premiere-pompe`, `pompe-technique`.

## Handstand

**préparation des appuis → mur → premiers équilibres libres**.

Ne pas créer automatiquement d’autres arbres uniquement pour remplir l’interface.

---

# 6. AUDIT PRODUIT À L’ORIGINE DE LA COUCHE D’ENTRAÎNEMENT

Calis était déjà bon pour répondre « où suis-je bloqué ? », mais ne constituait pas encore un système d’entraînement complet.

Questions manquantes : que faire aujourd’hui, combien de séries/répétitions/temps, combien de repos, comment organiser la semaine, équilibrer le corps, enregistrer la pratique, détecter la stagnation, adapter le programme, gérer récupération/fatigue et construire une trajectoire longue.

Le manque central = **training layer**.

Le temps doit devenir réel : aujourd’hui / cette semaine / ce cycle / depuis le dernier test ou changement.

Le but n’est pas d’ajouter 300 articles mais quelques vrais programmes cohérents et mesurables.

Carte de capacités à élargir plus tard : poussée horizontale/verticale, tirage horizontal/vertical, jambes bilatérales/unilatérales, chaîne postérieure, anti-extension, compression/L-sit, rotation/anti-rotation, suspension, mobilité épaules/poignets/hanches/chevilles, équilibre, explosivité, contrôle corporel.

**Ne pas prétendre que la V1 actuelle couvre déjà tout cela.**

---

# 7. ÉTAT ACTUEL DU MOTEUR D’ENTRAÎNEMENT

Route : `/aujourdhui`.

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

Clés : `calis.training.v2.logs`, `calis.training.v2.assessment`.

Programme Fondations : **2 séances par semaine**. Peu d’exercices par séance pour rester réellement exécutable et tenir dans l’écran fixe.

Diagnostic initial : **3 questions très courtes, une par écran**, basées sur des capacités concrètes plutôt que « débutant/intermédiaire » : poussée, tirage, squat.

Quand les deux séances sont faites : **« Aujourd’hui : repos »**. Pas de troisième séance artificielle.

Après `Terminer`, une couche temporaire affiche résultats, décision par exercice, éventuelle validation de progression, prochaine séance ou repos.

Une petite entrée **« Ma progression »** montre exercices actuels, zone de travail, dernières séances et vrais résultats, sans surcharger l’écran principal.

---

# 8. MOTEUR DE DÉCISION

États : `À découvrir`, `Continue`, `Facilite un peu`, `Prêt à progresser`, et `À revoir` en cours d’intégration au moment de cette consolidation.

Règles :

- pas de résultat → À découvrir ;
- sous borne minimale → Facilite un peu ;
- dans la zone → Continue ;
- borne haute sur deux passages → Prêt à progresser ;
- plusieurs passages comparables sans amélioration nette → À revoir.

Les chiffres ne remplacent jamais le jugement sur la technique, la douleur ou la fatigue.

---

# 9. PROGRESSION AUTOMATIQUE CONSERVATRICE

Fusionnée pour les transitions suffisamment documentées :

- suspension → contrôle scapulaire ;
- contrôle scapulaire → rowing incliné ;
- rowing incliné → traction assistée ;
- pompes inclinées → pompes au sol.

Condition : borne haute atteinte sur deux passages.

Le résumé peut afficher `Validé → [nouvel exercice]`, et la séance suivante utilise la nouvelle prescription.

Ne pas inventer de progression automatique pour squat, traction assistée au-delà du réglage actuel, pompes au sol au-delà du cadre actuel, ou autres mouvements non modélisés.

---

# 10. DÉTECTION DE STAGNATION — TRAVAIL EN COURS

PR propre ouverte au moment de la consolidation : **#46**, branche `feat/training-plateau-v2`.

But : éviter `Continue` pendant des semaines si les résultats ne bougent plus.

Après quatre passages sur une même prescription, si la personne reste dans la zone mais n’améliore pas nettement ses nombres : état → **`À revoir`** ; recommander de vérifier le réglage de la variante et la qualité des répétitions ; ne pas ajouter automatiquement du volume.

Priorités :

1. Facilite un peu si dernier passage sous la zone ;
2. Prêt à progresser si borne haute validée deux fois ;
3. À revoir si plateau ;
4. sinon Continue.

#45 a été fermée car sa branche empilée était devenue bruyante après squash. **Ne pas reprendre #45.**

---

# 11. COHÉRENCE VISUELLE SPORTIVE — DIRECTION DÉCIDÉE

Les grandes sections doivent être **reconnaissables par la couleur**, sans complexifier l’interface.

À reprendre de Clash Royale / Supercell : hiérarchie instantanée, tactilité, lisibilité mobile, sections reconnaissables, boutons clairement actionnables, cohérence répétée partout.

**Ne pas copier l’habillage gaming, le trade dress, les couleurs ou la gamification.**

Pour Calis : énergie, solidité, mouvement, précision, action claire.

Direction couleur actuelle : base neutre claire + bleu énergique comme action principale + accents secondaires limités :

- entrée/action : bleu ;
- entraînement/progression : vert ;
- bibliothèque/exploration : violet ;
- décision/diagnostic : orange.

Ces couleurs sont des **accents**, pas des aplats massifs.

La cohérence structurelle est plus importante que la palette : mêmes rayons, mêmes bordures, mêmes comportements tactiles, même typographie, mêmes surfaces, mêmes espacements, même logique d’état.

Boutons/cartes : bordures plus franches ≈ 2 px, coins un peu moins « pilule », légère ombre basse / sensation tactile discrète, pas de néon, pas de gradients décoratifs complexes, pas de pseudo-3D excessive.

La couleur ne doit jamais porter seule l’information.

---

# 12. PR VISUELLE EN COURS

PR ouverte au moment de cette consolidation : **#47**, branche `feat/sport-visual-system-v1`, titre `Give Calis a simple sport visual language`.

Elle introduit le premier système visuel sportif global : variables de couleurs de sections, bordures plus fortes, sensation tactile légère, styles cohérents sur cartes/choix/navigation/actions, base neutre toujours dominante.

Toujours vérifier si #47 est encore ouverte ou déjà fusionnée.

---

# 13. RECHERCHE UX / DESIGN DÉJÀ UTILISÉE

Principes retenus :

- partir des besoins utilisateurs et du langage réel ;
- start with user needs, do less, make it simple, design for everyone ;
- Progressive Disclosure : afficher d’abord l’important, révéler l’avancé à la demande ;
- réduire la charge cognitive, corriger l’interface avant d’ajouter une explication ;
- « one thing per page » utile pour concentration/mobile/reprise ;
- poser des questions simples plutôt que demander à l’utilisateur d’inférer un critère complexe.

Pour les écrans de décision Calis : **une question à la fois** est un très bon défaut.

---

# 14. LEÇONS SUPERCELL / CLASH ROYALE

- UX mobile-first ;
- limiter et bien placer les menus ;
- lisibilité et réponse tactile ;
- réduire la complexité accumulée ;
- montrer clairement la prochaine étape ;
- accès importants directs ;
- un bouton peut ouvrir des options secondaires plutôt que tout afficher.

Maxime interne : **« Calis doit se comporter comme un très bon jeu mobile, mais rester un outil honnête. »**

Cela signifie fluidité, clarté, feedback, hiérarchie — pas manipulation, faux progrès ou récompenses artificielles.

---

# 15. DONNÉES / BACKEND

Supabase inspecté précédemment : aucun projet Calis.

Décision : **pas besoin de Supabase pour la V1 locale**.

À envisager plus tard pour comptes, synchronisation multi-appareils, sauvegarde durable, historique partagé, éventuelle personnalisation serveur.

Schéma futur plausible : UserGoal, UserAssessment, ProgramEnrollment, SessionLog, ExerciseLog, AdaptationDecision, avec RLS.

Ne pas introduire cette infrastructure avant besoin réel.

---

# 16. ÉLÉMENTS TECHNIQUES IMPORTANTS

Stack : Next.js 16, React 19, TypeScript, export statique, GitHub Actions, GitHub Pages, basePath `/Calis`.

Site : `https://ludodulac.github.io/Calis/`

Le workflow PR `Check pull request` fait notamment install, typecheck et build.

Pas de lockfile npm ; le cache npm setup-node avait déjà cassé la CI inutilement et a été retiré.

---

# 17. HISTORIQUE RÉCENT DES PR IMPORTANTES

Toujours vérifier GitHub car l’état peut avoir changé.

- #34 fusionnée : cartes visuelles d’objectifs + CI PR.
- #35 fusionnée : cadre mobile fixe + navigation basse.
- #36 fusionnée : écran débutant ajusté + basePath images.
- #37 fusionnée : `InfoDialog`, écrans décision sans scroll, modales, correction CI npm.
- #38 fusionnée : première boucle Aujourd’hui + programme Fondations + logs locaux.
- #39 fusionnée : résultats → décisions + blocage séances vides.
- #40 fusionnée : diagnostic court → prescription adaptée.
- #41 fusionnée : résumé de séance.
- #42 fusionnée : fréquence hebdomadaire réelle + repos.
- #43 fusionnée : progression réelle vers prochaine variante documentée.
- #44 fusionnée : fenêtre Ma progression + historique réel.
- #45 fermée, non fusionnée : branche de stagnation bruyante, remplacée.
- #46 ouverte au moment de cette consolidation : stagnation / À revoir.
- #47 ouverte au moment de cette consolidation : langage visuel sportif global.

---

# 18. PRIORITÉS APRÈS LA PASSATION

1. Vérifier l’état réel de #46 et #47 + CI.
2. Stabiliser/fusionner les lots propres.
3. Continuer la boucle d’entraînement par gros blocs cohérents.
4. Faire que le programme connaisse davantage **l’objectif principal** de la personne, pas seulement ses capacités de départ.
5. Améliorer l’adaptation : plateau → décision explicable → éventuel recalibrage.
6. Ajouter progressivement les capacités manquantes uniquement lorsque ressources et prescriptions sont assez précises.
7. Plus tard, notion de cycle / réévaluation périodique.
8. Supabase seulement si compte/sync apporte une vraie valeur.

---

# 19. RYTHME DE TRAVAIL ATTENDU

- éviter de relire tous les fichiers et toute la CI après chaque minuscule modification ;
- faire plusieurs transformations cohérentes dans un même lot ;
- réserver l’audit complet au moment où le lot est prêt ;
- signaler clairement PR ouverte / en cours / fusionnée ;
- ne pas promettre du travail en arrière-plan ;
- continuer de manière autonome quand l’intention est claire.

Si une branche empilée devient bruyante après squash : recréer une branche propre depuis `main` plutôt que bricoler longtemps.

---

# 20. À NE PAS REFAIRE

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
- Ne pas prétendre que le programme est whole-body complet.
- Ne pas créer Supabase juste parce que c’est possible.
- Ne pas copier visuellement Clash Royale ; reprendre seulement les principes UX.
- Ne pas transformer le système couleur en arc-en-ciel : **couleur = orientation, pas décoration permanente**.
- Ne pas supprimer des contenus ou chemins utiles pour introduire une nouvelle idée.
- Ne pas réintégrer des visuels techniques non validés.

---

# 21. CHECKLIST DE PASSATION FUTURE

À chaque nouvelle passation importante, mettre à jour ce fichier plutôt que créer un document concurrent.

Inclure : état réel de main, PR ouvertes, décisions récemment fusionnées, changements de vision durable, limitations connues, prochaine étape concrète, éléments à ne pas refaire.

Si une décision devient durable et générale, la recopier aussi dans son document canonique (`PRODUCT_VISION`, `CONTENT_MODEL`, etc.) puis laisser ici une synthèse opérationnelle.

---

# 22. PROMPT ULTRA-COURT POUR UNE NOUVELLE CONVERSATION

> **Consulte `INTEL.md` dans `ludodulac/Calis`, puis vérifie l’état réel de `main`, les PR ouvertes et la CI. Considère `INTEL.md` comme la passation opérationnelle la plus récente et continue le projet sans repartir de zéro. Avance par lots cohérents, conserve l’UX mobile fixe et simple, la boucle diagnostic → programme → séance → mesure → décision → prochaine étape, et le nouveau langage visuel sportif sobre.**
