import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Sparkles, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { title: "Hair Styling", desc: "Expert cuts, colors, and styling", icon: Sparkles },
  { title: "Bridal Makeup", desc: "Flawless luxury bridal looks", icon: Star },
  { title: "Skin & Facials", desc: "Glowing, rejuvenated skin", icon: ShieldCheck },
];

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-beige">
      <Helmet>
        <title>Alsana Beauty Salon | Premium Luxury Salon in Rawalpindi</title>
        <meta name="description" content="Experience premium hair, makeup, skincare and bridal services at Alsana Beauty Salon in Rawalpindi." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Salon Background" 
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-champagne font-serif italic text-xl mb-4"
          >
            Welcome to Rawalpindi's Finest
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight tracking-wide"
          >
            Alsana Beauty Salon
            <span className="block text-3xl md:text-5xl mt-2 text-champagne">Premium Beauty Experience</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light"
          >
            Luxury hair, makeup, skincare and bridal services crafted to make you look your absolute best.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="bg-champagne text-black px-10 py-4 font-medium uppercase tracking-wider hover:bg-white transition-colors duration-300">
              Book Appointment
            </Link>
            <Link to="/services" className="border border-champagne text-champagne px-10 py-4 font-medium uppercase tracking-wider hover:bg-champagne/10 transition-colors duration-300">
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-[#0a0a0a] border-y border-white/5 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex text-champagne mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <p className="text-3xl font-serif text-white mb-1">4.8/5</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Google Rating</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-4xl font-serif text-champagne mb-2">145+</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Client Reviews</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-4xl font-serif text-champagne mb-2">10+</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Years Exp.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-4xl font-serif text-champagne mb-2">10k+</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm text-champagne uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Signature Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass p-10 group cursor-pointer border border-white/5 hover:border-champagne/30 transition-all duration-300"
              >
                <service.icon className="text-champagne mb-6" size={40} strokeWidth={1} />
                <h4 className="text-2xl font-serif text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 mb-8 font-light">{service.desc}</p>
                <Link to="/services" className="text-champagne flex items-center text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                  Explore <ChevronRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-b border-champagne text-champagne pb-1 tracking-widest uppercase text-sm hover:text-white hover:border-white transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm text-champagne uppercase tracking-[0.2em] mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white">Our Masterpieces</h3>
            </div>
            <Link to="/gallery" className="mt-6 md:mt-0 border border-white/20 px-8 py-3 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors">
              View Full Gallery
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-[3/4] relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80" alt="Bridal" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <p className="text-champagne font-serif text-xl">Bridal Makeup</p>
               </div>
            </div>
            <div className="aspect-[3/4] relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80" alt="Hair" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <p className="text-champagne font-serif text-xl">Hair Transformation</p>
               </div>
            </div>
            <div className="aspect-[3/4] relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1512496015851-a1cbf59a2eac?auto=format&fit=crop&w=600&q=80" alt="Makeup" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <p className="text-champagne font-serif text-xl">Party Makeup</p>
               </div>
            </div>
            <div className="aspect-[3/4] relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80" alt="Skincare" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <p className="text-champagne font-serif text-xl">Luxury Facials</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&w=800&q=80" alt="Salon Tools" className="h-[600px] w-full object-cover rounded-sm" />
            </div>
            <div>
              <h2 className="text-sm text-champagne uppercase tracking-[0.2em] mb-4">The Alsana Standard</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">Why Choose Us</h3>
              
              <div className="space-y-6">
                {[
                  "Certified makeup artists and hair stylists",
                  "100% genuine imported luxury products",
                  "Strict hygiene and sterilization protocols",
                  "Specialized luxury bridal suite",
                  "Same day bookings based on availability",
                  "Instant WhatsApp support"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-champagne shrink-0 mt-1" size={20} />
                    <p className="text-gray-300 text-lg font-light">{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-block mt-10 text-champagne flex items-center text-sm uppercase tracking-widest hover:text-white transition-all">
                Read Our Story <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm text-champagne uppercase tracking-[0.2em] mb-4">Client Love</h2>
          <h3 className="text-4xl font-serif text-white mb-16">What They Say</h3>
          
          <div className="glass p-12 relative">
            <Quote className="text-champagne/20 w-24 h-24 absolute top-4 left-4 -z-10" />
            <div className="flex justify-center text-champagne mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <p className="text-xl md:text-3xl font-serif text-gray-200 leading-relaxed mb-8">
              "Absolutely loved my bridal makeup! The team at Alsana made me feel like royalty. Highly professional and deeply attentive to details."
            </p>
            <div>
              <h4 className="text-champagne font-medium tracking-wider uppercase">Sara K.</h4>
              <p className="text-sm text-gray-500 font-light">Verified Google Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-champagne text-black text-center px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-serif mb-6">Ready for your transformation?</h2>
          <p className="text-xl mb-10 font-light text-black/80">Book your luxury salon experience with Rawalpindi's finest professionals.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/923349245525?text=Hi,%20I%20want%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="bg-black text-white px-10 py-4 uppercase tracking-wider font-medium hover:bg-gray-900 transition-colors">
              WhatsApp Now
            </a>
            <Link to="/contact" className="border-2 border-black text-black px-10 py-4 uppercase tracking-wider font-medium hover:bg-black hover:text-white transition-colors">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Quote(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
