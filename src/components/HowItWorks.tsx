import { howItWorksSteps, howItWorksSummary } from "../content/howItWorksSteps";
import { useInView } from "../hooks/useInView";

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
        <p className="mt-4 max-w-2xl text-lg text-slate-400">{howItWorksSummary}</p>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((s) => (
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
