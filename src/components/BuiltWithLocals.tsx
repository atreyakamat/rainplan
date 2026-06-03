import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const locals = [
  {
    name: 'Antonio',
    role: 'Traditional Fisherman',
    image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&q=80&w=400',
    quote: 'Come have breakfast with us before the boats return. Taste the sea as we do.'
  },
  {
    name: 'Meera',
    role: 'Home Cook',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=400',
    quote: 'My recipes are older than the nations we live in. Let me share a secret with you.'
  },
  {
    name: 'Rahul',
    role: 'Village Guide',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400',
    quote: 'Let me show you the waterfall my grandfather showed me. It is not on any map.'
  }
]

const categories = ['Fishermen', 'Home Cooks', 'Artisans', 'Trekkers', 'Storytellers', 'Village Guides']

const BuiltWithLocals = () => {
  return (
    <section id="locals" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-olive-950 mb-6">
              Built With <br />
              <span className="text-olive-700 italic">Real Humans.</span>
            </h2>
            <p className="text-lg text-slate-600">
              We don't partner with agencies. We partner with the people who make India what it is.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full border border-olive-100 text-xs font-bold text-olive-800 uppercase tracking-widest bg-olive-50/50">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locals.map((local, i) => (
            <motion.div
              key={local.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[450px] rounded-[32px] overflow-hidden mb-6 shadow-xl">
                <img 
                  src={local.image} 
                  alt={local.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Quote className="w-6 h-6 text-olive-600 mb-3 opacity-50" />
                    <p className="text-olive-900 font-medium italic mb-4 leading-relaxed">
                      "{local.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-olive-950">{local.name}</h4>
                        <p className="text-xs text-olive-600 font-semibold uppercase tracking-wider">{local.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuiltWithLocals
