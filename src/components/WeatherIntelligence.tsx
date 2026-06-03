import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, CloudRain, Cloud, Sunrise, MapPin } from 'lucide-react'

const weatherStates = [
  {
    id: 'sunny',
    name: 'Sunny Morning',
    icon: Sun,
    color: 'bg-amber-100',
    textColor: 'text-amber-900',
    recommendation: 'Fishing Trips & Coastal Walks',
    image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rainy',
    name: 'Monsoon Rain',
    icon: CloudRain,
    color: 'bg-blue-100',
    textColor: 'text-blue-900',
    recommendation: 'Family Kitchens & Feni Tasting',
    image: 'https://images.unsplash.com/photo-1627894006066-b457936e6565?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cloudy',
    name: 'Cloudy Afternoon',
    icon: Cloud,
    color: 'bg-slate-100',
    textColor: 'text-slate-900',
    recommendation: 'Heritage Walks & Artisan Studios',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'golden',
    name: 'Golden Evening',
    icon: Sunrise,
    color: 'bg-orange-100',
    textColor: 'text-orange-900',
    recommendation: 'Secret Sunset Spots & Beach Bonfires',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800'
  }
]

const WeatherIntelligence = () => {
  const [activeWeather, setActiveWeather] = useState(weatherStates[0])

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-olive-950 mb-6">
            Travel That Understands <br />
            <span className="text-olive-700">The Sky.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our weather intelligence engine adapts your itinerary in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            {weatherStates.map((state) => (
              <motion.button
                key={state.id}
                onClick={() => setActiveWeather(state)}
                className={`p-6 rounded-3xl flex items-center gap-6 transition-all duration-300 border-2 ${
                  activeWeather.id === state.id 
                    ? `border-olive-700 ${state.color} shadow-lg` 
                    : 'border-transparent bg-beige-50 hover:bg-beige-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  activeWeather.id === state.id ? 'bg-white' : 'bg-white/50'
                } ${state.textColor}`}>
                  <state.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className={`font-bold ${state.textColor}`}>{state.name}</h4>
                  <p className="text-sm text-slate-500">{state.recommendation}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWeather.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img 
                  src={activeWeather.image} 
                  alt={activeWeather.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-olive-400" />
                      <span className="text-xs uppercase tracking-widest font-semibold">Current Recommendation</span>
                    </div>
                    <h3 className="text-3xl font-bold">{activeWeather.recommendation}</h3>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <activeWeather.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherIntelligence
