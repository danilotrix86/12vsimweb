import { useInView } from "../hooks/useInView";
import { BatteryIcon, BoatIcon, RvIcon, VanIcon } from "./FeatureIcons";
import type { ReactNode } from "react";

const cases: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <VanIcon />,
    title: "Van & camper",
    description: "Dual battery, solar input, fridge, lights, USB - model your entire house bank before the build.",
  },
  {
    icon: <BoatIcon />,
    title: "Marine & boat",
    description: "Selector switches, fuse panels, bilge pumps, nav lights - marine components with real wiring guides.",
  },
  {
    icon: <RvIcon />,
    title: "RV & trailer",
    description: "Shore charger, inverter loads, slide-outs, and awning circuits - stress-test peak draws safely.",
  },
  {
    icon: <BatteryIcon />,
    title: "Off-grid & shed",
    description: "Solar, wind, generator inputs, and battery banks - see voltage drop across long cable runs.",
  },
];

export function UseCases() {
  const { ref, visible } = useInView();

  return (
    <section className="border-t border-slate-800/80 bg-slate-900/20 py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Built for any 12V project
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Cars, robotics rigs, e-bikes - if it runs on 12V DC, you can simulate it here.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.title}
              className="feature-card rounded-xl border border-slate-700/80 bg-slate-800/30 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-energized">
                {c.icon}
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