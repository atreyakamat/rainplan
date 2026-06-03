import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const spots = [
  { name: 'Mapusa Markets', image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&q=80&w=400' },
  { name: 'Hidden Beaches', image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=400' },
  { name: 'Fishing Villages', image: 'https://images.unsplash.com/photo-1627894006066-b457936e6565?auto=format&fit=crop&q=80&w=400' },
  { name: 'Family Kitchens', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=400' },
]

const timeline = [
  { id: 'goa', name: 'Goa', status: 'Launching First', color: 'bg-olive-700' },
  { id: 'northeast', name: 'Northeast India', status: 'Coming Q4 2026', color: 'bg-olive-400' },
  { id: 'kashmir', name: 'Kashmir', status: 'Coming Q2 2027', color: 'bg-olive-300' },
  { id: 'india', name: 'All of India', status: 'The Vision', color: 'bg-olive-200' },
]

const GoaLaunch = () => {
  return (
    <section id="goa" className="py-32 bg-beige-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-bold text-olive-950 mb-8 leading-none tracking-tighter">
            It Begins In <span className="text-olive-700 italic font-normal">Goa.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            The first chapter starts here. We’re uncovering the hidden side of Goa before expanding across the entire subcontinent.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-32">
          {spots.map((spot, i) => (
            <motion.div
              key={spot.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative w-full sm:w-64 h-80 rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              <img 
                src={spot.image} 
                alt={spot.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-olive-400" />
                <span className="font-bold text-sm tracking-tight">{spot.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-olive-100 rounded-full hidden md:block -translate-y-1/2 z-0" />
            
            {timeline.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg ${item.color} mb-6 transform group-hover:scale-125 transition-transform duration-500`} />
                <h4 className="text-2xl font-bold text-olive-950 mb-2">{item.name}</h4>
                <p className="text-xs font-bold text-olive-500 uppercase tracking-widest">{item.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoaLaunch
