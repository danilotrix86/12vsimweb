import type { ReactNode } from "react";
import { useCases, useCasesHeading, useCasesIntro } from "../content/useCases";
import { useInView } from "../hooks/useInView";
import { BatteryIcon, BoatIcon, RvIcon, VanIcon } from "./FeatureIcons";

const caseIcons: ReactNode[] = [<VanIcon />, <BoatIcon />, <RvIcon />, <BatteryIcon />];

export function UseCases() {
  const { ref, visible } = useInView();

  return (
    <section className="border-t border-slate-800/80 bg-slate-900/20 py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          {useCasesHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">{useCasesIntro}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {useCases.map((c, i) => (
            <article
              key={c.title}
              className="feature-card rounded-xl border border-slate-700/80 bg-slate-800/30 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-energized">
                {caseIcons[i]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
