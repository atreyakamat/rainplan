import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background Video Placeholder / Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic India" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-olive-950/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
            India Still Has <span className="italic text-olive-400">Secrets.</span>
          </h2>
          <p className="text-2xl md:text-4xl font-display text-olive-100 mb-12 opacity-90">
            And Soon, You'll Know Where To Find Them.
          </p>

          <div className="max-w-xl mx-auto">
            <p className="text-olive-200 text-lg mb-8">Be among the first explorers.</p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-8 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all"
              />
              <button 
                type="submit"
                className="px-10 py-5 rounded-full bg-olive-500 text-white font-bold hover:bg-olive-400 transition-all flex items-center justify-center gap-2 group"
              >
                Join Waitlist
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Floating particles or decorative elements */}
      <div className="absolute bottom-10 left-10 text-white/20 text-xs font-bold uppercase tracking-widest hidden md:block">
        Real India • Authentic • Local
      </div>
      <div className="absolute top-10 right-10 text-white/20 text-xs font-bold uppercase tracking-widest hidden md:block">
        © 2026 78 E LOKA
      </div>
    </section>
  )
}

export default FinalCTA
