import { diagramGuides, diagramGuidesHeading, diagramGuidesIntro } from "../content/diagramGuides";
import { useInView } from "../hooks/useInView";

export function DiagramGuidesSection() {
  const { ref, visible } = useInView();

  return (
    <section id="diagrams" className="border-t border-slate-800/80 bg-slate-900/20 py-20 sm:py-28">
      <div ref={ref} className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          {diagramGuidesHeading}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">{diagramGuidesIntro}</p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diagramGuides.map((d) => (
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
