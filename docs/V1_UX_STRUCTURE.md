# Calis — Structure UX de la V1

Ce document définit les quatre écrans structurants de la première version : Accueil, Bibliothèque, Hub et Fiche d'apprentissage. L'objectif est de créer une expérience utile dès le lancement, tout en préparant les futures couches interactives.

---

# 1. Accueil

## Objectif

Faire comprendre immédiatement que Calis n'est ni une simple boutique ni un blog fitness, mais un guide pour découvrir et développer les capacités de son corps.

## Priorité mobile

Sur téléphone, le premier viewport doit permettre de comprendre la question principale et de commencer à choisir sans devoir lire une landing page. La priorité est : **objectif visible → choix visuel → action**. L'entrée « Je débute » doit rester immédiatement accessible.

Les contenus durables — bibliothèque, méthode, confiance, sécurité, architecture par capacités — ne sont pas supprimés pour gagner de la place : ils sont placés plus bas ou dans leur destination logique afin de ne pas concurrencer la décision principale.

## Hero

Le hero ne doit pas devenir une introduction longue. Le H1 désir-first est prioritaire ; toute explication secondaire doit rester brève et disparaître avant les choix si elle empêche l'action principale de tenir dans un écran de téléphone.

### Portes d'entrée

- **Je débute**
- **Je choisis un objectif**

Ces choix doivent orienter vers un parcours ou une ressource réelle, pas vers une création de compte obligatoire.

## Choix d'objectif

Les objectifs sont présentés comme de grandes cartes tactiles. Une photographie ou un visuel porte le sens lorsque l'asset est fiable ; un intitulé très court le confirme. Éviter d'empiler niveau, description, métadonnées et CTA sur la même carte lorsque le clic sur la carte suffit.

Les objectifs V1 peuvent inclure traction, pompes, équilibre/handstand, muscle-up, jambes et mobilité, à condition que chacun pointe vers une destination réellement existante et honnête.

## Sections suivantes

### Commencer simplement

Présenter des entrées adaptées aux personnes qui partent de zéro.

### Explorer par capacité

Pousser / Tirer / Tenir / S'équilibrer / Se mouvoir / Devenir plus fort.

### Comprendre avant de progresser

Mettre en avant quelques contenus différenciants : technique, sensations, biomécanique, récupération.

### S'équiper seulement si nécessaire

Bloc éditorial expliquant la philosophie : une grande partie de la callisthénie ne nécessite presque rien ; Calis recommande du matériel lorsqu'il apporte une utilité réelle.

### Bibliothèque

Accès vers l'ensemble des ressources sans concurrencer le choix d'objectif principal.

### Confiance

Méthodologie, sources, mises à jour, futurs relecteurs/experts et transparence commerciale.

---

# 2. Bibliothèque

## Objectif

Remplacer le paradigme « blog » par un moteur d'exploration des connaissances.

## En-tête

**Titre :** Bibliothèque Calis

**Recherche :** champ libre avec autocomplétion à terme.

## Filtres V1

### Niveau

- Je pars de zéro
- Débutant
- Intermédiaire
- Avancé

### Objectif

- Première répétition
- Force
- Endurance
- Figure
- Mobilité / contrôle

### Capacité

- Pousser
- Tirer
- Tenir
- S'équilibrer
- Se mouvoir

### Type de ressource

- Guide
- Exercice
- Progression
- Comprendre
- Programme (plus tard)
- Équipement

### Matériel

- Aucun
- Barre
- Anneaux
- Parallettes
- Bandes
- Lest

## Carte ressource

Chaque carte doit montrer au minimum :

- titre ;
- type ;
- niveau ;
- objectif principal ;
- temps de lecture approximatif seulement si utile ;
- matériel requis éventuel ;
- date de mise à jour si importante.

Les cartes ne doivent pas devenir des publicités. Sur petit écran, ne pas afficher toutes les métadonnées simultanément si elles nuisent au choix : garder d'abord ce qui permet d'identifier la ressource.

## URL et indexation

Les filtres interactifs ne doivent pas créer des milliers de combinaisons indexables sans valeur. Les pages thématiques à valeur SEO doivent avoir des URLs canoniques dédiées ; les états de filtres purement UX peuvent rester non indexables.

---

# 3. Hub

## Exemple : Traction

## Objectif

Donner une vue d'ensemble d'une capacité et permettre à l'utilisateur de choisir le bon chemin selon son niveau.

## En-tête du hub

- Nom : Traction
- Catégorie : Tirer
- Niveau : de zéro à avancé
- Résumé de la capacité
- Matériel principal : barre

## Bloc « Où en es-tu ? »

Exemple :

- Je ne peux pas encore me suspendre confortablement
- Je me suspends mais je n'ai pas de traction
- Je fais 1 à 4 tractions
- Je fais 5 à 10 tractions
- Je fais plus de 10 tractions
- Je travaille la force / le lest / le muscle-up

Le clic ouvre le segment pertinent du parcours.

## Arbre simplifié

Suspension → contrôle scapulaire → rowing → assistance / négatives → première traction → 5 → 10 → explosivité / lest → muscle-up.

En V1, cet arbre peut être statique. Le modèle de données doit permettre de le rendre interactif plus tard.

## Sections du hub

1. Apprendre la technique.
2. Trouver son point de départ.
3. Progressions et régressions.
4. Erreurs fréquentes.
5. Comprendre le mouvement.
6. Programmes associés — futur.
7. Équipement utile.
8. Étapes suivantes.

## SEO

Le hub doit être une ressource éditoriale complète et indexable, pas uniquement une page de liens.

---

# 4. Fiche d'apprentissage

## Objectif

Créer le composant éditorial emblématique de Calis.

## En-tête

- titre ;
- type : exercice / progression / compréhension ;
- niveau ;
- capacité ;
- matériel ;
- dernière mise à jour ;
- auteur / relecture le cas échéant.

## Bloc essentiel

### En bref

Réponse courte aux questions principales sans forcer l'utilisateur à lire toute la page.

### Prérequis

Ce qu'il faut maîtriser avant de tenter le mouvement.

### Teste-toi

Petit critère permettant de savoir si cette fiche est le bon niveau.

## Corps principal

### Technique

Explication progressive, idéalement illustrée lorsque le visuel peut être validé.

### Ce que tu dois ressentir

Signature éditoriale Calis : sensations attendues, zones qui travaillent, contrôle et respiration lorsque pertinent.

### Ce que tu ne devrais pas ignorer

Douleur ou signaux inhabituels contextualisés sans diagnostic médical.

### Erreurs fréquentes

Erreur → pourquoi elle arrive → comment la corriger.

### Plus facile

Régressions.

### Plus difficile

Progressions.

### Quand passer à l'étape suivante ?

Critères observables, sourcés ou clairement présentés comme repères pratiques lorsqu'ils ne sont pas universels.

## Bloc progression

Afficher clairement la situation et la prochaine étape. La progression doit pouvoir être comprise visuellement sans imposer une longue explication.

## Bloc équipement

Trois statuts possibles :

- **nécessaire** ;
- **utile mais facultatif** ;
- **aucun achat nécessaire**.

C'est une règle de confiance et une future source de conversion de qualité.

## Sources

Liste claire en fin de fiche, avec possibilité future de distinguer :

- littérature scientifique ;
- organismes / documentation ;
- ouvrages ;
- expertise pratique ;
- relecture professionnelle.

## Ressources liées

Liens calculés à terme depuis le graphe de connaissances, mais éditorialement contrôlables.

---

# 5. Navigation globale V1

Sur grand écran, le header peut exposer davantage de structure. Sur mobile, la navigation primaire doit rester courte et stable : **3 à 4 destinations maximum au premier niveau**. Pour la V1, `Accueil / Parcours / Bibliothèque` constitue une base suffisante ; les fonctions secondaires restent accessibles depuis ces espaces.

Éviter d'afficher simultanément un header de navigation complet et une barre basse qui font la même chose. La navigation basse doit avoir de grandes zones tactiles, un état actif évident et des libellés courts.

## Footer

- Mission
- Méthodologie
- À propos
- Sources / politique éditoriale
- Transparence commerciale
- Contact
- Mentions légales / confidentialité

Le footer ne doit pas être forcé dans le premier écran d'une interface de décision mobile.

---

# 6. Architecture URL V1 proposée

```text
/
/bibliotheque/
/debuter/
/debuter/commencer-callisthenie/
/debuter/test-niveau/

/traction/
/traction/premiere-traction/
/traction/suspension/
/traction/tractions-negatives/
/traction/bande-elastique/
/traction/prises/
/traction/1-a-10-tractions/
/traction/tractions-lestees/

/pompe/
/pompe/premiere-pompe/
/pompe/technique/

/dips/
/dips/premiers-dips/

/handstand/
/handstand/handstand-mur/
/handstand/poignets/

/equipement/debuter/
```

Les URLs françaises doivent être stables et simples. Les accents sont évités dans les slugs. Un changement ultérieur doit préserver les anciennes URLs via redirections permanentes.

---

# 7. Design fonctionnel

## Ton

Calme, précis, encourageant, non infantilisant. Une interface très simple ne doit jamais traiter l'utilisateur comme un enfant.

## Univers visuel

- neutre et contemporain ;
- capable de parler naturellement aux femmes et aux hommes ;
- éviter le cliché « hardcore gym » ;
- éviter aussi la féminisation artificielle ;
- privilégier corps en mouvement, contrôle, gestes et progression ;
- reprendre des interfaces de jeu mobile leur hiérarchie, leur lisibilité et leur réactivité, jamais leur habillage de marque ni leurs mécaniques de rétention.

## Règles d'interaction mobile

- concevoir d'abord les écrans de décision autour d'un viewport de référence proche de **390 × 844 px**, puis adapter aux autres tailles ;
- une intention principale dominante par écran de décision ;
- une action = une idée ; aucun paragraphe déguisé en bouton ;
- cartes importantes entièrement tactiles et grandes cibles d'au moins 44–48 px ;
- image ou pictogramme avant explication lorsque cela rend le choix immédiatement compréhensible ;
- intitulés courts et langage humain avant vocabulaire technique ;
- feedback immédiat au toucher, au clavier et au focus ;
- détails, métadonnées et explications révélés progressivement après le choix ;
- montrer la situation actuelle, le chemin et la prochaine étape plutôt que les raconter longuement ;
- simplifier par hiérarchie et déplacement du secondaire, pas par suppression silencieuse de fonctionnalités.

## Accessibilité

- contraste suffisant ;
- navigation clavier ;
- composants lisibles sans couleur seule ;
- tailles tactiles adaptées et espaces entre cibles ;
- textes alternatifs utiles ;
- structure compatible avec lecteurs d'écran ;
- respect de `prefers-reduced-motion` pour les futures animations ;
- tester les décisions essentielles avec une personne très jeune, une personne âgée peu technophile ou une personne ayant des difficultés motrices/cognitives comme cas limites de clarté, sans infantiliser le ton.

---

# 8. Ce que la V1 ne doit pas imposer

- création de compte ;
- abonnement ;
- boutique complète ;
- vidéos obligatoires ;
- tracking invasif ;
- gamification excessive ;
- application mobile native.

La V1 reste un produit web, mais son interface doit être **mobile-first**. « Pas d'application mobile » signifie qu'aucune app native n'est requise, pas que l'expérience web sur téléphone est secondaire.

Pas de monnaies artificielles, streaks, badges d'urgence, fausse rareté, récompenses fictives ou progression simulée pour provoquer le retour. La sensation de progression doit venir de capacités et d'étapes réelles.

---

# 9. Préparation de la V2 dans la V1

Chaque composant doit être conçu pour accueillir plus tard :

- état « acquis / en cours / à découvrir » ;
- compte utilisateur ;
- recommandations personnalisées ;
- progression sauvegardée ;
- tests interactifs ;
- graphe visuel ;
- produits / affiliation ;
- relecteurs et partenaires ;
- contenus multilingues éventuels.

On ne développe pas ces fonctionnalités maintenant, mais on évite de choisir une structure qui les rendrait difficiles à ajouter.

---

# 10. Couche d'entrée par désir — mise à jour du 30 août 2026

La structure ci-dessus reste valable, mais l'expérience ne doit plus demander au débutant de comprendre immédiatement nos catégories internes. La couche d'entrée prioritaire est :

**DÉSIR → OBJECTIF → CAPACITÉ → PROGRESSION**

Elle s'ajoute aux hubs, filtres et capacités ; elle ne les remplace pas.

## Accueil : ordre mental recommandé

1. **Désir humain** — ce que la personne aimerait réussir, ressentir ou changer.
2. **Objectif concret** — première traction, vraies pompes, handstand, mobilité utile, corps plus fort.
3. **Capacité** — tirer, pousser, s'équilibrer, se mouvoir, jambes, force.
4. **Progression** — test de départ, prochaine étape faisable, critère pour avancer.

Exemples d'entrées à conserver :

- Je veux me sentir plus fort.
- Je veux réussir ma première traction.
- Je veux enfin faire de vraies pompes.
- Je veux tenir sur les mains.
- Je veux bouger plus librement.
- Je ne sais même pas par où commencer.

Sous cette couche, la homepage doit continuer à donner accès à l'architecture durable de Calis : **Apprendre / Progresser / Comprendre / S'équiper**, ainsi qu'à la navigation par capacités. Elle n'a pas besoin de tout afficher simultanément dans le premier viewport : le désir est la porte d'entrée ; il n'est pas un remplacement de la structure produit.

## `/commencer` : double lecture

La page doit fonctionner à la fois par désir et par situation observable. Les situations techniques utiles restent visibles : ne pas réussir une pompe, ne pas réussir une traction, renforcer ses jambes, manquer de mobilité, vouloir apprendre le handstand, ne pas savoir quoi travailler.

La section « Ce qui compte au début » doit rappeler six repères structurants : pousser et tirer, utiliser ses jambes, explorer ses amplitudes, choisir une difficulté répétable, observer les sensations et progresser sans acheter inutilement.

## Fiche d'apprentissage : réduire la distance psychologique

Avant même la technique, la fiche doit répondre implicitement à trois questions :

- Pourquoi cette capacité vaut-elle la peine d'être apprise ?
- Est-ce une étape adaptée à mon niveau actuel ?
- Qu'est-ce que je pourrai débloquer ensuite ?

Le modèle pédagogique existant reste ensuite central : prérequis/auto-test, progression et régressions, technique, « Ce que tu dois ressentir », signaux à ne pas ignorer, erreurs fréquentes, critère de passage, variantes, matériel réellement utile, sources et prochaine capacité.

## Boucle émotionnelle et pédagogique

**désirer → essayer → comprendre → ressentir → réussir → avoir envie d'aller plus loin**

La réussite n'est pas uniquement la figure finale. Une suspension plus calme, une pompe sur un support plus bas, une descente de traction mieux contrôlée ou un handstand au mur moins intimidant doivent être rendus visibles comme des progrès réels.

## Commerce et confiance

La monétisation ne doit pas interrompre cette boucle. Le matériel apparaît seulement lorsqu'il résout un besoin identifié dans la progression. Une page peut recommander zéro produit. L'ordre reste : **utilité → progression → confiance → besoin identifié → recommandation éventuelle**.
