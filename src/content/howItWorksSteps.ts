export type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Drag components",
    description:
      "Pick batteries, fuses, switches, and loads from the categorized palette. Drop them onto the canvas.",
  },
  {
    step: "02",
    title: "Wire it up",
    description:
      "Connect ports and configure every cable with AWG/mm2 and length. No ideal wires - every run is real.",
  },
  {
    step: "03",
    title: "Hit Run",
    description:
      "The DC solver energizes your circuit. Watch live readings on components and animated current on wires.",
  },
  {
    step: "04",
    title: "Review & share",
    description:
      "Check your Design Review score, fix issues, then export JSON or copy a share URL for your build.",
  },
];

export const howItWorksSummary =
  "Four steps from blank canvas to a validated schematic you can trust in the field.";
