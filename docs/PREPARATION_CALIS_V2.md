# Préparation CALIS — Nouvelle interface visuelle

## État
Prototype non publié sur la branche feat/calis-programmes-visuels-v1. L'ancienne version sur main reste inchangée.

## Parcours actuel
Accueil : 5 objectifs combinables -> choix avec ou sans matériel sportif -> 15 / 30 / 45 minutes -> 7 niveaux colorés -> sélection d'exercices classés par zones -> fiche avec image si existante, geste, précaution, variante facile -> précédent / suivant / retour.

Le moteur trie et filtre les exercices en conservant autant que possible haut du corps, bas du corps et tronc. Il ne crée pas encore un calendrier individualisé ni une progression automatiquement validée.

La première bibliothèque est issue du programme de travail fourni par le fondateur, à relire et contrôler techniquement avant diffusion comme référence définitive.

## Comment préparer les illustrations
Prépare un fichier ZIP unique : CALIS-ILLUSTRATIONS.zip.

Chaque image doit avoir un **nom d'exercice clair**. Idéalement, utiliser l'identifiant correspondant à l'exercice dans le fichier lib/programmes-v2.ts.

Exemples de noms :
- squat-poids-corps.webp
- pompes-inclinees.webp
- traction-negative.webp
- dragon-flag-negatif.webp
- handstand-libre.webp

Les PNG sont acceptables si tu possèdes seulement ce format ; les WebP permettent généralement de gagner du poids.

**Quand le ZIP sera prêt, joins-le directement à cette conversation ChatGPT**, ou enregistre-le dans ton dossier CALIS et indique-moi son emplacement exact. Ne le dépose pas seul dans GitHub : je dois d'abord vérifier le nom, le format et l'exactitude pédagogique de chacune des images.

Après examen, les illustrations approuvées seront placées dans le dépôt dans public/illustrations/programmes/ et reliées au registre d'exercices.

S'il y a plusieurs images pour le même exercice, indique la phase : par exemple traction-negative-depart.webp et traction-negative-fin.webp.

## Suites de travail
1. Recevoir et vérifier les illustrations.
2. Réviser le dosage des programmes N1–N7 avec références scientifiques et limites de sécurité.
3. Préciser progression, répartition en séances, récupération et tests.
4. Créer les liens vers du matériel vérifié, avec transparence commerciale.
5. Valider sur téléphone avant toute publication sur main.

## Infrastructure
GitHub Pages reste l'hébergement actuel. Aucune migration Netlify ou base Supabase n'est nécessaire pour ce prototype.
