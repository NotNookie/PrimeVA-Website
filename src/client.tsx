import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles.css'
import { Nav } from '@/components/site/Nav'
import { Hero } from '@/components/site/Hero'
import { About } from '@/components/site/About'
import { Programs } from '@/components/site/Programs'
import { WhyUs } from '@/components/site/WhyUs'
import { Testimonials } from '@/components/site/Testimonials'
import { Stats } from '@/components/site/Stats'
import { CtaSection } from '@/components/site/CtaSection'
import { Footer } from '@/components/site/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Testimonials />
        <Stats />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
