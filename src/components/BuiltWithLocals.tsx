import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const profiles = [
  {
    name: 'Antonio',
    role: 'Traditional Fisherman',
    image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&q=80&w=400',
    quote: 'Come have breakfast with us before the boats return. Taste the sea as we do.',
    location: 'Betul, South Goa'
  },
  {
    name: 'Meera',
    role: 'Home Cook',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=400',
    quote: 'My recipes are older than the nations we live in. Let me share a secret with you.',
    location: 'Aldona, North Goa'
  },
  {
    name: 'Rahul',
    role: 'Village Guide',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400',
    quote: 'Let me show you the waterfall my grandfather showed me. It is not on any map.',
    location: 'Netravali Wildlife Sanctuary'
  }
]

const BuiltWithLocals = () => {
  return (
    <section id="locals" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-8xl font-bold text-olive-950 mb-8 leading-none tracking-tighter">
            Built With <br />
            <span className="text-olive-700 italic font-normal">Real Humans.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
            We don't partner with travel corporations. We partner with the people who make India what it is.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute inset-x-8 bottom-8">
                  <div className="glass p-8 rounded-[2rem] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                    <Quote className="w-8 h-8 text-olive-700 mb-4 opacity-30" />
                    <p className="text-olive-950 font-medium italic text-lg leading-relaxed mb-6">
                      "{profile.quote}"
                    </p>
                    <div className="pt-6 border-t border-olive-100 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-olive-950">{profile.name}</h4>
                        <p className="text-xs font-bold text-olive-500 uppercase tracking-widest">{profile.role}</p>
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
