'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import StarsBackground from '@/components/stars-background'
import Particles from '@/components/particles'

export default function LastMessagePage() {
  const [mounted, setMounted] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked
        })
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  if (!mounted) return null

  const letterText = `I know we can't erase the past.

Maybe we both made mistakes.
Maybe we hurt each other without meaning to.
Maybe life became heavier than love for some time.

But even after everything…
my heart still finds its way back to you.

Not because I'm lonely.
Not because I need someone.
But because, with you, life genuinely felt softer, happier, and more real.

This one life is too short to keep losing people who once meant everything to us.

And maybe…
just maybe…
what we had deserves one more honest chance.

Not the old version of us.

A better version.

A calmer love.
A more understanding love.
A love where we finally listen, communicate, trust, and protect each other properly.

I can't promise perfection.
But I can promise effort.
Real effort.

I'll never stop trying to become someone who makes you feel safe, valued, understood, and deeply loved.

And if someday your heart still carries even a small piece of us…
come back.

Not to repeat the past.
But to create the future we once dreamed about.

Because even now…
after everything…
it's still you.`

  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <StarsBackground />
      <Particles />

      {/* Music toggle button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleMusic}
        className="fixed top-8 right-8 z-50 px-4 py-2 rounded-full backdrop-blur-md bg-card/40 border border-accent/20 text-sm text-foreground/70 hover:text-foreground hover:border-accent/50 transition-all duration-300"
        aria-label="Toggle background music"
      >
        {isMusicPlaying ? '♫ Music On' : '♪ Music Off'}
      </motion.button>

      {/* Hidden audio element for background music */}
      <audio
        ref={audioRef}
        loop
        crossOrigin="anonymous"
        className="hidden"
      >
        <source src="https://assets.mixkit.co/active_storage/sfx/2867/2867-preview.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Main letter card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <div className="backdrop-blur-md bg-gradient-to-br from-card/50 to-card/30 border border-accent/20 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden group"
            style={{
              boxShadow: '0 0 60px rgba(212, 168, 147, 0.1), inset 0 0 60px rgba(212, 168, 147, 0.05)'
            }}
          >
            {/* Animated gradient background */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-3xl"
            />

            {/* Letter content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative z-10"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg md:text-xl leading-8 text-foreground/90 whitespace-pre-line font-light">
                  {letterText}
                </p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-8 right-8 w-16 h-16 border border-accent/20 rounded-full opacity-30"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-8 left-8 w-20 h-20 border border-primary/20 rounded-full opacity-20"
            />
          </div>
        </motion.div>

        {/* Bottom section with closing text and button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-2xl mt-16 md:mt-24 text-center"
        >
          {/* Closing line */}
          <motion.p
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-sm md:text-base text-foreground/60 italic mb-12 leading-relaxed"
          >
            Some stories pause…<br />
            they don&apos;t always end.
          </motion.p>

          {/* Final button with particle effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              onClick={() => {
                // Create particle burst effect
                const button = event?.currentTarget as HTMLButtonElement
                if (button) {
                  const rect = button.getBoundingClientRect()
                  const centerX = rect.left + rect.width / 2
                  const centerY = rect.top + rect.height / 2

                  for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div')
                    particle.className = 'fixed pointer-events-none'
                    particle.style.left = centerX + 'px'
                    particle.style.top = centerY + 'px'
                    particle.style.width = '4px'
                    particle.style.height = '4px'
                    particle.style.borderRadius = '50%'
                    particle.style.backgroundColor = 'rgb(212, 168, 147)'
                    particle.style.boxShadow = '0 0 10px rgba(212, 168, 147, 0.8)'
                    document.body.appendChild(particle)

                    const angle = (i / 20) * Math.PI * 2
                    const velocity = 5 + Math.random() * 5
                    const vx = Math.cos(angle) * velocity
                    const vy = Math.sin(angle) * velocity

                    let x = centerX
                    let y = centerY
                    let opacity = 1

                    const animate = () => {
                      x += vx
                      y += vy
                      opacity -= 0.02

                      particle.style.left = x + 'px'
                      particle.style.top = y + 'px'
                      particle.style.opacity = opacity.toString()

                      if (opacity > 0) {
                        requestAnimationFrame(animate)
                      } else {
                        particle.remove()
                      }
                    }

                    animate()
                  }
                }
              }}
              className="group/final px-10 py-4 rounded-full font-semibold text-base md:text-lg relative overflow-hidden transition-all duration-300"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-60 group-hover/final:opacity-100 transition-opacity duration-300 rounded-full" />

              {/* Button content with heartbeat animation */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative bg-background/80 group-hover/final:bg-background/60 transition-colors duration-300 rounded-full px-10 py-4 flex items-center justify-center"
              >
                <span className="text-foreground">Maybe… us?</span>
              </motion.div>

              {/* Outer glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover/final:opacity-100 transition-opacity duration-300 rounded-full shadow-lg shadow-accent/50" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
