import Image from 'next/image';
import { motion } from 'framer-motion';

interface PolaroidCardProps {
  src: string;
  alt: string;
  caption?: string;
  isHovered?: boolean;
  delay?: number;
}

export default function PolaroidCard({
  src,
  alt,
  caption,
  delay = 0,
}: PolaroidCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
        {/* Polaroid Card */}
        <div className="bg-gradient-to-br from-[#f5f1e8] to-[#e8dcc8] p-2 sm:p-3 shadow-md sm:shadow-lg md:shadow-2xl rounded-sm hover:shadow-3xl transition-shadow duration-300"
          style={{
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 168, 147, 0.2)'
          }}
        >
          {/* Image Container */}
          <div className="bg-white overflow-hidden border-2 border-[#e8dcc8]">
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg sm:rounded-2xl bg-black">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/10 pointer-events-none" />
            </div>
          </div>

          {/* Caption Area */}
          {caption && (
            <div className="mt-2 sm:mt-3 px-1">
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-light italic handwriting">
                {caption}
              </p>
            </div>
          )}

          {/* Film strip detail */}
          <div className="mt-2 sm:mt-3 flex justify-center gap-1">
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="w-1 h-1 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Subtle shadow under card */}
        <div className="absolute -bottom-2 left-4 right-4 h-1 bg-black/5 rounded-full blur-md" />
      </div>
    </motion.div>
  );
}
