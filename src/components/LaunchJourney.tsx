import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { id: 'goa', name: 'Goa', status: 'Launching First', color: 'bg-olive-600' },
  { id: 'northeast', name: 'Northeast India', status: 'Coming Q4 2026', color: 'bg-olive-400' },
  { id: 'kashmir', name: 'Kashmir', status: 'Coming Q2 2027', color: 'bg-olive-300' },
  { id: 'india', name: 'All of India', status: 'The Vision', color: 'bg-olive-200' },
]

const LaunchJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <section ref={containerRef} className="py-24 bg-beige-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-olive-950 mb-6">
            Our Launch <br />
            <span className="text-olive-700">Journey.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-olive-100 rounded-full" />
          <motion.div 
            style={{ scaleY: pathLength, originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-olive-700 rounded-full z-10" 
          />

          <div className="space-y-24 relative z-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center justify-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 hidden md:block ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  {i % 2 === 0 && (
                    <>
                      <h3 className="text-3xl font-bold text-olive-900 mb-2">{step.name}</h3>
                      <p className="text-olive-600 font-bold uppercase tracking-widest text-sm">{step.status}</p>
                    </>
                  )}
                </div>

                <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg ${step.color} z-30`} />

                <div className={`flex-1 ${i % 2 === 0 ? 'text-left' : 'text-right md:text-left'}`}>
                  {i % 2 !== 0 ? (
                    <>
                      <h3 className="text-3xl font-bold text-olive-900 mb-2">{step.name}</h3>
                      <p className="text-olive-600 font-bold uppercase tracking-widest text-sm">{step.status}</p>
                    </>
                  ) : (
                    <div className="md:hidden">
                      <h3 className="text-3xl font-bold text-olive-900 mb-2">{step.name}</h3>
                      <p className="text-olive-600 font-bold uppercase tracking-widest text-sm">{step.status}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LaunchJourney
