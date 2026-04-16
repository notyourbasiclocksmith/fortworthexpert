'use client';

import Link from 'next/link';
import { Phone, MessageSquare, ChevronRight, Car, Key, Settings, Zap, Shield, MapPin } from 'lucide-react';
import { useState } from 'react';

const services = [
  { label: 'Lost Car Keys', href: '/lost-car-keys-fort-worth', icon: Key, desc: 'All-keys-lost solutions for every make and model.' },
  { label: 'Car Key Replacement', href: '/car-key-replacement-fort-worth', icon: Car, desc: 'On-site key cutting and programming. No tow required.' },
  { label: 'Key Fob Programming', href: '/key-fob-programming-fort-worth', icon: Shield, desc: 'Smart keys, proximity fobs, push-to-start systems.' },
  { label: 'Ignition Repair', href: '/ignition-repair-fort-worth', icon: Settings, desc: 'Mechanical and electronic ignition diagnostics.' },
  { label: 'Module Programming', href: '/module-programming-fort-worth', icon: Zap, desc: 'BCM, KVM, FEM, CAS — full module-level repair.' },
  { label: 'Emergency Locksmith', href: '/emergency-locksmith-fort-worth', icon: Phone, desc: 'Fast damage-free vehicle entry throughout Fort Worth.' },
];

const brands = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche',
  'Jaguar', 'Land Rover', 'Lexus', 'Toyota', 'Nissan',
  'Infiniti', 'Ford', 'Chevrolet', 'GMC', 'Cadillac',
  'Dodge', 'Chrysler', 'Jeep', 'Honda', 'Acura',
];

const trust = [
  { label: 'Dealer-Level Tools', desc: 'Same programming equipment used by franchise dealerships.' },
  { label: '100% Mobile', desc: 'We come to your home, office, or roadside — no towing.' },
  { label: 'All Keys Lost', desc: 'We create keys from scratch when no original exists.' },
  { label: 'Same-Day Service', desc: 'Fast response across Fort Worth and surrounding areas.' },
];

export default function HomepageClient({ faqItems }: { faqItems: { question: string; answer: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="absolute top-0 left-[5%] w-[500px] h-[500px] rounded-full bg-gold/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot" />
              <span className="eyebrow">Fort Worth TX — Mobile Service Available Now</span>
            </div>
            <div className="glow-line mb-6" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-[1.1] mb-6">
              Fort Worth&apos;s Advanced{' '}
              <span className="gradient-text">Automotive Locksmith</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl">
              Dealer-level car key programming, immobilizer diagnostics, and module repair. We come to you — no towing, no dealer wait, no surprise fees.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:8178421751" className="btn-primary">
                <Phone size={17} /> Call 817-842-1751
              </a>
              <a href="sms:8175869634" className="btn-secondary">
                <MessageSquare size={17} /> Text 817-586-9634
              </a>
              <Link href="/contact" className="btn-gold">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-elevated">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="glow-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-3">Our Services</h2>
            <p className="text-text-muted max-w-xl mx-auto">Comprehensive automotive locksmith services delivered to your location throughout Fort Worth.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ label, href, icon: Icon, desc }) => (
              <Link key={href} href={href} className="glass-card group flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold-subtle border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-text mb-1 group-hover:text-gold-bright transition-colors">{label}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-bronze group-hover:text-gold transition-colors">
                  Learn more <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/automotive-locksmith-fort-worth" className="btn-gold">
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="glow-line mb-5" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-5">
                Specialist Expertise.<br />
                <span className="gradient-text">Mobile Convenience.</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Modern vehicles are sophisticated computers on wheels. When your security system fails, you need more than a basic locksmith — you need a specialist who understands the exact module architecture of your vehicle.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                We invest in the same dealer-grade diagnostic and programming equipment used by franchise service departments, and bring it directly to your location throughout Fort Worth.
              </p>
              <a href="tel:8178421751" className="btn-primary">
                <Phone size={17} /> Call Now — 817-842-1751
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trust.map(({ label, desc }) => (
                <div key={label} className="panel-dark p-5">
                  <div className="w-2 h-2 rounded-full bg-gold mb-3 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                  <h3 className="font-serif font-semibold text-text mb-1">{label}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section-padding bg-elevated">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="glow-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-text mb-3">Vehicles We Service</h2>
            <p className="text-text-muted max-w-lg mx-auto">European luxury, Japanese precision, and American muscle — we service them all.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span key={brand} className="px-4 py-2 rounded-lg border border-border bg-panel text-sm font-medium text-text-muted hover:border-gold/40 hover:text-text transition-all cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/brands" className="btn-gold">
              Browse by Brand <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="glow-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold text-text">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="glass-card !p-0 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-serif font-semibold text-text">{item.question}</span>
                  <ChevronRight size={18} className={`text-gold flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-text-muted leading-relaxed border-t border-border pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section-padding bg-elevated">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="glow-line mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold text-text mb-4">Serving Fort Worth & Surrounding Areas</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">Mobile service throughout the Fort Worth–Dallas metroplex. We come to you.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Fort Worth', 'Arlington', 'North Richland Hills', 'Grapevine', 'Keller', 'Hurst', 'Bedford', 'Euless', 'Southlake', 'Colleyville'].map((city) => (
              <span key={city} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm text-text-muted">
                <MapPin size={12} className="text-gold" /> {city}
              </span>
            ))}
          </div>
          <Link href="/service-areas" className="btn-gold">View All Service Areas</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-base to-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[150px] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="glow-line mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">Stranded? Let&apos;s Get You Moving.</h2>
          <p className="text-text-muted text-lg mb-8">Same-day mobile service across Fort Worth. Call or text — we respond fast.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8178421751" className="btn-primary !py-3.5 !px-7">
              <Phone size={18} /> Call 817-842-1751
            </a>
            <a href="sms:8175869634" className="btn-secondary !py-3.5 !px-7">
              <MessageSquare size={18} /> Text 817-586-9634
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
