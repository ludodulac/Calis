# CALIS — 84 illustrations candidates / 176 exercices

**NON VALIDÉES POUR LA PÉDAGOGIE**. Ce lot est une collection de *candidats* libres à étudier, pas la bibliothèque visuelle officielle de Calis. Aucune illustration n'est raccordée automatiquement aux programmes.

## Format / poids

84 fichiers SVG transparents, adaptés à GitHub/GitHub Pages, avec un nom lisible correspondant au titre des exercices (minuscules, sans accents, séparateurs `-`). Tous proviennent de l'image intermédiaire `frame-2.svg` des séquences en trois poses de Workout Guide. Plusieurs variantes peuvent partager le même dessin source : cela ne prouve pas que ce dessin illustre correctement la variante.

## Licence / crédits obligatoires

Œuvres : **Creative Commons Attribution - ShareAlike 4.0 International (CC BY-SA 4.0)**. L'utilisation commerciale et l'hébergement GitHub sont permis avec crédit approprié, lien de licence, indication des modifications et partage des adaptations sous la même licence. **Ce ne sont pas des images CC0 « sans conditions ».**

- Illustrations : Bryl Lim, https://bryllim.com ; en partie d'après Everkinetic, https://github.com/everkinetic/data
- Dépôt source : https://github.com/bryllim/workout-guide
- Licence : https://creativecommons.org/licenses/by-sa/4.0/
- Avis de provenance : https://github.com/bryllim/workout-guide/blob/main/ATTRIBUTION.md
- Modifications dans CALIS : **aucune modification du contenu vectoriel**, seule la copie et le renommage des fichiers `frame-2.svg`.

Lors de la publication sur le site, reprendre ces crédits dans la page de crédits du site, non uniquement dans le dépôt.

## Contrôle avant emploi

1. Inspecter l'exercice correspondant dans le catalogue `catalogue-candidats-176.json` ; 92 noms restent sans correspondance.
2. Ouvrir le SVG et comparer la posture/matériel/phase aux consignes de l'exercice de Calis.
3. Les figures difficiles (muscle-up, poirier, front lever, planche, drapeau) **ne doivent pas** être illustrées avec un mouvement proche mais différent.
4. Si une image n'enseigne pas fidèlement le mouvement, la refuser et conserver la fiche sans visuel, ou obtenir une nouvelle image de référence dont les droits sont établis.
5. Lire `docs/VISUAL_TRUTH_WORKFLOW.md` et `docs/PREPARATION_CALIS_V2.md` avant de relier les images à l'interface.

Cette branche de préparation n'est pas fusionnée sur `main` ni sur la branche de la V2.

## Exclusions contrôlées
- Hip thrust : l'image d'origine montre une **barre chargée**, alors que la fiche demande un hip thrust sans barre.
- Traction assistée à l'élastique : l'image d'origine montre une **machine**, pas un élastique.
Les deux fichiers ont été exclus volontairement.


## Galerie de contrôle interactive

Ouvrir `galerie.html` **depuis un hébergement web** (pas comme fichier local sans serveur) :
- afficher les 84 visuels et les 92 entrées sans image ;
- rechercher un exercice par nom ;
- agrandir chaque dessin, consulter sa référence d'origine ;
- marquer chaque proposition **OK visuellement** ou **Ne convient pas** ;
- exporter les réponses dans `calis-avis-images.json` pour les transmettre au projet.

Cette appréciation par le fondateur **ne vaut pas certification technique ou médicale**.
Une image de mouvement n'est pour l'instant qu'une pose fixe (frame 2), sans la trajectoire complète.

## Vérifications documentées — 20 octobre 2026

- 84 fichiers SVG sur la branche : **2 037 586 octets** (environ 1,94 Mio) ;
- **82 contenus vectoriels distincts**, les deux paires suivantes sont des copies identiques :
  - `nordic-curl.svg` / `nordic-curl-excentrique.svg` ;
  - `traction-en-pronation.svg` / `traction-en-pronation-stricte.svg` ;
- 6 SVG échantillonnés : balises `<svg>` et `<path>`, sans script, image distante ni contenu actif décelé dans cet échantillon ;
- 3 fichiers comparés mot pour mot aux `frame-2.svg` originaux (traction en pronation, pompe inclinée, bird dog) : copies identiques ;
- licences vérifiées dans `LICENSE-ASSETS` et `ATTRIBUTION.md` du dépôt d'origine ;
- 35 associations candidat → fiche de programme ont été préparées, **toutes explicitement marquées non validées techniquement** ;
- **aucune vérification anatomique complète des 84 images n'est encore affirmée**. L'inspection individuelle et la revue des exercices difficiles restent nécessaires.

Le code MIT de Workout Guide et les images sous CC BY-SA 4.0 ont des licences différentes. Pour les SVG, respecter **CC BY-SA 4.0**.
