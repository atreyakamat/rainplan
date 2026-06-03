import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TheProblem from './components/TheProblem'
import ThreePillars from './components/ThreePillars'
import WeatherIntelligence from './components/WeatherIntelligence'
import MissYourFlight from './components/MissYourFlight'
import BuiltWithLocals from './components/BuiltWithLocals'
import LaunchJourney from './components/LaunchJourney'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Add smooth scroll behavior or other global initializations
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-olive-700 origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <TheProblem />
        <ThreePillars />
        <WeatherIntelligence />
        <MissYourFlight />
        <BuiltWithLocals />
        <LaunchJourney />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
