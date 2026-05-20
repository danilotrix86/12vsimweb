export type DiagramGuideItem = { title: string; description: string };

export const diagramGuides: DiagramGuideItem[] = [
  {
    title: "12V wiring diagram",
    description:
      "Drag batteries, fuses, busbars, and loads onto the canvas and export or share a complete 12v wiring diagram.",
  },
  {
    title: "Boat wiring diagram",
    description:
      "Marine selector switches, fuse panels, bilge loads, and dual-bank layouts - build a boat wiring diagram with ABYC-minded checks.",
  },
  {
    title: "RV electrical wiring diagram",
    description:
      "Model shore power chargers, inverter loads, and branch circuits for an rv electrical wiring diagram you can stress-test before install.",
  },
  {
    title: "Battery wiring diagram",
    description:
      "Parallel banks, selectors, and charging paths - lay out a battery wiring diagram and see current flow when you hit Run.",
  },
  {
    title: "12 volt relay wiring diagram",
    description:
      "Drop mechanical, SSR, timer, or VSR relays and wire coil plus switched contacts for a 12 volt relay wiring diagram with live pickup/dropout.",
  },
  {
    title: "Relay wiring diagram",
    description:
      "Winch, pump, and panel-to-load relay circuits - a relay wiring diagram you can validate for overload and fuse protection.",
  },
  {
    title: "Off grid solar wiring diagram",
    description:
      "Solar charge sources, battery banks, and DC loads - sketch an off grid solar wiring diagram and watch bus voltage as irradiance changes.",
  },
];

export const diagramGuidesHeading = "Wiring diagrams you can simulate";
export const diagramGuidesIntro =
  "Static diagrams only show intent. 12V Sim lets you build interactive wiring diagrams for boats, RVs, campers, off-grid solar, and automotive 12V systems - then run a DC circuit simulator on the same canvas.";
