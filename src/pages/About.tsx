import { Helmet } from 'react-helmet-async';
import { Shield, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black min-h-screen text-beige pt-32 pb-24">
      <Helmet>
        <title>About Us | Alsana Beauty Salon Rawalpindi</title>
        <meta name="description" content="Learn about Alsana Beauty Salon in Rawalpindi. Our mission, expert bridal team, and commitment to luxury beauty services." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-sm text-champagne uppercase tracking-[0.2em] mb-4">Our Story</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Crafting Beauty Elegance in Rawalpindi</h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            As one of the best bridal makeup salons in Rawalpindi, Alsana Beauty Salon is dedicated to elevating your natural beauty through expertise, luxury products, and an unforgettable salon experience.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80" alt="Salon Philosophy" className="w-full h-[600px] object-cover grayscale-[20%]" />
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                To provide an uncompromised luxury beauty experience. We believe that every client deserves to feel completely confident, empowered, and radiant. We achieve this by blending international beauty standards with personalized care, specifically tailored for the women of Rawalpindi and Islamabad.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-white mb-4">Our Beauty Philosophy</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Beauty is more than just applying products; it's an art of enhancing individual features. Whether you need an elite bridal makeover, a restorative hydra facial, or a transformative haircut, our philosophy remains the same: use only the finest imported products and employ advanced techniques to ensure lasting, stunning results.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-white mb-4">The Alsana Experience</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                From the moment you step into our opulent salon in Satellite Town, you are treated to a hygienic, relaxing heaven. We pride ourselves on creating an ambiance that speaks of luxury, where every detail is curated for your comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Stats / Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="glass p-12 text-center">
            <Award className="text-champagne w-12 h-12 mx-auto mb-6" />
            <h4 className="text-2xl font-serif text-white mb-3">Certified Experts</h4>
            <p className="text-gray-400 font-light">Our team consists of highly trained and certified artists with years of industry experience.</p>
          </div>
          <div className="glass p-12 text-center">
            <Shield className="text-champagne w-12 h-12 mx-auto mb-6" />
            <h4 className="text-2xl font-serif text-white mb-3">Premium Products</h4>
            <p className="text-gray-400 font-light">We exclusively use high-end, genuine international brands for all our hair and skin services.</p>
          </div>
          <div className="glass p-12 text-center">
            <Users className="text-champagne w-12 h-12 mx-auto mb-6" />
            <h4 className="text-2xl font-serif text-white mb-3">Client First</h4>
            <p className="text-gray-400 font-light">Your satisfaction is our ultimate goal. We offer detailed consultations prior to any major service.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
