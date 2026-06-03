import { motion } from 'framer-motion'
import { Plane, Clock, MapPin, Zap } from 'lucide-react'

const MissYourFlight = () => {
  return (
    <section className="py-24 bg-beige-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-olive-950 mb-8 leading-tight">
              Three Hours Before <br />
              Your Flight?
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Discover exactly what fits your remaining time. No stress, just one last authentic experience before you head home.
            </p>

            <div className="space-y-6">
              {[
                { icon: Clock, title: 'Time Available', text: 'Instantly calculated based on your flight.' },
                { icon: MapPin, title: 'Nearby Experiences', text: 'Curated based on your current location.' },
                { icon: Zap, title: 'One Tap Booking', text: 'Zero friction. Full immersion.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-olive-100 flex items-center justify-center text-olive-700 flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-olive-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Futuristic UI Mockup */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[40px] shadow-2xl relative z-10 border border-white/40"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-olive-700 flex items-center justify-center text-white">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Flight AI-204</span>
                    <span className="text-sm font-bold text-olive-900">Goa (GOI) → Mumbai (BOM)</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-red-500 font-bold uppercase tracking-wider">Departing In</span>
                  <span className="text-xl font-bold text-olive-900">03:42:15</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-olive-50 border border-olive-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=200" alt="Experience" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-olive-900 text-sm">Quick Feni Distillery Tour</h5>
                      <p className="text-xs text-slate-500">12 mins away • 45 min duration</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-olive-700 text-white text-xs font-bold">Book</button>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden opacity-50">
                      <img src="https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&q=80&w=200" alt="Experience" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-olive-900 text-sm">Village Pottery Class</h5>
                      <p className="text-xs text-slate-500">25 mins away • 90 min duration</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-red-400 uppercase">Too Tight</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>REMAINING TIME: 02:15:00</span>
                <span className="text-olive-600">SAFE TO BOOK</span>
              </div>
            </motion.div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-olive-200/40 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-beige-300/40 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissYourFlight
