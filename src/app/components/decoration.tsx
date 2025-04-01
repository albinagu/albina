import { motion } from "framer-motion"

export default function Decoration() {
  return (
    <motion.svg
      className="top-0 left-0 w-full"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      style={{ height: "auto", minHeight: "90px" }}
    >
      <defs>
        <motion.linearGradient
          id="gradientWave"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          animate={{
            x1: ["0%", "20%", "0%"],
            x2: ["100%", "150%", "100%"],
            stopColor: ["#3C2570", "#A78BFA"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <stop offset="0%" style={{ stopColor: "#3C2570", stopOpacity: 0 }} />
          <stop offset="90%" style={{ stopColor: "#A78BFA", stopOpacity: 1 }} />
        </motion.linearGradient>
      </defs>

      <path
        fill="url(#gradientWave)"
        d="M1440,40 C1260,80 1080,0 900,60 C720,120 540,40 360,80 C180,120 0,60 0,60 L0,0 L1440,0 Z"
      />
    </motion.svg>
  )
}
