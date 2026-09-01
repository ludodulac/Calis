import type { SessionLog, TrainingProgram } from "@/lib/training/types";
import styles from "@/app/aujourdhui/today.module.css";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }).format(new Date(value));
}

function readableSlug(slug: string) {
  return slug.replaceAll("-", " ").replace(/^./, (letter) => letter.toUpperCase());
}

function resultValues(values: number[], unit?: "reps" | "seconds") {
  return `${values.join("/")}${unit === "seconds" ? " s" : ""}`;
}

export function TrainingHistory({ logs, program }: { logs: SessionLog[]; program: TrainingProgram }) {
  const recent = logs.slice(-6).reverse();
  const currentExercises = Array.from(
    new Map(program.sessions.flatMap((session) => session.exercises).map((exercise) => [exercise.resourceSlug, exercise])).values(),
  );
  const currentLabels = new Map(currentExercises.map((exercise) => [exercise.resourceSlug, exercise.label]));

  return (
    <div className={styles.detailPanel}>
      <div>
        <strong>En ce moment</strong>
        <div className={styles.summaryList}>
          {currentExercises.map((exercise) => (
            <div className={styles.summaryRow} key={exercise.resourceSlug}>
              <div>
                <strong>{exercise.label}</strong>
                <span>{exercise.sets} × {exercise.min}–{exercise.max}{exercise.unit === "seconds" ? " s" : ""}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <strong>Dernières séances</strong>
        {recent.length === 0 ? (
          <p>Aucune séance enregistrée pour l'instant.</p>
        ) : (
          <div className={styles.summaryList}>
            {recent.map((log) => {
              const label = program.sessions.find((session) => session.id === log.sessionId)?.label ?? "Séance";
              return (
                <div className={styles.summaryRow} key={`${log.completedAt}-${log.sessionId}`}>
                  <div>
                    <strong>{label} · {formatDate(log.completedAt)}</strong>
                    <span>
                      {log.exercises.map((exercise) => `${currentLabels.get(exercise.prescriptionSlug) ?? readableSlug(exercise.prescriptionSlug)} ${resultValues(exercise.values, exercise.prescription?.unit)}`).join(" · ")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
