import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif text-champagne mb-4">Alsana Beauty Salon</h2>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Rawalpindi's premier destination for luxury bridal makeup, hair transformations, and premium skincare services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-champagne hover:text-champagne transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-champagne hover:text-champagne transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-400 hover:text-champagne transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-champagne transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-champagne transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-champagne transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-champagne transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-6">Contact</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-champagne shrink-0 mt-1" size={18} />
                <span>J3Q8+HWJ, Fifth Rd, D Block, Satellite Town, Rawalpindi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-champagne shrink-0" size={18} />
                <span>0334-9245525</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="text-champagne shrink-0" size={18} />
                <span>0334-9245525 (WhatsApp)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alsana Beauty Salon. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
