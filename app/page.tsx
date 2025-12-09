import Hero from '@/components/Hero'
import BrandMottoStrip from '@/components/BrandMottoStrip'
import AcronymSection from '@/components/AcronymSection'
import Services from '@/components/Services'
import HorizontalMarqueeSection from '@/sections/HorizontalMarqueeSection'
import ProjectTimeline from '@/components/ProjectTimeline'
import About from '@/components/About'
import BeforeAfter from '@/components/BeforeAfter'
import Projects from '@/components/Projects'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'

export default function Home() {
  return (
      <>
        <Hero />
        <BrandMottoStrip />
        <AcronymSection />
      <Services />
        <HorizontalMarqueeSection />
      <ProjectTimeline />
      <About />
      <BeforeAfter />
      <Projects />
      <FAQ />
      <Reviews />
      <Contact />
    </>
  )
}
