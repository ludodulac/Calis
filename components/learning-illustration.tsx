type LearningIllustrationProps = {
  label: string;
  caption: string;
  variant?: "movement" | "comparison" | "sequence";
  src?: string;
  alt?: string;
};

export function LearningIllustration({ label, caption, variant = "movement", src, alt }: LearningIllustrationProps) {
  const basePath = process.env.GITHUB_ACTIONS === "true" ? "/Calis" : "";
  const resolvedSrc = src ? `${basePath}${src}` : undefined;

  return (
    <figure className={`learningIllustration ${variant}`}>
      {resolvedSrc ? (
        <div className="illustrationCanvas illustrationCanvasWithImage">
          <img className="illustrationImage" src={resolvedSrc} alt={alt ?? ""} />
        </div>
      ) : (
        <div className="illustrationCanvas" aria-hidden="true">
          <span className="illustrationMark">CALIS · ÉTUDE DU MOUVEMENT</span>
          <div className="illustrationGhost">
            <i /><i /><i />
          </div>
          <strong>{label}</strong>
        </div>
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
