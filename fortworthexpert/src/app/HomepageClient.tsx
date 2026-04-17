'use client';

import Link from 'next/link';
import { Phone, MessageSquare, ChevronRight, Car, Key, Settings, Zap, Shield, MapPin, Cpu, Radio, AlertTriangle, CheckCircle2, Wrench, Clock, Activity, Lock } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations';

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
  { label: 'Mobile Service', desc: 'We come to you' },
  { label: 'Same-Day', desc: 'Fast response' },
  { label: 'Dealer-Level', desc: 'OEM-grade tools' },
  { label: 'All Keys Lost', desc: 'Start from zero' },
];

const diagnostics = [
  { icon: Shield, label: 'Immobilizer Systems', desc: 'Authenticate the key with the vehicle anti-theft module before engine start.', status: 'ACTIVE' },
  { icon: Radio, label: 'ECU Communication', desc: 'Decode and repair CAN-bus faults preventing key verification between modules.', status: 'ONLINE' },
  { icon: Key, label: 'No Key Detected', desc: 'Restore smart-key antennas, keyless modules, and proximity authentication.', status: 'READY' },
  { icon: Cpu, label: 'Module Failures', desc: 'Rebuild, reflash or replace BCM, KVM, FEM, CAS units that disable security.', status: 'MONITORED' },
];

const whyUs = [
  { icon: Activity, label: 'Precision Diagnostics', desc: 'Factory-level scan tools — no guesswork, no parts-cannon repairs.' },
  { icon: Shield, label: 'Trusted Experts', desc: 'Years focused exclusively on automotive security and access.' },
  { icon: Car, label: 'Mobile Convenience', desc: 'Driveway, parking lot, or roadside — we come equipped.' },
  { icon: Wrench, label: 'High-End Tools', desc: 'Same OEM programming equipment as franchise dealerships.' },
  { icon: CheckCircle2, label: 'Transparent Pricing', desc: 'Upfront quotes by phone or text. No hidden fees, ever.' },
  { icon: Clock, label: '7 Days a Week', desc: 'Available for emergencies when you need us most.' },
];

export default function HomepageClient({ faqItems }: { faqItems: { question: string; answer: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="hero-gradient grid-bg relative overflow-hidden flex items-center min-h-[calc(100vh-104px)]">
        {/* Ambient glow layers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold/[0.06] blur-[220px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-[15%] left-[20%] w-[340px] h-[340px] rounded-full bg-gold/8 blur-[130px] pointer-events-none animate-float" />
        <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-gold/5 blur-[110px] pointer-events-none animate-float-delayed" />

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* LEFT — copy */}
            <div className="max-w-xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2.5 mb-5"
              >
                <span className="status-dot" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-bright">Fort Worth TX — Mobile Service Available Now</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-serif font-bold tracking-tight text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[1.04] mb-6"
              >
                Advanced Car Key Programming
                <br />
                <span className="gradient-text">& Automotive Locksmith</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base md:text-lg text-text-muted leading-relaxed mb-8 max-w-[560px]"
              >
                Dealer-level diagnostics, immobilizer repair, key replacement, and same-day mobile service for modern vehicles in Fort Worth, TX.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <a href="tel:8178421751" className="btn-primary"><Phone size={17} /> Call Now</a>
                <a href="sms:8175869634" className="btn-secondary"><MessageSquare size={17} /> Text Us</a>
                <Link href="/contact" className="btn-gold">Get a Quote</Link>
              </motion.div>
              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
              >
                {trust.map((t) => (
                  <div key={t.label} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-border bg-white/[0.02] hover:border-gold/30 transition-colors">
                    <CheckCircle2 size={14} className="text-gold-bright shrink-0" />
                    <div className="text-[12px] font-medium text-text leading-tight">{t.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — diagnostic visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative lg:pl-4"
            >
              {/* Decorative glow behind panel */}
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-gold/10 via-transparent to-gold/5 blur-2xl pointer-events-none" />
              <div className="panel-dark scan-line grid-fine p-6 md:p-7 relative max-w-[520px] mx-auto lg:mx-0 lg:ml-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <Activity size={16} className="text-gold-bright" />
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted">Diagnostic Session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="status-dot" />
                    <span className="text-[10px] font-mono text-text-dim">LIVE</span>
                  </div>
                </div>
                {/* Session info */}
                <div className="font-mono text-[11px] text-text-dim mb-5 leading-relaxed space-y-1">
                  <div className="flex justify-between"><span>VEHICLE.ID</span><span className="text-text-muted">█████-AUTH</span></div>
                  <div className="flex justify-between"><span>PROTOCOL</span><span className="text-text-muted">CAN / UDS</span></div>
                  <div className="flex justify-between"><span>SESSION</span><span className="text-gold-bright">SECURE</span></div>
                </div>
                {/* Module statuses */}
                <div className="space-y-2.5 mb-5">
                  {[
                    { k: 'Immobilizer Module', v: 'OK', icon: Shield },
                    { k: 'Key Authentication', v: 'OK', icon: Key },
                    { k: 'ECU Communication', v: 'OK', icon: Radio },
                    { k: 'Programming', v: 'READY', icon: Zap },
                  ].map((row, i) => (
                    <motion.div
                      key={row.k}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-border"
                    >
                      <div className="w-8 h-8 rounded-md bg-gold-subtle border border-gold/20 flex items-center justify-center shrink-0">
                        <row.icon size={14} className="text-gold-bright" />
                      </div>
                      <span className="text-sm text-text flex-1">{row.k}</span>
                      <span className="font-mono text-[10px] font-bold text-[#34D399] px-2 py-0.5 rounded bg-[#34D399]/10 border border-[#34D399]/20">{row.v}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Signal bars */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-dim">Signal Strength</span>
                    <span className="text-[10px] font-mono text-gold-bright">98%</span>
                  </div>
                  <div className="flex items-end justify-between gap-1 h-9">
                    {[0.3, 0.6, 0.45, 0.8, 0.55, 0.9, 0.7, 1, 0.85, 0.6, 0.75, 0.5, 0.9, 0.65, 0.4, 0.7, 0.85].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: h }}
                        transition={{ duration: 0.5, delay: 1.3 + i * 0.03, ease: 'easeOut' }}
                        className="flex-1 bg-gradient-to-t from-gold-deep to-gold-bright rounded-sm origin-bottom"
                        style={{ height: '100%' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="section-padding bg-elevated relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/4 blur-[200px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-14">
            <div className="eyebrow justify-center mb-4">Services</div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text mb-4 leading-tight">
              Everything Modern Vehicles <br className="hidden md:block"/>
              <span className="gradient-text">Demand From a Locksmith</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">From key replacement to module programming — dealer-grade solutions at your doorstep.</p>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {services.map(({ label, href, icon: Icon, desc }) => (
              <StaggerItem key={href}>
                <Link href={href} className="glass-card group flex flex-col gap-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-gold-subtle border border-gold/20 flex items-center justify-center">
                    <Icon size={20} className="text-gold-bright" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-text mb-1.5 group-hover:text-gold-bright transition-colors">{label}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gold tracking-wide uppercase">
                    Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-12">
            <Link href="/automotive-locksmith-fort-worth" className="btn-gold">View All Services <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ════════ PROBLEM → SOLUTION BAND ════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-base via-elevated to-base" />
        <div className="absolute inset-0 grid-fine opacity-30" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border">
            <ScrollReveal direction="right" className="p-8 md:p-10 bg-base/60 backdrop-blur-sm border-r border-border">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={18} className="text-[#F87171]" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#F87171]">The Problem</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-text mb-4">Dealerships Take Days. Tow Bills Stack Up.</h3>
              <p className="text-text-muted leading-relaxed mb-4">Lost your keys? Immobilizer light on? Most shops either can&apos;t program modern smart keys at all, or make you wait a week for a dealer appointment — after a costly tow.</p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2"><span className="text-[#F87171] mt-1">✕</span> 3–7 day dealer wait times</li>
                <li className="flex items-start gap-2"><span className="text-[#F87171] mt-1">✕</span> $150–$400 tow bill before you even start</li>
                <li className="flex items-start gap-2"><span className="text-[#F87171] mt-1">✕</span> Generic locksmiths who can&apos;t program smart keys</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left" className="p-8 md:p-10 bg-gradient-to-br from-gold-subtle via-elevated to-base">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={18} className="text-gold-bright" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-bright">Our Solution</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-text mb-4">Mobile. Same-Day. Dealer-Grade.</h3>
              <p className="text-text-muted leading-relaxed mb-4">We bring OEM programming equipment to your location and handle everything on-site — from cutting blanks to writing keys into the vehicle&apos;s security module.</p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-gold-bright mt-1 shrink-0" /> Same-day response throughout Fort Worth</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-gold-bright mt-1 shrink-0" /> No tow — we come to your vehicle</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-gold-bright mt-1 shrink-0" /> Upfront pricing, transparent quotes</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ ADVANCED DIAGNOSTICS ════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-fine opacity-40 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[200px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-14">
            <ScrollReveal direction="right" className="lg:col-span-5">
              <div className="eyebrow mb-4">Advanced Diagnostics</div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text mb-5 leading-tight">
                Dealer-Level Diagnostics <br/>
                <span className="gradient-text">Without Dealer Pricing</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">Modern vehicles are rolling computers. When your car won&apos;t start, the problem isn&apos;t always the key — it could be a failed module, corrupted firmware, or broken communication between security components.</p>
              <p className="text-text-dim leading-relaxed mb-7">We specialize in diagnosing and repairing the complex vehicle security issues that other locksmiths can&apos;t touch.</p>
              <a href="tel:8178421751" className="btn-gold"><Phone size={16} /> Call for Diagnostics</a>
            </ScrollReveal>
            <StaggerContainer className="lg:col-span-7 grid sm:grid-cols-2 gap-4" staggerDelay={0.12}>
              {diagnostics.map(({ icon: Icon, label, desc, status }) => (
                <StaggerItem key={label}>
                  <div className="panel-dark p-5 md:p-6 h-full group hover:border-gold/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-subtle border border-gold/20 flex items-center justify-center">
                        <Icon size={18} className="text-gold-bright" />
                      </div>
                      <span className="font-mono text-[9px] font-bold tracking-wider text-[#34D399] px-2 py-1 rounded bg-[#34D399]/10 border border-[#34D399]/20">{status}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-text mb-2 group-hover:text-gold-bright transition-colors">{label}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE US ════════ */}
      <section className="section-padding bg-elevated relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/4 blur-[180px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-14">
            <div className="eyebrow justify-center mb-4">Why Fort Worth Trusts Us</div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text leading-tight">
              Technical Precision. <span className="gradient-text">Mobile Convenience.</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {whyUs.map(({ icon: Icon, label, desc }) => (
              <StaggerItem key={label}>
                <div className="glass-card flex gap-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-gold-subtle border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-gold-bright" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-text mb-1.5">{label}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════ BRANDS ════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-gold/4 blur-[180px] -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <div className="eyebrow justify-center mb-4">Vehicles We Service</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-3">European, Japanese & Domestic</h2>
            <p className="text-text-muted max-w-xl mx-auto">Expert programming for every major brand on the road today.</p>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3" staggerDelay={0.03}>
            {brands.map((brand) => (
              <StaggerItem key={brand}>
                <Link
                  href={`/brands/${brand.toLowerCase().replace(/[\s-]+/g, '-')}`}
                  className="panel-dark p-4 text-center block group hover:border-gold/30 transition-all"
                >
                  <span className="text-sm font-semibold text-text-muted group-hover:text-gold-bright transition-colors">{brand}</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-10">
            <Link href="/brands" className="btn-gold">Browse by Brand <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="section-padding bg-elevated relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gold/4 blur-[200px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-10">
            <div className="eyebrow justify-center mb-4">FAQ</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card !p-0 overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-serif text-base md:text-lg font-semibold text-text">{item.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronRight size={18} className="text-gold-bright" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-text-muted leading-relaxed border-t border-border pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SERVICE AREAS ════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="eyebrow justify-center mb-4">Service Areas</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">Serving Fort Worth & Surrounding Areas</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">100% mobile service throughout the Fort Worth–Dallas metroplex.</p>
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap justify-center gap-2.5 mb-10" staggerDelay={0.03}>
            {['Fort Worth', 'Arlington', 'North Richland Hills', 'Grapevine', 'Keller', 'Hurst', 'Bedford', 'Euless', 'Southlake', 'Colleyville'].map((city) => (
              <StaggerItem key={city}>
                <Link href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-panel text-sm text-text-muted hover:border-gold/40 hover:text-gold-bright transition-all">
                  <MapPin size={12} className="text-gold" /> {city}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Link href="/service-areas" className="btn-gold">View All Service Areas <ChevronRight size={16} /></Link>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="relative overflow-hidden py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-base via-elevated to-base" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold/10 blur-[220px] pointer-events-none animate-pulse-glow" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="glow-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-text mb-5 leading-[1.05]">
              Stranded? <span className="gradient-text">Let&apos;s Get You Moving.</span>
            </h2>
            <p className="text-text-muted text-lg md:text-xl mb-10 max-w-xl mx-auto">Same-day mobile locksmith service across Fort Worth. Call or text — we respond fast.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.a
                href="tel:8178421751"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-base !py-4 !px-8"
              >
                <Phone size={20} /> Call 817-842-1751
              </motion.a>
              <motion.a
                href="sms:8175869634"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold text-base !py-4 !px-8"
              >
                <MessageSquare size={20} /> Text 817-586-9634
              </motion.a>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-text-dim">
              <Lock size={14} className="text-gold" /> Licensed & insured — Fort Worth, TX
            </div>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
}
