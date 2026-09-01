"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { InfoDialog } from "@/components/info-dialog";
import { getTrainingDecision } from "@/lib/training/decision";
import type { SessionLog, TrainingProgram } from "@/lib/training/types";
import styles from "@/app/aujourdhui/today.module.css";

const STORAGE_KEY = "calis.training.v1.logs";

type ValuesState = Record<string, string[]>;

function emptyValues(program: TrainingProgram, sessionIndex: number): ValuesState {
  return Object.fromEntries(
    program.sessions[sessionIndex].exercises.map((exercise) => [
      exercise.resourceSlug,
      Array.from({ length: exercise.sets }, () => ""),
    ]),
  );
}

export function TodaySession({ program }: { program: TrainingProgram }) {
  const [logs, setLogs] = useState<SessionLog[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setLogs(JSON.parse(stored) as SessionLog[]);
    } catch {
      // A broken local cache should never block the session.
    } finally {
      setReady(true);
    }
  }, []);

  const sessionIndex = logs.length % program.sessions.length;
  const session = program.sessions[sessionIndex];
  const [values, setValues] = useState<ValuesState>(() => emptyValues(program, 0));

  useEffect(() => {
    setValues(emptyValues(program, sessionIndex));
  }, [program, sessionIndex]);

  const completedThisWeek = useMemo(() => {
    const now = new Date();
    const monday = new Date(now);
    const day = monday.getDay() || 7;
    monday.setDate(monday.getDate() - day + 1);
    monday.setHours(0, 0, 0, 0);
    return logs.filter((log) => new Date(log.completedAt) >= monday).length;
  }, [logs]);

  const complete = session.exercises.every((exercise) =>
    values[exercise.resourceSlug]?.length === exercise.sets
    && values[exercise.resourceSlug].every((value) => Number(value) > 0),
  );

  function updateValue(slug: string, setIndex: number, value: string) {
    setValues((current) => ({
      ...current,
      [slug]: current[slug].map((item, index) => (index === setIndex ? value : item)),
    }));
  }

  function finishSession() {
    if (!complete) return;

    const log: SessionLog = {
      sessionId: session.id,
      completedAt: new Date().toISOString(),
      exercises: session.exercises.map((exercise) => ({
        prescriptionSlug: exercise.resourceSlug,
        values: values[exercise.resourceSlug].map(Number),
        completed: true,
      })),
    };

    const nextLogs = [...logs, log];
    setLogs(nextLogs);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextLogs));
  }

  if (!ready) return <div className={styles.loading}>Préparation…</div>;

  return (
    <div className={styles.sessionScreen}>
      <header className={styles.sessionHeader}>
        <div>
          <span>Aujourd'hui</span>
          <h1>{session.label}</h1>
        </div>
        <div className={styles.weekCount} aria-label={`${completedThisWeek} séances terminées cette semaine`}>
          {completedThisWeek}/{program.frequencyPerWeek}
        </div>
      </header>

      <div className={styles.exerciseList}>
        {session.exercises.map((exercise) => {
          const decision = getTrainingDecision(logs, exercise);
          return (
            <article className={styles.exerciseRow} key={exercise.resourceSlug}>
              <div className={styles.exerciseTopline}>
                <div>
                  <strong>{exercise.label}</strong>
                  <span>{exercise.sets} × {exercise.min}–{exercise.max}{exercise.unit === "seconds" ? " s" : ""}</span>
                </div>
                <div className={styles.exerciseActions}>
                  <span className={`${styles.decisionBadge} ${styles[decision.state]}`}>{decision.label}</span>
                  <InfoDialog label={`Détails pour ${exercise.label}`} title={exercise.label} icon="info">
                    <div className={styles.detailPanel}>
                      <p><strong>Décision :</strong> {decision.detail}</p>
                      <p>{exercise.effortCue}</p>
                      <p><strong>Repos :</strong> {exercise.restSeconds} s</p>
                      <p><strong>Ensuite :</strong> {exercise.progressionCue}</p>
                      <Link href={`/bibliotheque/${exercise.resourceSlug}`}>Voir le mouvement →</Link>
                    </div>
                  </InfoDialog>
                </div>
              </div>

              <div className={styles.setInputs} aria-label={`Résultats pour ${exercise.label}`}>
                {Array.from({ length: exercise.sets }, (_, setIndex) => (
                  <label key={setIndex}>
                    <span>S{setIndex + 1}</span>
                    <input
                      inputMode="numeric"
                      min="0"
                      pattern="[0-9]*"
                      type="number"
                      value={values[exercise.resourceSlug][setIndex]}
                      onChange={(event) => updateValue(exercise.resourceSlug, setIndex, event.target.value)}
                      aria-label={`${exercise.label}, série ${setIndex + 1}`}
                    />
                  </label>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <footer className={styles.sessionFooter}>
        <InfoDialog label="Comment cette séance progresse" title="Règle de progression" icon="help">
          <div className={styles.detailPanel}>
            <p>{program.adaptationRule}</p>
            <p>Les décisions visibles utilisent uniquement les résultats saisis. Elles ne remplacent pas ton jugement sur la technique, la douleur ou la fatigue.</p>
            <p>{program.scopeNote}</p>
          </div>
        </InfoDialog>
        <button className={styles.finishButton} type="button" onClick={finishSession} disabled={!complete}>
          {complete ? "Terminer" : "Remplis les séries"}
        </button>
      </footer>
    </div>
  );
}
