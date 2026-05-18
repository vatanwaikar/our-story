'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Particles from '@/components/particles'

export default function OurFuturePage() {
  return (
    <main className="min-h-screen relative overflow-hidden pt-32 pb-20">
      <Particles />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">If We Start Again</h1>
          <p className="text-lg text-foreground/60">
            A secret epilogue. The story we never lived, but should remember.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">The Rewrite</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              In another timeline, I don&apos;t get scared of commitment. In another timeline, you decide that love is worth fighting for, even when it&apos;s hard. In another timeline, we have the conversation that matters at 2 AM instead of letting it fester.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              In another timeline, maybe we make it. And even if we don&apos;t, at least we know we tried everything. We didn&apos;t leave anything unsaid.
            </p>
          </div>

          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">What Could Have Been</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              I imagine us five years from now. You&apos;re still making that laugh when you&apos;re nervous. I&apos;m still doing that thing where I apologize too quickly. We&apos;re older, maybe wiser, probably still figuring it out.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We have a home with too many plants. You water the succulents obsessively. I complain that they&apos;re difficult. We laugh about how we&apos;re still learning how to do this—how to build something that lasts.
            </p>
          </div>

          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">The Truth</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              But this is the timeline we got. And maybe that&apos;s okay. Maybe the love story that doesn&apos;t end in forever is still a love story worth telling. Maybe the fact that we loved at all—even if briefly—is the point.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              You taught me what it feels like to be known. To be seen. To be chosen by someone who had every reason to run. And I&apos;ll carry that forever, in whatever timeline we end up in.
            </p>
            <p className="text-lg text-accent font-semibold italic">
              "And if we meet again in another life, in another universe, maybe we&apos;ll get it right. But even if we don&apos;t, I&apos;ll remember that once, in this one, you were mine."
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-foreground/60 mb-6">
              Thank you for reading our story.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              Return Home
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center text-xs text-foreground/30"
        >
          <p>🤫 Secret page unlocked. You found the easter egg.</p>
        </motion.div>
      </div>
    </main>
  )
}
