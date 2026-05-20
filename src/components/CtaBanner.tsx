import { APP_URL } from "../config";
import { useInView } from "../hooks/useInView";

export function CtaBanner() {
  const { ref, visible } = useInView();

  return (
    <section className="border-t border-slate-800/80 py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-800/80 to-slate-900 px-8 py-12 text-center sm:px-16 sm:py-16">
          <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Ready to wire smarter?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              Open the simulator now — completely free, no sign-up, no ads, no subscription.
              Load the starter design and hit Run in under a minute.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-energized px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-300"
            >
              Launch 12V Sim — free
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}