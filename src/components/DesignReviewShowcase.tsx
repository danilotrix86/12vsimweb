import { useInView } from "../hooks/useInView";

const GREEN = {
  text: "text-emerald-300",
  stroke: "#10b981",
  glow: "rgba(16,185,129,0.45)",
  bar: "#10b981",
};

const categories = [
  { label: "Fuse protection", score: 100 },
  { label: "Wire sizing margin", score: 100 },
  { label: "Voltage drop", score: 100 },
  { label: "Fuse sizing fit", score: 100 },
  { label: "Battery runtime", score: 100 },
  { label: "Topology hygiene", score: 82, issues: 1 },
];

function scoreTone(score: number) {
  if (score >= 90) return GREEN;
  if (score >= 75) return { text: "text-emerald-300", stroke: "#22c55e", glow: "rgba(34,197,94,0.35)", bar: "#22c55e" };
  return { text: "text-amber-300", stroke: "#f59e0b", glow: "rgba(245,158,11,0.45)", bar: "#f59e0b" };
}

function ReviewPanel() {
  const overall = 99;
  const tone = scoreTone(overall);

  return (
    <div className="w-full max-w-[360px] overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl shadow-emerald-950/20 backdrop-blur-sm lg:justify-self-end">
      <div className="flex items-center gap-3 border-b border-slate-800 px-3 py-2.5">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-lg font-bold tabular-nums ${tone.text}`}
          style={{ borderColor: tone.stroke, boxShadow: `0 0 12px ${tone.glow}` }}
        >
          {overall}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-slate-100">Design Review</div>
          <div className="text-[11px] text-slate-400">Grade A · 1 suggestions</div>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-md text-slate-500" aria-hidden>
          ×
        </div>
      </div>

      <div className="divide-y divide-slate-800">
        {categories.map((cat) => {
          const catTone = scoreTone(cat.score);
          const hasIssues = (cat.issues ?? 0) > 0;
          return (
            <div key={cat.label} className="flex items-center gap-2 px-3 py-2">
              <span className="w-4 text-center text-xs text-slate-500">{hasIssues ? "▶" : " "}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-medium text-slate-200">{cat.label}</span>
                  {hasIssues && (
                    <span className="text-[10px] text-amber-300/90">{cat.issues} issue(s)</span>
                  )}
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${cat.score}%`, background: catTone.bar }}
                  />
                </div>
              </div>
              <span className={`text-xs font-bold tabular-nums ${catTone.text}`}>{cat.score}</span>
            </div>
          );
        })}
      </div>

      <div className="border-t border-slate-800 px-3 py-1.5 text-[10px] text-slate-500">
        Score updates live as you wire. Click any item to locate it on the canvas.
      </div>
    </div>
  );
}

export function DesignReviewShowcase() {
  const { ref, visible } = useInView();

  return (
    <section id="design-review" className="border-t border-slate-800/80 py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Design Review - know before you build
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              While the sim runs, a live quality score grades your install against fuse protection,
              wire ampacity, voltage drop, and topology. Click any issue to jump straight to the problem on canvas.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">●</span>
                ABYC-aligned fuse vs. wire ampacity checks
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">●</span>
                Unprotected load detection upstream of fuses
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">●</span>
                Battery runtime estimate and orphan subnet warnings
              </li>
            </ul>
          </div>

          <ReviewPanel />
        </div>
      </div>
    </section>
  );
}