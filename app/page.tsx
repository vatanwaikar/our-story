'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Particles from '@/components/particles'

// Memories data
const memories = [
  {
  id: 'beginning',
  date: 'Jan 18, 2021',
  title: 'The Beginning',
  description:
    'A quiet sunny day in Matheran. Just us, endless conversations, and the moment our story truly began.',

  emoji: '🏔️',

  fullStory:
    'Matheran still feels different in my memories because of that day.\n\nYou came there just to meet me, and honestly, I don’t think you’ll ever fully understand how special that felt to me. We didn’t go around exploring places. We didn’t do anything extravagant. We simply sat together for hours at one spot, talking about everything and nothing.\n\nBut somehow, that became one of the most beautiful moments of my life.\n\nThe way the air felt calmer around you.\nThe way time moved slowly.\nThe way every conversation felt effortless.\n\nThere were pauses between our talks, but even those silences felt comforting. It never felt awkward with you.\n\nAnd somewhere between those conversations, smiles, eye contact, and quiet moments… we confessed our feelings.\n\nNo grand setup.\nNo dramatic scene.\nJust two people sitting together honestly, finally accepting what their hearts already knew.\n\nThat was the day our story truly started.\n\nNot with noise.\nBut with peace.\n\nEven today, when I think about love, my mind still goes back to that simple moment in Matheran — where nothing extraordinary happened, yet everything changed forever.',

  photos: [
    'b3.jpeg', 'b2.jpeg', 'b1.jpeg',
  ],
},
  {
  id: 'anniversary-surprise',

  date: 'Jan 18, 2025',

  title: 'The Most Unexpected Surprise',

  description:
    'A sleepy morning, one random call for tea, and suddenly you were sitting right in front of me.',

  emoji: '✨',

  fullStory:
    'That day started like any normal sleepy morning.\n\nI was sleeping peacefully when suddenly I got a call from Jivan.\nHe simply said,\n“chaha payla ye aplya spot vr.”\n\nI was still half asleep, confused about why he was suddenly calling me outside so early.\nBut somehow I went there.\n\nAnd then… I saw you.\n\nYou were sitting there with gaytri.\n\nFor a second, I genuinely couldn’t process what was happening. My sleep disappeared instantly.\nI still remember that exact feeling in my chest when I realized you had actually come there.\n\nI can’t explain how happy I felt in that moment.\nIt wasn’t just surprise.\nIt felt deeper than that.\n\nOut of nowhere, my entire day suddenly became beautiful.\n\nAfter that, we went to Dagdusheth together.\nThe whole atmosphere felt peaceful. Standing beside you there felt special in a way words can’t properly explain.\n\nThen we spent time at Shaniwar Wada.\nWe walked around, talked, laughed, and honestly… even the smallest moments felt important because they were happening with you.\n\nThere wasn’t anything overly dramatic about that day.\nNo grand plans.\nNo luxury.\n\nBut somehow, those simple few hours became one of the happiest memories of my life.\n\nAnd even today, whenever I think about unexpected happiness,\nmy mind still goes back to that sleepy morning…\nwhen I walked to a snack center for tea,\nand found you waiting there.',

  photos: [
    'a1.jpeg', 'a2.jpeg', 'a3.jpeg',
  ],
},
  {
  id: 'last-trip',

  date: 'Jun 21, 2025',

  title: 'The Last Trip',

  description:
    'Rain, waterfalls, endless laughter, and moments we never knew would quietly become our last trip together.',

  emoji: '☔',

  fullStory:
    'You had come to Pune one day earlier, and none of us knew that the next day would become one of the memories I’d hold onto the most.\n\nWe went to Naneghat with my office friends to see the waterfalls.\n\nThe weather was perfect.\nJust nonstop rain, cold wind, fog everywhere, and that peaceful feeling nature gives when everything around you slows down.\n\nWe clicked so many photos.\nRecorded random videos.\nLaughed over small things.\nEnjoyed those simple moments without thinking too much about time.\n\nI still remember watching you enjoy the rain, smiling freely, completely lost in the moment.\n\nNothing felt heavy that day.\nNo overthinking.\nNo stress.\nJust happiness.\n\nAnd maybe that’s why this memory hurts differently now.\n\nBecause none of us knew…\nthat this would quietly become our last trip together.\n\nThose videos stayed in the gallery.\nThose pictures stayed unfinished.\nWe never really got the chance to post them properly.\n\nBut maybe some memories become too personal for the world anyway.\n\nEven today, when it rains heavily or the weather suddenly turns cold and peaceful, my mind automatically goes back to Naneghat.\n\nTo the waterfalls.\nTo the fog.\nTo the random videos.\nTo you.\n\nAnd somewhere inside me, that trip still feels incomplete…\nlike a beautiful moment that ended too soon.',

  photos: [
    'l1.jpeg', 'l2.jpeg', 'l3.jpeg',
  ],
},
  
  
  {
    id: 'last-fight-that-turned-into-distance',
    date: 'July 12, 2025',
    title: 'Last Fight That Turned Into Distance',
 description:
    'One small misunderstanding slowly became silence… and silence slowly became distance.',
    emoji: '💔',
 fullStory:
    'Sometimes relationships don’t break because of one huge reason.\n\nSometimes it starts with one small moment.\nOne misunderstanding.\nOne reaction.\nOne hurt feeling.\n\nThat day, you had posted a story regarding me.\nAnd honestly… I didn’t like it.\n\nMaybe I reacted emotionally.\nMaybe I handled it badly.\nMaybe both of us were already carrying unspoken frustration inside.\n\nWhat started as a small argument slowly became something bigger.\n\nThe conversation changed.\nThe energy changed.\nAnd after that fight, something between us quietly shifted.\n\nWe still talked.\nBut not the same way.\n\nThe comfort slowly reduced.\nThe understanding became weaker.\nAnd without realizing it, distance slowly entered our relationship.\n\nLooking back now, the fight itself probably wasn’t even that important.\nIt was the silence after it that hurt the most.\n\nBecause somewhere between ego, misunderstandings, and emotions,\nwe slowly stopped reaching each other properly.\n\nAnd maybe that’s what hurts me even today.\n\nNot the argument.\nBut the fact that something so small eventually created such a big distance between us.',
    photos: ['airport-goodbye.jpg', 'embrace-last.jpg', 'empty-gate.jpg'],
  },
  {
    id: 'growing-apart',
    date: 'August 15, 2025',
    title: 'Growing Apart',
    description: 'We were still together, but something was shifting. I felt it too.',
    emoji: '🌊',
    fullStory: 'The hardest part wasn\'t the day we broke up—it was the slow fade. We were still together, still trying, but we were becoming strangers. Your voice on FaceTime felt distant even though I could hear it perfectly. We ran out of things to say. The connection that once felt electric was becoming routine. We were both feeling it, circling each other carefully, hoping the other would find a way to fix it. But sometimes love isn\'t broken—it\'s just changing. And we were too scared to admit that maybe it was changing into something it couldn\'t be anymore.',
    photos: ['late-night-call.jpg', 'empty-texts.jpg', 'distance-portrait.jpg'],
  },
  {
    id: 'the-break',
    date: 'october 30, 2025',
    title: 'The Break',
    description: 'It wasn\'t dramatic. Just... necessary. Like seasons changing.',
    emoji: '🍂',
    fullStory: 'When we finally said the words, it didn\'t feel like a fight or a tragedy. It felt like autumn—natural, necessary, inevitable. We sat across from each other and said, "I love you, but this isn\'t working." There was no yelling, no blame. Just two people who loved each other deeply but weren\'t enough for each other at this moment. We cried, but they were gentle tears. The tears you cry when something beautiful ends. We held each other one last time and said goodbye not with anger, but with gratitude for everything we\'d been to each other. It was the most loving breakup I\'ve ever experienced.',
    photos: ['final-coffee.jpg', 'goodbye-embrace.jpg', 'autumn-leaves.jpg'],
  },
]

const storySection = [
{
id: 'distance',
title: 'The Distance',
subtitle: 'When silence slowly became distance',
content:
'For almost five years, everything between us felt beautiful and natural. But slowly, misunderstandings and arguments created silence between us. It wasn’t that love disappeared — we just stopped understanding each other properly. And somewhere between hurt feelings and unspoken emotions, distance slowly entered our relationship.',
emoji: '🌍',
},

{
id: 'second-chances',
title: 'Second Chances',
subtitle: 'Because real love deserves one more honest try',
content:
'Even after everything, my feelings for you never changed. I truly believe what we had was real, and something so real deserves one more chance. Not to repeat old mistakes, but to grow from them. If we ever start again, I promise I’ll communicate better, support you better, and love you more carefully than before.',
emoji: '🔄',
},

{
id: 'hope',
title: 'Hope',
subtitle: 'Because some stories still deserve a happy ending',
content:
'When I think about us, I still remember all the happiness, comfort, and memories we created together. And honestly, I still believe we can fix this. Maybe not perfectly, but honestly and together. Because real love isn’t about never making mistakes — it’s about choosing each other even after difficult moments.',
emoji: '✨',
},

{
id: 'future',
title: 'Our Future',
subtitle: 'The life I still secretly hope for',
content:
'I still imagine a future where we somehow find our way back to each other. A future where we laugh together again, create new memories, and choose love over ego. After everything that happened, my heart still finds its way back to you.',
emoji: '🌟',
},
]


// Gallery images
const galleryImages = [
  {
    id: 1,
    title: 'Village',
    date: 'May 2023',
    image: '/gallery/g1.jpeg',
    size: 'large',
  },

  {
    id: 2,
    title: 'Village',
    date: 'May 2023',
    image: '/gallery/g2.jpeg',
    size: 'small',
  },

  {
    id: 3,
    title: 'Casual',
    date: 'March 2024',
    image: '/gallery/g3.jpeg',
    size: 'medium',
  },

  {
    id: 4,
    title: 'Sajjangarh',
    date: 'March 2024',
    image: '/gallery/g4.jpeg',
    size: 'small',
  },

  {
    id: 5,
    title: 'Mini-Vrindavan',
    date: 'August 2025',
    image: '/gallery/g5.jpeg',
    size: 'large',
  },

  {
    id: 6,
    title: 'Naryanpur',
    date: 'October 2024',
    image: '/gallery/g6.jpeg',
    size: 'medium',
  },

  {
    id: 7,
    title: 'Karjat',
    date: 'March 2025',
    image: '/gallery/g7.jpeg',
    size: 'small',
  },
]

const getGridPosition = (index: number) => {
  const sizes = ['small', 'large', 'medium', 'small', 'large', 'medium', 'small', 'large']
  const size = sizes[index % sizes.length]
  
  switch (size) {
    case 'large':
      return 'col-span-2 row-span-2'
    case 'medium':
      return 'col-span-1 row-span-1'
    default:
      return 'col-span-1 row-span-1'
  }
}

// Animation variants
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

const storyVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const selectedImage = galleryImages.find(img => img.id === selectedImageId)

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Particles />

      {/* HERO SECTION */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center py-20 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-foreground">Our</span>{' '}
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Love Story
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 sm:mb-12 leading-relaxed"
        >
          A Hard Long-Distance journey through memories, moments, and what we learned together. A story of distance, second chances, and hope.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#begin-journey"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105"
          >
            Scroll kar sharya
          </a>
          {/* <a
            href="#our-story"
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
          >
            Our Story
          </a> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
        >
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-accent/50 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* BEGIN THE JOURNEY SECTION - Memories */}
      <section id="begin-journey" className="relative z-10 min-h-screen flex items-center py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Begin the Journey</h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/60">
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
                className="relative pl-6 sm:pl-8 md:pl-16"
              >
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-accent/50 to-accent/10" />
                <div className="absolute left-[-6px] sm:left-[-8px] top-4 w-4 h-4 rounded-full bg-accent" />

                <Link href={`/memory/${memory.id}`}>
                  <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-accent/50 hover:bg-card/60 transition-all duration-300 cursor-pointer group">
                    {/* Thumbnail image */}
                    <div className="relative h-[260px] sm:h-[340px] overflow-hidden bg-black flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20">
                      <Image
                        src={`/memories/${memory.photos[0]}`}
                        alt={memory.title}
                        fill
className="object-cover bg-black group-hover:scale-105 transition-transform duration-300"                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{memory.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <time className="text-xs sm:text-sm font-medium text-accent block">{memory.date}</time>
                          <h3 className="text-base sm:text-xl font-semibold mt-1 group-hover:text-accent transition-colors duration-300 line-clamp-2">{memory.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3 sm:mb-4 line-clamp-2">{memory.description}</p>
                      <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-accent/70 group-hover:text-accent transition-colors duration-300">
                        Click to read more →
                      </div>
                    </div>
                  </div>
                </Link>
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
      </section>

      {/* OUR STORY SECTION */}
      <section id="our-story" className="relative z-10 min-h-screen flex items-center py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-20 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6">Our Story</h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/60">
              Four chapters that shaped who we became.
            </p>
          </motion.div>

          <motion.div
            className="space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {storySection.map((section, index) => (
              <motion.div
                key={section.id}
                variants={storyVariants}
                id={section.id}
                className="scroll-mt-24"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-6 sm:gap-8 lg:gap-12 items-start`}
                >
                  <div className="flex-1 min-h-48 sm:min-h-80 lg:min-h-96 rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="text-6xl sm:text-8xl"
                    >
                      {section.emoji}
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3"
                    >
                      {section.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="text-sm sm:text-base md:text-lg text-accent font-semibold mb-4 sm:mb-6"
                    >
                      {section.subtitle}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/80"
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
            className="mt-16 sm:mt-24 text-center bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 md:p-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed mb-3 sm:mb-4">
              &quot;In the end, it wasn&apos;t about whether we made it. It was about the fact that we tried.&quot;
            </p>
            <p className="text-base sm:text-lg text-accent font-semibold">— Us</p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="relative z-10 min-h-screen flex items-center py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6">Photo Gallery</h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/60">
              Moments captured in time. Click any photo to view larger.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cursor-pointer group w-full"
                style={{
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                }}
                onClick={() => setSelectedImageId(image.id)}
              >
                {/* Polaroid card */}
                <div className="relative bg-white p-2 sm:p-3 md:p-4 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-0 h-full">
                  {/* Image container */}
                  <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden rounded-xs">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-2 sm:p-3"
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-white text-center line-clamp-2">{image.title}</h3>
                    </motion.div>
                  </div>

                  {/* Polaroid caption area */}
                  <div className="mt-2 sm:mt-3 md:mt-4">
                    <p className="text-xs text-gray-600 italic">{image.date}</p>
                    <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 line-clamp-1">A captured moment</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="flex justify-center mt-6">
  <Link
    href="/sorry"
    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-red-400/40 hover:bg-white/10 transition-all duration-300 group backdrop-blur-md"
  >
    <span className="text-red-300 text-xl group-hover:scale-110 transition-transform duration-300">
      ❤️
    </span>

    <div className="flex flex-col items-start">
      <span className="text-white font-medium text-sm sm:text-base">
        Sorry For Everything
      </span>

      <span className="text-white/50 text-xs italic group-hover:text-white/70 transition-colors duration-300">
        Click here to read this...
      </span>
    </div>
  </Link>
</div>

      {/* CLOSING SECTION */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl"
        >
          <div className="backdrop-blur-md bg-card/40 border border-accent/20 rounded-2xl p-6 sm:p-8 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm md:text-base text-foreground/60 italic mb-8 sm:mb-12 leading-relaxed animate-pulse"
              >
                If you&apos;ve seen everything till here…<br />
                there&apos;s just one last thing I want you to read.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/last-message"
                  className="inline-block px-6 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg relative group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full blur" />
                  
                  <div className="relative bg-background/80 group-hover/btn:bg-background/60 transition-colors duration-300 rounded-full px-6 sm:px-12 py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3">
                    <span className="text-foreground text-sm sm:text-base">One Last Truth</span>
                    
                    <motion.div
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full pointer-events-none"
                    />
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full shadow-lg shadow-accent/50" />
                </Link>

                
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* GALLERY MODAL */}
      <AnimatePresence>
        {selectedImageId && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageId(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-xl w-full max-w-[95vw] sm:max-w-3xl max-h-[95vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedImageId(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-all flex-shrink-0"
                aria-label="Close image"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              className="w-full h-full object-cover"


              <div className="p-4 sm:p-8">
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-sm sm:text-lg text-foreground/60 mb-4 sm:mb-6">{selectedImage.date}</p>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Every photograph tells a story. This moment, captured in time, is ours to keep. It reminds us of who we were, and how we loved.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
