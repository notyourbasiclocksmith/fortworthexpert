import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageSquare, Award, Wrench, Shield, Clock, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Fort Worth Expert Automotive Locksmith | Specialist Mobile Service',
  description: 'Fort Worth\'s specialist automotive locksmith. Dealer-grade tools, factory-trained technicians, mobile service across a 25-mile radius. Licensed, insured, warrantied.',
  alternates: { canonical: 'https://fortworthlocksmithexperts.com/about' },
};

const credentials = [
  { icon: Award, title: 'Licensed & Insured', desc: 'Texas-licensed locksmith with full liability insurance for every job we perform.' },
  { icon: Wrench, title: 'OEM-Grade Equipment', desc: 'We invest in the same Autel, Xtool, AVDI, VVDI Key Tool Plus, and dealer-line equipment used by franchise service departments.' },
  { icon: Shield, title: '90-Day Workmanship Warranty', desc: 'Every key we cut, every fob we program, every module we touch is backed for 90 days.' },
  { icon: CheckCircle2, title: 'No Damage Guarantee', desc: 'Modern entry tools — no broken windows, no scratched paint, no damaged trim. Period.' },
];

const equipment = [
  'Autel IM608 Pro & MaxiIM KM100 — universal key programming',
  'AVDI Abrites Diagnostics — European specialty (BMW, MB, Audi, VW, Porsche)',
  'VVDI Key Tool Plus & VVDI2 — Asian and domestic vehicles',
  'Xhorse Condor XC-MINI Plus — automatic high-security key cutting',
  'Snap-on ZEUS & Launch X-431 — full diagnostic and module flashing',
  'Tibbe, HU64, HU92, HU100, HU101 — every modern keyway covered',
];

const focus = [
  'European luxury (BMW, Mercedes-Benz, Audi, Porsche, Jaguar, Land Rover, Volvo)',
  'Asian premium (Lexus, Acura, Infiniti) and economy (Toyota, Honda, Nissan)',
  'American trucks and SUVs (Ford, GM/Chevy/GMC, Dodge/Chrysler/Jeep)',
  'Push-to-start smart-key systems and proximity authentication',
  'BCM, KVM, FEM, CAS, EZS, EWS module diagnostics and reflash',
  'All-keys-lost cases on 1996+ vehicles with immobilizer security',
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24 relative z-10">
          <div className="glow-line mb-5" />
          <span className="eyebrow">About Us</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mt-4 mb-5 leading-[1.05]">
            A Specialist <span className="gradient-text">Automotive Locksmith</span> — Not a General Lock Shop
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl">
            We focus exclusively on automotive security — keys, fobs, ignitions, immobilizers, and modules. That focus lets us invest in the right tools and deliver dealer-quality work at half the cost and a fraction of the wait.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:8178421751" className="btn-primary">
              <Phone size={17} /> Call 817-842-1751
            </a>
            <Link href="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section-padding bg-[var(--color-base)]">
        <div className="max-w-4xl mx-auto px-5">
          <div className="prose-content">
            <span className="eyebrow">Our Approach</span>
            <h2 className="font-serif text-3xl font-bold text-[var(--color-text)] mt-4 mb-5">Built for Modern Vehicles</h2>
            <p>
              The cars on the road today are a different animal than the ones of even ten years ago. A 2024 BMW carries more processors than a fighter jet of the 1990s. Its keys talk to the body computer, which talks to the engine computer, which talks to the immobilizer module — every authentication negotiated through encrypted CAN-bus messages.
            </p>
            <p>
              When something in that chain fails, a basic locksmith with a key cutter and a pop-open transponder cloner is out of their depth. You need a specialist with the right scan tools, the right programming hardware, and the experience to read what the diagnostic data is actually telling them.
            </p>
            <p>
              That&apos;s what we built our shop to be. We picked one lane — automotive security — and stocked our trucks accordingly. Every mobile unit carries OEM-equivalent programmers, key-cutting machines, replacement modules, and the chip stock to handle 95% of jobs in a single trip.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section-padding section-charcoal">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="glow-line mx-auto mb-4" />
            <span className="eyebrow">Credentials</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)] mt-4">What Backs Our Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {credentials.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="panel-dark p-6">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-gold-subtle)] border border-[var(--color-border-warm)] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[var(--color-bronze)]" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-[var(--color-text)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT + FOCUS */}
      <section className="section-padding bg-[var(--color-base)]">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Equipment</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-4 mb-5">What&apos;s in Our Trucks</h2>
            <ul className="space-y-3">
              {equipment.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  <Wrench size={16} className="text-[var(--color-bronze)] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Focus Areas</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-4 mb-5">What We Specialize In</h2>
            <ul className="space-y-3">
              {focus.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  <CheckCircle2 size={16} className="text-[var(--color-gold-deep)] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE AREA + HOURS */}
      <section className="section-padding section-charcoal">
        <div className="max-w-4xl mx-auto px-5 grid md:grid-cols-2 gap-8">
          <div className="panel-dark p-6">
            <MapPin size={24} className="text-[var(--color-bronze)] mb-3" />
            <h3 className="font-serif text-xl font-semibold text-[var(--color-text)] mb-2">Service Area</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              Mobile service throughout Fort Worth and a 25-mile radius — covering 30+ cities across Tarrant, Denton, Parker, and Johnson counties.
            </p>
            <Link href="/service-areas" className="text-sm font-semibold text-[var(--color-bronze)] hover:text-[var(--color-bronze-dark)] inline-flex items-center gap-1">
              View all areas <ChevronRight size={14} />
            </Link>
          </div>
          <div className="panel-dark p-6">
            <Clock size={24} className="text-[var(--color-bronze)] mb-3" />
            <h3 className="font-serif text-xl font-semibold text-[var(--color-text)] mb-2">Hours</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-1"><strong className="text-[var(--color-text)]">Mon–Sun:</strong> 7:00 AM – 10:00 PM</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">After-hours emergency service available — call for dispatch.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-base)] text-center">
        <div className="max-w-2xl mx-auto px-5">
          <div className="glow-line mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Need a Specialist? You Found One.</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Same-day mobile service, factory-grade equipment, transparent pricing, and a real warranty.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:8178421751" className="btn-primary">
              <Phone size={17} /> Call Now
            </a>
            <a href="sms:8175869634" className="btn-secondary">
              <MessageSquare size={17} /> Text Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
