'use client'

import { useState, useEffect, useRef } from 'react'
import { Music, Volume2, VolumeX } from 'lucide-react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showMessage, setShowMessage] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const handleToggle = () => {
    setIsPlaying(!isPlaying)
    setShowMessage(false)
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        src="/music/music.mpeg"
      />

      {/* Message tooltip */}
      {showMessage && !isPlaying && (
        <div className="absolute top-0 right-0 mb-2 mr-0 bg-card/90 backdrop-blur-md border border-accent/50 rounded-lg p-3 w-56 mb-16 text-sm">
          <p className="text-foreground/80">
            <span className="text-accent font-semibold">♪ Music Playing</span>
            <br />
            <span className="text-foreground/60">If you don't want music, stop it.</span>
          </p>
        </div>
      )}

      {/* Music player button */}
      <button
        onClick={handleToggle}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent via-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/50"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {/* Glow background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

        {/* Icon container */}
        <div className="relative z-10">
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-background animate-pulse" />
          ) : (
            <VolumeX className="w-6 h-6 text-background" />
          )}
        </div>

        {/* Pulse animation when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-accent/50 animate-ping" />
        )}
      </button>

      {/* Status indicator */}
      <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-accent animate-pulse" />
    </div>
  )
}
