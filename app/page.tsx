import Hero from '@/components/Hero'
import BrandMottoStrip from '@/components/BrandMottoStrip'
import AcronymSection from '@/components/AcronymSection'
import Services from '@/components/Services'
import HorizontalMarqueeSection from '@/sections/HorizontalMarqueeSection'
import ProjectTimeline from '@/components/ProjectTimeline'
import About from '@/components/About'
import BeforeAfter from '@/components/BeforeAfter'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import HashScrollHandler from '@/components/HashScrollHandler'

export default function Home() {
  return (
      <>
        <HashScrollHandler />
        <Hero />
        <BrandMottoStrip />
        <AcronymSection />
      <Services />
        <HorizontalMarqueeSection />
      <ProjectTimeline />
      <About />
      <BeforeAfter />
      <FAQ />
      <Reviews />
      <Contact />
    </>
  )
}
