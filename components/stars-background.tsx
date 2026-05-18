'use client'

import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Array<{
      x: number
      y: number
      radius: number
      opacity: number
      twinkleSpeed: number
      baseOpacity: number
    }> = []

    // Create stars
    for (let i = 0; i < 150; i++) {
      const baseOpacity = Math.random() * 0.5 + 0.3
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7, // Concentrate in upper portion
        radius: Math.random() * 1.2 + 0.3,
        opacity: baseOpacity,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        baseOpacity: baseOpacity,
      })
    }

    let time = 0
    const animate = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 1

      stars.forEach((star) => {
        // Twinkling effect
        star.opacity = star.baseOpacity + Math.sin(time * star.twinkleSpeed) * 0.3

        ctx.fillStyle = `rgba(212, 168, 147, ${star.opacity})`
        ctx.shadowBlur = 2
        ctx.shadowColor = `rgba(212, 168, 147, ${star.opacity * 0.5})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
