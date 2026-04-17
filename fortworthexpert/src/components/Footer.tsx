import Link from 'next/link';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

const serviceLinks = [
  { label: 'Automotive Locksmith', href: '/automotive-locksmith-fort-worth' },
  { label: 'Lost Car Keys', href: '/lost-car-keys-fort-worth' },
  { label: 'Car Key Replacement', href: '/car-key-replacement-fort-worth' },
  { label: 'Key Fob Programming', href: '/key-fob-programming-fort-worth' },
  { label: 'Ignition Repair', href: '/ignition-repair-fort-worth' },
  { label: 'European Car Locksmith', href: '/european-car-locksmith-fort-worth' },
  { label: 'Module Programming', href: '/module-programming-fort-worth' },
  { label: 'No Key Detected / Immobilizer', href: '/no-key-detected-immobilizer-fort-worth' },
  { label: 'Emergency Locksmith', href: '/emergency-locksmith-fort-worth' },
];

const brandLinks = [
  { label: 'BMW', href: '/brands/bmw' },
  { label: 'Mercedes-Benz', href: '/brands/mercedes-benz' },
  { label: 'Audi', href: '/brands/audi' },
  { label: 'Jaguar', href: '/brands/jaguar' },
  { label: 'Land Rover', href: '/brands/land-rover' },
  { label: 'Lexus', href: '/brands/lexus' },
  { label: 'Toyota', href: '/brands/toyota' },
  { label: 'Ford', href: '/brands/ford' },
  { label: 'Chevrolet', href: '/brands/chevrolet' },
  { label: 'Honda', href: '/brands/honda' },
];

const areaLinks = [
  { label: 'Fort Worth', href: '/service-areas/fort-worth' },
  { label: 'Arlington', href: '/service-areas/arlington' },
  { label: 'North Richland Hills', href: '/service-areas/north-richland-hills' },
  { label: 'Grapevine', href: '/service-areas/grapevine' },
  { label: 'Keller', href: '/service-areas/keller' },
  { label: 'Hurst', href: '/service-areas/hurst' },
];

export default function Footer() {
  return (
    <footer className="bg-elevated border-t border-border text-text-muted relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-1">Fort Worth Expert</h3>
            <p className="text-xs tracking-[0.15em] uppercase text-gold mb-4">Automotive Locksmith</p>
            <p className="text-sm leading-relaxed mb-6 text-white/50">
              Advanced car key programming, immobilizer diagnostics, and mobile locksmith services throughout Fort Worth and surrounding areas.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:8178421751" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={15} className="text-gold" /> 817-842-1751
              </a>
              <a href="sms:8175869634" className="flex items-center gap-2 hover:text-gold transition-colors">
                <MessageSquare size={15} className="text-gold-light" /> Text: 817-586-9634
              </a>
              <div className="flex items-center gap-2 text-white/50">
                <MapPin size={15} className="text-gold" /> Fort Worth, TX & Surrounding Areas
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Clock size={15} className="text-gold" /> Available 7 Days a Week
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Brands We Service</h4>
            <ul className="space-y-2">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/service-areas" className="text-sm text-gold hover:text-gold-light transition-colors">
                View All Service Areas →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Fort Worth Expert Automotive Locksmith. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="text-xs text-white/40 hover:text-gold transition-colors">Contact</Link>
              <Link href="/service-areas" className="text-xs text-white/40 hover:text-gold transition-colors">Service Areas</Link>
              <Link href="/brands" className="text-xs text-white/40 hover:text-gold transition-colors">Brands</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
