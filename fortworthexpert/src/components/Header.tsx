'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Menu, X, ChevronDown, Zap } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services', href: '#', children: [
      { label: 'Automotive Locksmith', href: '/automotive-locksmith-fort-worth' },
      { label: 'Lost Car Keys', href: '/lost-car-keys-fort-worth' },
      { label: 'Car Key Replacement', href: '/car-key-replacement-fort-worth' },
      { label: 'Key Fob Programming', href: '/key-fob-programming-fort-worth' },
      { label: 'Ignition Repair', href: '/ignition-repair-fort-worth' },
      { label: 'European Car Locksmith', href: '/european-car-locksmith-fort-worth' },
      { label: 'Module Programming', href: '/module-programming-fort-worth' },
      { label: 'No Key Detected / Immobilizer', href: '/no-key-detected-immobilizer-fort-worth' },
      { label: 'Emergency Locksmith', href: '/emergency-locksmith-fort-worth' },
    ]
  },
  { label: 'Brands', href: '/brands' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-bronze text-white/90 text-xs py-2 relative z-[60]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex justify-between items-center">
          <span className="hidden sm:flex items-center gap-1.5 font-medium tracking-[0.15em] uppercase">
            <Zap size={12} className="text-gold-bright" /> Fort Worth&apos;s Premier Automotive Locksmith
          </span>
          <div className="flex gap-5 items-center mx-auto sm:mx-0">
            <a href="tel:8178421751" className="flex items-center gap-1.5 hover:text-gold-bright transition-colors">
              <Phone size={13} /> 817-842-1751
            </a>
            <a href="sms:8175869634" className="flex items-center gap-1.5 hover:text-gold-bright transition-colors">
              <MessageSquare size={13} /> 817-586-9634
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-base/90 backdrop-blur-xl border-b border-border shadow-[0_2px_20px_rgba(44,44,44,0.06)]'
            : 'bg-base/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-xl font-bold text-text tracking-tight group-hover:text-bronze transition-colors">Fort Worth Expert</span>
            <span className="text-[10px] text-bronze tracking-[0.22em] uppercase -mt-0.5 font-semibold">Automotive Locksmith</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <button className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-text transition-colors">
                    {item.label} <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-72"
                      >
                        <div className="panel-dark py-2 shadow-[0_20px_40px_rgba(44,44,44,0.12)]">
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-text-muted hover:text-bronze hover:bg-gold-subtle transition-colors">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-text-muted hover:text-text transition-colors relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                </Link>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:8178421751" className="btn-primary text-sm !py-2.5 !px-5">
              <Phone size={15} /> Call Now
            </a>
          </div>

          <button className="lg:hidden text-text" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-panel backdrop-blur-xl border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  item.children ? (
                    <div key={item.label}>
                      <div className="py-2.5 text-xs font-semibold text-bronze tracking-[0.18em] uppercase">{item.label}</div>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block pl-4 py-2 text-sm text-text-muted hover:text-bronze">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-text hover:text-bronze">
                      {item.label}
                    </Link>
                  )
                ))}
                <div className="pt-4 flex flex-col gap-2">
                  <a href="tel:8178421751" className="btn-primary text-sm text-center">
                    <Phone size={15} /> Call 817-842-1751
                  </a>
                  <a href="sms:8175869634" className="btn-secondary text-sm text-center">
                    <MessageSquare size={15} /> Text for Fast Help
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
