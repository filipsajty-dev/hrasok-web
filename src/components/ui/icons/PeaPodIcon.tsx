export function PeaPodIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 20"
      className={className ?? 'h-5 w-12 text-primary'}
      fill="none"
      aria-hidden="true"
    >
      {/* Pod body — elongated oval with slight top curve */}
      <path
        d="M4 10C4 4.5 11.5 2 24 2C36.5 2 44 4.5 44 10C44 15.5 36.5 18 24 18C11.5 18 4 15.5 4 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.3"
      />
      {/* Three peas */}
      <circle cx="14" cy="10" r="3.5" fill="currentColor" fillOpacity="0.85" />
      <circle cx="24" cy="10" r="3.5" fill="currentColor" fillOpacity="0.85" />
      <circle cx="34" cy="10" r="3.5" fill="currentColor" fillOpacity="0.85" />
    </svg>
  )
}
