import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageSquare, ChevronRight, AlertTriangle, Wrench, CheckCircle2, Search } from 'lucide-react';
import { advancedServices } from '@/data/advancedServices';
import { FAQSchema, ServiceSchema } from '@/components/SchemaMarkup';

export async function generateStaticParams() {
  return advancedServices.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = advancedServices.find((s) => s.slug === slug);
  if (!svc) return { title: 'Service Not Found' };
  return { title: svc.metaTitle, description: svc.metaDescription };
}

export default async function AdvancedServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = advancedServices.find((s) => s.slug === slug);
  if (!svc) notFound();

  const faqItems = svc.faq.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <>
      <ServiceSchema name={svc.title} description={svc.explanation.slice(0, 200)} />
      <FAQSchema items={faqItems} />

      {/* HERO */}
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="absolute top-10 left-[10%] w-60 h-60 rounded-full bg-gold/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <Link href="/automotive-locksmith-fort-worth" className="inline-flex items-center text-sm text-bronze hover:text-gold mb-4 transition-colors">← All Services</Link>
            <div className="glow-line mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] mb-5">{svc.heroHeadline}</h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-7">{svc.heroSub}</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:8178421751" className="btn-primary"><Phone size={16} /> Call 817-842-1751</a>
              <a href="sms:8175869634" className="btn-secondary"><MessageSquare size={16} /> Text Us</a>
              <Link href="/contact" className="btn-gold">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS / CAUSES / SOLUTIONS */}
      <section className="section-padding bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <h2 className="font-serif text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <AlertTriangle size={20} className="text-bronze" /> Symptoms
              </h2>
              <div className="space-y-2">
                {svc.symptoms.map((s) => (
                  <div key={s} className="flex items-start gap-3 glass-card !rounded-lg p-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" style={{boxShadow:'0 0 6px rgba(197,165,90,0.5)'}} />
                    <span className="text-sm text-charcoal-light">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Search size={20} className="text-gold" /> Common Causes
              </h2>
              <div className="space-y-2">
                {svc.causes.map((c) => (
                  <div key={c} className="flex items-start gap-3 glass-card !rounded-lg p-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-2 shrink-0" />
                    <span className="text-sm text-charcoal-light">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <Wrench size={20} className="text-bronze" /> Our Solutions
              </h2>
              <div className="space-y-2">
                {svc.solutions.map((sol) => (
                  <div key={sol} className="flex items-start gap-3 glass-card !rounded-lg p-3">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-charcoal-light">{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SERVICE EXPLANATION */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glow-line mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-6">How We Resolve This Issue</h2>
            <div className="prose-content">
              {svc.explanation.split('\n').filter(Boolean).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* INLINE CTA */}
          <div className="glass-card p-8 md:p-10 text-center mb-16" style={{background:'linear-gradient(135deg, rgba(197,165,90,0.08), rgba(139,105,20,0.04))'}}>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">Experiencing These Symptoms?</h2>
            <p className="text-charcoal-light mb-6">Don&apos;t wait — contact our specialists for a fast diagnosis and upfront quote.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:8178421751" className="btn-primary"><Phone size={16} /> Call 817-842-1751</a>
              <a href="sms:8175869634" className="btn-secondary"><MessageSquare size={16} /> Text 817-586-9634</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {svc.faq.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="glow-line mx-auto mb-4" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {svc.faq.map((item, i) => (
                <div key={i} className="glass-card p-6">
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{item.q}</h3>
                  <p className="text-charcoal-light leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED LINKS */}
      {svc.relatedLinks.length > 0 && (
        <section className="section-padding bg-offwhite">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {svc.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="glass-card flex items-center justify-between p-4 group">
                  <span className="font-medium text-charcoal-light group-hover:text-bronze transition-colors">{link.label}</span>
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
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Ready to Get This Resolved?</h2>
          <p className="text-charcoal-light text-lg mb-8">Contact Fort Worth&apos;s automotive locksmith experts. Same-day mobile service available.</p>
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
