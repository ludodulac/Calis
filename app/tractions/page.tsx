import Link from "next/link";
import { pullUpProgression } from "@/lib/content/v1";

export default function PullUpsPage() {
  return (
    <section className="section shell">
      <div className="sectionHeading wide">
        <div className="eyebrow">Hub traction</div>
        <h1>Construire une traction, pas juste tenter d'en faire une.</h1>
        <p className="lead">Chaque étape prépare la suivante. Les critères servent de repères, pas de barrières absolues.</p>
      </div>
      <ol className="progression">
        {pullUpProgression.map((step, index) => (
          <li key={step.id} className="progressionStep">
            <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{step.label}</h2>
              <p>{step.criterion}</p>
              {step.resourceSlug && <Link className="textLink" href={`/bibliotheque/${step.resourceSlug}`}>Ouvrir la fiche →</Link>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
