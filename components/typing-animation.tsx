"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  className?: string
}

export function TypingAnimation({ text, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      // Pause for 3 seconds when complete
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 3000)
    } else if (isDeleting) {
      // Delete character
      if (displayText.length === 0) {
        setIsDeleting(false)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 30) // Faster deletion speed
      }
    } else {
      // Type character
      if (displayText.length === text.length) {
        setIsPaused(true)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1))
        }, 50) // Typing speed
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, text])

  return (
    <p className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
    </p>
  )
}
