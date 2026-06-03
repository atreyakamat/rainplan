import { motion } from 'framer-motion'

const items = [
  {
    title: 'Breakfast With Fishermen',
    description: 'Watch the sunrise before the boats return.',
    image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&q=80&w=800',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Family Kitchens',
    description: 'Recipes older than nations.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Village Distilleries',
    description: 'Generations of tradition.',
    image: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&q=80&w=800',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Artisan Workshops',
    description: 'Preserving disappearing crafts.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800',
    className: 'md:col-span-1 md:row-span-2'
  },
  {
    title: 'Hidden Waterfalls',
    description: 'No signs. No crowds. Just stories.',
    image: 'https://images.unsplash.com/photo-1627894006066-b457936e6565?auto=format&fit=crop&q=80&w=800',
    className: 'md:col-span-2 md:row-span-1'
  }
]

const BentoGrid = () => {
  return (
    <section id="experiences" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <h2 className="text-5xl md:text-8xl font-bold text-olive-950 mb-8 leading-none tracking-tighter">
            The India You Were <br />
            <span className="text-olive-700 italic font-normal">Never Told About.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
            The most beautiful experiences remain hidden with locals. We bring them to you through people, stories, and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-[1800px] md:h-[1000px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative rounded-[3rem] overflow-hidden group shadow-2xl ${item.className}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="glass p-8 rounded-[2rem] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-olive-950 mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-olive-900/60 font-medium text-sm uppercase tracking-widest">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
