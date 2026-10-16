/** Droplet SVG mark. */
export function Droplet({ size = 22, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M12 2C12 2 5.5 10.2 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10.2 12 2 12 2Z"
        fill="url(#dropletGrad)"
        stroke="#67e8f9"
        strokeWidth="1.2"
      />
      <path d="M9 14.5a3.2 3.2 0 0 0 2.6 3.1" stroke="#e0faff" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.9" />
      <defs>
        <linearGradient id="dropletGrad" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67e8f9" />
          <stop offset="1" stopColor="#0aa5c2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Droplet divider with a falling drip animation. */
export function DropletDivider() {
  return (
    <div className="droplet-divider" aria-hidden="true">
      <span className="drip inline-block text-[#22d3ee]">💧</span>
      <Droplet size={26} />
      <span className="drip inline-block text-[#22d3ee]" style={{ animationDelay: "1.1s" }}>💧</span>
    </div>
  );
}
