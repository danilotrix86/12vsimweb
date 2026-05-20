import { useInView } from "../hooks/useInView";

const systems = [
  {
    title: "Camper van electrical system",
    description:
      "House bank, solar input, fridge, lights, and USB outlets - plan a camper van electrical system with realistic cable lengths and fuse protection.",
  },
  {
    title: "RV electrical system",
    description:
      "From converter/charger to branch circuits - design an rv electrical system and check voltage drop on long runs before you commit to wire.",
  },
  {
    title: "Off grid electrical system",
    description:
      "Batteries, solar, wind, or generator inputs plus DC distribution - model an off grid electrical system and estimate runtime under load.",
  },
  {
    title: "Low voltage wiring",
    description:
      "12V DC is low voltage wiring, but ampacity and voltage drop still matter. Size every run and catch overloads in simulation.",
  },
  {
    title: "12V wiring",
    description:
      "Automotive, marine, and RV 12v wiring share the same physics. One tool for buses, switches, relays, and loads on a single schematic.",
  },
  {
    title: "Car electrical wiring",
    description:
      "Starter-adjacent loads, dual battery, accessories, and relays - map car electrical wiring and test before cutting harnesses.",
  },
];

export function SystemsSection() {
  const { ref, visible } = useInView();

  return (
    <section id="systems" className="border-t border-slate-800/80 py-20 sm:py-28">
      <div ref={ref} className={`reveal mx-auto max-w-6xl px-4 sm:px-6 ${visible ? "is-visible" : ""}`}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Plan any low-voltage DC system
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          Whether you are building a camper van electrical system, upgrading an rv electrical system, or wiring an off grid electrical system,
          start with a schematic you can run and review - not a napkin sketch.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s) => (
            <article key={s.title} className="feature-card rounded-xl border border-slate-700/80 bg-slate-800/30 p-6">
              <h3 className="text-base font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}