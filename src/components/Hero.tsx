import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -100])
  const y2 = useTransform(scrollY, [0, 500], [0, -200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Terrain Background Animation */}
      <div className="absolute inset-0 terrain-lines opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-50 border border-olive-100 text-olive-700 text-sm font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-olive-500"></span>
            </span>
            Launching First In Goa 🇮🇳
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 text-olive-950">
            Real India. <br />
            <span className="text-olive-400 italic font-normal">Not Tourist India.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
            Discover hidden breakfasts with fishermen. Family kitchens serving recipes older than nations. 
            Secret waterfalls. Forgotten temples. Stories only locals know.
            <br /><br />
            <span className="font-semibold text-olive-900">This is travel as it was meant to be.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="premium-button-primary flex items-center justify-center gap-2 group">
              Join The Early Access List
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="premium-button-secondary">
              Explore The Vision
            </button>
          </div>
        </motion.div>

        {/* Hero Visual Collage */}
        <div className="relative h-[600px] hidden lg:block">
          <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-72 h-96 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&q=80&w=800" alt="Goan Fisherman" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="absolute top-40 -left-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800" alt="Home cooked meal" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ y: y1 }} className="absolute bottom-10 right-20 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white">
            <img src="https://images.unsplash.com/photo-1627894006066-b457936e6565?auto=format&fit=crop&q=80&w=800" alt="Hidden Waterfall" className="w-full h-full object-cover" />
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-olive-100/50 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}

export default Hero
