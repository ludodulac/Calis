# Calis — V1 legal / commercial release gate

Dernière mise à jour : 2 septembre 2026.

Ce document évite deux erreurs opposées : lancer des traceurs ou de l'affiliation sans information adaptée, ou construire une usine juridique disproportionnée alors que la V1 reste locale et sans publicité.

## État technique actuel

- pas de compte Calis ;
- pas de base de données Calis pour les séances ;
- diagnostic, objectif et historique d'entraînement stockés dans `localStorage` sur l'appareil ;
- pas d'analytics, pixel publicitaire ou outil de suivi comportemental tiers intégré au code au moment de cette revue ;
- hébergement statique via GitHub Pages ;
- pas de liens d'affiliation actifs dans le moteur d'entraînement.

La page publique `/confidentialite` doit rester alignée avec cet état réel.

## Hébergement GitHub Pages

L'hébergeur technique de la V1 est **GitHub Pages**, service de GitHub.

GitHub indique actuellement que :

- lors de la visite d'un site GitHub Pages, l'adresse IP du visiteur est journalisée et conservée à des fins de sécurité ;
- GitHub, Inc. publie l'adresse suivante : **88 Colin P. Kelly Jr. St., San Francisco, CA 94107, United States**.

Sources officielles à revérifier avant toute publication juridique définitive :

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

Ce traitement technique de l'hébergeur est distinct du stockage d'entraînement Calis : la V1 ne transmet pas les résultats de séance vers une base Calis et n'ajoute pas d'analytics tiers.

## Pourquoi il n'y a pas de bannière de consentement dans la V1 actuelle

Le stockage local est utilisé pour fournir la fonctionnalité expressément demandée : retrouver le point de départ, les séances et l'objectif sur le même appareil. Aucun traceur publicitaire ou de mesure d'audience non essentiel n'est actuellement ajouté par Calis.

Cette décision doit être revue **avant** l'ajout de tout outil d'analytics, retargeting, publicité, bouton social traçant ou autre script tiers. Ne jamais ajouter un outil puis régulariser l'information après coup.

## Mentions légales : informations encore nécessaires

Ne pas inventer ces données dans le dépôt. Avant la release publique considérée comme commerciale/professionnelle, renseigner avec les informations réelles de l'éditeur selon son statut :

- nom ou dénomination de l'éditeur ;
- forme/statut pertinent ;
- adresse ou siège lorsque requis ;
- moyen de contact public ;
- informations d'immatriculation / identification lorsqu'elles s'appliquent ;
- responsable de publication si pertinent.

L'identification technique de l'hébergeur GitHub Pages est désormais documentée séparément ci-dessus. Tant que les informations propres à l'éditeur ne sont pas fournies, le projet peut préparer la structure mais ne doit pas fabriquer de fausses mentions.

## Affiliation : gate avant activation

Avant le premier lien rémunéré :

1. ajouter une disclosure claire et proche des contenus concernés ;
2. expliquer qu'une rémunération peut être perçue sans surcoût pour l'utilisateur lorsque c'est exact pour le programme concerné ;
3. distinguer clairement recommandation éditoriale, comparatif et partenariat ;
4. garder la règle `besoin détecté → explication → options → achat éventuel` ;
5. ne jamais modifier le graphe pédagogique pour créer artificiellement un besoin matériel ;
6. vérifier les conditions propres au programme partenaire avant publication ;
7. mesurer les clics seulement avec une solution compatible avec la politique de confidentialité et les règles de consentement applicables.

## Analytics : gate avant activation

Le funnel produit cible reste :

`visiteur → objectif → diagnostic → séance 1 commencée → séance 1 terminée → séance 2 → décision utile → progression réelle`.

Mais l'outil de mesure ne doit être choisi qu'après avoir défini :

- les événements réellement nécessaires ;
- les données collectées ;
- leur durée de conservation ;
- si des identifiants ou traceurs sont utilisés ;
- si le consentement est requis ;
- comment l'utilisateur est informé et peut exercer ses choix.

Ne pas introduire Supabase uniquement pour l'analytics.

## Release gate

Pour le tag V1 stable :

- [x] information de confidentialité alignée avec la V1 locale ;
- [x] absence actuelle d'analytics/ads tiers vérifiée dans le code ;
- [x] hébergeur technique GitHub Pages identifié et traitement IP documenté ;
- [ ] informations réelles de l'éditeur disponibles pour finaliser les mentions légales ;
- [ ] moyen de contact public décidé ;
- [ ] test réel sur téléphone validé ;
- [ ] si affiliation activée avant ou au lancement : disclosure et conditions partenaires vérifiées ;
- [ ] si analytics activé avant ou au lancement : revue confidentialité/traceurs réalisée avant activation.

Si analytics et affiliation restent désactivés au tag V1, leurs deux derniers points ne bloquent pas la stabilité technique du produit ; ils deviennent des gates obligatoires avant leur activation ultérieure.
