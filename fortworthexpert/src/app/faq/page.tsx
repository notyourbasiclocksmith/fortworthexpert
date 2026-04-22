'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
  category: string;
}

const faqs: FAQ[] = [
  // GENERAL
  { category: 'General', q: 'What does an automotive locksmith do?', a: 'An automotive locksmith specializes in everything related to vehicle keys, fobs, ignitions, and security systems. We cut and program new keys, replace lost keys, repair ignition cylinders, diagnose and repair immobilizer faults, program control modules, and help when you\'re locked out — all without towing your vehicle to a dealership.' },
  { category: 'General', q: 'Are you licensed and insured?', a: 'Yes. We hold a current Texas locksmith license and carry full general liability insurance. Documentation is available on request.' },
  { category: 'General', q: 'Do you offer a warranty?', a: 'Yes. Every key we cut, fob we program, and module we touch comes with a 90-day workmanship warranty. If anything we did stops working in that period, we come back and fix it free.' },
  { category: 'General', q: 'What payment methods do you accept?', a: 'Cash, all major credit and debit cards, Apple Pay, Google Pay, Venmo, and Zelle. Payment is collected on-site after the work is complete and verified.' },

  // PRICING
  { category: 'Pricing', q: 'How much does car key replacement cost in Fort Worth?', a: 'Car key replacement costs vary by vehicle make, model, and key type. Basic transponder keys start around $150, while smart/proximity keys range from $250–$600+. European luxury vehicles are typically at the higher end. We provide exact quotes upfront before any work begins.' },
  { category: 'Pricing', q: 'Why is the dealer so much more expensive?', a: 'Dealers carry massive overhead — service-bay rent, parts markups, dealership margins. We carry the same OEM tools but operate mobile with low overhead, so we deliver the same quality at typically half the cost.' },
  { category: 'Pricing', q: 'Are there hidden fees?', a: 'No. The price we quote on the phone is the price you pay — assuming the vehicle situation matches what you described. If anything changes once we arrive, we tell you before doing additional work.' },
  { category: 'Pricing', q: 'Do you charge a service-call fee if I don\'t go through with the work?', a: 'A small dispatch fee may apply if you cancel after we\'ve already arrived on-site. We always confirm pricing by phone first to avoid this.' },

  // SERVICE / TECHNICAL
  { category: 'Service', q: 'Can you program car keys without the original key?', a: 'Yes — this is one of our specialties. We handle all-keys-lost situations for virtually all makes and models. Our tools can extract security data from your vehicle\'s modules and generate new keys from scratch, even when no original key is available.' },
  { category: 'Service', q: 'Do you come to my location?', a: 'Yes. We are 100% mobile. Our fully-equipped vehicles come to your home, workplace, parking lot, or roadside throughout Fort Worth and a 25-mile radius. No towing required.' },
  { category: 'Service', q: 'How long does key programming take?', a: 'Most jobs take 30–90 minutes on-site. Basic transponder keys are quickest; all-keys-lost situations on European vehicles can take longer due to extended security protocols.' },
  { category: 'Service', q: 'Can you make a spare key for my push-to-start car?', a: 'Yes. If you have one working smart key, we can usually program a spare in 30–60 minutes. If both keys are lost, we can still generate new keys but the process takes longer and costs more.' },
  { category: 'Service', q: 'What is "module programming" and when do I need it?', a: 'Module programming refers to flashing or replacing the electronic control units that handle vehicle security — BCM (Body Control Module), KVM (Keyless Vehicle Module), FEM/CAS (BMW), EZS (Mercedes), and similar. You need it when these modules fail and the car can\'t recognize keys, or when a replacement module needs to be coded to your VIN.' },
  { category: 'Service', q: 'My car says "No Key Detected" — what does that mean?', a: 'The "No Key Detected" message typically indicates a communication failure between your key fob and the vehicle\'s security module. Common causes include a dead key fob battery, a failed keyless vehicle module (KVM), body control module (BCM) issues, or antenna receiver failure. Our diagnostic scan identifies the exact cause so we can resolve it efficiently.' },
  { category: 'Service', q: 'Can you replace the ignition cylinder if my key is broken inside?', a: 'Yes. We can extract broken keys, repair or replace the ignition cylinder, and cut and program a new key — all on-site in a single visit.' },

  // VEHICLES
  { category: 'Vehicles', q: 'What makes and models do you service?', a: 'Virtually every brand on the road: BMW, Mercedes-Benz, Audi, Porsche, Jaguar, Land Rover, VW, Volvo, Lexus, Toyota, Honda, Acura, Nissan, Infiniti, Mazda, Hyundai, Kia, Ford, GM (Chevy/GMC/Cadillac/Buick), Dodge, Chrysler, Jeep, Ram, and more. If you have a vehicle and it has keys, we can probably help — call to confirm.' },
  { category: 'Vehicles', q: 'Do you work on European luxury cars?', a: 'Yes. European specialty work is one of our strongest areas. We have AVDI Abrites and other dealer-grade equipment for BMW (FEM/CAS/EWS), Mercedes (EZS/ESL/FBS4), Audi/VW/Porsche (component protection, MQB platform), Jaguar/Land Rover (KVM), and more.' },
  { category: 'Vehicles', q: 'Can you handle classic and older cars?', a: 'Absolutely. We cut keys for older mechanical-only systems as well as 1990s–2000s transponder vehicles. Our cutting equipment covers virtually every keyway in service.' },

  // SCHEDULING
  { category: 'Scheduling', q: 'Are you available 24/7?', a: 'Our standard hours are 7 AM to 10 PM, seven days a week. After-hours emergency dispatch is available — call or text and we\'ll respond as fast as we can.' },
  { category: 'Scheduling', q: 'How fast can you arrive?', a: 'Within Fort Worth and the closest suburbs, expect 15–30 minutes. Mid-cities (Hurst, Bedford, Euless, Arlington) typically 25–45 minutes. Outer reach (Southlake, Trophy Club, Mansfield, Burleson) typically 35–55 minutes.' },
  { category: 'Scheduling', q: 'Do I need an appointment?', a: 'For non-emergencies, scheduling ahead by phone or text gets you a guaranteed window. For lockouts and key emergencies, just call — we dispatch the closest available unit immediately.' },

  // SERVICE AREA
  { category: 'Coverage', q: 'What cities do you serve?', a: 'Fort Worth, Arlington, Hurst, Euless, Bedford, North Richland Hills, Haltom City, Watauga, Keller, Southlake, Colleyville, Grapevine, Trophy Club, Roanoke, Westlake, Mansfield, Burleson, Crowley, Forest Hill, Kennedale, Pantego, Dalworthington Gardens, Benbrook, White Settlement, River Oaks, Sansom Park, Saginaw, Lake Worth, Azle, Aledo, Willow Park, Everman — basically every city within 25 miles of Fort Worth.' },
  { category: 'Coverage', q: 'Do you go outside the 25-mile radius?', a: 'For most jobs we stay within our 25-mile primary zone for fast response. For specialty work (rare European vehicles, complex programming) we sometimes travel further — call to discuss.' },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

function FAQSchemaJSONLD() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-question', '.faq-answer'],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [activeCat, setActiveCat] = useState<string>('All');

  const filtered = activeCat === 'All' ? faqs : faqs.filter((f) => f.category === activeCat);

  return (
    <>
      <FAQSchemaJSONLD />
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24 relative z-10">
          <div className="glow-line mb-5" />
          <span className="eyebrow">Knowledge Base</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mt-4 mb-5 leading-[1.05]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl">
            Everything you need to know about automotive locksmith service, pricing, scheduling, and what to expect when you call us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:8178421751" className="btn-primary">
              <Phone size={17} /> Call 817-842-1751
            </a>
            <a href="sms:8175869634" className="btn-secondary">
              <MessageSquare size={17} /> Text Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-base)]">
        <div className="max-w-4xl mx-auto px-5">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeCat === cat
                    ? 'bg-[var(--color-bronze)] text-white border-[var(--color-bronze)]'
                    : 'bg-transparent text-[var(--color-text-muted)] border-[var(--color-border-strong)] hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((f, i) => {
              const id = `${f.category}-${i}`;
              const isOpen = open === id;
              return (
                <div key={id} className="glass-card !p-0 overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : id)}
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-semibold text-[var(--color-text)] faq-question pr-4">{f.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-[var(--color-bronze)] flex-shrink-0 transition-transform mt-1 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4 faq-answer">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding section-charcoal text-center">
        <div className="max-w-2xl mx-auto px-5">
          <div className="glow-line mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Question Not Answered?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Call or text us — we&apos;re happy to walk through your specific vehicle and situation.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:8178421751" className="btn-primary">
              <Phone size={17} /> Call Now
            </a>
            <Link href="/contact" className="btn-gold">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  );
}
