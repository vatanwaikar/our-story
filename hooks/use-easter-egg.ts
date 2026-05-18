'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SECRET_SEQUENCE = 'onemorchance' // Type this to unlock the easter egg

export function useEasterEgg() {
  const router = useRouter()

  useEffect(() => {
    let sequence = ''

    const handleKeyPress = (e: KeyboardEvent) => {
      // Only track lowercase letters
      if (/^[a-z]$/.test(e.key)) {
        sequence += e.key.toLowerCase()

        // Keep only the last 12 characters (length of our secret)
        if (sequence.length > SECRET_SEQUENCE.length) {
          sequence = sequence.slice(-SECRET_SEQUENCE.length)
        }

        // Check if the sequence matches
        if (sequence === SECRET_SEQUENCE) {
          router.push('/our-future')
          sequence = '' // Reset
        }
      } else {
        // Reset on non-letter keys
        sequence = ''
      }
    }

    window.addEventListener('keypress', handleKeyPress)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [router])
}
