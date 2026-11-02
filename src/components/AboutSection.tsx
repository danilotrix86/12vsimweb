import { APP_URL } from "../config";
import { useInView } from "../hooks/useInView";
import { DonateButton } from "./Nav";

export function AboutSection() {
  const { ref, visible } = useInView();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-slate-800/80 bg-slate-900/20 py-20 sm:py-28"
    >
      <div
        ref={ref}
        className={`reveal mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16 ${visible ? "is-visible" : ""}`}
      >
        <div>
          <h2 id="about-heading" className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            About
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-400">
            <p>
              Hi! I&apos;m an Italian developer and sailing enthusiast. I originally built 12V Sim to
              help me rewire my own sailboat, then decided to share it for free so others could
              benefit too.
            </p>
            <p>
              I love building useful tools, and my goal is to keep 12V Sim 100% free, with no ads,
              subscriptions, or registration required.
            </p>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-700/80 bg-slate-800/30 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-slate-50">Support the project</h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-400">
            <p>
              If you find it useful, a small donation would mean a lot. Your support helps cover
              running costs like hosting, domains, databases, and other services. Most importantly,
              it allows me to dedicate more time to developing new features, fixing bugs, and making
              12V Sim better for everyone.
            </p>
            <p>Donations are completely optional. Your feedback and suggestions are just as valuable.</p>
            <p>Thanks for supporting the project.</p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <DonateButton prominent />
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-energized px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Try it — app.12vsim.com
              <span aria-hidden>→</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
