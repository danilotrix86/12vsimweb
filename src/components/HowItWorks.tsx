import { useInView } from "../hooks/useInView";

const steps = [
  {
    step: "01",
    title: "Drag components",
    description: "Pick batteries, fuses, switches, and loads from the categorized palette. Drop them onto the canvas.",
  },
  {
    step: "02",
    title: "Wire it up",
    description: "Connect ports and configure every cable with AWG/mm2 and length. No ideal wires - every run is real.",
  },
  {
    step: "03",
    title: "Hit Run",
    description: "The DC solver energizes your circuit. Watch live readings on components and animated current on wires.",
  },
  {
    step: "04",
    title: "Review & share",
    description: "Check your Design Review score, fix issues, then export JSON or copy a share URL for your build.",
  },
];

export function HowItWorks() {
  const { ref, visible } = useInView();

  return (
    <section id="how-it-works" className="border-t border-slate-800/80 bg-slate-900/20 py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          How it works
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Four steps from blank canvas to a validated schematic you can trust in the field.
        </p>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="relative">
              <span className="inline-block text-4xl font-bold tracking-tight text-energized">
                {s.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}