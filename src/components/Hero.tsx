import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])

  const headline = "India Still Has Secrets."
  const words = headline.split(" ")

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic India" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 terrain-lines opacity-20" />
      </motion.div>

      {/* Grain Overlay */}
      <div className="grain" />

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-dark text-xs font-bold uppercase tracking-widest mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-olive-400 animate-pulse" />
          Launching First In Goa
        </motion.div>

        <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.85] mb-12 tracking-tighter">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-olive-50/80 mb-12 font-medium leading-relaxed">
            Most travelers visit India. Very few actually experience it. <br className="hidden md:block" />
            Discover a side of the country that never makes it into brochures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton className="premium-button-primary bg-white text-olive-950 hover:bg-olive-50 flex items-center gap-3 text-lg group">
              Join Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <button className="text-white/60 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-2">
              Discover The Vision
              <div className="w-8 h-px bg-white/20" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero
