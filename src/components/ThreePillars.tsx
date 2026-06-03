import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { UtensilsCrossed, MapPin, Compass } from 'lucide-react'

const pillars = [
  {
    id: 'taste',
    title: 'TASTE',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    examples: ['Home Kitchens', 'Sunrise Breakfasts', 'Hidden Chai Stalls', 'Dive Bars', 'Family Distilleries'],
    visual: 'Steam effects, local food imagery.'
  },
  {
    id: 'live',
    title: 'LIVE',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1200',
    examples: ['Fishing Trips', 'Pottery Classes', 'Heritage Walks', 'Trekking', 'Kayaking'],
    visual: 'Adventure and cultural experiences.'
  },
  {
    id: 'discover',
    title: 'DISCOVER',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200',
    examples: ['Hidden Beaches', 'Secret Waterfalls', 'Forgotten Temples', 'Local Viewpoints', 'Unmarked Trails'],
    visual: 'Secret map markers emerging from terrain.'
  }
]

const ThreePillars = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"])

  return (
    <section id="pillars" ref={targetRef} className="relative h-[300vh] bg-olive-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12">
          <div className="flex-shrink-0 w-[80vw] md:w-[60vw] h-[80vh] flex flex-col justify-center">
            <h2 className="text-7xl md:text-9xl font-bold text-white mb-8 opacity-20">EXPERIENCE</h2>
            <p className="text-2xl text-olive-200 max-w-xl leading-relaxed">
              Three core pillars that define the 78 E Loka journey.
            </p>
          </div>

          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="flex-shrink-0 w-[90vw] md:w-[80vw] h-[80vh] relative group rounded-[40px] overflow-hidden"
            >
              <img 
                src={pillar.image} 
                alt={pillar.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-olive-900/40 to-transparent" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    {pillar.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {pillar.examples.map((example) => (
                    <span 
                      key={example}
                      className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-colors cursor-default"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ThreePillars
