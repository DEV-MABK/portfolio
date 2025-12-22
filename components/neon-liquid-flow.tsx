"use client"

import { useState, useEffect } from "react"

export function NeonLiquidFlow() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-600 z-0 pointer-events-none overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* SVG Wave Animation */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff6a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00ff6a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ff6a" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="12" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated Wave Path 1 */}
        <path
          d="M0,40 Q360,0 720,40 T1440,40 L1440,0 L0,0 Z"
          fill="url(#neonGradient)"
          filter="url(#glow)"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,40 Q360,0 720,40 T1440,40 L1440,0 L0,0 Z;
              M0,20 Q360,60 720,20 T1440,20 L1440,0 L0,0 Z;
              M0,40 Q360,0 720,40 T1440,40 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Animated Wave Path 2 */}
        <path
          d="M0,30 Q360,50 720,30 T1440,30 L1440,0 L0,0 Z"
          fill="url(#neonGradient)"
          filter="url(#glow)"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,30 Q360,50 720,30 T1440,30 L1440,0 L0,0 Z;
              M0,50 Q360,10 720,50 T1440,50 L1440,0 L0,0 Z;
              M0,30 Q360,50 720,30 T1440,30 L1440,0 L0,0 Z
            "
          />
        </path>

        {/* Animated Wave Path 3 */}
        <path d="M0,20 Q360,40 720,20 T1440,20 L1440,0 L0,0 Z" fill="#00ff6a" filter="url(#glow)" opacity="0.3">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,20 Q360,40 720,20 T1440,20 L1440,0 L0,0 Z;
              M0,40 Q360,20 720,40 T1440,40 L1440,0 L0,0 Z;
              M0,20 Q360,40 720,20 T1440,20 L1440,0 L0,0 Z
            "
          />
        </path>
      </svg>

      {/* Additional CSS Glow Layer */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-xl animate-liquid-flow" />
    </div>
  )
}
