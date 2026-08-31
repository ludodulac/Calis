import Link from "next/link";
import type { ProgressionStep } from "@/lib/content/types";

type ProgressionPathLink = {
  href: string;
  label: string;
};

type ProgressionPathProps = {
  steps: ProgressionStep[];
  ariaLabel: string;
  milestoneId?: string;
  className?: string;
  fork?: {
    label: string;
    links: ProgressionPathLink[];
  };
};

export function ProgressionPath({ steps, ariaLabel, milestoneId, className = "", fork }: ProgressionPathProps) {
  return (
    <>
      <div className={`progressionPath${className ? ` ${className}` : ""}`} aria-label={ariaLabel}>
        {steps.map((step, index) => {
          const body = (
            <>
              <span className="pathIndex">{String(index + 1).padStart(2, "0")}</span>
              <span className="pathBody">
                <strong>{step.label}</strong>
                {step.criterion && <small>{step.criterion}</small>}
              </span>
              <span className="pathArrow" aria-hidden="true">→</span>
            </>
          );

          const stepClassName = `pathStep${step.id === milestoneId ? " pathMilestone" : ""}`;

          return step.resourceSlug ? (
            <Link key={step.id} className={stepClassName} href={`/bibliotheque/${step.resourceSlug}`}>
              {body}
            </Link>
          ) : (
            <div key={step.id} className={stepClassName}>
              {body}
            </div>
          );
        })}
      </div>

      {fork && (
        <div className="pathFork">
          <span>{fork.label}</span>
          <div>
            {fork.links.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
