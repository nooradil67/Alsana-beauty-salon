import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Normally this would send via an API
    // We can also generate a WhatsApp redirect here as a fallback
    const text = `Hi, I am ${formData.name}. I am looking for ${formData.service} on ${formData.date}.`;
    window.open(`https://wa.me/923349245525?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-black min-h-screen text-beige pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>Contact Us | Alsana Beauty Salon Rawalpindi</title>
        <meta name="description" content="Book an appointment or visit Alsana Beauty Salon in Satellite Town, Rawalpindi. Contact us via phone, WhatsApp, or through our booking form." />
      </Helmet>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-sm text-champagne uppercase tracking-[0.2em] mb-4">Get In Touch</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Book Your Visit</h2>
          <p className="text-lg text-gray-400 font-light">
            Schedule an appointment for a consultation or service. We highly recommend booking in advance, especially for bridal and premium hair services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif text-white mb-8">Salon Information</h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start gap-4 p-4 border border-white/10 glass">
                  <MapPin className="text-champagne shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="block text-white mb-1 uppercase tracking-wider text-sm">Location</strong>
                    <p className="font-light">J3Q8+HWJ, Fifth Rd, D Block,<br/>Satellite Town, Rawalpindi</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 border border-white/10 glass">
                  <Clock className="text-champagne shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="block text-white mb-1 uppercase tracking-wider text-sm">Business Hours</strong>
                    <p className="font-light">Mon - Sun: 11:00 AM - 9:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 border border-white/10 glass bg-champagne/5 border-champagne/20">
                  <Phone className="text-champagne shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="block text-white mb-1 uppercase tracking-wider text-sm">Direct Contact</strong>
                    <p className="font-light mb-2">0334-9245525</p>
                    <div className="flex gap-4 mt-3">
                      <a href="tel:03349245525" className="px-4 py-2 border border-champagne text-champagne hover:bg-champagne hover:text-black text-xs uppercase tracking-wider transition-colors inline-block">Call Now</a>
                      <a href="https://wa.me/923349245525?text=Hi,%20I%20want%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#25D366] text-white hover:bg-green-600 text-xs uppercase tracking-wider transition-colors inline-block flex items-center gap-2">
                        <MessageSquare size={14} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full h-[300px] border border-white/10 glass p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.3653139364947!2d73.0645607!3d33.6476632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95213b1ca663%3A0xeab50d4f1efbbfc4!2sAlsana%20Beauty%20Salon!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-dark p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">Request Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400">Full Name</label>
                  <input required id="name" type="text" className="w-full bg-black/50 border border-white/10 focus:border-champagne text-white px-4 py-3 outline-none transition-colors" placeholder="Jane Doe" onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input required id="phone" type="tel" className="w-full bg-black/50 border border-white/10 focus:border-champagne text-white px-4 py-3 outline-none transition-colors" placeholder="03XX-XXXXXXX" onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="whatsapp" className="text-xs uppercase tracking-widest text-gray-400">WhatsApp (Optional)</label>
                    <input id="whatsapp" type="tel" className="w-full bg-black/50 border border-white/10 focus:border-champagne text-white px-4 py-3 outline-none transition-colors" placeholder="03XX-XXXXXXX" onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="service" className="text-xs uppercase tracking-widest text-gray-400">Service Required</label>
                  <select required id="service" className="w-full bg-black/50 border border-white/10 focus:border-champagne text-white px-4 py-3 outline-none transition-colors appearance-none" onChange={e => setFormData({...formData, service: e.target.value})}>
                    <option value="" disabled selected>Select a service</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Party Makeup">Party Makeup</option>
                    <option value="Hair Styling & Cut">Hair Styling & Cut</option>
                    <option value="Hair Color / Highlights">Hair Color / Highlights</option>
                    <option value="Keratin / Hair Treatment">Keratin / Hair Treatment</option>
                    <option value="Facial & Skincare">Facial & Skincare</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-gray-400">Preferred Date</label>
                  <input required id="date" type="date" className="w-full bg-black/50 border border-white/10 focus:border-champagne text-white px-4 py-3 outline-none transition-colors [color-scheme:dark]" onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400">Additional Details</label>
                  <textarea id="message" rows={4} className="w-full bg-black/50 border border-white/10 focus:border-champagne text-white px-4 py-3 outline-none transition-colors resize-none" placeholder="Is there anything specific we should know?" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <button type="submit" className="w-full bg-champagne text-black py-4 uppercase tracking-wider font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 mt-4">
                  Send Booking Request <ArrowRight size={18} />
                </button>
                <p className="text-center text-xs text-gray-500 mt-4 font-light">We will contact you shortly to confirm your appointment time.</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
