'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { smoothScrollTo } from '@/lib/utils'

/**
 * HashScrollHandler Component
 * 
 * Handles scrolling to sections when navigating from other pages with hash URLs.
 * Example: /#services, /#contact, etc.
 */
export default function HashScrollHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Only handle hash scrolling on the home page
    if (pathname !== '/') return

    // Get hash from URL
    const hash = window.location.hash.replace('#', '')
    
    if (hash) {
      // Small delay to ensure page is fully rendered
      const timer = setTimeout(() => {
        smoothScrollTo(hash)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [pathname, searchParams])

  return null
}
