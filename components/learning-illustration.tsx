type LearningIllustrationProps = {
  label: string;
  caption: string;
  variant?: "movement" | "comparison" | "sequence";
};

export function LearningIllustration({ label, caption, variant = "movement" }: LearningIllustrationProps) {
  return (
    <figure className={`learningIllustration ${variant}`}>
      <div className="illustrationCanvas" aria-hidden="true">
        <span className="illustrationMark">CALIS · ÉTUDE DU MOUVEMENT</span>
        <div className="illustrationGhost">
          <i /><i /><i />
        </div>
        <strong>{label}</strong>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
