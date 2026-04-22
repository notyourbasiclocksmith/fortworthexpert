import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageSquare, CheckCircle2, Info, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Key Replacement Pricing Fort Worth | Transparent Quotes',
  description: 'Honest, upfront automotive locksmith pricing in Fort Worth. Car key replacement from $150, smart key programming from $250, ignition repair from $180. Free phone quotes.',
  alternates: { canonical: 'https://fortworthlocksmithexperts.com/pricing' },
};

interface PriceItem {
  service: string;
  priceFrom: number;
  priceTo?: number;
  unit?: string;
  notes: string;
  category: 'Basic' | 'Programming' | 'Advanced' | 'Emergency';
}

const pricing: PriceItem[] = [
  // BASIC
  { service: 'Car Lockout / Door Unlock', priceFrom: 65, priceTo: 95, notes: 'Damage-free entry. Most cars in under 10 minutes on-site.', category: 'Basic' },
  { service: 'Key Duplication (non-transponder)', priceFrom: 25, priceTo: 60, notes: 'Older mechanical keys cut by code or original.', category: 'Basic' },
  { service: 'Key Fob Battery Replacement', priceFrom: 15, priceTo: 35, notes: 'CR2032 / CR2025 batteries, on-site swap.', category: 'Basic' },

  // PROGRAMMING
  { service: 'Transponder Key Replacement', priceFrom: 150, priceTo: 250, notes: 'Includes cut key + chip programming. 2000s–early 2010s vehicles.', category: 'Programming' },
  { service: 'Remote Head Key Programming', priceFrom: 175, priceTo: 300, notes: 'Flip keys and combo keys with integrated remote.', category: 'Programming' },
  { service: 'Smart / Proximity Key (Push-to-Start)', priceFrom: 250, priceTo: 600, notes: 'Modern keyless smart keys. Price varies by make/model.', category: 'Programming' },
  { service: 'Spare Key (with original)', priceFrom: 125, priceTo: 350, notes: 'Faster and cheaper when an original key is available.', category: 'Programming' },
  { service: 'All Keys Lost (no original)', priceFrom: 250, priceTo: 750, notes: 'We extract security data from the vehicle and program from scratch.', category: 'Programming' },

  // ADVANCED
  { service: 'Ignition Cylinder Repair / Replace', priceFrom: 180, priceTo: 450, notes: 'Mechanical ignition rebuilds and electronic ignition swaps.', category: 'Advanced' },
  { service: 'Module Programming (BCM, KVM, FEM, CAS)', priceFrom: 250, priceTo: 800, notes: 'Diagnostics + reprogramming or replacement.', category: 'Advanced' },
  { service: 'Immobilizer Diagnostics & Repair', priceFrom: 150, priceTo: 600, notes: 'Full scan, fault isolation, and on-site repair.', category: 'Advanced' },
  { service: 'European Specialty (BMW EWS/CAS, MB EZS/ESL)', priceFrom: 350, priceTo: 1200, notes: 'BMW FEM/CAS coding, Mercedes EZS/ESL, Audi/VW component protection.', category: 'Advanced' },

  // EMERGENCY
  { service: 'After-Hours / Weekend Emergency', priceFrom: 95, priceTo: 175, unit: 'service call', notes: 'Added to base service price for nights, weekends, holidays.', category: 'Emergency' },
];

const categoryOrder: PriceItem['category'][] = ['Basic', 'Programming', 'Advanced', 'Emergency'];
const categoryDesc: Record<PriceItem['category'], string> = {
  Basic: 'Everyday locksmith services for any vehicle.',
  Programming: 'Key cutting, transponder coding, and smart-key generation.',
  Advanced: 'Module-level repair, diagnostics, and luxury vehicle specialty work.',
  Emergency: 'After-hours and weekend response surcharges.',
};

function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Fort Worth Expert Automotive Locksmith — Service Pricing',
    itemListElement: pricing.map((p) => ({
      '@type': 'Offer',
      name: p.service,
      description: p.notes,
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: p.priceFrom,
        maxPrice: p.priceTo ?? p.priceFrom,
      },
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'City', name: 'Fort Worth', addressRegion: 'TX' },
      seller: {
        '@type': 'Locksmith',
        name: 'Fort Worth Expert Automotive Locksmith',
        telephone: '817-842-1751',
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function PricingPage() {
  const formatPrice = (p: PriceItem) => p.priceTo ? `$${p.priceFrom}–$${p.priceTo}` : `$${p.priceFrom}+`;

  return (
    <>
      <PricingSchema />
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24 relative z-10">
          <div className="glow-line mb-5" />
          <span className="eyebrow">Transparent Pricing</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mt-4 mb-5 leading-[1.05]">
            Honest <span className="gradient-text">Upfront Pricing</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl">
            We give every customer an exact quote by phone or text before any work begins. No hidden fees. No bait-and-switch. The number we quote is the number you pay.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:8178421751" className="btn-primary">
              <Phone size={17} /> Get Free Quote — 817-842-1751
            </a>
            <a href="sms:8175869634" className="btn-secondary">
              <MessageSquare size={17} /> Text Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-base)]">
        <div className="max-w-5xl mx-auto px-5">
          {categoryOrder.map((cat) => (
            <div key={cat} className="mb-14 last:mb-0">
              <div className="mb-6">
                <span className="eyebrow">{cat}</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-3 mb-2">{cat} Services</h2>
                <p className="text-[var(--color-text-muted)] text-sm">{categoryDesc[cat]}</p>
              </div>
              <div className="grid gap-3">
                {pricing.filter((p) => p.category === cat).map((p) => (
                  <div key={p.service} className="panel-dark p-5 md:p-6 grid md:grid-cols-[1fr_auto] gap-4 md:items-center">
                    <div>
                      <h3 className="font-serif font-semibold text-[var(--color-text)] mb-1">{p.service}</h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{p.notes}</p>
                    </div>
                    <div className="md:text-right">
                      <div className="font-serif text-2xl font-bold text-[var(--color-bronze)]">{formatPrice(p)}</div>
                      {p.unit && <div className="text-xs text-[var(--color-text-dim)] mt-1">{p.unit}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="panel-dark p-6 md:p-8 mt-12 flex gap-4 items-start">
            <Info size={22} className="text-[var(--color-bronze)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-[var(--color-text)] mb-2">Why prices vary</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                Final pricing depends on year, make, model, key type, and whether an original key is available. Luxury and European vehicles (BMW, Mercedes, Audi, Porsche, Land Rover) typically sit at the higher end due to specialized programming requirements and OEM key costs.
              </p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">Every job includes:</strong> on-site mobile service, OEM-grade equipment, 90-day workmanship warranty, and zero damage to your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-charcoal text-center">
        <div className="max-w-2xl mx-auto px-5">
          <div className="glow-line mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Ready for an Exact Quote?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Tell us your year, make, model, and situation. We&apos;ll give you a firm price in 60 seconds.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:8178421751" className="btn-primary">
              <Phone size={17} /> Call 817-842-1751
            </a>
            <Link href="/contact" className="btn-gold">Send a Message <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
