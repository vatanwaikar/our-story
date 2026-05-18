'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Particles from '@/components/particles'

interface GalleryImage {
  id: number
  title: string
  date: string
  image: string
  size?: 'small' | 'medium' | 'large'
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Matheran',
    date: 'Jan 2021',
    image: '/gallery/g1.jpeg',
    size: 'large',
  },

  {
    id: 2,
    title: 'Our Smile',
    date: '2021',
    image: '/gallery/g2.jpeg',
    size: 'small',
  },

  {
    id: 3,
    title: 'Tea Spot',
    date: '2024',
    image: '/gallery/g3.jpeg',
    size: 'medium',
  },

  {
    id: 4,
    title: 'Dagdusheth',
    date: '2024',
    image: '/gallery/g4.jpeg',
    size: 'small',
  },

  {
    id: 5,
    title: 'Naneghat',
    date: '2025',
    image: '/gallery/g5.jpeg',
    size: 'large',
  },

  {
    id: 6,
    title: 'Rainy Memories',
    date: '2025',
    image: '/gallery/g6.jpeg',
    size: 'medium',
  },

  {
    id: 7,
    title: 'Random Moments',
    date: '2025',
    image: '/gallery/g7.jpeg',
    size: 'small',
  },

  {
    id: 8,
    title: 'Last Trip',
    date: '2025',
    image: '/gallery/g8.jpeg',
    size: 'large',
  },
]

const getGridPosition = (index: number) => {
  const sizes = [
    'small',
    'large',
    'medium',
    'small',
    'large',
    'medium',
    'small',
    'large',
  ]

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

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null)

  const handleImageClick = (image: GalleryImage) => {
    setSelectedId(image.id)
    setSelectedImage(image)
  }

  const handleClose = () => {
    setSelectedId(null)
    setSelectedImage(null)
  }

  return (
    <main className="min-h-screen relative overflow-hidden pt-32 pb-20">
      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Photo Gallery
          </h1>

          <p className="text-lg text-foreground/60">
            Moments captured in time. Click any photo to view larger.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`${getGridPosition(
                index
              )} cursor-pointer group relative overflow-hidden rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300`}
              onClick={() => handleImageClick(image)}
            >
              <div className="relative w-full h-full min-h-80 md:min-h-96 overflow-hidden">

                {/* Actual Image */}
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                {/* Hover content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {image.title}
                  </h3>

                  <p className="text-sm text-white/80">
                    {image.date}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-card border border-border rounded-2xl max-w-4xl w-full overflow-hidden"
              >

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-black transition-all"
                >
                  ✕
                </button>

                {/* Large image */}
                <div className="relative w-full aspect-square md:aspect-video">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedImage.title}
                  </h2>

                  <p className="text-lg text-foreground/60 mb-6">
                    {selectedImage.date}
                  </p>

                  <p className="text-foreground/70 leading-relaxed">
                    Every photograph tells a story.
                    This moment became a memory I’ll
                    carry forever.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  )
}