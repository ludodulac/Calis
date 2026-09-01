"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { InfoDialog } from "@/components/info-dialog";
import { TrainingAssessmentFlow } from "@/components/training-assessment";
import { adaptFoundationProgram } from "@/lib/training/adapt";
import { getTrainingDecision, type TrainingDecision } from "@/lib/training/decision";
import type { SessionLog, TrainingAssessment, TrainingProgram } from "@/lib/training/types";
import styles from "@/app/aujourdhui/today.module.css";

const LOGS_STORAGE_KEY = "calis.training.v2.logs";
const ASSESSMENT_STORAGE_KEY = "calis.training.v2.assessment";

type ValuesState = Record<string, string[]>;
type SummaryItem = {
  label: string;
  values: string;
  decision: TrainingDecision;
};
type SessionSummary = {
  sessionLabel: string;
  nextSessionLabel: string;
  items: SummaryItem[];
};

function emptyValues(program: TrainingProgram, sessionIndex: number): ValuesState {
  return Object.fromEntries(
    program.sessions[sessionIndex].exercises.map((exercise) => [
      exercise.resourceSlug,
      Array.from({ length: exercise.sets }, () => ""),
    ]),
  );
}

function startOfCurrentWeek() {
  const monday = new Date();
  const day = monday.getDay() || 7;
  monday.setDate(monday.getDate() - day + 1);
  monday.setHours(0, 0, 0, 0);
  return monday;
}

export function TodaySession({ program }: { program: TrainingProgram }) {
  const [logs, setLogs] = useState<SessionLog[]>([]);
  const [assessment, setAssessment] = useState<TrainingAssessment | null>(null);
  const [summary, setSummary] = useState<SessionSummary | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const storedLogs = window.localStorage.getItem(LOGS_STORAGE_KEY);
      const storedAssessment = window.localStorage.getItem(ASSESSMENT_STORAGE_KEY);
      if (storedLogs) setLogs(JSON.parse(storedLogs) as SessionLog[]);
      if (storedAssessment) setAssessment(JSON.parse(storedAssessment) as TrainingAssessment);
    } catch {
      // A broken local cache should never block the session.
    } finally {
      setReady(true);
    }
  }, []);

  const activeProgram = useMemo(
    () => assessment ? adaptFoundationProgram(program, assessment) : program,
    [assessment, program],
  );

  const sessionIndex = logs.length % activeProgram.sessions.length;
  const session = activeProgram.sessions[sessionIndex];
  const [values, setValues] = useState<ValuesState>(() => emptyValues(program, 0));

  useEffect(() => {
    setValues(emptyValues(activeProgram, sessionIndex));
  }, [activeProgram, sessionIndex]);

  const completedThisWeek = useMemo(() => {
    const monday = startOfCurrentWeek();
    return logs.filter((log) => new Date(log.completedAt) >= monday).length;
  }, [logs]);

  const weekComplete = completedThisWeek >= activeProgram.frequencyPerWeek;

  const complete = session.exercises.every((exercise) =>
    values[exercise.resourceSlug]?.length === exercise.sets
    && values[exercise.resourceSlug].every((value) => Number(value) > 0),
  );

  function saveAssessment(nextAssessment: TrainingAssessment) {
    setAssessment(nextAssessment);
    window.localStorage.setItem(ASSESSMENT_STORAGE_KEY, JSON.stringify(nextAssessment));
  }

  function resetAssessment() {
    setAssessment(null);
    setLogs([]);
    setSummary(null);
    window.localStorage.removeItem(ASSESSMENT_STORAGE_KEY);
    window.localStorage.removeItem(LOGS_STORAGE_KEY);
  }

  function updateValue(slug: string, setIndex: number, value: string) {
    setValues((current) => ({
      ...current,
      [slug]: current[slug].map((item, index) => (index === setIndex ? value : item)),
    }));
  }

  function finishSession() {
    if (!complete || weekComplete) return;

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
    const nextWeekCount = completedThisWeek + 1;
    const nextSession = activeProgram.sessions[nextLogs.length % activeProgram.sessions.length];
    const items = session.exercises.map((exercise) => ({
      label: exercise.label,
      values: values[exercise.resourceSlug].join(" / ") + (exercise.unit === "seconds" ? " s" : ""),
      decision: getTrainingDecision(nextLogs, exercise),
    }));

    setSummary({
      sessionLabel: session.label,
      nextSessionLabel: nextWeekCount >= activeProgram.frequencyPerWeek ? "Repos" : nextSession.label,
      items,
    });
    setLogs(nextLogs);
    window.localStorage.setItem(LOGS_STORAGE_KEY, JSON.stringify(nextLogs));
  }

  if (!ready) return <div className={styles.loading}>Préparation…</div>;
  if (!assessment) return <TrainingAssessmentFlow onComplete={saveAssessment} />;

  if (weekComplete && !summary) {
    return (
      <div className={styles.assessmentScreen}>
        <div className={styles.assessmentTop}>
          <span>Cette semaine</span>
          <div className={styles.weekCount} aria-label={`${completedThisWeek} séances terminées sur ${activeProgram.frequencyPerWeek}`}>
            {completedThisWeek}/{activeProgram.frequencyPerWeek}
          </div>
        </div>
        <section className={styles.assessmentQuestion}>
          <h1>Aujourd'hui : repos</h1>
          <div className={styles.detailPanel}><p>Les séances prévues sont faites.</p></div>
        </section>
        <footer className={styles.sessionFooter}>
          <InfoDialog label="Pourquoi du repos ?" title="Cette semaine" icon="info">
            <div className={styles.detailPanel}>
              <p>Le programme actuel prévoit {activeProgram.frequencyPerWeek} séances par semaine. Calis ne rajoute pas automatiquement du volume une fois ce plan terminé.</p>
              <button className={styles.resetButton} type="button" onClick={resetAssessment}>Refaire mon point de départ</button>
            </div>
          </InfoDialog>
          <Link className="button primary" href="/bibliotheque">Bibliothèque</Link>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.sessionScreen}>
      <header className={styles.sessionHeader}>
        <div>
          <span>Aujourd'hui</span>
          <h1>{session.label}</h1>
        </div>
        <div className={styles.weekCount} aria-label={`${completedThisWeek} séances terminées cette semaine`}>
          {completedThisWeek}/{activeProgram.frequencyPerWeek}
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
        <InfoDialog label="Réglages de la séance" title="Ta progression" icon="help">
          <div className={styles.detailPanel}>
            <p>{activeProgram.adaptationRule}</p>
            <p>Les décisions visibles utilisent uniquement les résultats saisis. Elles ne remplacent pas ton jugement sur la technique, la douleur ou la fatigue.</p>
            <button className={styles.resetButton} type="button" onClick={resetAssessment}>Refaire mon point de départ</button>
          </div>
        </InfoDialog>
        <button className={styles.finishButton} type="button" onClick={finishSession} disabled={!complete}>
          {complete ? "Terminer" : "Remplis les séries"}
        </button>
      </footer>

      {summary && (
        <section className={styles.summaryLayer} role="dialog" aria-modal="true" aria-labelledby="session-summary-title">
          <div className={styles.summaryCard}>
            <div className={styles.summaryHeading}>
              <span>{summary.sessionLabel}</span>
              <h2 id="session-summary-title">Séance terminée</h2>
            </div>
            <div className={styles.summaryList}>
              {summary.items.map((item) => (
                <div className={styles.summaryRow} key={item.label}>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.values}</span>
                  </div>
                  <span className={`${styles.decisionBadge} ${styles[item.decision.state]}`}>{item.decision.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.summaryNext}>Prochaine : <strong>{summary.nextSessionLabel}</strong></div>
            <button className={styles.finishButton} type="button" onClick={() => setSummary(null)}>Voir la suite</button>
          </div>
        </section>
      )}
    </div>
  );
}
