import { motion } from 'framer-motion'

const SEOEditorial = () => {
  return (
    <section className="py-32 bg-white selection:bg-olive-700 selection:text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32">
          
          {/* Section A: Hidden Places In Goa */}
          <div className="lg:col-span-8 lg:col-start-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-32"
            >
              <h2 className="text-4xl md:text-7xl font-bold text-olive-950 mb-12 leading-tight tracking-tighter">
                Discovering the <span className="italic">Hidden Places</span> in Goa.
              </h2>
              <div className="prose prose-xl prose-olive max-w-none text-slate-600 space-y-8">
                <p className="font-display text-2xl text-olive-900 italic leading-relaxed">
                  "Goa is not just a destination; it's a state of mind, hidden away from the neon lights of the commercial beaches."
                </p>
                <p>
                  For the casual traveler, Goa is defined by the crowded stretches of Baga and Calangute. But for those who know where to look, the real Goa—the <strong>authentic Goa experience</strong>—begins where the paved roads end. 
                </p>
                <p>
                  Imagine waking up at 5:00 AM to the sound of the Arabian Sea. In the small fishing village of Betul, the <strong>local Goa experiences</strong> are as raw as they are beautiful. Here, you can join Antonio, a third-generation fisherman, as he prepares his traditional wooden boat. There are no tourists here, no selfie sticks, just the salt air and the anticipation of the morning's catch. This is the <strong>offbeat Goa travel</strong> that 78 E Loka helps you uncover.
                </p>
                <p>
                  Moving inland, the village of Aldona offers a glimpse into a world that feels frozen in time. Heritage homes with red-tiled roofs and oyster-shell windows tell stories of a colonial past blended with local traditions. In family kitchens, recipes for Fish Curry and Xacuti are guarded like heirlooms. These are the <strong>hidden places in Goa</strong> that you won't find on any travel brochure.
                </p>
              </div>
            </motion.div>

            {/* Section B: Authentic Experiences In India */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-32"
            >
              <h2 className="text-4xl md:text-7xl font-bold text-olive-950 mb-12 leading-tight tracking-tighter">
                The Search for <span className="italic text-olive-700">Authentic India.</span>
              </h2>
              <div className="prose prose-xl prose-olive max-w-none text-slate-600 space-y-8 text-right">
                <p>
                  India is a country of 1.4 billion people, each with a story to tell. Yet, most <strong>authentic Indian experiences</strong> are buried under layers of commercial tourism. Travelers are often ushered into pre-packaged tours that offer a sanitized version of the country.
                </p>
                <p>
                  At 78 E Loka, we believe that <strong>local experiences India</strong> are found in the details. It's the steam rising from a clay cup of chai in a village market. It's the rhythm of a handloom in a rural workshop. It's the silence of a forgotten temple in the Western Ghats. This <strong>cultural travel India</strong> is about reconnection—reconnecting with ourselves by connecting with others.
                </p>
                <p>
                  Our mission is to bridge the gap between the curious explorer and the local guardian. We provide a doorway into the lives of artisans, storytellers, and guides who have spent their lives preserving the traditions of their ancestors.
                </p>
              </div>
            </motion.div>

            {/* Section C: Travel Beyond Tourist Attractions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-bold text-olive-950 mb-12 leading-tight tracking-tighter">
                Moving Beyond <span className="text-olive-400">The Tourist Trap.</span>
              </h2>
              <div className="prose prose-xl prose-olive max-w-none text-slate-600 space-y-8">
                <p>
                  Why do we travel? Is it to check off boxes on a list of <strong>non tourist places in India</strong>, or is it to be moved? The digital age has made travel easier, but it has also made it more predictable. <strong>Hidden destinations India</strong> are often "discovered" by algorithms before they are experienced by humans.
                </p>
                <p>
                  78 E Loka is an invitation to get lost. It's an invitation to embrace the unexpected. <strong>Experiential travel India</strong> is about those moments that can't be planned. It's the sudden invitation to a village wedding. It's the discovery of a waterfall that has no name. It's the realization that India is not just a place to see, but a place to feel.
                </p>
                <p>
                  We are building more than a platform; we are building a community of explorers who value depth over distance. Join us as we explore the real India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SEOEditorial
