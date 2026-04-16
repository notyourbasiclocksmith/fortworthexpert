import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { serviceAreas } from '@/data/serviceAreas';

export const metadata: Metadata = {
  title: 'Service Areas | Fort Worth & Surrounding Cities',
  description: 'Automotive locksmith serving Fort Worth, Arlington, North Richland Hills, Grapevine, Keller, Hurst, Bedford, Euless & more. Mobile service. Call 817-842-1751.',
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="absolute top-10 right-[15%] w-60 h-60 rounded-full bg-gold/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="glow-line mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] mb-5">Service Areas</h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-7">We provide mobile automotive locksmith services throughout the Fort Worth metropolitan area. Our technicians come to your location — home, office, or roadside.</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:8178421751" className="btn-primary"><Phone size={16} /> Call 817-842-1751</a>
              <a href="sms:8175869634" className="btn-secondary"><MessageSquare size={16} /> Text Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="group glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} className="text-bronze" />
                  <h2 className="font-serif text-xl font-semibold text-charcoal group-hover:text-bronze transition-colors">{area.name}, TX</h2>
                </div>
                <p className="text-sm text-charcoal-light leading-relaxed mb-3 line-clamp-3">{area.intro.slice(0, 150)}...</p>
                <span className="text-sm font-medium text-bronze group-hover:text-gold transition-colors">View Area Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto prose-content">
          <h2>Mobile Automotive Locksmith — We Come to You</h2>
          <p>Unlike traditional locksmiths with a physical shop, our service is entirely mobile. Our fully-equipped vehicles carry everything needed to handle any automotive locksmith situation — from key cutting machines and transponder programmers to dealer-level diagnostic computers.</p>
          <p>This means you never have to tow your vehicle anywhere. Whether you&apos;re at home in Fort Worth, at work in Arlington, or stranded in a parking lot in Grapevine, we come to your exact location and resolve the issue on-site.</p>

          <h2>Services Available in All Areas</h2>
          <ul>
            <li>Car key replacement and duplication</li>
            <li>Key fob and smart key programming</li>
            <li>All keys lost solutions</li>
            <li>Ignition repair and replacement</li>
            <li>Module programming (BCM, KVM, FEM, CAS)</li>
            <li>Immobilizer diagnostics</li>
            <li>Emergency lockout service</li>
            <li>European vehicle specialist service</li>
          </ul>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 via-beige to-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[200px]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Not Sure If We Cover Your Area?</h2>
          <p className="text-charcoal-light text-lg mb-8">Call us with your location and we&apos;ll confirm coverage and provide an estimated arrival time.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8178421751" className="btn-primary !py-3.5 !px-7"><Phone size={18} /> Call 817-842-1751</a>
            <a href="sms:8175869634" className="btn-gold !py-3.5 !px-7"><MessageSquare size={18} /> Text 817-586-9634</a>
          </div>
        </div>
      </section>
    </>
  );
}
