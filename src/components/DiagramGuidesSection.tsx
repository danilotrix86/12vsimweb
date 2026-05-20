import { useInView } from "../hooks/useInView";

const diagrams = [
  {
    title: "12V wiring diagram",
    description: "Drag batteries, fuses, busbars, and loads onto the canvas and export or share a complete 12v wiring diagram.",
  },
  {
    title: "Boat wiring diagram",
    description: "Marine selector switches, fuse panels, bilge loads, and dual-bank layouts - build a boat wiring diagram with ABYC-minded checks.",
  },
  {
    title: "RV electrical wiring diagram",
    description: "Model shore power chargers, inverter loads, and branch circuits for an rv electrical wiring diagram you can stress-test before install.",
  },
  {
    title: "Battery wiring diagram",
    description: "Parallel banks, selectors, and charging paths - lay out a battery wiring diagram and see current flow when you hit Run.",
  },
  {
    title: "12 volt relay wiring diagram",
    description: "Drop mechanical, SSR, timer, or VSR relays and wire coil plus switched contacts for a 12 volt relay wiring diagram with live pickup/dropout.",
  },
  {
    title: "Relay wiring diagram",
    description: "Winch, pump, and panel-to-load relay circuits - a relay wiring diagram you can validate for overload and fuse protection.",
  },
  {
    title: "Off grid solar wiring diagram",
    description: "Solar charge sources, battery banks, and DC loads - sketch an off grid solar wiring diagram and watch bus voltage as irradiance changes.",
  },
];

export function DiagramGuidesSection() {
  const { ref, visible } = useInView();

  return (
    <section id="diagrams" className="border-t border-slate-800/80 bg-slate-900/20 py-20 sm:py-28">
      <div ref={ref} className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Wiring diagrams you can simulate
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          Static diagrams only show intent. 12V Sim lets you build interactive wiring diagrams for boats, RVs, campers,
          off-grid solar, and automotive 12V systems - then run a DC circuit simulator on the same canvas.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diagrams.map((d) => (
            <li key={d.title} className="feature-card rounded-xl border border-slate-700/80 bg-slate-800/30 p-6">
              <h3 className="text-base font-semibold text-slate-100">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{d.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}