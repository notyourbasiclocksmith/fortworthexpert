'use client';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <>
      {/* DESKTOP FLOATING BUTTONS */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 flex-col gap-3">
        <motion.a
          href="tel:8178421751"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-bronze text-white flex items-center justify-center shadow-[0_6px_24px_rgba(107,79,58,0.35)] hover:shadow-[0_8px_40px_rgba(107,79,58,0.55)] transition-shadow"
          aria-label="Call us"
        >
          <Phone size={22} />
        </motion.a>
        <motion.a
          href="sms:8175869634"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-panel text-bronze border border-gold flex items-center justify-center shadow-[0_6px_24px_rgba(44,44,44,0.12)] hover:bg-gold-subtle hover:shadow-[0_8px_32px_rgba(198,168,110,0.35)] transition-all"
          aria-label="Text us"
        >
          <MessageSquare size={22} />
        </motion.a>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-panel/95 backdrop-blur-xl border-t border-border safe-bottom">
        <div className="flex gap-2 p-3">
          <a href="tel:8178421751" className="flex-1 btn-primary text-sm text-center !py-3">
            <Phone size={16} /> Call Now
          </a>
          <a href="sms:8175869634" className="flex-1 btn-secondary text-sm text-center !py-3">
            <MessageSquare size={16} /> Text Us
          </a>
        </div>
      </div>
    </>
  );
}
