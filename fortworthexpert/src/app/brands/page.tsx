import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';
import { brands } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Brands We Service | All Makes & Models',
  description: 'We service all major automotive brands in Fort Worth. BMW, Mercedes, Audi, VW, Porsche, Jaguar, Land Rover, Toyota, Lexus, Ford, Chevy & more. Call 817-842-1751.',
};

const europeanBrands = ['bmw', 'mercedes-benz', 'audi', 'volkswagen', 'porsche', 'jaguar', 'land-rover'];
const japaneseBrands = ['lexus', 'toyota', 'nissan', 'infiniti', 'honda', 'acura'];
const domesticBrands = ['ford', 'chevrolet', 'gmc', 'cadillac', 'dodge', 'chrysler', 'jeep'];

function BrandCard({ brand }: { brand: typeof brands[0] }) {
  return (
    <Link href={`/brands/${brand.slug}`} className="group glass-card p-6">
      <h3 className="font-serif text-lg font-semibold text-charcoal mb-2 group-hover:text-bronze transition-colors">{brand.name}</h3>
      <p className="text-sm text-charcoal-light leading-relaxed mb-3 line-clamp-2">{brand.description.slice(0, 120)}...</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {brand.keyTypes.slice(0, 2).map((kt) => (
          <span key={kt} className="text-[11px] bg-beige/50 text-charcoal-light rounded px-2 py-0.5">{kt}</span>
        ))}
      </div>
      <span className="text-sm font-medium text-bronze group-hover:text-gold transition-colors">View Services →</span>
    </Link>
  );
}

export default function BrandsPage() {
  const european = brands.filter((b) => europeanBrands.includes(b.slug));
  const japanese = brands.filter((b) => japaneseBrands.includes(b.slug));
  const domestic = brands.filter((b) => domesticBrands.includes(b.slug));

  return (
    <>
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="absolute top-10 right-[20%] w-60 h-60 rounded-full bg-gold/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="glow-line mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] mb-5">Brands We Service</h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-7">Expert automotive locksmith services for all major vehicle brands. From European luxury to domestic trucks — we have the tools and expertise for every make.</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:8178421751" className="btn-primary"><Phone size={16} /> Call 817-842-1751</a>
              <a href="sms:8175869634" className="btn-secondary"><MessageSquare size={16} /> Text Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-2">European Brands</h2>
            <p className="text-charcoal-light mb-6">Our core specialty — advanced security systems, complex modules, and dealer-level programming.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {european.map((b) => <BrandCard key={b.slug} brand={b} />)}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-2">Japanese Brands</h2>
            <p className="text-charcoal-light mb-6">Reliable vehicles with increasingly sophisticated key systems — smart keys, proximity fobs, and intelligent entry.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {japanese.map((b) => <BrandCard key={b.slug} brand={b} />)}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-2">Domestic Brands</h2>
            <p className="text-charcoal-light mb-6">From PATS transponders to Fobik keys and theft deterrent systems — full coverage for American vehicles.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {domestic.map((b) => <BrandCard key={b.slug} brand={b} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 via-beige to-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[200px]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Don&apos;t See Your Vehicle?</h2>
          <p className="text-charcoal-light text-lg mb-8">We service many additional brands and models. Call us with your vehicle details.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8178421751" className="btn-primary !py-3.5 !px-7"><Phone size={18} /> Call 817-842-1751</a>
            <a href="sms:8175869634" className="btn-gold !py-3.5 !px-7"><MessageSquare size={18} /> Text 817-586-9634</a>
          </div>
        </div>
      </section>
    </>
  );
}
