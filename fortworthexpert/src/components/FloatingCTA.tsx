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
          className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep text-base flex items-center justify-center border border-white/15 shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_40px_rgba(212,175,55,0.7)] transition-shadow"
          aria-label="Call us"
        >
          <Phone size={22} />
        </motion.a>
        <motion.a
          href="sms:8175869634"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-panel text-gold-bright border border-gold/40 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_40px_rgba(212,175,55,0.35)] hover:border-gold transition-all"
          aria-label="Text us"
        >
          <MessageSquare size={22} />
        </motion.a>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-base/95 backdrop-blur-xl border-t border-border safe-bottom">
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
