import type { SessionLog, TrainingProgram } from "@/lib/training/types";
import styles from "@/app/aujourdhui/today.module.css";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }).format(new Date(value));
}

export function TrainingHistory({ logs, program }: { logs: SessionLog[]; program: TrainingProgram }) {
  const recent = logs.slice(-6).reverse();
  const currentExercises = Array.from(
    new Map(program.sessions.flatMap((session) => session.exercises).map((exercise) => [exercise.resourceSlug, exercise])).values(),
  );

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
                    <strong>{label}</strong>
                    <span>{formatDate(log.completedAt)}</span>
                  </div>
                  <span>{log.exercises.filter((exercise) => exercise.completed).length} exercices</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
