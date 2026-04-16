import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageSquare, CheckCircle2, ChevronRight } from 'lucide-react';
import { serviceAreas } from '@/data/serviceAreas';
import { FAQSchema, ServiceSchema } from '@/components/SchemaMarkup';

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return { title: 'Area Not Found' };
  return { title: area.metaTitle, description: area.metaDescription };
}

const services = [
  'Car Key Replacement', 'Key Fob Programming', 'Smart Key Programming', 'All Keys Lost Solutions',
  'Ignition Repair', 'Module Programming', 'Immobilizer Diagnostics', 'Emergency Lockout Service',
];

const brandsList = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche', 'Jaguar', 'Land Rover',
  'Lexus', 'Toyota', 'Nissan', 'Infiniti', 'Ford', 'Chevrolet', 'GMC',
  'Cadillac', 'Dodge', 'Chrysler', 'Jeep', 'Honda', 'Acura',
];

const commonProblems = [
  'Lost all car keys with no spare',
  '"No Key Detected" or "Key Not Found" message on dashboard',
  'Key fob not unlocking or starting the vehicle',
  'Engine cranks but won\'t start (security/immobilizer light on)',
  'Key stuck in ignition or ignition won\'t turn',
  'Smart key working intermittently or only at very close range',
  'Theft deterrent / anti-theft system malfunction',
  'Key broken in ignition or door lock',
];

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const faqItems = [
    { question: `Do you offer same-day locksmith service in ${area.name}?`, answer: `Yes. We offer same-day mobile automotive locksmith service throughout ${area.name}, TX. Our technicians come to your location with all necessary equipment to handle key replacement, programming, and diagnostics on-site.` },
    { question: `How much does car key replacement cost in ${area.name}?`, answer: `Car key replacement in ${area.name} varies by vehicle. Transponder keys start around $150, smart keys $250-$600+, and European luxury keys $400-$800+. We provide exact upfront quotes before starting any work.` },
    { question: `Can you program car keys in ${area.name} without towing to a dealer?`, answer: `Absolutely. Our mobile service comes to your location in ${area.name} with dealer-level programming equipment. No towing needed — we handle everything on-site, usually in under an hour.` },
    { question: `What automotive brands do you service in ${area.name}?`, answer: `We service all major brands in ${area.name} including BMW, Mercedes, Audi, VW, Porsche, Jaguar, Land Rover, Toyota, Lexus, Nissan, Infiniti, Ford, Chevy, GMC, Cadillac, Dodge, Chrysler, Jeep, Honda, and Acura.` },
  ];

  return (
    <>
      <ServiceSchema name={`Automotive Locksmith ${area.name} TX`} description={`Mobile automotive locksmith services in ${area.name}, TX. Car key replacement, programming, and diagnostics.`} />
      <FAQSchema items={faqItems} />

      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="absolute top-10 left-[10%] w-60 h-60 rounded-full bg-gold/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <Link href="/service-areas" className="inline-flex items-center text-sm text-bronze hover:text-gold mb-4 transition-colors">← All Service Areas</Link>
            <div className="glow-line mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] mb-5">
              Automotive Locksmith in {area.name}, TX
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-7">{area.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:8178421751" className="btn-primary"><Phone size={16} /> Call 817-842-1751</a>
              <a href="sms:8175869634" className="btn-secondary"><MessageSquare size={16} /> Text Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Services Available in {area.name}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((svc) => (
                <div key={svc} className="flex items-center gap-3 glass-card !rounded-lg p-4">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span className="text-charcoal-light font-medium">{svc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Brands We Service in {area.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {brandsList.map((brand) => (
                <Link key={brand} href={`/brands/${brand.toLowerCase().replace(/[\s-]+/g, '-')}`} className="glass-card !rounded-lg p-3 text-center text-sm font-medium text-charcoal hover:text-bronze transition-all">
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Common Problems We Solve in {area.name}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {commonProblems.map((prob) => (
                <div key={prob} className="flex items-start gap-3 glass-card !rounded-lg p-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" style={{boxShadow:'0 0 6px rgba(197,165,90,0.5)'}} />
                  <span className="text-sm text-charcoal-light">{prob}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions — {area.name}</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="glass-card p-6">
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{item.question}</h3>
                  <p className="text-charcoal-light leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">Explore More Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Automotive Locksmith', href: '/automotive-locksmith-fort-worth' },
                { label: 'European Car Locksmith', href: '/european-car-locksmith-fort-worth' },
                { label: 'Module Programming', href: '/module-programming-fort-worth' },
                { label: 'Emergency Locksmith', href: '/emergency-locksmith-fort-worth' },
              ].map((svc) => (
                <Link key={svc.href} href={svc.href} className="glass-card flex items-center justify-between p-4 group">
                  <span className="font-medium text-charcoal-light group-hover:text-bronze transition-colors">{svc.label}</span>
                  <ChevronRight size={18} className="text-gold" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 via-beige to-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[200px]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Need a Locksmith in {area.name}?</h2>
          <p className="text-charcoal-light text-lg mb-8">Our mobile service comes to you in {area.name}. Same-day appointments available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8178421751" className="btn-primary !py-3.5 !px-7"><Phone size={18} /> Call 817-842-1751</a>
            <a href="sms:8175869634" className="btn-gold !py-3.5 !px-7"><MessageSquare size={18} /> Text 817-586-9634</a>
          </div>
        </div>
      </section>
    </>
  );
}
