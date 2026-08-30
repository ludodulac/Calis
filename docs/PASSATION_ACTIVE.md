# Calis — PASSATION ACTIVE

Dernière mise à jour : 30 août 2026, fin de session.

Ce document est l'état opérationnel de reprise. Il complète les sources de vérité sans les remplacer. Toute nouvelle conversation doit commencer par `AI_START_HERE.md`, puis vérifier `main` et la CI avant d'agir.

## FAIT ET VÉRIFIÉ

### Produit / expérience

- Calis reste une plateforme francophone de progression en callisthénie, pas un blog générique ni une boutique en premier.
- Architecture mentale : **DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**.
- Boucle pédagogique : **désirer → essayer → comprendre → ressentir → réussir → vouloir aller plus loin**.
- Règle business : utilité et confiance avant monétisation ; une page peut conclure qu'aucun achat n'est nécessaire.
- Règle humaine : ne jamais inventer auteur, expertise, expérience vécue, test, témoignage, communauté ou partenariat.
- Règle d'évolution : préserver l'existant utile ; enrichir/réorganiser avant de supprimer.
- Règle d'idéation : **idée ≠ décision ≠ priorité**.

### Simplicité UX — décision prioritaire

Le fondateur a signalé qu'il ne comprenait pas assez facilement ce qu'il pouvait faire sur le site. La profondeur était correcte mais trop visible dans l'interface.

Décision durable : **le système peut être complexe, l'entrée doit être évidente**. Test : un enfant d'environ 11 ans ou une personne âgée peu familière de la callisthénie doit comprendre comment commencer.

Implémenté :
- navigation principale `Je débute / Choisir un objectif / Tout explorer` dans `components/site-header.tsx` ;
- accueil recentré sur « Qu'est-ce que tu aimerais réussir avec ton corps ? » avec choix traction, pompe, handstand, muscle-up, jambes, mobilité ;
- CTA évident « Je ne sais pas par où commencer » ;
- `/commencer` simplifié autour de situations humaines observables ;
- vocabulaire technique interne (`hub`, `cluster`, `capability`, etc.) non requis pour entrer dans le produit.

Cette décision est indexée dans `README.md`, `PRODUCT_VISION.md`, `INFORMATION_ARCHITECTURE.md`, `ROADMAP.md`, `AI_START_HERE.md` et l'historique de continuité.

### Contenu / graphe

Le modèle V1 est dans `lib/content/types.ts` et `lib/content/v1.ts`.

Hubs V1 actuels :
- `commencer` ;
- `tractions` ;
- `pompes` ;
- `dips` ;
- `handstand` ;
- `muscle-up`.

Le champ `next` matérialise déjà une première version du graphe. Ne pas créer une progression parallèle pour les futurs tests/outils.

Ressources et clusters déjà substantiels : Tractions, Pompes, Dips, Handstand ; niveau zéro/jambes/mobilité renforcés.

### Muscle-up — dernier cluster ajouté

Présent :
- hub `/muscle-up` ;
- `/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up` ;
- `/bibliotheque/traction-explosive` ;
- `/bibliotheque/tractions-lestees` ;
- `/bibliotheque/transition-muscle-up` ;
- liens vers fondations de traction et dips ;
- `docs/CLUSTER_MUSCLE_UP_STRATEGY.md` ;
- sitemap et modèle de contenu mis à jour.

Parcours actuel :
`tractions fiables → tirage haut/explosif → transition → poussée/appui → muscle-up`.

Décision scientifique : ne pas annoncer de nombre universel de tractions garantissant le muscle-up et ne pas reprendre des délais fixes de coaching comme vérités générales.

Sources spécifiques vérifiées pour la ressource transition :
- Liu et al., étude biomécanique du kipping bar muscle-up, DOI `10.3233/ATDE240589` : petit échantillon de 8 hommes gymnastes universitaires élites ; utile pour confirmer la complexité/coordination et analyser des phases, pas pour définir une technique universelle ;
- Walker et al., comparaison EMG ring/bar muscle-up, DOI `10.70252/FJQL7859`, PMID `38288256` : 10 hommes actifs ; confirme le muscle-up comme mouvement combinant tirage et poussée et compare le recrutement musculaire, mais ne fournit pas une progression universelle.

### Vérité visuelle

Échec utile conservé : une séquence photoréaliste IA d'entrée en handstand paraissait crédible mais représentait un mouvement faux.

Règle canonique : **une image pédagogique est une affirmation technique**.

Pour un mouvement complexe :
`référence réelle validée → images clés → représentation Calis → comparaison finale à la référence`.

Ne jamais utiliser une génération photoréaliste comme seule autorité pour une trajectoire, un bon/mauvais geste ou une installation de sécurité.

Documents : `ILLUSTRATION_SYSTEM.md`, `ILLUSTRATION_SOURCES.md`, `VISUAL_TRUTH_WORKFLOW.md`.

Premiers visuels existants : suspension à la barre, contrôle scapulaire, rowing incliné. Le prochain lot produit doit rendre l'identité visuelle beaucoup plus visible, en priorité sur les pages pédagogiques majeures.

### Santé / bien-être

La synthèse produit canonique est `docs/RECHERCHE_BESOINS_DESIRS_SANTE.md`.
`docs/USER_NEEDS_HEALTH_RESEARCH.md` reste le journal de recherche détaillé/provenance.

Règle : les communautés et forums détectent des problèmes humains, pas des preuves scientifiques.

Calis peut parler des bénéfices généraux de l'activité physique correctement sourcés mais :
- ne diagnostique pas douleur, blessure, maladie ou limitation ;
- ne promet pas de traitement ;
- ne remplace pas un professionnel de santé ;
- distingue effort attendu / difficulté / douleur inhabituelle sans identifier la cause ;
- renforce la prudence et les sources sur les pages santé/douleur/récupération.

Le footer global contient déjà la limite médicale permanente.

### Infrastructure réelle

- Next.js 16 / React 19 / TypeScript ;
- contenu versionné dans GitHub ;
- export statique ;
- GitHub Actions ;
- GitHub Pages avec `basePath` `/Calis` ;
- URL de test : `https://ludodulac.github.io/Calis/` ;
- cette URL n'est pas le domaine final ;
- futur domaine `.fr` seulement lorsque cela ajoute une valeur claire ;
- Supabase/Stripe/Cloudflare non nécessaires à la V1 actuelle.

`README.md` et `TECHNICAL_ARCHITECTURE.md` ont été corrigés pour ne plus présenter Cloudflare comme déploiement courant. Les mentions de Cloudflare dans le cahier des charges/master plan sont des hypothèses historiques/cibles ; pour l'état technique actuel, le code + `TECHNICAL_ARCHITECTURE.md` + CI priment.

### CI — incident corrigé

Un échec de CI a été détecté pendant la passation sur le commit `f9d444fc...` : `Resource.hub` n'acceptait pas `"muscle-up"` alors que le contenu l'utilisait.

Correction : `lib/content/types.ts` inclut désormais `"muscle-up"` dans l'union de `hub` (`eddb14e7...`).

Le dernier run de `main` doit impérativement être revérifié après le dernier commit de cette passation ; ne pas supposer qu'il est vert seulement parce que l'erreur de type a été corrigée.

## DOCUMENTATION / INDEXATION MISE À JOUR PENDANT LA PASSATION

- `AI_START_HERE.md` ajouté sur `main` comme point d'entrée obligatoire ;
- `README.md` : reprise IA, déploiement GitHub Pages actuel, simplicité UX ;
- `PRODUCT_VISION.md` : simplicité radicale comme principe produit ;
- `INFORMATION_ARCHITECTURE.md` : distinction navigation visible simple / architecture profonde ;
- `CONTENT_MODEL.md` : état V1 réel, hubs actuels, `next`, provenance visuelle ;
- `TECHNICAL_ARCHITECTURE.md` : réalité GitHub Pages, CI, future migration de domaine ;
- `ROADMAP.md` : état V1, priorités immédiates, UX et images ;
- `RECHERCHE_BESOINS_DESIRS_SANTE.md` : désigné comme synthèse canonique ;
- `HISTORIQUE_CONTINUITE_2026-08-30_FIN_SESSION.md` : évolution complète de cette phase ;
- PR #1 `docs: add AI project entrypoint and handoff protocol` fermée sans merge car son contenu a été intégré proprement sur le `main` plus récent.

## EN COURS

- La V1 est fonctionnellement déjà conséquente, mais son identité visuelle reste trop faible par rapport à l'ambition.
- La simplification de l'accueil/navigation vient d'être implémentée et doit être inspectée sur le site publié, surtout sur mobile.
- Le cluster Muscle-up est ouvert mais n'est pas terminé : la transition et le diagnostic existent ; la poussée spécifique au-dessus d'une barre droite peut encore être enrichie si elle apporte une vraie valeur.
- Les pages n'ont pas toutes le même niveau de densité, sources, dates et illustrations.

## OUVERT

### Priorité produit prochaine

1. Vérifier visuellement le site publié : accueil, `/commencer`, navigation principale, bibliothèque et muscle-up ; corriger uniquement les problèmes réels de lisibilité/navigation.
2. Commencer le vrai sprint d'images pédagogiques fiables : première traction, pompe, squat, handstand, puis muscle-up ; suivre strictement le workflow de vérité visuelle.
3. Continuer la densification par clusters sans pages fines ; privilégier les besoins les plus fréquents et les maillons manquants du graphe.
4. Faire ensuite un balayage transversal mobile/accessibilité/maillage/SEO technique.

### Contenu / produit futur

- front lever, planche, back lever, human flag, L-sit ;
- tests de niveau et visualisation du graphe en réutilisant le modèle existant ;
- guides équipement/affiliation uniquement lorsque contextuels ;
- commentaires/admin plus tard, si la boucle de mise à jour justifie une donnée dynamique ;
- branche PRATIQUER : étudier services existants de parcs, données/licences/partenariats avant toute base propre ;
- contributions de vraies personnes et vidéos du fondateur possibles plus tard avec attribution/qualification correcte.

### Technique / SEO

- favicon/icon/OG image ;
- 404 dédiée ;
- manifest si utile ;
- audit headings/alt/clavier/contrastes/mobile ;
- données structurées seulement lorsqu'elles correspondent réellement au contenu ;
- Search Console et domaine final plus tard ;
- lors du domaine final : mettre à jour `metadataBase`, canonicals, sitemap, robots, Open Graph et migration/redirects.

### Branches

Branches encore présentes :
- `docs/ai-start-here` ;
- `docs/ai-start-here-2` ;
- `tmp-pdf-storage` ;
- `tmp-pdf-storage-copy` ;
- `tmp-pdf-storage-copy2` ;
- `main`.

Les deux branches `docs/ai-start-here*` ne sont plus une source de vérité ; `AI_START_HERE.md` est désormais sur `main`. Les branches `tmp-pdf-storage*` sont du rangement temporaire historique. Elles peuvent être nettoyées plus tard si un outil de suppression de branche est disponible, mais ne constituent pas un blocage produit.

Issues ouvertes au moment du contrôle : aucune.
PR ouverte au moment du contrôle : aucune (PR #1 fermée pendant la passation).

## DÉCISIONS À PRÉSERVER

- **Utile → honnête → humain.**
- Capacité avant apparence.
- SEO comme acquisition importante, mais people-first et sans usine à pages.
- Le visiteur part de son désir/situation, pas de notre taxonomie.
- Micro-progrès visibles avant le résultat final.
- Complexité derrière l'interface.
- Pas de faux expert/personnalité/communauté/test.
- Pas de vente forcée ; zéro produit peut être la bonne recommandation.
- Pas de dépendance TikTok/Reels pour faire fonctionner l'acquisition.
- Minimum de travail humain récurrent : automatiser ce qui peut l'être sans sacrifier qualité/fiabilité.
- Idées spontanées du fondateur = signaux à évaluer.
- Préserver l'existant utile.
- Visuel complexe = vraie référence avant stylisation.
- Santé = information générale, jamais diagnostic/traitement.

## LIMITATIONS / INCERTITUDES

- La littérature scientifique spécifique à plusieurs skills de callisthénie, notamment muscle-up, reste limitée et porte souvent sur de petits échantillons : garder une formulation prudente.
- Les signaux Reddit/forums sont qualitatifs et non représentatifs statistiquement.
- Les premières illustrations Calis ne suffisent pas encore à créer une identité visuelle riche à l'échelle du site.
- Le site est actuellement sur une URL GitHub Pages de test, donc les décisions SEO de domaine final restent à faire.
- `CAHIER_DES_CHARGES.md` et certaines sections historiques de `MASTER_PLAN.md` mentionnent Cloudflare comme cible ; cela ne décrit pas l'hébergement actuel. La règle de priorité documentaire dans `AI_START_HERE.md` évite l'ambiguïté sans effacer l'historique utile.
- `USER_NEEDS_HEALTH_RESEARCH.md` et `RECHERCHE_BESOINS_DESIRS_SANTE.md` se chevauchent volontairement désormais avec rôles distincts : journal détaillé vs synthèse canonique.

## PROCHAINE ÉTAPE RECOMMANDÉE

**Après vérification d'une CI finale verte : inspecter le site publié et lancer un sprint visuel/pédagogique, pas une nouvelle refonte d'architecture.**

Le meilleur prochain lot est :
- contrôle réel accueil/commencer/mobile ;
- 2 à 4 illustrations pédagogiques fiables sur les pages prioritaires ;
- correction du maillage/UX observé pendant ce contrôle ;
- puis reprise de la densification du graphe.

## À NE PAS REFAIRE

- Ne pas repartir de zéro.
- Ne pas transformer Calis en blog chronologique.
- Ne pas remettre une taxonomie complexe au premier écran.
- Ne pas supprimer du contenu utile sous prétexte de simplification.
- Ne pas créer des centaines de pages SEO faibles.
- Ne pas introduire Supabase/Stripe/Cloudflare par anticipation.
- Ne pas simuler une personne, expertise ou communauté.
- Ne pas utiliser l'IA générative comme autorité biomécanique d'une séquence complexe.
- Ne pas afficher des seuils/timelines de coaching comme normes scientifiques universelles.
- Ne pas bâtir une carte de parcs sans étudier les bases/services/licences existants.

## CONTRÔLE DE PASSATION

Avant de déclarer cette passation terminée, vérifier à nouveau :
- `main` pointe sur le dernier commit de passation ;
- `AI_START_HERE.md` existe sur `main` ;
- aucune PR/issue pertinente ouverte n'est oubliée ;
- sitemap inclut les hubs/routes actuels et `v1Resources` alimente les routes éditoriales ;
- `Resource.hub` accepte `muscle-up` ;
- les deux DOI de la page transition muscle-up sont valides et les limites sont explicites ;
- la dernière CI GitHub Pages de `main` est **completed / success** ;
- si le site est publié par ce run, l'URL de test répond ensuite sur `https://ludodulac.github.io/Calis/`.
