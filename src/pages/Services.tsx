import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    category: "Bridal & Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    description: "Flawless artistry for your big day and special events.",
    services: [
      { name: "Luxury Bridal Makeover", duration: "3-4 Hours", price: "Contact for Pricing", desc: "Complete bridal styling including makeup, hair, jewelry setting, and dupatta draping using premium international brands." },
      { name: "Signature Party Makeup", duration: "1.5 Hours", price: "Starts from Rs.", desc: "Elegant makeup styling tailored for evening events, parties, and family functions." },
      { name: "Engagement / Nikkah Look", duration: "2 Hours", price: "Starts from Rs.", desc: "Soft, glowing aesthetic designed specifically for intimate wedding events." }
    ]
  },
  {
    category: "Hair Transformations",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    description: "Expert coloring, styling, and revitalizing treatments.",
    services: [
      { name: "Hair Color & Balayage", duration: "2-4 Hours", price: "Starts from Rs.", desc: "Customized global color, highlights, or seamlessly blended balayage." },
      { name: "Keratin / Hair Botox", duration: "2-3 Hours", price: "Starts from Rs.", desc: "Intensive smoothing treatments to eliminate frizz and restore hair health." },
      { name: "Signature Hair Styling", duration: "1 Hour", price: "Starts from Rs.", desc: "Professional blowouts, updos, and intricate styling for any occasion." },
      { name: "Precision Haircut", duration: "45 Mins", price: "Starts from Rs.", desc: "Consultation and customized cut to enhance your face shape and texture." }
    ]
  },
  {
    category: "Skincare & Facials",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    description: "Deep cleansing and rejuvenating skin therapies.",
    services: [
      { name: "Premium HydraFacial", duration: "60 Mins", price: "Starts from Rs.", desc: "Multi-step treatment to cleanse, exfoliate, and deeply hydrate the skin." },
      { name: "Skin Whitening Facial", duration: "45 Mins", price: "Starts from Rs.", desc: "Targeted treatment to brighten complexion and reduce uneven skin tone." },
      { name: "Acne Clarifying Facial", duration: "60 Mins", price: "Starts from Rs.", desc: "Deep pore cleansing and extraction to calm breakouts and purify skin." }
    ]
  },
  {
    category: "Nails & Essentials",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    description: "The finishing touches for your refined look.",
    services: [
      { name: "Luxury Manicure & Pedicure", duration: "90 Mins", price: "Starts from Rs.", desc: "Complete nail care, exfoliation, massage, and polish." },
      { name: "Acrylic / Gel Nails", duration: "2 Hours", price: "Starts from Rs.", desc: "Extensions and overlays with premium gel polish art." },
      { name: "Threading & Waxing", duration: "Varies", price: "Starts from Rs.", desc: "Gentle and hygienic hair removal services." }
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-black min-h-screen text-beige pt-32 pb-24">
      <Helmet>
        <title>Our Services | Hair, Makeup & Skincare | Alsana Beauty Salon</title>
        <meta name="description" content="Explore our premium services including bridal makeup, hair color, keratin, hydrafacial, and nail art at Alsana Beauty Salon in Rawalpindi." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-sm text-champagne uppercase tracking-[0.2em] mb-4">Our Expertise</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Service Menu</h2>
          <p className="text-lg text-gray-400 font-light">
            Indulge in our comprehensive range of luxury beauty treatments. Everything we do is designed to elevate your style and confidence.
          </p>
        </div>

        <div className="space-y-32">
          {serviceCategories.map((cat, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <img src={cat.image} alt={cat.category} className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 grayscale-[20%]" />
                  <div className="absolute inset-0 border border-champagne/30 m-6 z-20 pointer-events-none"></div>
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl font-serif text-white mb-4">{cat.category}</h3>
                <p className="text-champagne font-light mb-10 text-lg italic">{cat.description}</p>
                
                <div className="space-y-8">
                  {cat.services.map((svc, i) => (
                    <div key={i} className="border-b border-white/10 pb-6 group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl text-white font-serif">{svc.name}</h4>
                        <span className="text-champagne text-sm uppercase tracking-wider">{svc.price}</span>
                      </div>
                      <p className="text-gray-400 font-light text-sm mb-3">{svc.desc}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xs text-gray-500 uppercase tracking-widest">{svc.duration}</span>
                        <Link to="/contact" className="text-xs text-white uppercase tracking-widest hover:text-champagne transition-colors border border-white/20 px-4 py-2 hover:border-champagne group-hover:bg-champagne group-hover:text-black">
                          Book This
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
