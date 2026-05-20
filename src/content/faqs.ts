export type FaqItem = { q: string; a: string };

/** Single source for FAQ UI and FAQPage JSON-LD */
export const faqs: FaqItem[] = [
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
