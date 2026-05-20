import { APP_URL } from "../config";

function HeroScreenshot() {
  return (
    <div className="hero-glow relative overflow-hidden rounded-xl border border-slate-700/80 bg-[#0f172a]">
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        </div>
        <span className="ml-2 text-xs text-slate-400">12V Sim — Live schematic</span>
      </div>
      <img
        src="/hero-screenshot.png"
        alt="12V Sim wiring simulator showing dual AGM batteries, a battery selector set to BOTH, solar charge input, fuse, and an 8-channel switch panel with live voltage and current readings on every wire"
        width={1200}
        height={750}
        className="block w-full object-cover object-top"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14">
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-energized animate-pulse" />
              100% free · No ads · No account · No registration
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Design your 12/24V system before you cut a wire
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Free browser-based simulator for 12V and 24V vans, boats, campers, and off-grid installs.
              No subscription, no sign-up — open the app and start wiring. Run live DC analysis,
              catch blown fuses and voltage drop, and share your schematic in one click.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-energized px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
              >
                Launch simulator — free
                <span aria-hidden>→</span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 text-base font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
              >
                See features
              </a>
            </div>
          </div>
          <div className="animate-[float_6s_ease-in-out_infinite] lg:justify-self-end">
            <HeroScreenshot />
          </div>
        </div>
      </div>
    </section>
  );
}