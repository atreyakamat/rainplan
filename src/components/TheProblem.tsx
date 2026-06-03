import { motion, useScroll, useTransform } from 'framer-motion'
import { XCircle, CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'

const problems = [
  { id: 1, title: 'Tourist traps', description: 'Overpriced experiences designed for crowds.' },
  { id: 2, title: 'Generic recommendations', description: 'The same top 10 lists every travel app shows.' },
  { id: 3, title: 'Crowded attractions', description: 'Viewing landmarks through a sea of selfie sticks.' },
  { id: 4, title: 'Commercial experiences', description: 'Manufactured culture for the masses.' },
]

const TheProblem = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <section ref={containerRef} className="py-24 bg-beige-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-olive-950 mb-6">
            Most travel apps show you <br />
            <span className="text-olive-700">the same India.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're tired of surface-level tourism. We built 78 E Loka to break the cycle of generic travel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:bg-white transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-olive-900 mb-3">{problem.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white shadow-xl border border-olive-100">
            <CheckCircle2 className="w-6 h-6 text-olive-600" />
            <span className="text-olive-900 font-medium">Transitioning to authentic experiences...</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TheProblem
