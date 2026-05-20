import { useInView } from "../hooks/useInView";
import {
  CableIcon,
  CanvasIcon,
  FaultIcon,
  ReviewIcon,
  ShareIcon,
  SolverIcon,
} from "./FeatureIcons";
import type { ReactNode } from "react";

const features: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <CanvasIcon />,
    title: "Drag-and-drop canvas",
    description:
      "100+ components: batteries, fuses, busbars, switch panels, relays, loads, and meters. Wire by dragging port to port.",
  },
  {
    icon: <SolverIcon />,
    title: "Live DC solver",
    description:
      "Modified Nodal Analysis runs on every change. See voltages, currents, and power on every node, with animated energized wires.",
  },
  {
    icon: <CableIcon />,
    title: "Real cable physics",
    description:
      "Every wire has AWG or mm2 gauge and length. The solver checks ampacity and flags overloaded cables before you install.",
  },
  {
    icon: <FaultIcon />,
    title: "Fault detection",
    description:
      "Catch blown fuses, wire overloads, and load brown-outs. Reset faults and iterate until your design is safe.",
  },
  {
    icon: <ReviewIcon />,
    title: "Design Review score",
    description:
      "Lighthouse-style A-F grade across fuse protection, wire margin, voltage drop, battery runtime, and topology.",
  },
  {
    icon: <ShareIcon />,
    title: "Save & share",
    description:
      "Multi-design library in LocalStorage, JSON export/import, and URL sharing. All free, no account needed.",
  },
];

export function FeatureGrid() {
  const { ref, visible } = useInView();

  return (
    <section id="features" className="border-t border-slate-800/80 py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Everything you need to prototype a 12V install
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From a starter template to a full marine panel: build, simulate, and stress-test before touching real wire.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="feature-card rounded-xl border border-slate-700/80 bg-slate-800/30 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-energized">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}