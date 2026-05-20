import { APP_URL } from "../config";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-slate-500 sm:text-left">
          © {new Date().getFullYear()} 12V Sim — free 12V DC wiring simulator. No ads, no account, no subscription.
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-energized transition hover:text-amber-300"
        >
          app.12vsim.com
        </a>
      </div>
    </footer>
  );
}