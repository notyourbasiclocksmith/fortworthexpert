import type { Metadata } from 'next';
import Link from 'next/link';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Car Key Replacement Fort Worth | Same-Day Mobile Service',
  description: 'Car key replacement in Fort Worth TX. Transponder keys, smart keys, key fobs cut and programmed on-site. All makes and models. Call 817-842-1751.',
};

const faqItems = [
  { question: 'How much does car key replacement cost in Fort Worth?', answer: 'Car key replacement costs depend on your vehicle. Basic transponder keys start around $150, smart/proximity keys range from $250-$600+, and European luxury vehicle keys can be $400-$800+. We provide exact quotes upfront.' },
  { question: 'Can you replace a car key the same day?', answer: 'Yes. We offer same-day car key replacement throughout Fort Worth. Most keys are cut and programmed on-site in 30-90 minutes.' },
  { question: 'Do you replace key fobs too?', answer: 'Yes. We supply and program key fobs, smart keys, proximity keys, and remote head keys for all major vehicle brands.' },
  { question: 'Is your key replacement as good as the dealer?', answer: 'Our keys are OEM-quality and programmed using the same protocols as dealerships. They function identically to dealer keys — remote lock/unlock, push-to-start, keyless entry, and all other features.' },
];

export default function CarKeyReplacementPage() {
  return (
    <ServicePageTemplate
      title="Car Key Replacement Fort Worth"
      headline="Car Key Replacement in Fort Worth, TX"
      subheadline="Fast, on-site car key replacement for all makes and models. Transponder keys, smart keys, and key fobs — cut and programmed at your location."
      schemaDescription="Same-day car key replacement in Fort Worth TX. Transponder keys, smart keys, key fobs cut and programmed on-site for all vehicle makes and models."
      faqItems={faqItems}
      relatedServices={[
        { label: 'Lost Car Keys / All Keys Lost', href: '/lost-car-keys-fort-worth' },
        { label: 'Key Fob Programming', href: '/key-fob-programming-fort-worth' },
        { label: 'European Car Locksmith', href: '/european-car-locksmith-fort-worth' },
        { label: 'Brands We Service', href: '/brands' },
      ]}
      content={
        <>
          <h2>Professional Car Key Replacement — On-Site in Fort Worth</h2>
          <p>Need a replacement car key? Whether you need a spare, have a worn-out key, or your existing key is damaged, our mobile service cuts and programs replacement keys at your location throughout Fort Worth and surrounding areas.</p>
          <p>We carry a comprehensive inventory of key blanks, fob shells, and transponder chips for all major vehicle brands. Most replacements are completed in 30-90 minutes without any need to visit a dealership.</p>

          <h2>Types of Car Keys We Replace</h2>

          <h3>Transponder Keys</h3>
          <p>Transponder keys contain a small electronic chip that communicates with your vehicle&apos;s immobilizer system. The key must be cut to the correct physical profile AND programmed electronically before it will start your vehicle. We handle all transponder types including fixed code, rolling code, and encrypted varieties.</p>

          <h3>Smart Keys & Proximity Keys</h3>
          <p>Modern smart keys allow keyless entry and push-button start. These keys communicate wirelessly with the vehicle via radio frequency and must be paired to your vehicle&apos;s keyless entry module. We program smart keys for all brands including <Link href="/brands/bmw" className="text-bronze hover:text-gold">BMW Comfort Access</Link>, <Link href="/brands/mercedes-benz" className="text-bronze hover:text-gold">Mercedes Keyless Go</Link>, <Link href="/brands/lexus" className="text-bronze hover:text-gold">Lexus Smart Access</Link>, and more.</p>

          <h3>Remote Head Keys</h3>
          <p>Remote head keys combine the physical key blade with remote buttons (lock, unlock, trunk) in one unit. These require both key cutting and remote programming.</p>

          <h3>Key Fobs (Fobik)</h3>
          <p>Chrysler, Dodge, and Jeep vehicles commonly use Fobik keys — a key fob that inserts into the dash instead of a traditional ignition cylinder. These require specialized programming through the vehicle&apos;s <Link href="/module-programming-fort-worth" className="text-bronze hover:text-gold">WIN module or RF Hub</Link>.</p>

          <h3>Flip Keys</h3>
          <p>Flip keys feature a retractable key blade that folds into the fob body. Popular on VW, Audi, and many other brands. We replace both the key blade and electronic components as needed.</p>

          <h2>Our Car Key Replacement Process</h2>
          <ul>
            <li><strong>Vehicle Identification</strong> — We verify your vehicle&apos;s make, model, year, and security system type.</li>
            <li><strong>Key Selection</strong> — We select the correct key blank, fob, and transponder chip for your vehicle.</li>
            <li><strong>Key Cutting</strong> — The physical key blade is cut to your vehicle&apos;s specifications using precision cutting machines.</li>
            <li><strong>Programming</strong> — The key&apos;s transponder and remote functions are programmed to your vehicle&apos;s security system.</li>
            <li><strong>Testing</strong> — We verify all functions: physical lock/unlock, remote buttons, engine start, and keyless features.</li>
          </ul>

          <h2>Car Key Replacement for All Brands</h2>
          <p>We replace keys for all major automotive brands in Fort Worth:</p>
          <ul>
            <li><strong>European</strong> — BMW, Mercedes-Benz, Audi, VW, Porsche, Jaguar, Land Rover</li>
            <li><strong>Japanese</strong> — Toyota, Lexus, Honda, Acura, Nissan, Infiniti</li>
            <li><strong>Domestic</strong> — Ford, Chevrolet, GMC, Cadillac, Dodge, Chrysler, Jeep</li>
          </ul>

          <h2>Why Choose Us Over the Dealer?</h2>
          <p>Dealerships charge premium prices for car key replacement and often require appointments days in advance. Our mobile service offers significant advantages:</p>
          <ul>
            <li><strong>Same-Day Service</strong> — No waiting days for an appointment</li>
            <li><strong>Mobile Convenience</strong> — We come to your location</li>
            <li><strong>Competitive Pricing</strong> — Typically 30-50% less than dealer</li>
            <li><strong>Same Quality</strong> — OEM-quality keys with full functionality</li>
            <li><strong>Faster Turnaround</strong> — Most jobs completed in under an hour</li>
          </ul>
        </>
      }
    />
  );
}
