# Calis — PASSATION ACTIVE

Dernière mise à jour : **1 septembre 2026**.

## Source de reprise prioritaire

La passation produit complète vit dans **`INTEL.md` à la racine du dépôt**. Ce fichier résume seulement la phase de travail active. Toujours vérifier GitHub avant d’agir : `main`, les PR ouvertes, la CI et les déploiements Pages restent la vérité opérationnelle.

Instruction recommandée :

> **Consulte `INTEL.md`, puis vérifie `main`, les PR ouvertes, la CI et le dernier déploiement Pages. Calis est en V1 Release Readiness : ne rajoute aucune capacité tant qu’un blocage du parcours existant n’est pas démontré.**

## État opérationnel actuel

Dernier `main` vérifié avant ce lot documentaire : **`65624637d85b4e60061ea1802ba84c8d92b24a1d`**, fusion de **#59**.

Le déploiement GitHub Pages de #59 a été vérifié vert : install, typecheck, build statique, artefact Pages et déploiement final ont réussi.

PR récentes :

- #46 : stagnation prudente avec `À revoir` ;
- #48 : langage visuel sportif propre ; #47 fermé sans fusion ;
- #49 : objectif principal dans le programme sans suppression des autres fondations ;
- #50 : comparabilité exacte des prescriptions ;
- #51 : recalibrage volontaire et documenté ;
- #52 : passation opérationnelle rafraîchie ;
- #53 : gainage + pont fessier dans Fondations ;
- #54 : passage officiel en **V1 Release Readiness**, gel du périmètre, décisions `Base validée`, suppression des progressions basées sur des réglages non observés, stockage local durci ;
- #55 : diagnostic tirage plus fidèle + unités de durée dans l’historique ;
- #56 : refaire le diagnostic ne supprime plus les séances ;
- #57 : l’historique complet reste visible, mais seules les séances postérieures au point de départ actuel alimentent les décisions et progressions ;
- #58 : page publique `/confidentialite`, lien footer, sitemap et gate légal/commercial documenté ;
- #59 : correction mobile critique : la grille `Aujourd’hui` réserve bien quatre lignes pour les quatre exercices Fondations.

Ne jamais déduire les PR ouvertes de ce document : vérifier GitHub.

## Phase active : V1 Release Readiness

Calis n’a plus besoin d’élargir la callisthénie avant de sortir. La V1 doit prouver que le parcours déjà promis fonctionne impeccablement.

**Règle de gel : une nouvelle idée ou capacité ne doit pas retarder la V1 sauf si son absence empêche réellement un débutant d’utiliser correctement le parcours existant.**

Avant le tag V1 : pas de L-sit, pistol squat, front lever, HSPU, gros moteur mobilité, périodisation avancée, Supabase, compte utilisateur ou synchronisation.

### Parcours de sortie

`Accueil → objectif → orientation → Aujourd’hui → diagnostic → séance A → résultats → résumé → retour ultérieur → séance B → résultats → repos → historique → décision/progression ou recalibrage`

Le test n’est pas seulement « le code compile ». Une personne sans contexte doit comprendre quoi faire maintenant, combien, pourquoi et ce qui vient ensuite.

## Vérité des progressions

Une progression automatique exige simultanément :

1. une prochaine étape documentée ;
2. un critère observable dans les données réellement stockées.

La V1 ne stocke ni hauteur de support de pompe inclinée ni angle de rowing. Elle ne doit donc pas automatiser `pompes inclinées → pompes au sol` ou `rowing incliné → traction assistée` à partir de nombres qui pourraient provenir d’un réglage différent.

Progressions automatiques conservées :

- `suspension → contrôle scapulaire` ;
- `contrôle scapulaire → rowing incliné`.

Quand la borne haute est reproductible sans suite automatique fiable, utiliser **Base validée** plutôt que fabriquer une progression.

## Historique, réévaluation et décision

L’historique de pratique est conservé lors :

- d’un recalibrage ;
- d’une nouvelle passation du diagnostic.

Mais **conserver l’historique ne signifie pas le réutiliser indéfiniment pour décider**. Depuis #57 :

- `Ma progression` peut afficher les anciennes séances ;
- `Continue`, `À revoir`, `Base validée` et les progressions n’utilisent que les séances enregistrées depuis le point de départ actuel ;
- un recalibrage ouvre donc une nouvelle fenêtre de décision sans effacer la mémoire ;
- les deux séances déjà faites dans la semaine continuent toutefois à compter pour la limite hebdomadaire, afin qu’une réévaluation ne crée pas artificiellement du volume supplémentaire.

Une suppression totale de l’historique, si elle existe un jour, doit être une action distincte et explicitement destructive.

## Résilience locale

Clés principales :

- `calis.training.v2.logs` ;
- `calis.training.v2.assessment` ;
- `calis.training.v2.goal`.

Les JSON, structures et timestamps sont validés avant usage. Une clé cassée ne doit pas empêcher les autres données valides de fonctionner.

## Vérité pédagogique

Audit transversal V1 : séries, répétitions/durée, repos, fréquence, critères de passage, régressions, consignes d’arrêt et cohérence bibliothèque ↔ moteur.

Les fiches génériques tirage/squat restent volontairement qualitatives là où aucun seuil universel n’est défendable. Les nouvelles fiches chiffrées sont alignées avec le moteur :

- gainage : **2 × 15–30 s**, repos 60 s ;
- pont fessier : **2 × 8–12**, repos 90 s.

La traction négative reste sans « chrono magique ».

## Mobile / production

Le téléphone reste un cadre d’application fixe sur les écrans de décision. Les informations secondaires passent par `InfoDialog`.

Après #53, les séances ont quatre mouvements. #59 corrige l’ancien `grid-template-rows: repeat(3, …)` : la grille mobile réserve désormais quatre lignes, ce qui évite que le quatrième exercice tombe dans une ligne implicite sous `overflow: hidden`.

Production déjà vérifiée pendant Release Readiness :

- GitHub Pages déploie correctement `main` ;
- `basePath /Calis` cohérent ;
- routes critiques présentes dans l’artefact ;
- `robots.txt` et `sitemap.xml` générés ;
- canonicals cohérents ;
- contrôle statique d’environ 1 000 références internes sans lien cassé ;
- toutes les URLs déclarées dans le sitemap correspondent à une sortie statique.

`/aujourdhui` reste volontairement hors sitemap : c’est une vue applicative/personnalisée, pas une landing SEO principale.

## Confidentialité / légal / commerce

La V1 actuelle :

- pas de compte Calis ;
- pas de base de données Calis pour les séances ;
- stockage local sur l’appareil ;
- aucun analytics, pixel publicitaire ou traceur comportemental tiers détecté dans le code lors de la revue #58 ;
- pas d’affiliation active dans le moteur.

La page publique **`/confidentialite`** décrit cet état.

Voir **`docs/V1_RELEASE_LEGAL.md`** pour le gate avant lancement commercial, analytics ou affiliation.

Ne pas inventer les mentions légales. Il manque encore les vraies informations d’éditeur / contact nécessaires pour finaliser cette partie selon le statut réel du projet.

Pas de bannière de consentement artificielle tant qu’aucun traceur non essentiel n’est ajouté. Toute activation future d’analytics, publicité, retargeting, bouton social traçant ou outil tiers doit déclencher la revue confidentialité/consentement **avant** activation.

## Ce qui reste avant le tag V1 stable

Les gros blocs techniques ont désormais été traités. Les derniers gates sont :

1. **validation finale du parcours réel** sur téléphone : diagnostic, quatre exercices, saisie, résumé, fermeture/réouverture, séance suivante, repos, historique, recalibrage ;
2. **inspection visuelle finale** des petits écrans et modales après #59 ;
3. **relecture finale des prescriptions Fondations** pour vérifier qu’aucun texte n’a divergé depuis les derniers correctifs ;
4. **informations réelles d’éditeur/contact** pour finaliser les mentions légales si le lancement public les exige ;
5. décider si la V1 sort **sans analytics** — option parfaitement acceptable — ou choisir plus tard une mesure légère après revue confidentialité ;
6. reconfirmer `main`, aucune PR ouverte, CI et Pages verts ;
7. créer alors le **tag/release V1 stable**.

L’absence d’analytics ou d’affiliation **ne bloque pas** le tag si ces fonctionnalités restent désactivées. Leurs gates deviennent obligatoires avant leur activation ultérieure.

## KPI après release

Funnel cible :

`visiteur → objectif → diagnostic → séance 1 commencée → séance 1 terminée → séance 2 → décision utile → progression réelle`

Le trafic SEO est un canal d’acquisition, pas la preuve principale de valeur.

## Après V1 : alimentation du site

Après le tag, le socle doit devenir relativement calme. Ajouter les capacités par clusters :

`besoin utilisateur → ressource canonique → contenus/exercices liés → progression documentée → prescription exécutable → intégration éventuelle dans Aujourd’hui`

Candidats : poussée verticale, jambes unilatérales, compression/L-sit, rotation/anti-rotation, mobilité structurée, équilibre, explosivité, contrôle corporel.

Handstand et muscle-up peuvent continuer à progresser éditorialement avant d’entrer dans le moteur.

## Affiliation

Principe durable : **besoin détecté → explication → options → achat éventuel**.

Commencer après V1 avec peu de catégories réellement utiles : barre, anneaux, élastiques, parallettes ; lest seulement lorsque le graphe le justifie. Disclosure claire avant tout lien rémunéré. Mesurer les clics/conversions avant de multiplier les partenaires. Utiliser ensuite de vraies données pour contacter des marques spécialisées.

Un guide peut conclure qu’aucun achat n’est nécessaire.

## Décisions à préserver

- Promesse : « Calis sait où j’en suis et sait quelle est ma prochaine étape. »
- Boucle : `diagnostic → programme → séance → mesure → décision → prochaine étape`.
- Architecture : `désir → objectif → capacité → progression`.
- Écrans de décision mobiles fixes ; secondaire en modale.
- Pas de streak, badge artificiel, faux progrès ou preuve sociale simulée.
- Progressions automatiques documentées **et observables**.
- Plateau = même prescription.
- Recalibrage = action explicite.
- Historique conservé, mais décisions limitées au point de départ actuel.
- Réévaluation ≠ suppression des séances.
- Stockage local-first tant que compte/sync n’apporte pas une vraie valeur.
- Sessions Fondations compactes : quatre mouvements.
- Objectif principal = priorité, pas suppression des autres fondations.
- Affiliation = conséquence d’un besoin pédagogique, jamais source du besoin.

## À ne pas refaire

- Ne pas élargir la V1 pour « compléter » toute la callisthénie.
- Ne pas reconstruire une app fitness générique.
- Ne pas remettre tout le texte sur les écrans de décision.
- Ne pas ajouter de gamification artificielle.
- Ne pas automatiser des progressions basées sur un réglage non stocké.
- Ne pas transformer des critères qualitatifs en chiffres arbitraires.
- Ne pas effacer l’historique lors d’un recalibrage ou d’une réévaluation.
- Ne pas faire contribuer les anciennes séances aux décisions du nouveau point de départ.
- Ne pas introduire Supabase ou une infrastructure lourde sans besoin réel.
- Ne pas inventer d’identité ou de mentions légales.
- Ne pas ajouter analytics/affiliation avant leur gate de confidentialité/transparence.
- Ne pas supprimer des contenus ou chemins utiles pour ajouter une nouvelle idée.
