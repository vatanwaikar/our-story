# Our Story - A Cinematic Relationship Memory Website

A beautiful, emotionally-driven single-page website celebrating a relationship journey with cinematic animations, smooth scrolling, and stunning visual design. The experience flows seamlessly from hero intro through memories, story chapters, gallery, and a final emotional message.

## 🎬 Features

- **Cinematic Single-Page Hero** — Full-screen introduction with animated particles background and gradient text
- **Begin the Journey** — Vertical timeline with 8 emotional memory snapshots with smooth scroll anchor navigation
- **Our Story** — Four narrative chapters with alternating layout:
  - The Distance (long-distance struggles)
  - Second Chances (reconciliation attempt)  
  - What We Learned (growth and wisdom)
  - If We Start Again (hopeful alternate timeline)
- **Photo Gallery** — Interactive masonry grid with expandable lightbox modal within the page
- **Closing Message** — Emotional CTA leading to separate cinematic experience
- **Standalone Experiences:**
  - `/last-message` — Separate cinematic letter page with stars background
  - `/our-future` — Hidden easter egg route (unlock by typing "one more chance")
- **Smooth Scroll** — Lenis integration for buttery smooth scrolling
- **Particle Effects** — Floating beige particles throughout for ambiance
- **Responsive Design** — Mobile-first, fully responsive across all breakpoints
- **Premium Animations** — Framer Motion entrance animations, hover effects, transitions, and staggered content reveals

## 🎨 Design System

**Color Palette (Dark Romantic Theme):**
- **Background:** Deep black `oklch(0.08 0 0)`
- **Foreground:** Off-white `oklch(0.95 0 0)`
- **Primary Accent:** Warm pink `oklch(0.85 0.08 27)`
- **Secondary Accent:** Light beige `oklch(0.8 0.06 60)`
- **Accent Highlight:** Pink glow `oklch(0.75 0.1 15)`
- **Card Backgrounds:** Dark gray with glassmorphism (`bg-card/40 backdrop-blur-md`)

**Typography:**
- Font Family: Geist (sans-serif)
- Headings: Bold weights (600-900) with text-balance for optimal line breaks
- Body: Regular weight (400) with 1.5-1.6 line height for readability

**Custom Animations:**
- `animate-float` — Smooth up/down floating motion
- `animate-glow` — Pulsing glow effect for accent elements
- `animate-fade-in-up` — Staggered fade-in with upward motion

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS v4 + custom design tokens in globals.css
- **Animations:** Framer Motion, GSAP, Lenis smooth scroll
- **Components:** React 19 with TypeScript strict mode
- **Development:** Turbopack (default bundler in Next.js 16)

## 📁 Project Structure

```
app/
├── page.tsx                      # Single-page journey experience
│                                 # Sections: Hero → Memories → Story → Gallery → Closing
├── layout.tsx                    # Root layout with smooth scroll provider
├── globals.css                   # Design tokens + custom animations
├── last-message/
│   └── page.tsx                  # Standalone cinematic letter page
└── our-future/
    └── page.tsx                  # Easter egg route (hidden experience)

components/
├── particles.tsx                 # Animated particle background
├── stars-background.tsx          # Twinkling stars for last-message page
├── easter-egg-listener.tsx       # Keyboard shortcut detector component
└── providers/
    └── smooth-scroll-provider.tsx # Lenis integration for smooth scrolling

hooks/
└── use-easter-egg.ts             # Hook for keyboard shortcut detection
```

## 🚀 Running the Project

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The app will be available at `http://localhost:3000`.

## 🔄 Navigation Flow

**Homepage Journey (Single Page)**
1. **Hero Section** — Landing with "Begin the Journey" and "Our Story" anchor buttons
2. **Begin the Journey** — Smooth scroll to memories timeline (#begin-journey)
3. **Our Story** — Smooth scroll to story chapters (#our-story)
4. **Photo Gallery** — Masonry grid with click-to-expand modal
5. **Closing Message** — "One Last Truth" button leads to `/last-message`

**Supplementary Routes**
- `/last-message` — Standalone emotional letter with cinematic stars background
- `/our-future` — Hidden route, unlock by typing "one more chance"

No fixed header navigation — the experience is a pure journey.

## 🔓 Easter Egg

Type **"one more chance"** on any page to unlock the hidden `/our-future` route. This secret experience contains an additional narrative about alternate timelines and what could have been.

## ✨ Key Interactions

- **Smooth Scrolling** — Lenis provides physics-based smooth scrolling throughout
- **Anchor Navigation** — Hero buttons scroll to specific sections with smooth animation
- **Particle Animation** — Floating beige particles create ambient atmosphere
- **Entrance Animations** — Fade-in-up effects as sections come into view via Intersection Observer
- **Hover Effects** — Gallery cards scale and reveal titles on hover
- **Modal Gallery** — Click any photo to expand in fullscreen modal (within the page)
- **Staggered Content** — Memory timeline and story sections animate with staggered delays
- **Scroll Reveal** — Content animates in as you scroll to it (whileInView)

## 🎯 Design Highlights

- **Glassmorphism** — Semi-transparent cards with blur effects for premium feel
- **Gradient Text** — "Love Story" headline with warm accent gradient
- **Premium Spacing** — Generous whitespace with semantic Tailwind gap classes
- **Accessible Colors** — High contrast ratios for full readability
- **Semantic HTML** — Proper heading hierarchy (h1, h2, h3), section elements, ARIA labels
- **Mobile Optimization** — Touch-friendly interaction targets, responsive grid layouts
- **No Header Navigation** — Removes traditional nav bar for immersive experience
- **Single-Page UX** — Everything integrated into one scrollable journey

## 📝 Content Structure

**Memory Timeline (8 entries):**
- Dates from May 2023 to August 2024
- Emoji-labeled entries for visual interest
- Honest, vulnerable descriptions of key moments

**Story Sections (4 chapters):**
- Each section alternates left/right layout
- Large emoji visual elements
- Subtitle and multi-paragraph body content
- Closing quote with attribution

**Photo Gallery (8 items):**
- Masonry grid with variable sizes
- Emoji placeholders for images
- Click-to-expand modal with details

## 🔧 Customization

### Modify Memory Entries
Edit the `memories` array in `/app/page.tsx` — change dates, titles, descriptions, and emojis.

### Update Story Chapters
Edit the `storySection` array in `/app/page.tsx` to customize titles, subtitles, content, and emojis.

### Change Gallery Items
Edit the `galleryImages` array in `/app/page.tsx` to add, remove, or reorder photos.

### Update Color Scheme
Modify design tokens in `/app/globals.css` in the `:root` and `.dark` selectors. All colors use OKLch format.

### Adjust Animations
Modify Framer Motion variants (`containerVariants`, `itemVariants`, `storyVariants`) in `/app/page.tsx`.

### Customize Easter Egg Trigger
Edit `SECRET_SEQUENCE` in `/hooks/use-easter-egg.ts` (default: "one more chance").

## 📊 Performance Optimizations

- Full TypeScript strict mode for type safety
- Optimized animations using Framer Motion for 60fps performance
- Minimal JavaScript bundle with tree-shaking
- Semantic HTML for accessibility
- Image placeholders prevent layout shift
- Intersection Observer for lazy animation triggers

## 🎬 Next Steps (Ideas)

- Replace emoji placeholders with real images using Next.js Image component
- Add audio letter playback feature on `/last-message`
- Implement 3D parallax background with Three.js/R3F
- Add guest book or testimonial section
- Timeline filtering by emotion/theme
- Print-to-PDF download option
- Dark/light mode toggle
- Horizontal timeline variant
- Video sections for special moments

## 📄 License

Created with ❤️ using v0
