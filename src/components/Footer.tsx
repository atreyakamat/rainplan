import { Globe, Mail, MessageCircle, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white text-olive-950 py-32 border-t border-olive-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-olive-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                78
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">E LOKA</span>
            </div>
            <p className="text-olive-900/60 text-lg leading-relaxed mb-10">
              Real India. Not Tourist India. <br />
              Rediscover travel through the eyes of locals.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-olive-100 flex items-center justify-center hover:bg-olive-50 transition-colors text-olive-700">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
            <div>
              <h4 className="font-bold mb-8 text-olive-400 uppercase tracking-[0.2em] text-[10px]">Explore</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="text-olive-950/60 hover:text-olive-700 transition-colors">Vision</a></li>
                <li><a href="#" className="text-olive-950/60 hover:text-olive-700 transition-colors">Pillars</a></li>
                <li><a href="#" className="text-olive-950/60 hover:text-olive-700 transition-colors">Locals</a></li>
                <li><a href="#" className="text-olive-950/60 hover:text-olive-700 transition-colors">Goa</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 text-olive-400 uppercase tracking-[0.2em] text-[10px]">Legal</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="text-olive-950/60 hover:text-olive-700 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-olive-950/60 hover:text-olive-700 transition-colors">Terms</a></li>
                <li><a href="#" className="text-olive-950/60 hover:text-olive-700 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-olive-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-olive-900/40 text-[10px] font-bold uppercase tracking-widest">
            © 2026 78 E LOKA. ALL RIGHTS RESERVED. REAL INDIA.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-olive-400 hover:text-olive-700 transition-colors"
          >
            Back to top
            <div className="w-12 h-12 rounded-full border border-olive-100 flex items-center justify-center group-hover:bg-olive-50 transition-all text-olive-700 shadow-sm">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
