'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Particles from '@/components/particles'
import PolaroidCard from '@/components/polaroid-card'

interface MemoryDetailClientProps {
  memory: {
    emoji: string
    date: string
    title: string
    description: string
    fullStory: string
    photos: string[]
  }
}

export default function MemoryDetailClient({ memory }: MemoryDetailClientProps) {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Particles />

      {/* Back button */}
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 px-4 py-2 rounded-lg bg-card/60 border border-border hover:border-accent/50 hover:bg-card/80 transition-all duration-300 text-foreground/70 hover:text-accent"
      >
        ← Back
      </Link>

      <main className="relative z-10">
        {/* Hero section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl w-full text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-8xl md:text-9xl mb-8"
            >
              {memory.emoji}
            </motion.div>
            <motion.time
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent text-lg font-medium block mb-4"
            >
              {memory.date}
            </motion.time>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 text-balance"
            >
              {memory.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-foreground/70 leading-relaxed text-balance"
            >
              {memory.description}
            </motion.p>
          </motion.div>
        </section>

        {/* Full story section */}
        <section className="min-h-screen flex items-center py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto w-full"
          >
            <div className="bg-card/40 backdrop-blur-md border border-border rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">The Full Story</h2>
              <p className="text-lg leading-relaxed text-foreground/80 whitespace-pre-line">
                {memory.fullStory}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Photo gallery section */}
        <section className="min-h-screen flex items-center py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Moments Captured</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
              {memory.photos.map((photo, index) => (
                <div key={index} className="flex justify-center">
                  <PolaroidCard
                    src={`/memories/${photo}`}
                    alt={`Memory moment ${index + 1}`}
                    caption={photo.replace(/-/g, ' ').replace('.jpg', '')}
                    delay={index * 0.2}
                  />
                </div>
              ))}
            </div>

            {/* Photo gallery note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-foreground/60 italic text-lg">
                Each photo tells part of our story. Some are clearer in memory than others,<br />
                but they all matter. They all meant something.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Closing reflection */}
        <section className="min-h-screen flex items-center py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto w-full text-center"
          >
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-12 md:p-16 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl leading-relaxed mb-8">
                This moment shaped us. It taught us something. It became part of our story.
              </p>
              <p className="text-lg text-foreground/60 italic">
                And no matter what happens next, this memory will always be real. Always be ours.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <Link
                  href="/"
                  className="inline-block px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105"
                >
                  Back to All Memories
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
