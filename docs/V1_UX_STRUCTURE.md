# Calis — Structure UX de la V1

Ce document définit les quatre écrans structurants de la première version : Accueil, Bibliothèque, Hub et Fiche d'apprentissage. L'objectif est de créer une expérience utile dès le lancement, tout en préparant les futures couches interactives.

---

# 1. Accueil

## Objectif

Faire comprendre immédiatement que Calis n'est ni une simple boutique ni un blog fitness, mais un guide pour découvrir et développer les capacités de son corps.

## Hero

**Titre de travail :**

> Découvre ce dont ton corps est capable.

**Sous-titre :**

> Apprends les mouvements, comprends ton corps et progresse étape par étape grâce à la callisthénie.

### Trois portes d'entrée

- **Je pars de zéro**
- **Je pratique déjà**
- **J'ai un objectif**

Ces choix doivent orienter vers la bibliothèque filtrée ou un parcours, pas vers une création de compte obligatoire.

## Sections suivantes

### Commencer simplement

Présenter 4 cartes : première pompe, première traction, premiers dips, bases du handstand.

### Explorer par capacité

Pousser / Tirer / Tenir / S'équilibrer / Se mouvoir / Devenir plus fort.

### Comprendre avant de progresser

Mettre en avant quelques contenus différenciants : technique, sensations, biomécanique, récupération.

### S'équiper seulement si nécessaire

Bloc éditorial expliquant la philosophie : une grande partie de la callisthénie ne nécessite presque rien ; Calis recommande du matériel lorsqu'il apporte une utilité réelle.

### Bibliothèque

CTA principal vers l'ensemble des ressources.

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

Les cartes ne doivent pas devenir des publicités.

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

Explication progressive, idéalement illustrable plus tard par schémas ou médias originaux.

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

Afficher :

**Étape précédente ← Vous êtes ici → Étape suivante**

Même sans compte, cela donne la sensation d'un chemin.

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

## Header

- Logo / nom
- Apprendre
- Progresser
- Comprendre
- S'équiper
- Bibliothèque
- Recherche

« Pratiquer » peut être préparé mais non affiché tant que l'annuaire n'existe pas.

## Footer

- Mission
- Méthodologie
- À propos
- Sources / politique éditoriale
- Transparence commerciale
- Contact
- Mentions légales / confidentialité

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

Calme, précis, encourageant, non infantilisant.

## Univers visuel

- neutre et contemporain ;
- capable de parler naturellement aux femmes et aux hommes ;
- éviter le cliché « hardcore gym » ;
- éviter aussi la féminisation artificielle ;
- privilégier corps en mouvement, contrôle, gestes et progression.

## Accessibilité

- contraste suffisant ;
- navigation clavier ;
- composants lisibles sans couleur seule ;
- tailles tactiles adaptées ;
- textes alternatifs utiles ;
- respect de `prefers-reduced-motion` pour les futures animations.

---

# 8. Ce que la V1 ne doit pas imposer

- création de compte ;
- abonnement ;
- boutique complète ;
- vidéos obligatoires ;
- tracking invasif ;
- gamification excessive ;
- application mobile.

La valeur de la V1 doit exister avec les contenus et la structure seuls.

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

Sous cette couche, la homepage doit continuer à exposer l'architecture durable de Calis : **Apprendre / Progresser / Comprendre / S'équiper**, ainsi que la navigation par capacités. Le désir est la porte d'entrée ; il n'est pas un remplacement de la structure produit.

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
