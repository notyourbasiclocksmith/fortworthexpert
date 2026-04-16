import Link from 'next/link';
import { Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { FAQSchema, ServiceSchema } from '@/components/SchemaMarkup';

interface ServicePageProps {
  title: string;
  headline: string;
  subheadline: string;
  content: React.ReactNode;
  faqItems?: { question: string; answer: string }[];
  relatedServices?: { label: string; href: string }[];
  schemaDescription?: string;
}

export default function ServicePageTemplate({ title, headline, subheadline, content, faqItems, relatedServices, schemaDescription }: ServicePageProps) {
  return (
    <>
      {schemaDescription && <ServiceSchema name={title} description={schemaDescription} />}
      {faqItems && faqItems.length > 0 && <FAQSchema items={faqItems} />}

      {/* HERO */}
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="absolute top-10 left-[10%] w-60 h-60 rounded-full bg-gold/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center text-sm text-bronze hover:text-gold mb-4 transition-colors">← Back to Home</Link>
            <div className="glow-line mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] mb-5">{headline}</h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-7">{subheadline}</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:8178421751" className="btn-primary"><Phone size={16} /> Call 817-842-1751</a>
              <a href="sms:8175869634" className="btn-secondary"><MessageSquare size={16} /> Text Us</a>
              <Link href="/contact" className="btn-gold">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-offwhite">
        <div className="max-w-4xl mx-auto">
          <div className="prose-content">{content}</div>
        </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="glow-line mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-charcoal">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="glass-card p-6">
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{item.question}</h3>
                  <p className="text-charcoal-light leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section-padding bg-offwhite">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedServices.map((svc) => (
                <Link key={svc.href} href={svc.href} className="glass-card flex items-center justify-between p-4 group">
                  <span className="font-medium text-charcoal-light group-hover:text-bronze transition-colors">{svc.label}</span>
                  <ChevronRight size={18} className="text-gold" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="section-padding relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 via-beige to-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[200px]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Need Help With Your Vehicle?</h2>
          <p className="text-charcoal-light text-lg mb-8">Contact Fort Worth&apos;s trusted automotive locksmith experts. Same-day mobile service available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8178421751" className="btn-primary !py-3.5 !px-7">
              <Phone size={18} /> Call 817-842-1751
            </a>
            <a href="sms:8175869634" className="btn-gold !py-3.5 !px-7">
              <MessageSquare size={18} /> Text 817-586-9634
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
