import { Helmet } from 'react-helmet-async';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';

// Using high-quality placeholder images that fit the salon vibe
const images = [
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512496015851-a1cbf59a2eac?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
];

export default function Gallery() {
  return (
    <div className="bg-black min-h-screen text-beige pt-32 pb-24">
      <Helmet>
        <title>Portfolio & Gallery | Alsana Beauty Salon</title>
        <meta name="description" content="View our portfolio of stunning bridal makeups, hair transformations, and skincare treatments at Alsana Beauty Salon." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-sm text-champagne uppercase tracking-[0.2em] mb-4">Our Masterpieces</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">The Gallery</h2>
          <p className="text-lg text-gray-400 font-light">
            A glimpse into the artistry, transformations, and luxury experience at Alsana Beauty Salon.
          </p>
        </div>

        {/* Categories (Placeholder for future filtering) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Bridal', 'Hair', 'Makeup', 'Skincare'].map((cat, i) => (
            <button key={i} className={`px-6 py-2 border rounded-full text-sm uppercase tracking-wider transition-colors ${i === 0 ? 'bg-champagne text-black border-champagne' : 'border-white/20 text-gray-400 hover:border-champagne hover:text-champagne'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className="relative group overflow-hidden break-inside-avoid bg-white/5"
            >
              <img src={src} alt="Gallery item" className="w-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Plus className="text-champagne w-12 h-12" strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-champagne text-champagne px-10 py-4 uppercase tracking-wider font-medium hover:bg-champagne hover:text-black transition-colors">
              Follow us on Instagram
            </a>
        </div>
      </div>
    </div>
  );
}
