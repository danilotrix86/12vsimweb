import { faqs } from "../content/faqs";
import { APP_URL } from "../config";
import { useInView } from "../hooks/useInView";

export function FaqSection() {
  const { ref, visible } = useInView();

  return (
    <section id="faq" className="border-t border-slate-800/80 py-20 sm:py-28">
      <div ref={ref} className={`reveal mx-auto max-w-3xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Wire calculators, wiring diagrams, circuit simulation, and vehicle electrical planning - answered.
        </p>
        <dl className="mt-12 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-700/80 bg-slate-800/30 p-5">
              <dt className="text-base font-semibold text-slate-100">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">{item.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-center text-sm text-slate-500">
          Ready to try it?{" "}
          <a href={APP_URL} className="font-medium text-energized hover:text-amber-300" target="_blank" rel="noopener noreferrer">
            Launch the free simulator
          </a>
        </p>
      </div>
    </section>
  );
}
