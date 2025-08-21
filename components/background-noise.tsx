
export default function GrainyBackground() {

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-50">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.4" />
        </svg>
      </div>
    </div>
  )
}
