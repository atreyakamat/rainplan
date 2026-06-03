import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex justify-between items-center pointer-events-none"
    >
      <div className="flex items-center gap-3 pointer-events-auto">
        <div className="w-10 h-10 bg-olive-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
          78
        </div>
        <span className="text-xl font-display font-bold tracking-tighter text-olive-950">E LOKA</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-xs font-bold uppercase tracking-widest text-olive-900 pointer-events-auto">
        <a href="#vision" className="hover:text-olive-500 transition-colors">Vision</a>
        <a href="#experiences" className="hover:text-olive-500 transition-colors">Experiences</a>
        <a href="#locals" className="hover:text-olive-500 transition-colors">Locals</a>
        <a href="#goa" className="hover:text-olive-500 transition-colors">Goa</a>
      </div>

      <div className="pointer-events-auto">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-olive-950 text-white shadow-xl hover:bg-olive-800 transition-colors"
        >
          Early Access
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
