# INTEL — CALIS

> **Point d’entrée de passation complet pour reprendre Calis sans le contexte de conversation.**
>
> Instruction recommandée : **« Consulte `INTEL.md`, vérifie l’état réel de `main`, des PR ouvertes, de la CI et du dernier déploiement Pages, puis continue la phase V1 Release Readiness sans élargir la V1. »**

Dernière consolidation : **1 septembre 2026**.

---

# 0. RÈGLE DE REPRISE

Avant toute modification :

1. Lire ce fichier entièrement.
2. Lire `AI_START_HERE.md`.
3. Vérifier GitHub : `main`, PR ouvertes, CI, commits récents et dernier déploiement Pages. Le dépôt réel prévaut toujours sur cette photographie.
4. Lire `docs/PRODUCT_VISION.md`, `docs/V1_UX_STRUCTURE.md`, `docs/CONTENT_MODEL.md`, `docs/PASSATION_ACTIVE.md` et `docs/V1_RELEASE_LEGAL.md`.
5. Inspecter le code réel avant de proposer une architecture.
6. Travailler par **branche → PR → CI → fusion**.
7. Avancer par lots cohérents ; réserver les contrôles lourds aux points de stabilisation.

Dernier `main` vérifié avant cette consolidation : **`65624637d85b4e60061ea1802ba84c8d92b24a1d`**, fusion de #59. Toujours revérifier avant d’agir.

---

# 1. CE QU’EST CALIS

Calis est un **écosystème francophone de progression en callisthénie**. Ce n’est ni un blog générique, ni une boutique, ni une app fitness générique, ni un jeu.

Promesse centrale :

> **« Calis sait où j’en suis et sait quelle est ma prochaine étape. »**

Critère ultime : l’utilisateur ne doit jamais se demander **« OK… et maintenant je fais quoi ? »**.

Architecture : **DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**.

Boucle d’entraînement : **diagnostic → programme → séance → mesure → décision → prochaine étape**.

Un chemin décrit A → B → C. Un programme dit quoi faire maintenant, combien, avec quel repos, à quelle fréquence, comment mesurer et quoi changer selon le résultat.

---

# 2. PHASE ACTUELLE : V1 RELEASE READINESS

Calis possède désormais une vraie boucle d’entraînement : `/aujourdhui`, diagnostic court, prescriptions, historique local, décisions, fréquence hebdomadaire, repos, progression conservatrice, stagnation et recalibrage.

**La priorité n’est plus d’élargir les capacités. La priorité est de rendre la petite promesse V1 impeccable de bout en bout.**

Règle de gel :

> **Une nouvelle idée ou capacité n’a plus le droit de retarder la V1 sauf si son absence empêche réellement un débutant d’utiliser correctement le parcours existant.**

Avant le tag : pas de L-sit, pistol squat, front lever, HSPU, gros moteur mobilité, périodisation avancée, Supabase, comptes ou synchronisation.

Scénario de sortie :

`Accueil → objectif → orientation → Aujourd’hui → diagnostic → séance A → résultats → résumé → fermeture/retour ultérieur → séance B → résultats → repos → historique → décision/progression ou recalibrage`

Le test central est : **« une personne qui ne connaît pas Calis sait-elle quoi faire sans le fondateur à côté ? »**

---

# 3. PRINCIPES PRODUIT NON NÉGOCIABLES

- Peu de mots et peu de boutons.
- Un bouton = une idée.
- Grandes zones tactiles et faible charge cognitive.
- Content Design + Progressive Disclosure + UX Writing.
- Corriger l’interface avant d’ajouter des explications.
- Pas de streaks, badges artificiels, faux progrès, experts fictifs, témoignages inventés ou preuve sociale simulée.
- La récompense est une capacité réelle.
- Un nombre ne permet pas de déduire technique, douleur, blessure ou fatigue globale.
- Toute décision automatique doit être explicable à partir des données réellement disponibles.
- Calis informe sur l’activité physique ; il ne diagnostique pas et ne remplace pas un professionnel de santé.

---

# 4. UX MOBILE ET IDENTITÉ

Le téléphone est un **cadre d’application fixe** pour les écrans de décision :

- document principal sans scroll ;
- header/navigation stables ;
- intention principale visible ;
- pas d’accordéons qui allongent la page ;
- informations secondaires via `InfoDialog` ;
- si le secondaire est long, la modale défile, pas l’écran principal.

Les articles longs peuvent défiler dans leur zone de contenu.

Navigation : Accueil / Aujourd’hui / Bibliothèque ; « Je débute » reste accessible vers `/commencer`.

Direction visuelle (#48) : base neutre, couleurs d’orientation limitées, bordures franches, tactilité légère, géométrie cohérente. S’inspirer de la lisibilité des bonnes interfaces mobiles, jamais de gamification manipulatoire.

H1 homepage canonique : **« Qu’est-ce que tu aimerais réussir avec ton corps ? »**

Visuels approuvés : `public/goals/traction.webp`, `pompes.webp`, `handstand.webp`, `muscle-up.webp`. Une image pédagogique est une affirmation technique ; suivre `docs/VISUAL_TRUTH_WORKFLOW.md`.

---

# 5. CHEMINS CANONIQUES

Source : `lib/content/v1.ts`.

## Traction

**suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions**

## Pompe

**pompes inclinées → première pompe → pompe stable**

## Handstand

**préparation des appuis → mur → premiers équilibres libres**

Ne pas inventer d’arbres automatiques uniquement pour remplir l’interface.

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
- `app/aujourdhui/page.tsx`
- `app/aujourdhui/today.module.css`

Persistence : **localStorage**, sans compte ni Supabase.

Clés :

- `calis.training.v2.logs`
- `calis.training.v2.assessment`
- `calis.training.v2.goal`

Le chargement local est défensif : JSON, structure et timestamps doivent être valides. Une clé cassée ne doit pas bloquer les autres données valides.

Programme Fondations : **2 séances par semaine**, quatre mouvements par séance.

Diagnostic : **3 questions** — poussée, tirage, squat. L’objectif principal est porté par URL/stockage et ne rallonge pas le diagnostic.

L’objectif (`traction`, `pompes`, `jambes`, fondations) change l’ordre/priorité, jamais la présence des autres fondations.

Couverture V1 :

- poussée horizontale ;
- tirage/suspension ;
- squat bilatéral ;
- stabilité du tronc / anti-extension ;
- première base de chaîne postérieure.

Quand deux séances sont faites dans la semaine : **Aujourd’hui : repos**. Pas de troisième séance artificielle.

---

# 7. PRESCRIPTIONS ET VÉRITÉ PÉDAGOGIQUE

La V1 doit rester cohérente entre bibliothèque et moteur : séries, répétitions/durée, repos, fréquence, critères de passage, régressions et consignes d’arrêt.

Le but n’est pas de trouver un chiffre universel, mais d’éviter contradiction interne et fausse précision.

Bases explicites :

- gainage : **2 × 15–30 s**, repos 60 s ;
- pont fessier : **2 × 8–12**, repos 90 s.

Les fiches tirage/squat restent souvent qualitatives lorsque le réglage réel ou la technique ne peuvent pas être honnêtement résumés par un nombre.

La traction négative reste volontairement documentée sans « chrono magique ».

---

# 8. RÈGLE DE VÉRITÉ DES PROGRESSIONS

Une progression automatique exige **deux conditions simultanées** :

1. la prochaine étape est documentée ;
2. le critère de déclenchement est observable dans les données stockées.

La V1 ne mémorise pas :

- la hauteur du support de pompe inclinée ;
- l’angle du rowing incliné.

Donc la V1 **n’automatise plus** :

- `pompes inclinées → pompes au sol` ;
- `rowing incliné → traction assistée`.

Progressions automatiques conservées :

- `suspension → contrôle scapulaire` ;
- `contrôle scapulaire → rowing incliné`.

Quand la borne haute est reproductible sans progression fiable : **Base validée**.

---

# 9. MOTEUR DE DÉCISION

États :

- `À découvrir` ;
- `Continue` ;
- `Facilite un peu` ;
- `Prêt à progresser` ;
- `À revoir` ;
- `Base validée` via l’état visuel `continue` quand aucune suite automatique fiable n’existe.

Règles :

1. pas de résultat → découvrir ;
2. dernier résultat sous la borne → faciliter ;
3. borne haute deux fois avec la même prescription → progresser uniquement si la suite est documentée et observable ;
4. sinon borne haute deux fois → base validée ;
5. quatre passages comparables sans amélioration nette → `À revoir` ;
6. sinon → continuer.

Les logs récents mémorisent séries, min, max et unité. Les anciens logs sans snapshot restent lisibles mais ne peuvent pas déclencher une comparaison exacte.

---

# 10. HISTORIQUE, RÉÉVALUATION ET RECALIBRAGE

L’historique ne doit pas être détruit par une action non destructive.

Depuis #56 : **Refaire mon point de départ** conserve les séances.

Depuis #57 :

- `Ma progression` affiche l’historique complet ;
- les décisions et progressions utilisent uniquement les séances enregistrées depuis le `completedAt` du point de départ actuel ;
- un recalibrage crée donc une nouvelle fenêtre de décision sans effacer la mémoire ;
- les séances déjà faites dans la semaine continuent à compter pour la fréquence afin d’éviter du volume artificiel.

`À revoir` peut proposer une régression uniquement si elle est documentée. L’utilisateur doit l’appliquer explicitement.

Régressions explicites notamment :

- pompe au sol → inclinée ;
- rowing → contrôle scapulaire ;
- contrôle scapulaire → suspension ;
- squat complet → amplitude plus courte dans le cadre prévu.

Une suppression totale d’historique, si ajoutée un jour, doit être distincte et clairement destructive.

---

# 11. MOBILE : BUG CRITIQUE CORRIGÉ #59

Après #53, chaque séance Fondations comporte quatre mouvements.

Le CSS mobile conservait pourtant `grid-template-rows: repeat(3, …)` alors que `.sessionScreen` est en `overflow: hidden`. Le quatrième exercice pouvait donc tomber dans une ligne implicite et être comprimé/masqué sur petit écran.

#59 remplace cette grille par **quatre lignes explicites**. Ne jamais revenir à trois lignes tant que les séances en contiennent quatre.

---

# 12. PRODUCTION VÉRIFIÉE

Stack : Next.js 16, React 19, TypeScript, export statique, GitHub Actions, GitHub Pages, `basePath /Calis`.

Le workflow PR vérifie install, typecheck et build.

Pas de lockfile npm ; ne pas réintroduire un cache setup-node qui dépendrait d’un lockfile absent.

Pendant Release Readiness, ont été vérifiés :

- déploiements Pages verts jusqu’à #59 ;
- routes critiques présentes dans l’artefact ;
- `basePath /Calis` cohérent ;
- `robots.txt` et `sitemap.xml` générés ;
- canonicals cohérents ;
- environ 1 000 références internes contrôlées sans lien cassé ;
- toutes les URLs du sitemap ont une sortie statique.

`/aujourdhui` reste hors sitemap : vue applicative, pas landing SEO principale.

Ne jamais confondre build PR vert et production vérifiée : contrôler le workflow Pages après fusion.

---

# 13. CONFIDENTIALITÉ / LÉGAL

Depuis #58 : page publique **`/confidentialite`**, lien dans le footer, route dans le sitemap et document **`docs/V1_RELEASE_LEGAL.md`**.

État réel de la V1 :

- pas de compte Calis ;
- pas de base de données Calis pour les séances ;
- données d’entraînement en stockage local ;
- aucun analytics, pixel publicitaire ou traceur comportemental tiers détecté lors de la revue ;
- pas d’affiliation active dans le moteur.

Ne pas ajouter une bannière de consentement fictive en l’absence de traceurs non essentiels. Toute activation future d’analytics, publicité, retargeting, bouton social traçant ou autre outil tiers doit déclencher une revue confidentialité/consentement **avant** activation.

Les mentions légales complètes ne doivent jamais être inventées. Il manque encore les vraies informations d’éditeur/contact selon le statut réel du projet.

---

# 14. CHECKLIST AVANT TAG V1 STABLE

Gros blocs déjà traités : moteur, comparabilité, stagnation, recalibrage, mémoire, robustesse locale, production statique, confidentialité de base, quatre exercices mobiles.

Derniers gates :

1. valider le parcours réel complet sur téléphone ;
2. faire une inspection visuelle finale des petits écrans et modales après #59 ;
3. relire une dernière fois les prescriptions Fondations article ↔ moteur ;
4. obtenir les vraies informations d’éditeur/contact pour finaliser les mentions légales si nécessaires au lancement public ;
5. décider si la V1 sort sans analytics — acceptable — ou si une mesure légère est ajoutée plus tard après revue ;
6. revérifier `main`, aucune PR ouverte, CI verte et Pages vert ;
7. créer alors le **tag/release V1 stable**.

L’absence d’analytics ou d’affiliation ne bloque pas le tag si ces fonctionnalités restent désactivées.

---

# 15. KPI APRÈS RELEASE

Funnel cible :

**visiteur → objectif choisi → diagnostic terminé → première séance commencée → première séance terminée → deuxième séance → première décision utile → première progression réelle**

Le trafic SEO est un canal d’acquisition, pas la preuve principale de valeur.

Ne pas introduire Supabase uniquement pour mesurer ce funnel.

---

# 16. PROGRAMME D’ALIMENTATION APRÈS V1

Après le tag, le socle doit devenir relativement calme.

Ajouter les capacités par **clusters complets** :

`besoin/objectif → ressource canonique → contenus/exercices liés → progression documentée → prescription exécutable → intégration éventuelle dans Aujourd’hui`

Candidats post-V1 :

- poussée verticale ;
- jambes unilatérales ;
- compression/L-sit ;
- rotation/anti-rotation ;
- mobilité structurée épaules/poignets/hanches/chevilles ;
- équilibre ;
- explosivité ;
- contrôle corporel.

Handstand et muscle-up peuvent progresser éditorialement avant d’entrer dans le moteur.

---

# 17. AFFILIATION ET MONÉTISATION

Principe durable :

> **besoin détecté → explication → options → achat éventuel**

L’affiliation doit être déclenchée par le graphe pédagogique, jamais ajoutée comme une couche publicitaire générique.

Ordre recommandé après V1 :

1. contenu réel ;
2. éventuellement mesure légère ;
3. catégories utiles au graphe : barre, anneaux, élastiques, parallettes ; lest uniquement quand justifié ;
4. disclosure claire ;
5. peu de partenaires au départ ;
6. mesure des clics/conversions ;
7. partenariats directs avec données réelles.

Un guide peut conclure qu’aucun achat n’est nécessaire. La rémunération ne doit jamais dicter une progression.

---

# 18. DONNÉES / BACKEND

Pas de Supabase nécessaire pour la V1.

À envisager seulement si comptes, synchronisation multi-appareils, sauvegarde durable, historique partagé ou personnalisation serveur apportent une vraie valeur.

---

# 19. HISTORIQUE RÉCENT IMPORTANT

Toujours vérifier GitHub pour l’état réel.

- #34 : cartes objectifs + CI PR.
- #35 : cadre mobile fixe + navigation basse.
- #36 : écran débutant + basePath images.
- #37 : `InfoDialog`, écrans décision sans scroll, correction CI.
- #38 : boucle Aujourd’hui + Fondations + logs locaux.
- #39 : résultats → décisions.
- #40 : diagnostic court.
- #41 : résumé séance.
- #42 : fréquence réelle + repos.
- #43 : progression conservatrice documentée.
- #44 : historique.
- #45 : fermée sans fusion.
- #46 : stagnation / `À revoir`.
- #47 : fermée sans fusion.
- #48 : système visuel sportif.
- #49 : objectif principal intégré.
- #50 : comparabilité exacte des prescriptions.
- #51 : recalibrage explicite.
- #52 : passation active rafraîchie.
- #53 : gainage + pont fessier.
- #54 : V1 Release Readiness + progression observable + robustesse locale.
- #55 : diagnostic tirage + unités d’historique.
- #56 : réévaluation sans suppression d’historique.
- #57 : décisions limitées au point de départ actuel.
- #58 : confidentialité + gate légal/commercial.
- #59 : grille mobile quatre exercices.

---

# 20. À NE PAS REFAIRE

- Ne pas reconstruire Calis comme app fitness générique.
- Ne pas élargir la V1 pour « tout couvrir ».
- Ne pas remplacer l’approche désir-first par un dashboard dense.
- Ne pas créer un questionnaire long.
- Ne pas remettre tout le texte à l’écran.
- Ne pas utiliser d’accordéons sur les écrans fixes de décision.
- Ne pas créer streaks, badges, confettis ou faux progrès.
- Ne pas supposer qu’un chiffre = technique propre.
- Ne pas afficher `Prêt à progresser` sans progression documentée et observable.
- Ne pas automatiser un changement de difficulté non stocké.
- Ne pas effacer l’historique lors d’un recalibrage ou d’une réévaluation.
- Ne pas faire contribuer l’ancien historique aux décisions du nouveau point de départ.
- Ne pas ramener la grille mobile à trois lignes tant que la séance a quatre mouvements.
- Ne pas créer Supabase juste parce que c’est possible.
- Ne pas copier visuellement un jeu ; reprendre seulement les principes UX utiles.
- Ne pas supprimer des contenus ou chemins utiles pour introduire une idée.
- Ne pas inventer d’identité ou de mentions légales.
- Ne pas activer analytics/affiliation avant leur gate de confidentialité/transparence.
- Ne pas laisser l’affiliation créer artificiellement des besoins.

---

# 21. PROMPT DE REPRISE

> **Consulte `INTEL.md` dans `ludodulac/Calis`, puis vérifie `main`, les PR ouvertes, la CI et le dernier déploiement Pages. Calis est en V1 Release Readiness : n’ajoute aucune nouvelle capacité sauf blocage réel du parcours débutant. Termine la validation du parcours mobile, la relecture pédagogique et les gates de release. Préserve l’historique mais limite les décisions au point de départ actuel. Quand les derniers contrôles sont réellement passés, matérialise une V1 stable ; ensuite seulement passe à l’alimentation par clusters, à l’analytics léger si utile et à l’affiliation déclenchée par les besoins pédagogiques.**
