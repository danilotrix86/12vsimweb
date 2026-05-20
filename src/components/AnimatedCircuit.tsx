export function AnimatedCircuit() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
      viewBox="0 0 800 600"
      fill="none"
      aria-hidden
    >
      <path
        d="M 40 120 H 200 V 280 H 360 V 120 H 520 V 400 H 680"
        className="wire-energized"
        stroke="#fbbf24"
      />
      <path
        d="M 680 400 V 520 H 120 V 440"
        className="wire-energized"
        stroke="#fbbf24"
        style={{ animationDelay: "0.2s" }}
      />
      <path
        d="M 360 280 H 520 V 200 H 640"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.5"
      />
      <circle cx="200" cy="120" r="6" fill="#fbbf24" opacity="0.8" />
      <circle cx="360" cy="280" r="6" fill="#ef4444" opacity="0.8" />
      <circle cx="520" cy="400" r="6" fill="#fbbf24" opacity="0.8" />
    </svg>
  );
}
