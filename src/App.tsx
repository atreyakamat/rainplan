import { ReactLenis } from 'lenis/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TheProblem from './components/TheProblem'
import BentoGrid from './components/BentoGrid'
import HowItWorks from './components/HowItWorks'
import BuiltWithLocals from './components/BuiltWithLocals'
import GoaLaunch from './components/GoaLaunch'
import SEOEditorial from './components/SEOEditorial'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen bg-white selection:bg-olive-700 selection:text-white">
        <Navbar />
        
        <main>
          <Hero />
          <TheProblem />
          <BentoGrid />
          <HowItWorks />
          <BuiltWithLocals />
          <GoaLaunch />
          <SEOEditorial />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
