# Calis — historique de continuité, fin de session du 30 août 2026

Ce document complète `HISTORIQUE_FONDATEUR_2026-08-30.md`. Il ne remplace ni le cahier des charges ni les documents spécialisés. Il conserve les décisions et apprentissages de la phase de densification V1 qui vient de se terminer.

## 1. Accélération de la V1

La demande est de construire rapidement un actif déjà conséquent, sans sacrifier la qualité ni produire des pages SEO faibles. La méthode retenue est le travail par sprints cohérents : un hub ou problème utilisateur, les ressources qui le débloquent, le maillage/modèle, puis vérification technique.

État atteint : les clusters Tractions, Pompes, Dips et Handstand sont déjà substantiels ; le cluster Muscle-up a été ouvert ; la page débutant, la mobilité et les jambes ont été renforcées. Le graphe de progression n'est plus seulement une idée : `lib/content/v1.ts` relie plusieurs ressources par `next` et sert de première couche structurée réutilisable pour de futurs tests/parcours.

## 2. Cluster Muscle-up

Le muscle-up est le premier objectif spectaculaire avancé utilisé comme destination reliée à plusieurs capacités déjà présentes.

Parcours éditorial actuel :

`tractions fiables → tirage haut/explosif → transition → poussée/appui → muscle-up`

Éléments créés :
- hub `/muscle-up` ;
- diagnostic `/bibliotheque/pourquoi-je-narrive-pas-a-faire-un-muscle-up` ;
- ressource `/bibliotheque/traction-explosive` ;
- ressource `/bibliotheque/tractions-lestees` ;
- ressource `/bibliotheque/transition-muscle-up` ;
- maillage vers les dips et les fondations de tirage ;
- stratégie documentée dans `CLUSTER_MUSCLE_UP_STRATEGY.md`.

Décision importante : ne pas publier de règle universelle du type « X tractions garantissent un muscle-up ». Les seuils trouvés dans les contenus de coaching sont variables et doivent être traités comme heuristiques pratiques, pas comme loi biomécanique. La littérature spécifique au muscle-up reste limitée : les affirmations détaillées de technique doivent être prudentes et mieux étayées avant d'être multipliées.

## 3. Vérité visuelle

Une séquence photoréaliste générée représentant une entrée en handstand paraissait crédible visuellement mais était techniquement fausse. Cet échec a été transformé en règle produit plutôt que caché.

Règle retenue : **une image pédagogique est une affirmation technique**. Pour une trajectoire complexe, l'IA générative ne doit jamais inventer seule les positions intermédiaires.

Hiérarchie de confiance :
1. vraie photo/vidéo validée du mouvement ;
2. future vidéo/photo originale du fondateur si adaptée et correctement qualifiée ;
3. contribution réelle d'un coach/pratiquant avec autorisation et crédit ;
4. source pédagogique/scientifique ou historique vérifiée ;
5. illustration Calis dérivée de positions validées ;
6. génération photoréaliste seulement pour ambiance/concept, jamais comme seule preuve technique d'une séquence complexe.

Workflow canonique : `mouvement réel validé → images clés → représentation Calis → comparaison finale à la référence`.

Voir `ILLUSTRATION_SYSTEM.md` et `VISUAL_TRUTH_WORKFLOW.md`.

Le système visuel doit maintenant commencer à être visible davantage sur le site. Il existe déjà des illustrations pour la suspension, le contrôle scapulaire et le rowing incliné, mais le visiteur ne perçoit pas encore assez une identité visuelle Calis. Priorité : enrichir progressivement première traction, pompe, squat, handstand puis muscle-up, sans mettre une image là où elle n'ajoute rien.

## 4. Besoins humains et santé

La recherche qualitative internet et la littérature institutionnelle ont renforcé plusieurs besoins : vrai niveau zéro, direction claire, absence de jugement, progression visible avant le résultat final, pratique avec peu de matériel, compréhension de la technique, peur de se blesser, découragement quand les progrès semblent lents.

Synthèse produit :

> Le visiteur ne cherche pas seulement un exercice. Il cherche à devenir capable de quelque chose, sans se perdre, sans se sentir hors niveau et sans prendre un risque qu'il ne comprend pas.

Calis doit parler des bénéfices généraux de l'activité physique sans promettre de traitement individuel. Il ne diagnostique pas douleur, blessure ou maladie. Le footer contient désormais une limite médicale permanente et les pages de mouvement doivent utiliser des repères contextualisés « ce que tu dois ressentir / à surveiller » plutôt que répéter un gros avertissement partout.

Voir `RECHERCHE_BESOINS_DESIRS_SANTE.md`, `USER_NEEDS_HEALTH_RESEARCH.md` lorsqu'il est présent, et la charte éditoriale. Ces documents de recherche se chevauchent partiellement : les réconcilier additivement lors d'une future maintenance, sans perdre les signaux et sources utiles.

## 5. Idées du fondateur : statut

Les idées spontanées doivent être traitées comme **entrées de fondateur**, pas comme ordre automatique de construire immédiatement.

Règle : `idée ≠ décision ≠ priorité`.

Évaluer chaque idée selon : utilité durable, fréquence/importance du besoin, cohérence avec le produit, charge humaine future, potentiel SEO/business, risques et possibilité d'intégration additive.

Idées à conserver pour plus tard :
- vidéos personnelles du fondateur ;
- contributions de vrais coachs/athlètes/créateurs avec attribution ;
- branche `PRATIQUER` : parcs gratuits, clubs, associations, endroits où s'entraîner ;
- conseils pour pratiquer sans matériel en utilisant l'environnement ;
- étude de services existants de cartographie de parcs avant de construire une base Calis ;
- commentaires utilisateurs utilisés d'abord comme données d'amélioration, puis cycle de recherche/mise à jour ;
- futur centre d'administration orienté qualité/produit, pas CMS générique.

## 6. Simplicité d'usage : décision UX nouvelle et prioritaire

Le fondateur a signalé qu'il avait du mal à se promener sur le site et à comprendre ce qu'il pouvait y faire. Ce retour est considéré comme un problème produit réel, pas comme une question de préférence esthétique.

Formulation de test : **un enfant d'environ 11 ans ou une personne âgée non familière de la callisthénie doit pouvoir comprendre comment entrer dans le site et quoi cliquer.**

Conséquence : la sophistication du graphe, du modèle de contenu et du SEO doit rester derrière l'interface. Ne pas obliger le visiteur à comprendre des notions internes comme « capacité », « hub », « régression » ou « cluster » avant d'agir.

Modifications déjà réalisées :
- navigation principale : `Je débute / Choisir un objectif / Tout explorer` ;
- accueil recentré sur « Qu'est-ce que tu aimerais réussir avec ton corps ? » ;
- choix directs : traction, pompe, handstand, muscle-up, jambes, mobilité ;
- bouton évident pour la personne qui ne sait pas par où commencer ;
- page `/commencer` réduite à des phrases de situation simples (« je n'arrive pas encore à faire une pompe », etc.) ;
- règle : si c'est trop difficile, simplifier ; si c'est maîtrisé, avancer.

Ne pas confondre simplification de l'interface avec appauvrissement du contenu : le détail reste accessible après le choix.

## 7. Acquisition et exploitation

Le SEO demeure une voie d'acquisition centrale car le propriétaire ne veut pas dépendre de la création régulière de TikTok/Reels. La cible n'est pas le volume artificiel : une ressource doit être réellement satisfaisante et reliée à une prochaine étape utile.

Objectif d'exploitation inchangé : maximiser la valeur durable en minimisant le travail humain récurrent. Le propriétaire doit principalement intervenir pour les décisions commerciales, juridiques, financières ou subjectives qui nécessitent réellement son jugement.

Critère permanent :

> Est-ce que cette fonctionnalité augmente durablement la valeur de Calis sans augmenter inutilement le travail humain nécessaire pour le faire fonctionner ?

## 8. Infrastructure et domaine

GitHub Pages est la réalité actuelle de la V1. L'adresse `https://ludodulac.github.io/Calis/` est une infrastructure gratuite de construction/test, pas l'identité finale. Un domaine français propre sera choisi/acheté plus tard lorsque cela apporte une valeur claire.

L'ancienne orientation Cloudflare reste historique/future mais ne doit pas être présentée comme le déploiement courant. `TECHNICAL_ARCHITECTURE.md` a été remis à jour en ce sens.

Supabase/Stripe ne doivent pas être introduits maintenant par anticipation.

## 9. Continuité IA

Un fichier `AI_START_HERE.md` a été préparé sur la branche `docs/ai-start-here-2` et doit être présent sur `main` à la fin de la passation. Il devient le point d'entrée obligatoire de toute nouvelle conversation/agent.

Sa fonction : indexer les sources de vérité, imposer l'ordre de lecture, rappeler les garde-fous et exiger un contrôle de passation avant de quitter une session.

## 10. Incident CI découvert pendant la passation

Le workflow GitHub Pages du commit `f9d444fc...` a échoué au typecheck : `Resource.hub` n'acceptait pas encore `"muscle-up"` alors que deux ressources du modèle l'utilisaient.

Cause : dette de contrat TypeScript créée lors de l'ouverture du cluster Muscle-up.

Correction appliquée dans `lib/content/types.ts` : ajout de `"muscle-up"` à l'union des hubs. Cette correction doit être confirmée par un workflow final vert avant de considérer la passation comme terminée.

## 11. Ce qu'il ne faut pas refaire

- Ne pas refaire le site depuis zéro.
- Ne pas remplacer l'architecture de progression par une simple liste d'articles.
- Ne pas ramener la boutique au centre avant l'utilité.
- Ne pas créer des centaines de pages SEO faibles.
- Ne pas introduire Supabase/Stripe/Cloudflare juste parce qu'ils sont mentionnés dans la vision historique.
- Ne pas utiliser une séquence IA photoréaliste comme autorité technique pour un mouvement complexe.
- Ne pas fabriquer auteur, expert, témoignage, communauté, test personnel ou partenariat.
- Ne pas retirer un contenu utile pour simplifier : simplifier d'abord l'entrée, l'ordre et le vocabulaire.

## 12. Prochaine direction recommandée

Après une CI verte et la fin de cette passation :
1. vérifier visuellement l'accueil, `/commencer` et les nouveaux parcours sur le site publié, surtout mobile ;
2. commencer une vraie phase d'intégration d'images pédagogiques fiables sur les pages prioritaires ;
3. poursuivre la densification du cluster Muscle-up avec prudence scientifique, puis revenir à un balayage transversal UX/SEO/maillage ;
4. maintenir régulièrement la passation et les documents de vérité plutôt que laisser les décisions vivre uniquement dans une conversation.
