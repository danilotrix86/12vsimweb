import { APP_URL } from "../config";

function BoltIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2L4 14h7l-1 8 10-12h-7l0-8z" />
    </svg>
  );
}

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-[#0b1220]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-100">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-energized">
            <BoltIcon className="h-4 w-4" />
          </span>
          12V Sim
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-400 lg:flex" aria-label="Main">
          <a href="#free" className="transition hover:text-slate-100">Free</a>
          <a href="#features" className="transition hover:text-slate-100">Features</a>
          <a href="#calculators" className="transition hover:text-slate-100">Calculators</a>
          <a href="#diagrams" className="transition hover:text-slate-100">Diagrams</a>
          <a href="#simulator" className="transition hover:text-slate-100">Simulator</a>
          <a href="#faq" className="transition hover:text-slate-100">FAQ</a>
        </nav>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-energized px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Launch app
        </a>
      </div>
    </header>
  );
}