import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic India" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-olive-950/70 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-[12rem] font-bold text-white mb-8 leading-[0.85] tracking-tighter">
            Real India. <br />
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-olive-400 italic font-normal"
            >
              Not Tourist India.
            </motion.span>
          </h2>
          
          <p className="text-2xl md:text-4xl font-display text-olive-100 mb-16 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join the first explorers. Become part of a new way to travel.
          </p>

          <div className="max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="flex-1 px-8 py-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all font-bold uppercase tracking-widest text-xs"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 px-8 py-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-olive-500 transition-all font-bold uppercase tracking-widest text-xs"
              />
              <button 
                type="submit"
                className="px-10 py-6 rounded-full bg-olive-500 text-white font-bold uppercase tracking-widest text-xs hover:bg-olive-400 transition-all flex items-center justify-center gap-3 shadow-2xl group"
              >
                Join Early Access
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            <div className="mt-12 flex items-center justify-center gap-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
              <span>Goa</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>Northeast</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>Kashmir</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>India</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 text-white/20 text-xs font-bold uppercase tracking-widest hidden md:block">
        © 2026 78 E LOKA • REAL INDIA
      </div>
    </section>
  )
}

export default FinalCTA
