import { motion } from 'framer-motion'
import { Search, Users, Sparkles } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Discover',
    text: 'Weather-aware recommendations surface the best experiences for right now. If it rains, we find the family kitchens. When the sun peaks, we find the secret trails.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Connect',
    text: 'Book directly with trusted locals. No agencies. No middle-men. Just you and the people who know the land best.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Experience',
    text: 'See a side of India most travelers never will. From hidden waterfalls to recipes older than nations, every moment is a memory in the making.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
  }
]

const HowItWorks = () => {
  return (
    <section className="py-32 bg-olive-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-none tracking-tighter">
            Travel That Adapts <br />
            <span className="text-olive-400 italic font-normal">To The Moment.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-olive-900 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-olive-800 transition-all duration-500">
                <step.icon className="w-8 h-8 text-olive-400" />
              </div>
              
              <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-olive-950/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold opacity-10">{step.id}</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 tracking-tight">{step.title}</h3>
              <p className="text-olive-100/60 leading-relaxed font-medium">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
