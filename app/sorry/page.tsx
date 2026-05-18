'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Particles from '@/components/particles'

export default function SorryPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white flex items-center justify-center px-4 py-20">
      
      <Particles />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl w-full"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-16 shadow-2xl">

          {/* Small top text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base text-white/50 italic text-center mb-8"
          >
            There are some things I should’ve said earlier.
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-center mb-12"
          >
            Sorry For Everything
          </motion.h1>

          {/* Letter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-8 text-white/80 leading-9 text-lg"
          >
            <p>
              I know there were moments when you needed me emotionally…
              and I failed to be there properly.
            </p>

            <p>
              There were times when you were hurting,
              crying,
              overthinking,
              feeling alone…
              and instead of understanding you deeply,
              I reacted immaturely.
            </p>

            <p>
              I know I didn’t always give you the emotional support
              you truly deserved.
            </p>

            <p>
              And honestly…
              I’m genuinely sorry for that.
            </p>

            <p>
              I’m sorry for the moments where trust became weak.
              I’m sorry for making you feel unheard sometimes.
              I’m sorry for the times my actions hurt you,
              even when that was never my intention.
            </p>

            <p>
              Losing you made me realize so many things
              that I should’ve understood earlier.
            </p>

            <p>
              And if life ever gives us one more chance…
              I promise I won’t take it lightly.
            </p>

            <p>
              I’ll put real effort into us.
              Real communication.
              Real understanding.
              Real consistency.
            </p>

            <p>
              I’ll do every possible thing to protect what we have.
              Not just through words…
              but through actions.
            </p>

            <p>
              I know love alone isn’t enough.
              People also need patience,
              reassurance,
              emotional safety,
              trust,
              and effort.
            </p>

            <p>
              And this time…
              I’m ready to give all of that properly.
            </p>

            <p>
              Not because I’m scared of losing you again.
              But because I finally understand your value deeply.
            </p>

            <p className="text-center text-2xl md:text-3xl font-semibold pt-10">
              If love ever finds its way back to us…
              <br />
              I’ll protect it better this time.
            </p>
          </motion.div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-white/40 italic mb-8">
              “Some people realize value after distance.
              <br />
              I realized yours after silence.”
            </p>

            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-full border border-white/20 hover:border-pink-400/50 hover:bg-white/5 transition-all duration-300"
            >
              Back To Our Story
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </main>
  )
}