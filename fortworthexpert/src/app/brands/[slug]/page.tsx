import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageSquare, ChevronRight, CheckCircle2, AlertTriangle, Wrench, Settings } from 'lucide-react';
import { brands } from '@/data/brands';
import { ServiceSchema } from '@/components/SchemaMarkup';

export async function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return { title: 'Brand Not Found' };
  return { title: brand.metaTitle, description: brand.metaDescription };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();

  return (
    <>
      <ServiceSchema name={`${brand.name} Locksmith Fort Worth`} description={brand.description} />

      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="absolute top-10 left-[10%] w-60 h-60 rounded-full bg-gold/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <Link href="/brands" className="inline-flex items-center text-sm text-bronze hover:text-gold mb-4 transition-colors">← All Brands</Link>
            <div className="glow-line mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] mb-5">
              {brand.name} Locksmith Services in Fort Worth, TX
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-7">{brand.description}</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:8178421751" className="btn-primary"><Phone size={16} /> Call 817-842-1751</a>
              <a href="sms:8175869634" className="btn-secondary"><MessageSquare size={16} /> Text Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-4 flex items-center gap-2"><Settings size={22} className="text-bronze" /> Key Types</h2>
              <div className="space-y-2">
                {brand.keyTypes.map((kt) => (
                  <div key={kt} className="flex items-center gap-3 glass-card !rounded-lg p-3">
                    <CheckCircle2 size={16} className="text-gold shrink-0" />
                    <span className="text-sm text-charcoal-light">{kt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-4 flex items-center gap-2"><Settings size={22} className="text-gold" /> Security Modules</h2>
              <div className="space-y-2">
                {brand.modules.map((mod) => (
                  <div key={mod} className="flex items-center gap-3 glass-card !rounded-lg p-3">
                    <CheckCircle2 size={16} className="text-bronze shrink-0" />
                    <span className="text-sm text-charcoal-light">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6 flex items-center gap-2"><AlertTriangle size={22} className="text-bronze" /> Common {brand.name} Problems</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {brand.commonProblems.map((prob) => (
                <div key={prob} className="glass-card p-4">
                  <p className="text-sm text-charcoal-light">{prob}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Symptoms You May Notice</h2>
            <div className="glass-card p-6">
              <ul className="space-y-3">
                {brand.symptoms.map((sym) => (
                  <li key={sym} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" style={{boxShadow:'0 0 6px rgba(197,165,90,0.5)'}} />
                    <span className="text-charcoal-light">{sym}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6 flex items-center gap-2"><Wrench size={22} className="text-bronze" /> Our {brand.name} Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {brand.services.map((svc) => (
                <div key={svc} className="flex items-center gap-3 glass-card !rounded-lg p-4">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span className="text-charcoal-light font-medium">{svc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/car-key-replacement-fort-worth" className="glass-card flex items-center justify-between p-4 group">
                <span className="font-medium text-charcoal-light group-hover:text-bronze transition-colors">Car Key Replacement</span>
                <ChevronRight size={18} className="text-gold" />
              </Link>
              <Link href="/key-fob-programming-fort-worth" className="glass-card flex items-center justify-between p-4 group">
                <span className="font-medium text-charcoal-light group-hover:text-bronze transition-colors">Key Fob Programming</span>
                <ChevronRight size={18} className="text-gold" />
              </Link>
              <Link href="/module-programming-fort-worth" className="glass-card flex items-center justify-between p-4 group">
                <span className="font-medium text-charcoal-light group-hover:text-bronze transition-colors">Module Programming</span>
                <ChevronRight size={18} className="text-gold" />
              </Link>
              <Link href="/lost-car-keys-fort-worth" className="glass-card flex items-center justify-between p-4 group">
                <span className="font-medium text-charcoal-light group-hover:text-bronze transition-colors">All Keys Lost Service</span>
                <ChevronRight size={18} className="text-gold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 via-beige to-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[200px]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Need {brand.name} Key Service in Fort Worth?</h2>
          <p className="text-charcoal-light text-lg mb-8">Our mobile technicians bring dealer-level {brand.name} expertise directly to your location.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8178421751" className="btn-primary !py-3.5 !px-7"><Phone size={18} /> Call 817-842-1751</a>
            <a href="sms:8175869634" className="btn-gold !py-3.5 !px-7"><MessageSquare size={18} /> Text 817-586-9634</a>
          </div>
        </div>
      </section>
    </>
  );
}
