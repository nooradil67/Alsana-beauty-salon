import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif text-champagne tracking-wider">
          ALSANA <span className="text-white text-lg block sm:inline">Beauty Salon</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-champagne' : 'text-gray-300 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="border border-champagne text-champagne px-6 py-2 rounded-full hover:bg-champagne hover:text-black transition-all text-sm uppercase tracking-wider">
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-4 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-lg uppercase tracking-wider p-2 ${location.pathname === link.path ? 'text-champagne' : 'text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-champagne text-black text-center px-6 py-3 mt-4 w-full uppercase tracking-wider font-medium">
              Book Appointment
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
