import type {Metadata} from "next";
import Link from "next/link";
export const metadata:Metadata={title:"Conseils pour le matériel",description:"Choisir et utiliser un matériel de callisthénie adapté et stable."};
export default function MaterielPage(){
 return <article className="calisDocs"><div className="shell calisDocsInner">
 <span className="eyebrow">CALIS • MATÉRIEL</span><h1>Le bon matériel, au bon moment.</h1>
 <p>Le matériel n'est pas obligatoire pour commencer. Quand il devient utile, CALIS indique lequel correspond à l'exercice.</p>
 <section><h2>Barre de traction</h2><p>Choisir un modèle adapté à la fixation et au poids supporté, installé conformément à la notice. Vérifier la stabilité avant chaque utilisation.</p></section>
 <section><h2>Élastiques</h2><p>Vérifier leur usure, leur tension et leur fixation. La largeur ne garantit pas, à elle seule, une résistance identique entre fabricants.</p></section>
 <section><h2>Barres parallèles et parallettes</h2><p>Préférer une structure antidérapante, stable et conçue pour supporter l'exercice envisagé.</p></section>
 <section><h2>Banc ou table domestique</h2><p>Pour les pompes inclinées, utiliser uniquement un support immobile et stable, qui ne risque pas de basculer.</p></section>
 <p><strong>Achats :</strong> les liens commerciaux seront ajoutés après vérification des produits, des conditions d'affiliation et de la disponibilité. Aucun produit n'est recommandé à ce stade.</p>
 <Link className="button" href="/">← Revenir aux programmes</Link></div></article>;
}
