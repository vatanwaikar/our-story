'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/memories', label: 'Memories' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/gallery', label: 'Gallery' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-accent">
          Our Love Story
        </Link>
        
        <div className="flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
