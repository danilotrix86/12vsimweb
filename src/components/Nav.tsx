import logo from "../assets/logo.png";
import { APP_URL } from "../config";

const KOFI_URL = "https://ko-fi.com/E0V329XB64";

/** Counts clicks, not completed payments. */
function trackDonateClick(): void {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "donate_click", {
    link_url: KOFI_URL,
    outbound: true,
  });
}

function DonateButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={KOFI_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackDonateClick}
      title="12V Sim stays free. This helps cover hosting, the database, and new features."
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-rose-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-500"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-3.5 w-3.5"
      >
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <path d="M6 2v2" />
        <path d="M10 2v2" />
        <path d="M14 2v2" />
      </svg>
      {compact ? "Support" : "Support the project"}
    </a>
  );
}

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-[#0b1220]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="12V Sim"
            title="12V Sim"
            draggable={false}
            className="h-10 w-auto select-none sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-400 lg:flex" aria-label="Main">
          <a href="#free" className="transition hover:text-slate-100">Free</a>
          <a href="#features" className="transition hover:text-slate-100">Features</a>
          <a href="#calculators" className="transition hover:text-slate-100">Calculators</a>
          <a href="#diagrams" className="transition hover:text-slate-100">Diagrams</a>
          <a href="#simulator" className="transition hover:text-slate-100">Simulator</a>
          <a href="#faq" className="transition hover:text-slate-100">FAQ</a>
          <DonateButton />
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <span className="lg:hidden">
            <DonateButton compact />
          </span>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-energized px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Launch app
          </a>
        </div>
      </div>
    </header>
  );
}
