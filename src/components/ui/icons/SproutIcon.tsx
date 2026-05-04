export function SproutIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 40"
      className={className ?? 'h-10 w-8 text-primary'}
      fill="none"
      aria-hidden="true"
    >
      {/* Vertical stem */}
      <line x1="16" y1="40" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Left leaf — curves up and out from stem */}
      <path
        d="M16 26 C14 20 8 16 8 8 C12 8 16 14 16 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.25"
      />
      {/* Right leaf — mirrors left */}
      <path
        d="M16 26 C18 20 24 16 24 8 C20 8 16 14 16 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.25"
      />
    </svg>
  )
}
