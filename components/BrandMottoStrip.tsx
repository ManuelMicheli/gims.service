'use client'

/**
 * BrandMottoStrip Component
 * 
 * Premium full-width horizontal scrolling brand motto strip.
 * Displays a repeating brand motto in an elegant infinite marquee.
 * 
 * CONFIGURATION:
 * - To change the motto text, modify the `motto` constant below
 * - To adjust scroll speed, change the `speed` prop (default: 25 seconds)
 *   - Lower values = faster scroll (e.g., 20)
 *   - Higher values = slower scroll (e.g., 30)
 * - To change padding/spacing, modify the className padding values
 * 
 * DESIGN NOTES:
 * - Uses elegant serif headline font for premium feel
 * - Uppercase text for strong visual impact
 * - Generous letter-spacing for elegance
 * - Black text on transparent background for minimal aesthetic
 */

import MarqueeText from '@/components/MarqueeText'

// Brand motto - customize this text
const motto = 'G.I.M.S. Service'

export default function BrandMottoStrip() {
  return (
    <section className="w-full overflow-hidden">
      {/* Marquee Text */}
      <div className="py-5 sm:py-6 lg:py-7">
        <MarqueeText
          text={motto}
          speed={25}
          direction="left"
          separator=" - "
          repeat={20}
          className="text-primary font-body text-sm sm:text-base lg:text-lg font-medium uppercase tracking-[0.2em]"
        />
      </div>
    </section>
  )
}

