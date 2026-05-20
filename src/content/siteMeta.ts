export {
  APP_DESCRIPTION,
  APP_FEATURE_LIST,
  APP_URL as DEFAULT_APP_URL,
  BROWSER_REQUIREMENTS,
  BRAND_NAME,
  DATE_PUBLISHED,
  SITE_DESCRIPTION,
  SITE_URL as DEFAULT_SITE_URL,
  SOFTWARE_VERSION,
} from "../seo/siteConstants";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.trim() || "https://12vsim.com";
export const APP_URL =
  import.meta.env.VITE_APP_URL?.trim() || "https://app.12vsim.com";
