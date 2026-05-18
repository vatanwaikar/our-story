'use client'

import { motion } from 'framer-motion'
import Particles from '@/components/particles'

const sections = [
  {
    id: 'distance',
    title: 'The Distance',
    subtitle: 'When miles became more than geography',
    content:
      'At first, we thought we could make it work. Long nights on VideoCall, endless messages, weekend visits. We were determined. We were in love. But slowly, the distance did what distance does—it stretched everything. Not just time zones, but moments. The little laughs we couldn\'t share. The random conversations that made us us. We tried to hold on, but love needs presence too.',
  },
  {
    id: 'second-chances',
    title: 'Second Chances',
    subtitle: 'Because sometimes goodbye isn\'t the end',
    content:
      'We didn\'t make it the first time. But we came back. Not because we didn\'t learn. But because we couldn\'t imagine not trying. That second chapter was different—more honest. We knew what we were up against. We negotiated. We compromised. We believed harder. And for a while, it felt like we had finally figured it out. But some chapters don\'t get the ending we want.',
  },
  {
    id: 'learnings',
    title: 'What We Learned',
    subtitle: 'The wisdom that comes from goodbye',
    content:
      'You can love someone with all your heart and still not be right for them at the right time. You can try everything and still lose. And that\'s not failure—that\'s life. We learned that love isn\'t always about forever. Sometimes it\'s about being there when someone needs you most. Sometimes it\'s about knowing when to let go. We learned that the measure of a relationship isn\'t whether it lasted, but what it taught us. I learned to love better because of you. More honestly. More bravely. More myself.',
  },
  {
    id: 'future',
    title: 'If We Start Again',
    subtitle: 'The story we never got to live, but should remember',
    content:
      'In another timeline, we make different choices. We say the hard things sooner. We fight harder for what we want. We choose each other, again and again. But in this timeline, we have something different. We have the memory of what we built. We have the knowledge that for a moment in time, we were each other\'s person. And that means something. That will always mean something.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function OurStoryPage() {
  return (
    <main className="min-h-screen relative overflow-hidden pt-32 pb-20">
      <Particles />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-lg text-foreground/60">
            Four chapters that shaped who we became.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-20"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              id={section.id}
              className="scroll-mt-24"
            >
              {/* Alternating layout */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-start`}
              >
                {/* Visual element */}
                <div className="flex-1 min-h-96 rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-8xl"
                  >
                    {section.id === 'distance' && '🌍'}
                    {section.id === 'second-chances' && '🔄'}
                    {section.id === 'learnings' && '✨'}
                    {section.id === 'future' && '🌟'}
                  </motion.div>
                </div>

                {/* Text content */}
                <div className="flex-1">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-3"
                  >
                    {section.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-accent font-semibold mb-6"
                  >
                    {section.subtitle}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg leading-relaxed text-foreground/80"
                  >
                    {section.content}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-card/30 backdrop-blur-sm border border-border rounded-xl p-12"
        >
          <p className="text-xl text-foreground/70 leading-relaxed mb-4">
            &quot;In the end, it wasn&apos;t about whether we made it. It was about the fact that we tried.&quot;
          </p>
          <p className="text-lg text-accent font-semibold">— Us</p>
        </motion.div>
      </div>
    </main>
  )
}
