import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Map, Plane, Camera } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    id: 1,
    title: 'Google Maps',
    stat: '10,000+ Reviews',
    text: 'The same recommendations everyone sees.',
    icon: Map,
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 2,
    title: 'Travel Packages',
    stat: 'One Size Fits All',
    text: 'Same itinerary, same stops, same stories.',
    icon: Plane,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 3,
    title: 'Instagram',
    stat: 'Perfectly Staged',
    text: 'Same photos from the same locations.',
    icon: Camera,
    color: 'bg-purple-50 text-purple-600'
  }
]

const TheProblem = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
        }
      })

      // Card 1
      tl.from('.card-1', { y: 200, opacity: 0, scale: 0.9 })
      tl.to('.card-1', { opacity: 0, scale: 0.8, y: -100, delay: 0.5 })

      // Card 2
      tl.from('.card-2', { y: 200, opacity: 0, scale: 0.9 }, '<+=0.5')
      tl.to('.card-2', { opacity: 0, scale: 0.8, y: -100, delay: 0.5 })

      // Card 3
      tl.from('.card-3', { y: 200, opacity: 0, scale: 0.9 }, '<+=0.5')
      tl.to('.card-3', { opacity: 0, scale: 0.8, y: -100, delay: 0.5 })

      // Final Message
      tl.from('.final-message', { opacity: 0, y: 50 }, '<+=0.5')
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-beige-50 overflow-hidden">
      <div ref={stickyRef} className="h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center relative h-[60vh] flex flex-col items-center justify-center">
          
          <div className="absolute top-0 left-0 right-0">
            <h2 className="text-4xl md:text-6xl font-bold text-olive-950 mb-12 leading-tight">
              Somewhere Along The Way, <br />
              <span className="text-olive-700 italic">Travel Became Predictable.</span>
            </h2>
          </div>

          <div className="relative w-full max-w-md h-64 mt-20">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className={`card-${card.id} absolute inset-0 glass p-10 rounded-[2.5rem] flex flex-col justify-center shadow-2xl`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.color}`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{card.stat}</h4>
                <h3 className="text-2xl font-bold text-olive-950 mb-3">{card.title}</h3>
                <p className="text-slate-600 font-medium">{card.text}</p>
              </div>
            ))}

            <div className="final-message absolute inset-0 flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-olive-900 mb-6">
                Everyone Is Visiting <br /> The Same India.
              </h3>
              <p className="text-lg text-olive-700 font-medium max-w-sm">
                The most meaningful experiences never make it onto travel brochures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheProblem
