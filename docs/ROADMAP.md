# Roadmap progressive

## V0 — Fondations — largement réalisé

Objectif : définir le projet avant de multiplier le code.

Réalisé : vision produit, architecture éditoriale, stratégie SEO, modèle de contenu initial, règles de continuité, recherche besoins/désirs, principes de santé/sécurité et système d'illustration. Le nom/domaine public définitif reste ouvert.

## V1 — Bibliothèque utile — en cours avancé

Objectif : lancer un site rapide, indexable, très peu coûteux et immédiatement compréhensible.

### Déjà présent
- accueil ;
- page « Je débute » ;
- bibliothèque ;
- navigation simplifiée par situation / objectif ;
- hubs Tractions, Pompes, Dips, Handstand et Muscle-up ;
- plus de 20 ressources structurées ;
- diagnostics « pourquoi je n'y arrive pas » ;
- graphe éditorial initial via `lib/content/v1.ts` ;
- sitemap, robots, métadonnées et canonicals ;
- GitHub Pages + CI ;
- premières illustrations Calis et système de provenance ;
- garde-fous médicaux et workflow de vérité visuelle.

### Priorités immédiates
1. rendre l'expérience encore plus évidente : une personne sans vocabulaire technique doit comprendre en quelques secondes ce qu'elle peut faire ;
2. intégrer davantage d'images pédagogiques fiables sur les pages prioritaires ;
3. poursuivre la densification des clusters sans créer de pages faibles ;
4. vérifier régulièrement le maillage, la bibliothèque, le mobile et l'accessibilité ;
5. ajouter dates/sources/transparence de façon cohérente sur les ressources qui en ont besoin ;
6. préparer le passage futur au domaine `.fr` sans le payer prématurément.

### Critère UX transversal
La sophistication du modèle, du SEO et du graphe doit rester derrière l'interface. Le site doit pouvoir être parcouru par un enfant d'environ 11 ans ou une personne âgée non familière du web sportif : gros choix explicites, vocabulaire courant, prochaine action visible, détails techniques seulement après le choix.

## V2 — Progression

- consolider le graphe de progression ;
- tests de niveau ;
- parcours première pompe / première traction / premiers dips ;
- premiers outils interactifs ;
- suivi de progression seulement si son utilité est démontrée ;
- compte utilisateur seulement si nécessaire.

Une partie de la logique V2 existe déjà dans le contenu V1 (prérequis, next steps, diagnostics). Ne pas la reconstruire : l'exposer progressivement dans l'interface.

## V3 — Équipement et monétisation

- guides d'équipement ;
- comparatifs ;
- affiliation transparente ;
- catalogue sélectionné ;
- Stripe ;
- commandes ;
- fournisseurs et suivi logistique.

Commencer par l'affiliation/recommandation contextuelle avant une infrastructure e-commerce lourde.

## V4 — Plateforme

- journal de progression ;
- programmes personnalisables ;
- davantage d'outils ;
- newsletter ;
- contributions/relectures d'experts ;
- cycle semi-automatisé de feedback/commentaires si le besoin devient réel.

## V5 — Écosystème

- parcs ;
- coachs ;
- clubs ;
- associations ;
- événements ;
- partenariats.

Avant de construire une base de parcs, étudier les services/données existants, leurs licences et les possibilités de partenariat ou d'intégration.

## Règle d'évolution

Une nouvelle version enrichit les fondations existantes. On évite de supprimer une capacité fonctionnelle simplement parce qu'une nouvelle fonctionnalité est ajoutée. Une idée du fondateur est un signal à évaluer, pas automatiquement une décision ni une priorité.
