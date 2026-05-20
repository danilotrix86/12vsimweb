import { useInView } from "../hooks/useInView";
import { APP_URL } from "../config";

export function SimulatorSection() {
  const { ref, visible } = useInView();

  return (
    <section id="simulator" className="border-t border-slate-800/80 bg-slate-900/20 py-20 sm:py-28">
      <div ref={ref} className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Free online DC circuit simulator
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              12V Sim is an online circuit simulator built for low-voltage DC - not AC bench tools from engineering school.
              Drag components, wire ports, and hit Run to solve the network with Modified Nodal Analysis.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Watch energized wires animate, read live amps and volts on every node, and use Design Review to grade the install.
              It is a dc circuit simulator that speaks AWG, fuses, and battery banks - completely free in your browser.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-energized px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Try the online circuit simulator
              <span aria-hidden>→</span>
            </a>
          </div>
          <ul className="space-y-4 rounded-xl border border-slate-700/80 bg-slate-800/30 p-6 text-sm text-slate-400">
            <li className="flex gap-3"><span className="text-emerald-400">✓</span> Steady-state DC solver with fuse and relay iteration</li>
            <li className="flex gap-3"><span className="text-emerald-400">✓</span> 100+ sources, switches, protection, and loads</li>
            <li className="flex gap-3"><span className="text-emerald-400">✓</span> AWG/mm2 on every wire with ampacity checks</li>
            <li className="flex gap-3"><span className="text-emerald-400">✓</span> No download, no account, no subscription</li>
            <li className="flex gap-3"><span className="text-emerald-400">✓</span> Export JSON and share designs via URL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}