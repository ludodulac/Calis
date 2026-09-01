# INTEL — CALIS

> **Point d’entrée de passation complet pour reprendre Calis sans le contexte de conversation.**
>
> Instruction recommandée : **« Consulte `INTEL.md`, vérifie l’état réel de `main`, des PR ouvertes et de la CI, puis continue la phase V1 Release Readiness sans élargir la V1. »**

Dernière consolidation : **1 septembre 2026**.

---

# 0. RÈGLE DE REPRISE

Avant toute modification :

1. Lire ce fichier entièrement.
2. Lire `AI_START_HERE.md`.
3. Vérifier `main`, PR ouvertes, CI et commits récents sur GitHub : le dépôt réel prévaut toujours sur cette photographie.
4. Lire `docs/PRODUCT_VISION.md`, `docs/V1_UX_STRUCTURE.md`, `docs/CONTENT_MODEL.md` et `docs/PASSATION_ACTIVE.md`.
5. Inspecter le code réel avant de proposer une architecture.
6. Travailler par **branche → PR → CI → fusion**.
7. Avancer par lots cohérents ; réserver les contrôles lourds aux points de stabilisation.

Dernier `main` vérifié avant le lot Release Readiness : `020ef3c8b80cb87d23c4eeb1cf50aeaabb7f39ba`, merge #53. Toujours revérifier avant d’agir.

---

# 1. CE QU’EST CALIS

Calis est un **écosystème francophone de progression en callisthénie**. Ce n’est ni un blog générique, ni une boutique, ni une app fitness générique, ni un jeu.

Promesse centrale :

> **« Calis sait où j’en suis et sait quelle est ma prochaine étape. »**

Critère ultime : l’utilisateur ne doit jamais se demander **« OK… et maintenant je fais quoi ? »**.

Architecture : **DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**.

Boucle d’entraînement : **diagnostic → programme → séance → mesure → décision → prochaine étape**.

Un chemin décrit A → B → C. Un programme dit quoi faire aujourd’hui, combien, avec quel repos, à quelle fréquence, comment mesurer et quoi changer selon le résultat.

---

# 2. PHASE ACTUELLE : V1 RELEASE READINESS

Calis possède désormais `/aujourdhui`, un diagnostic court, des prescriptions, des logs locaux, un historique, des décisions, une fréquence réelle, une progression prudente, une détection de stagnation et un recalibrage volontaire.

**La priorité n’est plus d’élargir les capacités. La priorité est de rendre la petite promesse V1 impeccable de bout en bout.**

Règle de gel :

> **Une nouvelle idée ou capacité n’a plus le droit de retarder la V1 sauf si son absence empêche réellement un débutant d’utiliser correctement le parcours existant.**

Avant la release : pas de L-sit, pistol squat, front lever, HSPU, gros moteur mobilité, périodisation avancée, Supabase, comptes ou synchronisation.

Test mental : donner Calis à des personnes qui ne connaissent pas le projet, sans le fondateur à côté. Elles doivent comprendre quoi faire.

Scénario de sortie :

`Accueil → objectif → orientation → Aujourd’hui → diagnostic → séance A → résultats → résumé → fermeture/retour ultérieur → séance B → résultats → repos → historique → progression ou recalibrage`

Toute réaction plausible « Pourquoi ? », « Je clique où ? », « Combien ? », « C’est quoi ? », « Maintenant quoi ? » est un signal à corriger.

Une fois parcours, pédagogie, production et CI validés, matérialiser la frontière par un **tag/release V1 stable**.

---

# 3. PRINCIPES PRODUIT NON NÉGOCIABLES

- Peu de mots, peu de boutons, un bouton = une idée.
- Grandes zones tactiles, hiérarchie immédiate, faible charge cognitive.
- Content Design + Progressive Disclosure + UX Writing.
- Corriger l’interface avant d’ajouter du texte explicatif.
- Pas de streaks, badges artificiels, faux progrès, experts fictifs, témoignages inventés ou preuve sociale simulée.
- La récompense est une capacité réelle.
- Un nombre ne permet pas de déduire la technique, une blessure, la douleur ou la fatigue globale.
- Toute décision automatique doit être explicable à partir des données réellement disponibles.
- Calis informe sur l’activité physique ; il ne diagnostique pas et ne remplace pas un professionnel de santé.

---

# 4. UX MOBILE ET IDENTITÉ

Le téléphone est un cadre d’application fixe pour les écrans de décision : document principal sans scroll, header/navigation stables, intention principale visible, pas d’accordéons qui allongent la page, secondaire dans `InfoDialog`. Les articles longs peuvent défiler dans leur zone de contenu.

Navigation : Accueil / Aujourd’hui / Bibliothèque ; « Je débute » reste accessible vers `/commencer`.

Direction visuelle fusionnée (#48) : base neutre, couleurs d’orientation limitées, bordures franches, tactilité légère, géométrie cohérente. S’inspirer de la lisibilité d’un bon jeu mobile, jamais de son habillage ou de sa gamification.

H1 homepage canonique : **« Qu’est-ce que tu aimerais réussir avec ton corps ? »**

Visuels approuvés : `public/goals/traction.webp`, `pompes.webp`, `handstand.webp`, `muscle-up.webp`. Une image pédagogique est une affirmation technique ; suivre `docs/VISUAL_TRUTH_WORKFLOW.md` pour les mouvements complexes.

---

# 5. CHEMINS CANONIQUES

Source : `lib/content/v1.ts`.

## Traction

**suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions**

## Pompe

**pompes inclinées → première pompe → pompe stable**

## Handstand

**préparation des appuis → mur → premiers équilibres libres**

Ne pas créer d’arbres automatiques uniquement pour remplir l’interface.

---

# 6. MOTEUR D’ENTRAÎNEMENT ACTUEL

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
- `lib/training/recalibrate.ts`

Persistence : **localStorage**, sans compte ni Supabase. Clés principales : `calis.training.v2.logs`, `calis.training.v2.assessment`, `calis.training.v2.goal`.

Le chargement local doit être résilient : une clé JSON corrompue ou une structure invalide ne doit pas empêcher la récupération des autres données valides ni faire planter la séance. Les anciens logs compatibles restent lisibles.

Programme Fondations : **2 séances par semaine**, quatre mouvements par séance.

Diagnostic : **3 questions**, poussée, tirage, squat. L’objectif principal est porté par le parcours/URL/stockage et ne rallonge pas le diagnostic.

L’objectif (`traction`, `pompes`, `jambes`, fondations) change la priorité de la séance mais ne supprime pas les autres fondations.

Couverture V1 actuelle : poussée horizontale, tirage/suspension, squat bilatéral, stabilité du tronc/anti-extension et première base de chaîne postérieure.

Quand les deux séances prévues sont faites dans la semaine : **« Aujourd’hui : repos »**. Pas de troisième séance artificielle.

---

# 7. VÉRITÉ PÉDAGOGIQUE DES PRESCRIPTIONS

Release Readiness doit auditer séries, répétitions/durée, repos, fréquence, critères de passage, régressions, consignes d’arrêt et cohérence article ↔ moteur.

Le but n’est pas de trouver un chiffre universel. Le but est d’éviter contradiction interne et fausse précision.

Bases #53 :

- gainage : **2 × 15–30 s**, repos 60 s ; le chrono rend la séance comparable, pas un record ;
- pont fessier : **2 × 8–12**, repos 90 s ; la borne haute peut valider la base sans inventer automatiquement une variante suivante.

La traction négative reste volontairement documentée sans « chrono magique ».

Règle importante de la V1 : **une progression automatique exige à la fois une étape documentée et un état que Calis sait observer.**

Exemples :

- la hauteur d’un support de pompe inclinée n’est pas mémorisée ; Calis ne doit donc pas abaisser automatiquement le support ni déduire que deux séries identiques ont été faites à la même hauteur si l’utilisateur change son réglage ;
- l’angle d’un rowing n’est pas mémorisé ; Calis ne doit donc pas passer automatiquement à la traction assistée simplement parce que 2 × 12 a été atteint ;
- pour ces mouvements, la consigne V1 demande de garder un réglage comparable d’une séance à l’autre et peut indiquer **Base validée** sans inventer la suite.

---

# 8. MOTEUR DE DÉCISION

États fonctionnels : `À découvrir`, `Continue`, `Facilite un peu`, `Prêt à progresser`, `À revoir`, et **Base validée** lorsque la borne haute est reproductible mais qu’aucune progression automatique fiable n’est disponible.

Règles :

1. pas de résultat → découvrir ;
2. dernier passage sous la borne minimale → faciliter ;
3. borne haute sur deux passages avec la même prescription → progression seulement si la prochaine transition est documentée **et observable** ;
4. sinon, si la borne haute est reproductible → base validée ;
5. quatre passages comparables dans la zone sans amélioration nette → `À revoir` ;
6. sinon → continuer.

Les logs récents mémorisent séries, min, max et unité. Les anciens logs sans snapshot restent lisibles mais ne déclenchent pas progression/plateau exact.

---

# 9. PROGRESSION ET RECALIBRAGE

Progressions automatiques actuellement conservées en V1 :

- **suspension → contrôle scapulaire** ;
- **contrôle scapulaire → rowing incliné**.

Les anciennes transitions automatiques `rowing incliné → traction assistée` et `pompes inclinées → pompes au sol` sont volontairement retirées de la V1 : le moteur ne mémorise ni angle de rowing ni hauteur de support, donc ces transitions ne sont pas suffisamment observables pour être déclenchées honnêtement.

Ne pas inventer de transition automatique pour squat, pompes au sol au-delà du cadre actuel, traction libre, gainage, pont fessier ou autre capacité non modélisée.

`À revoir` peut proposer une régression uniquement si elle est documentée. L’utilisateur doit l’appliquer explicitement et l’historique n’est pas effacé.

Régressions explicites actuelles notamment : pompe au sol → inclinée ; rowing → contrôle scapulaire ; contrôle scapulaire → suspension ; squat complet → amplitude plus courte dans le cadre prévu.

---

# 10. CHECKLIST V1 RELEASE READINESS

Avant de dire « V1 stable » :

1. parcours complet sans assistance ;
2. résilience localStorage/rechargement/retour ultérieur ;
3. vérité pédagogique article ↔ moteur ;
4. aucune décision qui promet une progression inexistante ;
5. aucune progression automatique basée sur un réglage non observé ;
6. GitHub Pages réel, `basePath`, routes, liens, images ;
7. métadonnées, canonicals et erreurs console majeures ;
8. comportement mobile réel des écrans fixes et modales ;
9. minimum légal/confidentialité adapté aux outils réellement utilisés ;
10. disclosure affiliation avant liens rémunérés ;
11. mesure produit minimale sans backend disproportionné ;
12. documentation alignée ;
13. CI install/typecheck/build verte ;
14. tag/release V1 stable après validation.

Une fonctionnalité nouvelle qui ne corrige pas un blocage de ce parcours attend l’après-V1.

---

# 11. KPI ET ANALYTICS APRÈS RELEASE

Funnel à instrumenter progressivement :

**visiteur → objectif choisi → diagnostic terminé → première séance commencée → première séance terminée → deuxième séance → première décision utile → première progression réelle**

Le trafic SEO est un canal d’acquisition, pas la preuve principale de la valeur produit. Ne pas introduire Supabase uniquement pour mesurer ce funnel ; choisir d’abord la solution la plus légère compatible avec confidentialité et besoin réel.

---

# 12. PROGRAMME D’ALIMENTATION APRÈS V1

Après le tag V1, le socle doit devenir relativement calme. Ajouter les capacités par **clusters complets** :

`besoin/objectif → ressource canonique → exercices/questions liés → progression documentée → prescription exécutable → intégration éventuelle dans Aujourd’hui`

Candidats post-V1 : poussée verticale, jambes unilatérales, compression/L-sit, rotation/anti-rotation, mobilité structurée épaules/poignets/hanches/chevilles, équilibre, explosivité, contrôle corporel.

Handstand et muscle-up peuvent progresser éditorialement sans entrer dans `Aujourd’hui` tant que prescriptions et règles de progression ne sont pas assez solides.

---

# 13. AFFILIATION ET MONÉTISATION

Principe durable :

> **besoin détecté → explication → options → achat éventuel**

L’affiliation doit être déclenchée par le graphe pédagogique, jamais ajoutée comme une couche publicitaire générique.

Ordre après V1 : contenu réel → mesure légère → quelques catégories utiles (barre, anneaux, élastiques, parallettes ; lest seulement quand justifié) → disclosure claire → peu de partenaires → mesure clics/conversions → partenariats directs avec données réelles.

Un guide peut conclure qu’aucun achat n’est nécessaire. La rémunération ne doit jamais dicter une progression.

---

# 14. DONNÉES / BACKEND

Pas de Supabase nécessaire pour la V1 locale.

À envisager plus tard uniquement si comptes, synchronisation multi-appareils, sauvegarde durable, historique partagé ou personnalisation serveur apportent une vraie valeur.

---

# 15. STACK / PRODUCTION

Stack : Next.js 16, React 19, TypeScript, export statique, GitHub Actions, GitHub Pages, `basePath /Calis`.

Le workflow PR vérifie notamment install, typecheck et build. Pas de lockfile npm ; ne pas réintroduire un cache setup-node dépendant d’un lockfile absent.

Ne jamais confondre build vert et production vérifiée : Release Readiness doit aussi tester le site réellement déployé.

---

# 16. HISTORIQUE RÉCENT IMPORTANT

- #34 : cartes objectifs + CI PR.
- #35 : cadre mobile fixe + navigation basse.
- #36 : écran débutant + basePath images.
- #37 : `InfoDialog`, écrans décision sans scroll, correction CI.
- #38 : boucle Aujourd’hui + Fondations + logs locaux.
- #39 : résultats → décisions.
- #40 : diagnostic court.
- #41 : résumé séance.
- #42 : fréquence réelle + repos.
- #43 : première progression conservatrice documentée.
- #44 : Ma progression + historique.
- #45 : fermée sans fusion.
- #46 : stagnation / `À revoir`, fusionnée.
- #47 : fermée sans fusion car branche bruyante.
- #48 : système visuel sportif propre.
- #49 : objectif principal intégré au programme.
- #50 : comparabilité exacte des prescriptions.
- #51 : recalibrage explicite après plateau.
- #52 : passation active rafraîchie.
- #53 : gainage + pont fessier dans les Fondations.
- #54 : lot Release Readiness en cours au moment de cette consolidation ; vérifier son état réel.

---

# 17. À NE PAS REFAIRE

- Ne pas reconstruire Calis comme app fitness générique.
- Ne pas élargir la V1 pour « tout couvrir ».
- Ne pas créer un questionnaire long ou un dashboard dense.
- Ne pas remettre tout le texte à l’écran.
- Ne pas créer streaks, badges, confettis ou faux progrès.
- Ne pas supposer qu’un chiffre = technique propre.
- Ne pas afficher `Prêt à progresser` sans progression documentée et observable.
- Ne pas automatiser une transition à partir d’un réglage que Calis ne stocke pas.
- Ne pas créer Supabase juste parce que c’est possible.
- Ne pas supprimer des contenus ou chemins utiles pour introduire une idée.
- Ne pas laisser l’affiliation créer artificiellement des besoins.
- Ne pas réintégrer des visuels techniques non validés.

---

# 18. PROMPT DE REPRISE

> **Consulte `INTEL.md` dans `ludodulac/Calis`, puis vérifie `main`, les PR ouvertes et la CI. Calis est en V1 Release Readiness : n’ajoute aucune nouvelle capacité sauf si elle corrige un blocage réel du parcours débutant. Audite le parcours complet, la vérité pédagogique des prescriptions, la résilience locale et la production. Une progression automatique doit être documentée et observable. Corrige par lots propres, PR → CI → fusion. Quand le parcours existant est fiable de bout en bout, matérialise une V1 stable ; ensuite seulement passe au programme d’alimentation par clusters et à l’affiliation déclenchée par les besoins pédagogiques.**
