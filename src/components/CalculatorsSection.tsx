import { useInView } from "../hooks/useInView";
import { APP_URL } from "../config";

const tools = [
  {
    title: "Wire gauge calculator (12V & DC)",
    description:
      "Every cable in 12V Sim has AWG or mm2 gauge and length. The solver uses real resistance and ampacity tables so you can size wire for 12V and low-voltage DC loads without a separate spreadsheet.",
  },
  {
    title: "DC wire size calculator",
    description:
      "Pick a standard AWG chip or enter mm2. The simulator flags overloaded conductors when current exceeds the gauge rating - the same check you need for a dc wire size calculator.",
  },
  {
    title: "Voltage drop calculator",
    description:
      "Run the sim and read live voltage at every node. Design Review scores voltage drop across your install so you catch brown-outs before they happen in the field.",
  },
];

export function CalculatorsSection() {
  const { ref, visible } = useInView();

  return (
    <section id="calculators" className="border-t border-slate-800/80 py-20 sm:py-28">
      <div ref={ref} className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Wire gauge and voltage drop - built in
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          Skip standalone calculator tabs. 12V Sim combines a wire size calculator, wire gauge calculator for 12V DC,
          and live voltage drop analysis in one free online circuit simulator.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tools.map((t) => (
            <article key={t.title} className="feature-card rounded-xl border border-slate-700/80 bg-slate-800/30 p-6">
              <h3 className="text-lg font-semibold text-slate-100">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          <a href={APP_URL} className="font-medium text-energized hover:text-amber-300" target="_blank" rel="noopener noreferrer">
            Open the free simulator
          </a>
          {" "}to size wire and check voltage drop on your schematic.
        </p>
      </div>
    </section>
  );
}