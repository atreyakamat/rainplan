import { Globe, Mail, MessageCircle, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-olive-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-olive-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                78
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">E LOKA</span>
            </div>
            <p className="text-olive-200 text-lg max-w-sm leading-relaxed mb-8">
              Real India. Not Tourist India. <br />
              Rediscover travel through the eyes of locals.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-olive-400 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-olive-100">
              <li><a href="#" className="hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-white transition-colors">The Pillars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Local Profiles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Launch Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-olive-400 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-olive-100">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-olive-400 text-sm">
            © 2026 78 E Loka. All rights reserved. Built with ❤️ for the real India.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-olive-400 hover:text-white transition-colors"
          >
            Back to top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
