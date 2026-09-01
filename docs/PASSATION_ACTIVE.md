# Calis — PASSATION ACTIVE

Dernière mise à jour : **1 septembre 2026**.

## Source de reprise prioritaire

La passation produit complète vit dans **`INTEL.md` à la racine du dépôt**. Le présent fichier résume la phase de travail active. Toujours vérifier GitHub avant d’agir : `main`, les PR et la CI restent la vérité opérationnelle.

Instruction recommandée dans une nouvelle conversation :

> **Consulte `INTEL.md`, puis vérifie l’état réel de `main`, des PR ouvertes et de la CI. Calis est en phase V1 Release Readiness : stabilise le parcours existant avant toute nouvelle capacité.**

## État opérationnel actuel

Dernier `main` vérifié avant ce lot : `020ef3c8b80cb87d23c4eeb1cf50aeaabb7f39ba`, fusion de #53.

Fusionné récemment :

- #38–#44 : boucle `Aujourd’hui`, résultats, diagnostic court, résumé, fréquence réelle, progression conservatrice et historique.
- #46 : détection prudente de stagnation avec état `À revoir`.
- #48 : langage visuel sportif global propre ; #47 fermé sans fusion.
- #49 : l’objectif principal (`traction`, `pompes`, `jambes`, fondations) influence la priorité sans retirer les autres fondations.
- #50 : plateau et progression ne comparent que des prescriptions réellement comparables.
- #51 : recalibrage volontaire vers une régression documentée, sans effacer l’historique.
- #52 : passation opérationnelle rafraîchie.
- #53 : Fondations élargies avec stabilité du tronc (`gainage`, 2 × 15–30 s) et première base de chaîne postérieure (`pont fessier`, 2 × 8–12), sans allonger les séances au-delà de quatre mouvements.

Ne jamais déduire les PR ouvertes de ce document : vérifier GitHub.

## Phase active : V1 Release Readiness

Calis n’est plus dans une phase où la priorité est d’élargir la carte des capacités. La V1 doit maintenant prouver que la petite partie de la callisthénie qu’elle promet fonctionne impeccablement de bout en bout.

**Règle de gel V1 : une nouvelle idée ou capacité n’a plus le droit de retarder la release sauf si son absence empêche réellement un débutant d’utiliser correctement le parcours existant.**

Donc, avant la release : pas de L-sit, pistol squat, front lever, HSPU, gros moteur mobilité, périodisation avancée, Supabase ou compte utilisateur.

### Définition de sortie

La V1 peut être déclarée stable quand une personne qui ne connaît pas Calis peut, sans explication du fondateur :

`Accueil → objectif → orientation → Aujourd’hui → diagnostic → séance A → résultats → résumé → retour ultérieur → séance B → résultats → repos → historique → décision/progression ou recalibrage`

et comprendre à chaque étape ce qu’elle doit faire maintenant.

Le test n’est pas seulement « est-ce que le code fonctionne ? », mais « est-ce que la personne sait quoi faire sans aide ? ». Pendant l’audit, toute réaction plausible du type « pourquoi ? », « je clique où ? », « combien ? », « c’est quoi ? » ou « maintenant quoi ? » est un signal à traiter.

## Règle de vérité des progressions

Une progression automatique exige **deux conditions simultanées** :

1. la prochaine étape est documentée ;
2. le critère qui la déclenche est observable dans les données réellement stockées par Calis.

La V1 ne mémorise pas la hauteur d’un support de pompe inclinée ni l’angle d’un rowing. Elle ne doit donc pas utiliser ces réglages invisibles pour déclencher automatiquement `pompes inclinées → pompes au sol` ou `rowing incliné → traction assistée`.

Les progressions automatiques conservées dans la V1 sont celles dont le critère est suffisamment représenté par la prescription stockée : `suspension → contrôle scapulaire` et `contrôle scapulaire → rowing incliné`.

Quand une borne haute est reproductible sans progression automatique fiable, l’état peut devenir **Base validée** au lieu de promettre une étape suivante fictive.

## Checklist de stabilisation V1

1. **Parcours utilisateur réel** — tester le scénario complet, les retours, fermetures/réouvertures, changement d’objectif, repos, historique, progression et recalibrage.
2. **Résilience locale** — vérifier ancien ou mauvais `localStorage`, données manquantes, rechargements et comportement sans compte. Une clé corrompue ne doit pas bloquer les autres données valides.
3. **Vérité pédagogique** — auditer transversalement toutes les prescriptions Fondations : séries, répétitions/durée, repos, fréquence, critères de passage, régressions, consignes d’arrêt et cohérence article ↔ moteur. Il ne faut pas chercher un chiffre universel parfait, mais supprimer toute contradiction interne.
4. **Décisions honnêtes** — ne jamais afficher `Prêt à progresser` si aucune prochaine étape documentée et observable n’existe. Une borne haute reproductible peut valider une base sans inventer une difficulté suivante.
5. **Production** — vérifier GitHub Pages, `basePath`, routes, liens, images, métadonnées/canonicals, erreurs console majeures et affichage mobile réel.
6. **Légal/commercial minimal** — avant traceurs ou affiliation : préparer mentions nécessaires, confidentialité selon les outils réellement utilisés et disclosure claire des liens commerciaux. Ne pas construire une usine à consentement sans traceurs qui la justifient.
7. **Mesure produit minimale** — choisir une mesure légère avant l’alimentation intensive du site, sans imposer un backend lourd.
8. **Documentation** — `INTEL.md`, cette passation et les documents canoniques doivent décrire la même V1 que le code.
9. **Release** — une fois les points bloquants corrigés et CI/production vérifiées, matérialiser la frontière par un tag/release V1 stable.

## KPI produit après release

Le trafic SEO reste un canal d’acquisition, mais le funnel central doit mesurer la capacité de Calis à transformer une intention en pratique :

`visiteur → objectif choisi → diagnostic terminé → première séance commencée → première séance terminée → deuxième séance → première décision utile → première progression réelle`

Une page à fort trafic qui n’amène personne à pratiquer peut avoir moins de valeur produit qu’une page plus petite qui conduit réellement vers la boucle d’entraînement.

## Après V1 : programme d’alimentation

Après le tag V1, le socle doit devenir relativement calme. Enrichir Calis **capacité par capacité**, pas comme une encyclopédie remplie au hasard :

1. besoin ou objectif utilisateur réel ;
2. ressource canonique solide ;
3. petit cluster de réponses/exercices liés ;
4. progression documentée lorsque possible ;
5. prescription exécutable seulement si elle est honnête ;
6. intégration dans `Aujourd’hui` seulement après ces étapes.

Candidats post-V1 : poussée verticale, jambes unilatérales, compression/L-sit, rotation/anti-rotation, mobilité structurée, équilibre, explosivité et contrôle corporel. Handstand et muscle-up peuvent continuer à vivre éditorialement avant d’entrer dans le moteur.

## Affiliation et commerce

Principe durable : **besoin détecté → explication → options → achat éventuel**.

L’affiliation doit être déclenchée par le graphe pédagogique, pas ajoutée comme une couche publicitaire générique. Exemple : si une étape de traction assistée bénéficie réellement d’un moyen de régler l’assistance, expliquer d’abord le besoin et les alternatives, puis seulement proposer un équipement pertinent.

Après V1 :

- commencer avec peu de catégories réellement utiles (barre, anneaux, élastiques, parallettes ; lest seulement quand le parcours le justifie) ;
- distinguer recommandation éditoriale et rémunération ;
- mesurer les clics/conversions avant de multiplier les partenaires ;
- utiliser les données réelles de trafic, parcours et conversion pour contacter ensuite des marques spécialisées ;
- ne jamais inventer un besoin matériel pour créer une opportunité commerciale.

Le commerce soutient la mission ; il ne doit pas décider du graphe pédagogique.

## Décisions à préserver

- Promesse : « Calis sait où j’en suis et sait quelle est ma prochaine étape. »
- Boucle : `diagnostic → programme → séance → mesure → décision → prochaine étape`.
- Architecture : `désir → objectif → capacité → progression`.
- Écrans de décision mobiles fixes ; secondaire en modale.
- Pas de streak, badge artificiel, faux progrès ou preuve sociale simulée.
- Progressions automatiques explicables, documentées et observables.
- Plateau = même prescription ; recalibrage = action explicite ; historique conservé.
- Stockage local-first tant que compte/sync n’apporte pas une vraie valeur.
- Sessions Fondations compactes : poussée, tirage, squat + une fondation tronc/chaîne postérieure selon la séance.
- Objectif principal = priorité, pas suppression des autres fondations.

## À ne pas refaire

- Ne pas repartir d’une architecture générique.
- Ne pas élargir la V1 pour « compléter » toute la callisthénie.
- Ne pas remettre tout le texte à l’écran.
- Ne pas ajouter de gamification artificielle.
- Ne pas automatiser des progressions non documentées ou basées sur un réglage non stocké.
- Ne pas transformer des critères qualitatifs en chiffres arbitraires.
- Ne pas effacer l’historique local lors d’un recalibrage simple.
- Ne pas introduire une infrastructure lourde sans besoin réel.
- Ne pas supprimer des contenus ou chemins utiles pour introduire une nouvelle idée.
- Ne pas laisser l’affiliation influencer artificiellement les besoins ou progressions.
