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

Dernier `main` vérifié avant le lot Release Readiness : `020ef3c8b80cb87d23c4eeb1cf50aeaabb7f39ba`, merge #53. Ne jamais supposer que ce SHA est encore courant sans vérifier GitHub.

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

Calis a changé de catégorie : `/aujourdhui`, le diagnostic court, les prescriptions, les logs locaux, l’historique, les décisions, la fréquence réelle, la progression conservatrice, la stagnation et le recalibrage forment désormais une première boucle d’entraînement fonctionnelle.

**La priorité n’est plus d’élargir les capacités. La priorité est de rendre la petite promesse V1 impeccable de bout en bout.**

Règle de gel :

> **Une nouvelle idée ou capacité n’a plus le droit de retarder la V1 sauf si son absence empêche réellement un débutant d’utiliser correctement le parcours existant.**

Avant la release : pas de L-sit, pistol squat, front lever, HSPU, gros moteur mobilité, périodisation avancée, Supabase, comptes ou synchronisation.

Le test mental : demain, donner Calis à 20 personnes qui ne connaissent pas le projet, sans le fondateur derrière elles. Elles doivent comprendre quoi faire.

Scénario de sortie :

`Accueil → objectif → orientation → Aujourd’hui → diagnostic → séance A → résultats → résumé → fermeture/retour ultérieur → séance B → résultats → repos → historique → progression ou recalibrage`

Toute réaction plausible « Hein ? », « Pourquoi ? », « Je clique où ? », « Combien ? », « C’est quoi ce terme ? », « Maintenant quoi ? » est un signal de stabilisation.

Une fois le parcours, la pédagogie, la production et la CI validés, matérialiser la frontière par un **tag/release V1 stable**. À partir de là, les nouvelles capacités alimentent le produit après la V1 au lieu de repousser sa définition.

---

# 3. PRINCIPES PRODUIT NON NÉGOCIABLES

## Simplicité

- peu de mots et de boutons ;
- un bouton = une idée ;
- grandes zones tactiles ;
- hiérarchie immédiate ;
- faible charge cognitive ;
- Content Design + Progressive Disclosure + UX Writing ;
- corriger l’interface avant d’ajouter du texte explicatif.

## Honnêteté

- pas de streaks, badges artificiels, faux progrès, experts fictifs, témoignages inventés ou preuve sociale simulée ;
- la récompense est une capacité réelle ;
- un nombre ne permet pas de déduire la technique, une blessure, la douleur ou la fatigue globale ;
- toute décision automatique doit être explicable à partir des données réellement disponibles.

## Santé

Calis donne de l’information générale sur l’activité physique et l’apprentissage des mouvements. Il ne diagnostique pas et ne remplace pas un professionnel de santé.

---

# 4. UX MOBILE

Le téléphone est un cadre d’application fixe pour les écrans de décision :

- document principal sans scroll ;
- header/navigation stables ;
- intention principale visible dans l’écran ;
- pas d’accordéons qui allongent la page ;
- informations secondaires dans `InfoDialog` ;
- si elles sont longues, la modale défile, pas l’écran principal.

Les articles longs peuvent défiler dans la zone de contenu.

Navigation : Accueil / Aujourd’hui / Bibliothèque ; « Je débute » reste accessible vers `/commencer`.

Direction visuelle fusionnée (#48) : base neutre, couleurs d’orientation limitées, bordures franches, tactilité légère, géométrie cohérente. S’inspirer de la lisibilité d’un bon jeu mobile, jamais de son habillage ou de sa gamification.

---

# 5. CHEMINS CANONIQUES

Source : `lib/content/v1.ts`.

## Traction

**suspension → contrôle scapulaire → rowing incliné → traction assistée → négatives → première traction → plusieurs tractions**

Slugs : `suspension-barre`, `controle-scapulaire`, `rowing-incline`, `traction-assistee`, `traction-negative`, `premiere-traction`, `10-tractions`.

## Pompe

**pompes inclinées → première pompe → pompe stable**

Ressources : `pompes-inclinees`, `premiere-pompe`, `pompe-technique`.

## Handstand

**préparation des appuis → mur → premiers équilibres libres**.

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
- `app/aujourdhui/page.tsx`
- `app/aujourdhui/today.module.css`

Persistence : **localStorage**, sans compte ni Supabase. Clés principales : `calis.training.v2.logs`, `calis.training.v2.assessment`, `calis.training.v2.goal`.

Programme Fondations : **2 séances par semaine**, quatre mouvements par séance pour rester exécutable et compatible avec l’écran mobile fixe.

Diagnostic : **3 questions**, poussée, tirage, squat. L’objectif principal est porté par le parcours/URL/stockage et ne rallonge pas le diagnostic.

L’objectif (`traction`, `pompes`, `jambes`, fondations) change la priorité de la séance mais ne supprime pas les autres fondations.

Couverture V1 actuelle :

- poussée horizontale ;
- tirage/suspension ;
- squat bilatéral ;
- stabilité du tronc / anti-extension avec gainage ;
- première base de chaîne postérieure avec pont fessier.

Le programme ne prétend pas être une couverture complète du corps ou de toute la callisthénie.

Quand les deux séances prévues sont faites dans la semaine : **« Aujourd’hui : repos »**. Pas de troisième séance artificielle.

Après `Terminer`, le résumé affiche résultats, décisions, éventuelle progression documentée et prochaine séance/repos. `Ma progression` donne accès à l’historique réel sans surcharger l’écran.

---

# 7. PRESCRIPTIONS FONDATIONS ET VÉRITÉ PÉDAGOGIQUE

Le passage Release Readiness doit auditer toutes les prescriptions transversalement : séries, répétitions/durée, repos, fréquence, critères de passage, régressions, consignes d’arrêt et cohérence article ↔ moteur.

Le but n’est pas de trouver un chiffre scientifiquement universel. Le but est de ne jamais avoir une contradiction interne ou une fausse précision.

Nouvelles bases #53 :

- gainage : **2 × 15–30 s**, repos 60 s ; le chrono sert à rendre la séance comparable, pas à créer un record ;
- pont fessier : **2 × 8–12**, repos 90 s ; quand la borne haute est reproductible, la base peut être considérée disponible sans inventer automatiquement une variante suivante.

Même principe pour les autres mouvements : une prescription chiffrée rend la pratique exécutable ; elle ne doit pas être présentée comme une vérité universelle si elle ne l’est pas.

La traction négative reste volontairement documentée sans « chrono magique ». Ne pas transformer un critère qualitatif en seuil arbitraire uniquement pour automatiser le moteur.

---

# 8. MOTEUR DE DÉCISION

États fonctionnels :

- `À découvrir` ;
- `Continue` ;
- `Facilite un peu` ;
- `Prêt à progresser` lorsqu’une prochaine étape documentée existe ;
- `À revoir` pour une stagnation prudente ;
- une base peut être indiquée comme validée sans promettre une progression automatique lorsqu’aucune étape suivante n’est documentée.

Règles :

1. pas de résultat → découvrir ;
2. dernier passage sous la borne minimale → faciliter ;
3. borne haute sur deux passages **avec la même prescription** → progression seulement si une transition est documentée ;
4. quatre passages comparables dans la zone sans amélioration nette → `À revoir` ;
5. sinon → continuer.

Les logs récents mémorisent le snapshot de prescription (séries, min, max, unité). Les anciens logs restent lisibles mais ne déclenchent pas progression/plateau s’ils ne permettent pas une comparaison exacte.

---

# 9. PROGRESSION ET RECALIBRAGE

Progressions automatiques documentées :

- suspension → contrôle scapulaire ;
- contrôle scapulaire → rowing incliné ;
- rowing incliné → traction assistée ;
- pompes inclinées → pompes au sol.

Ne pas inventer de transition automatique pour squat, pompes au sol au-delà du cadre actuel, traction libre, gainage, pont fessier ou toute autre capacité non modélisée.

`À revoir` peut proposer une régression **uniquement si elle est documentée par le modèle actuel**. L’utilisateur doit l’appliquer explicitement. Les logs ne sont pas effacés.

Régressions actuellement explicites notamment : pompe au sol → inclinée ; rowing → contrôle scapulaire ; contrôle scapulaire → suspension ; squat complet → amplitude plus courte dans le cadre prévu.

---

# 10. CHECKLIST V1 RELEASE READINESS

Avant de dire « V1 stable » :

1. parcours complet sans assistance ;
2. résilience localStorage/rechargement/retour ultérieur ;
3. vérité pédagogique article ↔ moteur ;
4. aucune décision qui promet une progression inexistante ;
5. GitHub Pages réel, `basePath`, routes, liens, images ;
6. métadonnées, canonicals et erreurs console majeures ;
7. comportement mobile réel des écrans fixes et modales ;
8. minimum légal/confidentialité adapté aux outils réellement utilisés ;
9. disclosure affiliation avant liens rémunérés ;
10. mesure produit minimale sans backend disproportionné ;
11. documentation alignée ;
12. CI install/typecheck/build verte ;
13. tag/release V1 stable après validation.

Une fonctionnalité nouvelle qui ne corrige pas un blocage de ce parcours attend l’après-V1.

---

# 11. KPI ET ANALYTICS APRÈS RELEASE

Le trafic est utile pour l’acquisition mais ne doit pas devenir le KPI principal du produit.

Funnel à instrumenter progressivement :

**visiteur → objectif choisi → diagnostic terminé → première séance commencée → première séance terminée → deuxième séance → première décision utile → première progression réelle**.

Une page SEO à fort trafic qui ne mène jamais vers la pratique peut avoir moins de valeur produit qu’une page plus petite qui amène réellement des personnes dans la boucle d’entraînement.

Ne pas introduire Supabase uniquement pour mesurer ce funnel. Choisir d’abord la solution la plus légère compatible avec confidentialité et besoin réel.

---

# 12. PROGRAMME D’ALIMENTATION APRÈS V1

Après le tag V1, le socle doit devenir relativement calme. Ajouter les capacités par **clusters complets**, pas en remplissant une encyclopédie :

`besoin/objectif → ressource canonique → exercices/questions liés → progression documentée → prescription exécutable → intégration éventuelle dans Aujourd’hui`

Candidats post-V1 : poussée verticale, jambes unilatérales, compression/L-sit, rotation/anti-rotation, mobilité structurée épaules/poignets/hanches/chevilles, équilibre, explosivité, contrôle corporel.

Handstand et muscle-up peuvent continuer à progresser éditorialement sans être injectés dans `Aujourd’hui` tant que les prescriptions et règles de progression ne sont pas assez solides.

---

# 13. AFFILIATION ET MONÉTISATION

Principe durable :

> **besoin détecté → explication → options → achat éventuel**

L’affiliation doit être déclenchée par le graphe pédagogique. Exemple : une personne arrive à une étape où régler une assistance est réellement utile ; Calis explique le besoin, précise les alternatives, puis peut proposer un équipement pertinent.

Ne pas transformer Calis en catalogue « meilleurs produits 2026 » déconnecté de la pratique.

Ordre après V1 :

1. suffisamment de contenu réel et utile ;
2. analytics/mesure légère ;
3. quelques catégories directement reliées au graphe : barre, anneaux, élastiques, parallettes ; lest seulement quand le parcours le justifie ;
4. disclosure claire de l’affiliation ;
5. commencer avec peu de partenaires/programmes ;
6. mesurer clics et conversions ;
7. avec de vraies données d’audience et de conversion, contacter ensuite des marques spécialisées pour partenariats directs, codes, tests ou sponsoring clairement identifié.

Un guide peut conclure qu’aucun achat n’est nécessaire. La rémunération ne doit jamais dicter une progression.

---

# 14. DONNÉES / BACKEND

Pas de Supabase nécessaire pour la V1 locale.

À envisager plus tard uniquement si comptes, synchronisation multi-appareils, sauvegarde durable, historique partagé ou personnalisation serveur apportent une vraie valeur.

Le prototype local doit continuer à valider le modèle avant de figer un schéma serveur.

---

# 15. STACK / PRODUCTION

Stack : Next.js 16, React 19, TypeScript, export statique, GitHub Actions, GitHub Pages, `basePath /Calis`.

Le workflow PR vérifie notamment install, typecheck et build. Pas de lockfile npm ; ne pas réintroduire un cache setup-node dépendant d’un lockfile absent.

Ne jamais confondre build vert et production vérifiée : Release Readiness doit aussi tester le site réellement déployé.

---

# 16. HISTORIQUE RÉCENT IMPORTANT

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
- #44 : Ma progression + historique.
- #45 : fermée sans fusion, remplacée.
- #46 : stagnation / `À revoir`, fusionnée.
- #47 : fermée sans fusion car branche bruyante.
- #48 : système visuel sportif propre, fusionné.
- #49 : objectif principal intégré au programme.
- #50 : comparabilité exacte des prescriptions.
- #51 : recalibrage explicite après plateau.
- #52 : passation active rafraîchie.
- #53 : gainage + pont fessier dans les Fondations.

---

# 17. À NE PAS REFAIRE

- Ne pas reconstruire Calis comme app fitness générique.
- Ne pas élargir la V1 pour « tout couvrir ».
- Ne pas remplacer l’approche désir-first par un dashboard dense.
- Ne pas créer un questionnaire long.
- Ne pas remettre tout le texte à l’écran.
- Ne pas utiliser d’accordéons sur les écrans fixes de décision.
- Ne pas créer de streaks, badges, confettis ou faux progrès.
- Ne pas supposer qu’un chiffre = technique propre.
- Ne pas afficher `Prêt à progresser` sans progression documentée.
- Ne pas automatiser une transition non documentée.
- Ne pas créer Supabase juste parce que c’est possible.
- Ne pas copier visuellement Clash Royale ; reprendre seulement les principes UX.
- Ne pas supprimer des contenus ou chemins utiles pour introduire une idée.
- Ne pas laisser l’affiliation créer artificiellement des besoins.
- Ne pas réintégrer des visuels techniques non validés.

---

# 18. PROMPT DE REPRISE

> **Consulte `INTEL.md` dans `ludodulac/Calis`, puis vérifie `main`, les PR ouvertes et la CI. Calis est en V1 Release Readiness : n’ajoute aucune nouvelle capacité sauf si elle corrige un blocage réel du parcours débutant. Audite le parcours complet, la vérité pédagogique des prescriptions, la résilience locale et la production. Corrige par lots propres, PR → CI → fusion. Quand le parcours existant est fiable de bout en bout, matérialise une V1 stable ; ensuite seulement passe au programme d’alimentation par clusters et à l’affiliation déclenchée par les besoins pédagogiques.**
