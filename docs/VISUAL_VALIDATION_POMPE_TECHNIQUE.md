# Validation visuelle — pompe technique

## Question visuelle

Montrer une seule idée : pendant une pompe contrôlée, la poitrine et le bassin descendent puis remontent comme un ensemble suffisamment lié. Le dessin ne doit pas imposer une largeur de mains, un angle de coudes ou une profondeur universels.

## Références techniques consultées

### ACE — *Push-Ups | Exercise Library*

- ACE décrit une position de départ avec le tronc stabilisé et la tête alignée avec la colonne.
- Pendant la descente, le tronc reste organisé sans affaissement lombaire ni hanches qui montent seules.
- Pendant la remontée, le même alignement est conservé jusqu'à l'extension des bras.
- ACE présente plusieurs options pour le placement des coudes plutôt qu'un angle unique au degré près.
- URL : https://www.acefitness.org/resources/everyone/exercise-library/41/push-up/
- Consulté : 2026-08-31.

### ACE — *Perfecting the Push-up for All Levels*

- La ressource insiste sur la stabilité du tronc et des hanches afin que les muscles de poussée déplacent le corps comme un levier organisé.
- URL : https://www.acefitness.org/resources/pros/expert-articles/7265/perfecting-the-push-up-for-all-levels/
- Consulté : 2026-08-31.

### Scapular kinematics and shoulder elevation in a traditional push-up — PubMed PMID 23952043

- L'étude montre que la cinématique scapulaire varie avec la position de l'épaule pendant la pompe.
- Elle soutient la décision de Calis de ne pas figer les omoplates ni de transformer un schéma de côté en prescription anatomique millimétrée.
- URL : https://pubmed.ncbi.nlm.nih.gov/23952043/
- Consulté : 2026-08-31.

### The influence of hand position on scapular kinematics in push-ups — PubMed PMID 40836243

- Les mesures montrent des différences de cinématique scapulaire selon l'orientation des mains et entre participants avec et sans douleur chronique d'épaule.
- Le rôle de cette source n'est pas de définir une « meilleure » position universelle, mais de confirmer que la position des mains modifie réellement le mouvement scapulaire.
- URL : https://pubmed.ncbi.nlm.nih.gov/40836243/
- Consulté : 2026-08-31.

## Décisions Calis

- **Deux positions seulement** : position haute puis position basse contrôlée.
- **Vue de côté** : elle sert à comparer la relation tête–tronc–bassin–jambes sans prétendre montrer la mécanique scapulaire fine.
- **Pas d'angle de coude chiffré** dans l'image ou la légende.
- **Pas de contact au sol présenté comme obligatoire** : la légende rappelle que l'amplitude doit rester contrôlée et tolérable.
- **Pas de texte dans le SVG** : l'explication reste dans le HTML.
- **Pas de photoréalisme généré** : le schéma vectoriel signale clairement son niveau de précision.

## Contrôle qualité interne

Une première version du SVG a été rejetée avant intégration : la position haute était trop diagonale et pouvait être lue comme une position de type pike. La seconde version a abaissé et réaligné le tronc pour que le bassin ne devienne pas le point haut du mouvement.

## Asset final

- Fichier : `public/illustrations/calis/pompes/pompe-technique.svg`
- Page : `app/bibliotheque/pompe-technique/page.tsx`
- Composant : `LearningIllustration`
- Alt : décrit les deux positions et l'organisation globale du corps.
- Légende : précise que la profondeur représentée n'est pas une amplitude obligatoire.
- Statut : `intégré sur branche — à valider par build et rendu publié avant statut déployé`.

## Limites

Le schéma ne permet pas de juger une orientation précise de la main, un angle exact du coude, la cinématique tridimensionnelle de la scapula ou la tolérance individuelle des poignets et épaules. Ces éléments restent traités dans le texte et devront s'appuyer sur des références plus spécifiques si Calis décide un jour de les illustrer séparément.
