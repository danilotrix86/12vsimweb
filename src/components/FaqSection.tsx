import { useInView } from "../hooks/useInView";
import { APP_URL } from "../config";

const faqs = [
  {
    q: "Is 12V Sim really free?",
    a: "Yes. Completely free - no ads, no account, no subscription, and no registration. Open app.12vsim.com and start wiring.",
  },
  {
    q: "Does it work as a wire gauge calculator for 12V?",
    a: "Yes. Every wire has AWG or mm2 and length. The simulator checks ampacity and shows live current - it replaces a separate wire gauge calculator 12v or wire gauge calculator dc for schematic work.",
  },
  {
    q: "Can I check voltage drop?",
    a: "Run the sim to see live voltage at every node. Design Review includes a voltage drop category so you catch excessive drop across long or undersized runs.",
  },
  {
    q: "Is this an online circuit simulator?",
    a: "12V Sim is a browser-based online circuit simulator focused on 12V DC and low-voltage wiring - boats, RVs, campers, cars, and off-grid installs.",
  },
  {
    q: "Can it help with automotive or car electrical repair?",
    a: "12V Sim is a design and test tool, not a repair manual. Use it to plan car electrical wiring or vehicle electrical work before you cut wire - validate fuses, relays, and loads so automotive electrical repair goes faster with fewer surprises.",
  },
  {
    q: "What about auto electrical repair or truck wiring?",
    a: "Same idea: build the circuit, run the dc circuit simulator, fix design issues first. That reduces guesswork during auto electrical repair and helps you understand the system you are fixing.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. It runs in Chrome, Firefox, Safari, or Edge. Designs save to your browser LocalStorage unless you export JSON.",
  },
];

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