import { useInView } from "../hooks/useInView";

const pills = [
  {
    title: "Free forever",
    description: "No subscription, no paywall, no premium tier.",
  },
  {
    title: "No account",
    description: "No registration, no email, no sign-up form.",
  },
  {
    title: "No ads",
    description: "Zero advertising anywhere in the tool.",
  },
  {
    title: "Runs in your browser",
    description: "Designs save locally on your device. Nothing to install.",
  },
];

export function FreeTrust() {
  const { ref, visible } = useInView();

  return (
    <section
      id="free"
      aria-labelledby="free-heading"
      className="border-t border-slate-800/80 bg-slate-900/20 py-16 sm:py-20"
    >
      <div
        ref={ref}
        className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="free-heading" className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Completely free. No strings attached.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            12V Sim is a free tool for anyone planning a 12V DC install. We do not show ads,
            we do not ask you to create an account, and we do not sell subscriptions.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pills.map((pill) => (
            <li
              key={pill.title}
              className="feature-card rounded-xl border border-slate-700/80 bg-slate-800/30 p-6 text-center"
            >
              <h3 className="text-base font-semibold text-energized">{pill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{pill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}