const stats = [
  { value: "$0", label: "Forever free" },
  { value: "0", label: "Ads" },
  { value: "0", label: "Registration required" },
  { value: "100+", label: "Components" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-slate-800/80 bg-slate-900/30" aria-label="Quick facts">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-800/80 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-8 text-center sm:px-6">
            <div className="text-2xl font-bold text-energized sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}