import type { Metadata } from 'next';
import { Phone, MessageSquare, MapPin, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote',
  description: 'Contact Fort Worth Expert Automotive Locksmith. Call 817-842-1751, text 817-586-9634, or request a free quote. Same-day mobile service in Fort Worth TX.',
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="absolute top-10 right-[15%] w-60 h-60 rounded-full bg-gold/10 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="glow-line mb-5" />
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] mb-5">Contact Us</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Get in touch with Fort Worth&apos;s trusted automotive locksmith. We respond quickly and provide upfront quotes for all services.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-bronze" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Call Us</h3>
                    <a href="tel:8178421751" className="text-lg font-semibold text-bronze hover:text-gold transition-colors">817-842-1751</a>
                    <p className="text-sm text-charcoal-light mt-1">Best for urgent needs and immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <MessageSquare size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Text Us</h3>
                    <a href="sms:8175869634" className="text-lg font-semibold text-bronze hover:text-gold transition-colors">817-586-9634</a>
                    <p className="text-sm text-charcoal-light mt-1">Great for quotes, photos of your key, and non-urgent questions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-bronze" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Service Area</h3>
                    <p className="text-charcoal-light">Fort Worth, TX & Surrounding Areas</p>
                    <p className="text-sm text-charcoal-light mt-1">100% mobile service — we come to your location</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Hours</h3>
                    <p className="text-charcoal-light">Available 7 Days a Week</p>
                    <p className="text-sm text-charcoal-light mt-1">Same-day service for most requests</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">What to Have Ready When You Call</h3>
                <ul className="space-y-2 text-sm text-charcoal-light">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> Your vehicle&apos;s year, make, and model</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> VIN (Vehicle Identification Number) if available</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> Description of the issue (lost keys, no start, key fob not working, etc.)</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> Whether you have any working keys</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> Your vehicle&apos;s location</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Request a Quote</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-beige rounded-xl bg-white text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-bronze transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-beige rounded-xl bg-white text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-bronze transition-colors" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-charcoal mb-1.5">Vehicle (Year, Make, Model)</label>
                  <input type="text" id="vehicle" name="vehicle" className="w-full px-4 py-3 border border-beige rounded-xl bg-white text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-bronze transition-colors" placeholder="e.g. 2020 BMW X5" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">Service Needed</label>
                  <select id="service" name="service" className="w-full px-4 py-3 border border-beige rounded-xl bg-white text-charcoal focus:outline-none focus:border-bronze transition-colors">
                    <option value="">Select a service...</option>
                    <option value="key-replacement">Car Key Replacement</option>
                    <option value="all-keys-lost">All Keys Lost</option>
                    <option value="key-fob-programming">Key Fob Programming</option>
                    <option value="ignition-repair">Ignition Repair</option>
                    <option value="module-programming">Module Programming</option>
                    <option value="no-key-detected">No Key Detected / Immobilizer</option>
                    <option value="emergency-lockout">Emergency Lockout</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Details</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-beige rounded-xl bg-white text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-bronze transition-colors resize-none" placeholder="Describe your situation..." />
                </div>
                <button type="submit" className="btn-primary w-full text-center">
                  <Mail size={18} /> Send Quote Request
                </button>
                <p className="text-xs text-charcoal-light text-center">For fastest service, call <a href="tel:8178421751" className="text-bronze font-semibold">817-842-1751</a> or text <a href="sms:8175869634" className="text-bronze font-semibold">817-586-9634</a></p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-bronze/10 via-beige to-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[200px]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Prefer to Call or Text?</h2>
          <p className="text-charcoal-light text-lg mb-8">Most customers find it fastest to call or text us directly. We respond quickly and provide quotes immediately.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8178421751" className="btn-primary !py-3.5 !px-7"><Phone size={18} /> Call 817-842-1751</a>
            <a href="sms:8175869634" className="btn-gold !py-3.5 !px-7"><MessageSquare size={18} /> Text 817-586-9634</a>
          </div>
        </div>
      </section>
    </>
  );
}
