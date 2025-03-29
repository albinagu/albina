export default function Decoration() {
  return (
    <svg className="top-0 left-0 w-full" viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      style={{ height: "auto", minHeight: "120px" }}
    >
      <defs>
        <linearGradient id="gradientWave" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3C2570", stopOpacity: 0 }} />
          <stop offset="90%" style={{ stopColor: "#A78BFA", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradientWave)"
        d="M1440,40 C1260,80 1080,0 900,60 C720,120 540,40 360,80 C180,120 0,60 0,60 L0,0 L1440,0 Z"
      ></path>
    </svg>
  )
}
