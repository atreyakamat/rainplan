import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-olive-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          78
        </div>
        <span className="text-xl font-display font-bold tracking-tighter text-olive-900">E LOKA</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#vision" className="hover:text-olive-700 transition-colors">Our Vision</a>
        <a href="#pillars" className="hover:text-olive-700 transition-colors">Experiences</a>
        <a href="#locals" className="hover:text-olive-700 transition-colors">The Locals</a>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass px-6 py-2.5 rounded-full text-sm font-semibold text-olive-900 border border-olive-100 hover:border-olive-200"
      >
        Join Waitlist
      </motion.button>
    </motion.nav>
  )
}

export default Navbar
