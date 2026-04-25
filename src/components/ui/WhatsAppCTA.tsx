import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppCTA() {
  const phoneNumber = "923349245525"; // Intnl format without + for wa.me link
  const message = encodeURIComponent("Hi, I want to book an appointment.");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 justify-center items-center rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={28} />
    </motion.a>
  );
}
