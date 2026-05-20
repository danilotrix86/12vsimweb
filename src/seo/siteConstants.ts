/** Production URLs for JSON-LD (no import.meta — safe for Vite config / plugins). */
export const SITE_URL = "https://12vsim.com";
export const APP_URL = "https://app.12vsim.com";

export const BRAND_NAME = "12V Sim";

export const SITE_ORIGIN = SITE_URL.replace(/\/$/, "");
export const APP_ORIGIN = APP_URL.replace(/\/$/, "");

export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const WEBPAGE_ID = `${SITE_ORIGIN}/#webpage`;
export const APP_ID = `${APP_ORIGIN}/#application`;
export const APP_WEBPAGE_ID = `${APP_ORIGIN}/#webpage`;

export const OG_IMAGE_URL = `${SITE_ORIGIN}/og-image.png`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const LOGO_URL = `${SITE_ORIGIN}/favicon.svg`;

export const SOFTWARE_VERSION = "1.0";
export const DATE_PUBLISHED = "2025-05-01";
export const DATE_MODIFIED = "2026-05-20";

export const SITE_DESCRIPTION =
  "Free online 12V DC circuit simulator with wire gauge calculator, voltage drop analysis, and wiring diagrams for boat, RV, camper van, off-grid solar, and automotive 12V. No ads, no account, no registration.";

export const APP_DESCRIPTION =
  "Free online DC circuit simulator with wire gauge calculator, voltage drop analysis, and wiring diagrams for boat, RV, camper van, off-grid, and automotive 12V systems.";

export const APP_FEATURE_LIST = [
  "Modified Nodal Analysis DC solver",
  "Wire gauge calculator (AWG and mm²) with ampacity checks",
  "Voltage drop analysis and Design Review scoring",
  "Fuse, breaker, relay, and protection modeling",
  "Share designs via URL hash and JSON export",
  "No account or registration required",
];

export const BROWSER_REQUIREMENTS =
  "Requires JavaScript. Works in Chrome, Firefox, Safari, and Edge.";
