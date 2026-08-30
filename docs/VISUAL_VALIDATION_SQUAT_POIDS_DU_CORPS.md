# Validation visuelle — squat au poids du corps

## Question visuelle

Montrer une idée simple et robuste pour un débutant : pendant la descente, la hanche et le genou se plient ensemble tandis que le pied reste en contact avec le sol ; la profondeur représentée n'est pas une profondeur obligatoire.

## Références techniques consultées

### ACE — *Bodyweight Squat | Exercise Library*

- Le mouvement implique une flexion coordonnée des hanches et des genoux.
- Les pieds restent stables au sol et la remontée combine extension de hanche et de genou.
- La ressource utilise certains repères plus prescriptifs qui ne sont pas repris tels quels par Calis ; ils sont recoupés avec les données biomécaniques plus récentes ci-dessous.
- URL : https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/
- Consulté : 2026-08-31.

### ACE — *How to Squat Properly: Body Type Breakdown & Anatomy Considerations*

- La morphologie de hanche et les proportions corporelles influencent la position de squat et le confort.
- ACE recommande de tenir compte d'une position des pieds confortable plutôt que d'imposer une seule stance à tous.
- URL : https://www.acefitness.org/resources/pros/expert-articles/7356/how-to-squat-properly-body-type-breakdown-anatomy-considerations/
- Consulté : 2026-08-31.

### *The Limitations of Anterior Knee Displacement during Different Barbell Squat Techniques: A Comprehensive Review*

- Revue disponible sur PubMed Central : PMCID PMC10143703.
- Les proportions segmentaires et la largeur de stance influencent le déplacement antérieur du genou.
- Certaines morphologies nécessitent davantage de déplacement du genou, y compris au-delà des orteils, pour conserver l'équilibre.
- Conséquence Calis : ne pas représenter « genou derrière les orteils » comme une règle de sécurité universelle.
- URL : https://pmc.ncbi.nlm.nih.gov/articles/PMC10143703/
- Consulté : 2026-08-31.

### *A Biomechanical Review of the Squat Exercise: Implications for Clinical Practice*

- Revue disponible sur PubMed Central : PMCID PMC10987311 ; PMID 38576836.
- La biomécanique du squat varie notamment avec largeur de stance, rotation des pieds, position du tronc et du tibia et profondeur.
- Conséquence Calis : le visuel ne doit pas transformer une configuration particulière en technique universelle.
- URL : https://pmc.ncbi.nlm.nih.gov/articles/PMC10987311/
- Consulté : 2026-08-31.

## Décisions Calis

- **Vue latérale** pour rendre lisible le rapport tronc–hanche–genou–pied.
- **Deux états seulement** : debout puis accroupi à amplitude modérée.
- **Pied entier représenté au sol** ; aucun transfert exclusif « sur les talons » n'est enseigné.
- **Genou autorisé à avancer** : aucune ligne verticale sur les orteils, aucun symbole d'interdiction.
- **Profondeur modérée volontaire** : l'image n'enseigne ni parallèle obligatoire ni squat profond obligatoire.
- **Pas d'angle chiffré**, pas de largeur de stance universelle, pas de texte intégré au SVG.

## Contrôle qualité interne

La première version du dessin a été rejetée avant intégration : sa position basse se lisait presque comme une vue de face et rendait le rapport hanche–genou–pied ambigu. La version retenue utilise une vraie vue latérale ; la jambe opposée n'est indiquée que discrètement afin de préserver la lecture du mouvement principal.

## Asset final

- Fichier : `public/illustrations/calis/jambes/squat-poids-du-corps.svg`
- Page : `app/bibliotheque/squat-poids-du-corps/page.tsx`
- Composant : `LearningIllustration`
- Alt : décrit deux vues latérales et les appuis.
- Légende : précise que la profondeur n'est pas obligatoire et que le genou peut avancer pour maintenir l'équilibre.
- Statut : `intégré sur branche — à valider par build et rendu publié avant statut déployé`.

## Limites

Ce dessin ne montre pas la rotation des pieds, le suivi frontal du genou, les différences anatomiques de hanche, ni une profondeur optimale individuelle. Ces éléments ne peuvent pas être déduits correctement d'une seule vue latérale simplifiée et restent volontairement hors de la portée du visuel.
