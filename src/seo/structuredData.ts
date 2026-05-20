import { diagramGuides, diagramGuidesHeading } from "../content/diagramGuides";
import { faqs } from "../content/faqs";
import { howItWorksSteps, howItWorksSummary } from "../content/howItWorksSteps";
import {
  APP_DESCRIPTION,
  APP_FEATURE_LIST,
  APP_ID,
  APP_ORIGIN,
  APP_WEBPAGE_ID,
  BRAND_NAME,
  BROWSER_REQUIREMENTS,
  DATE_MODIFIED,
  DATE_PUBLISHED,
  LOGO_URL,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  ORG_ID,
  SITE_DESCRIPTION,
  SITE_ORIGIN,
  SOFTWARE_VERSION,
  WEBPAGE_ID,
  WEBSITE_ID,
} from "./siteConstants";
import { useCases, useCasesHeading } from "../content/useCases";

type JsonLd = Record<string, unknown>;

function organization(): JsonLd {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND_NAME,
    url: SITE_ORIGIN,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  };
}

function freeOffer(): JsonLd {
  return {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  };
}

function applicationNode(options: { forMarketingPage: boolean }): JsonLd {
  const base: JsonLd = {
    "@type": ["WebApplication", "SoftwareApplication"],
    "@id": APP_ID,
    name: BRAND_NAME,
    applicationCategory: "DesignApplication",
    applicationSubCategory: "EngineeringApplication",
    operatingSystem: "Web browser",
    browserRequirements: BROWSER_REQUIREMENTS,
    description: APP_DESCRIPTION,
    isAccessibleForFree: true,
    inLanguage: "en",
    softwareVersion: SOFTWARE_VERSION,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    offers: freeOffer(),
    featureList: APP_FEATURE_LIST,
    image: OG_IMAGE_URL,
    screenshot: OG_IMAGE_URL,
    publisher: { "@id": ORG_ID },
  };

  if (options.forMarketingPage) {
    return {
      ...base,
      url: SITE_ORIGIN,
      installUrl: APP_ORIGIN,
      mainEntityOfPage: { "@id": WEBPAGE_ID },
    };
  }

  return {
    ...base,
    url: APP_ORIGIN,
    mainEntityOfPage: { "@id": APP_WEBPAGE_ID },
  };
}

function faqPage(): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_ORIGIN}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function howTo(): JsonLd {
  return {
    "@type": "HowTo",
    "@id": `${SITE_ORIGIN}/#howto`,
    name: "How to validate a 12V DC wiring diagram with 12V Sim",
    description: howItWorksSummary,
    totalTime: "PT15M",
    step: howItWorksSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}

function itemList(
  id: string,
  name: string,
  items: { title: string; description: string }[],
): JsonLd {
  return {
    "@type": "ItemList",
    "@id": id,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.title,
      description: item.description,
    })),
  };
}

function primaryImage(): JsonLd {
  return {
    "@type": "ImageObject",
    "@id": `${SITE_ORIGIN}/#og-image`,
    url: OG_IMAGE_URL,
    contentUrl: OG_IMAGE_URL,
    name: `${BRAND_NAME} — 12V DC wiring simulator preview`,
    description:
      "12V Sim wiring simulator with dual batteries, battery selector, and switch panel",
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
  };
}

/** Marketing homepage @graph (12vsim.com) */
export function buildMarketingGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: BRAND_NAME,
        url: SITE_ORIGIN,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: `${SITE_ORIGIN}/`,
        name: `${BRAND_NAME} - Free 12V DC Wiring Simulator`,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": APP_ID },
        primaryImageOfPage: { "@id": `${SITE_ORIGIN}/#og-image` },
        inLanguage: "en",
      },
      applicationNode({ forMarketingPage: true }),
      primaryImage(),
      faqPage(),
      howTo(),
      itemList(`${SITE_ORIGIN}/#use-cases`, useCasesHeading, useCases),
      itemList(`${SITE_ORIGIN}/#diagram-guides`, diagramGuidesHeading, diagramGuides),
    ],
  };
}

/** App shell @graph (app.12vsim.com) — copy into app index.html or use dist/app-schema.json */
export function buildAppGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      {
        "@type": "WebPage",
        "@id": APP_WEBPAGE_ID,
        url: `${APP_ORIGIN}/`,
        name: `${BRAND_NAME} — 12V DC Simulator`,
        description: APP_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": APP_ID },
        inLanguage: "en",
      },
      applicationNode({ forMarketingPage: false }),
      primaryImage(),
    ],
  };
}

export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data, null, 2);
}
