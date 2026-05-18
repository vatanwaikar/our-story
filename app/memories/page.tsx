'use client'

import { motion } from 'framer-motion'
import Particles from '@/components/particles'

const memories = [
  {
    date: 'Jan 18, 2021',
    title: 'The Beginning',
description:
    'A quiet sunny day in Matheran. Just us, endless conversations, and the moment our story truly began.',    emoji: '🏔️',
  },
  {
    date: 'Jan 18, 2024',
     title: 'The Most Unexpected Surprise',
description:
    'A sleepy morning, one random call for tea, and suddenly you were sitting right in front of me.',
    emoji: '✨',
  },
  {
    date: 'Jun 21, 2025',
    title: 'The Last Trip',
    description: 'Rain, waterfalls, endless laughter, and moments we never knew would quietly become our last trip together.',
    emoji: '☔',
  },
  
  
  {
    date: 'July 12, 2025',
    title: 'Last Fight That Turned Into Distance',
    description: 'One small misunderstanding slowly became silence… and silence slowly became distance.',
    emoji: '💔',
  },
  {
    date: 'August 15, 2025',
    title: 'Growing Apart',
    description: 'We were still together, but something was shifting. I felt it too.',
    emoji: '🌊',
  },
  {
    date: 'october 30, 2025',
    title: 'The Break',
    description: 'It wasn\'t dramatic. Just... necessary. Like seasons changing.',
    emoji: '🍂',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function MemoriesPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Memories</h1>
          <p className="text-lg text-foreground/60">
            A timeline of moments that shaped us. Both the beautiful and the bittersweet.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline line and dot */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-accent/50 to-accent/10" />
              <div className="absolute left-[-8px] top-4 w-4 h-4 rounded-full bg-accent" />

              {/* Memory card */}
              <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-3xl">{memory.emoji}</span>
                  <div className="flex-1">
                    <time className="text-sm font-medium text-accent">{memory.date}</time>
                    <h3 className="text-xl font-semibold mt-1">{memory.title}</h3>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed">{memory.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-foreground/60 italic">
            Each memory is a thread in the tapestry of what we were. And what we learned.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
