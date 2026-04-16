import type { Metadata } from 'next';
import Link from 'next/link';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Lost Car Keys Fort Worth | All Keys Lost Specialist',
  description: 'Lost all your car keys in Fort Worth? We create new keys from scratch for any vehicle. All keys lost specialist with same-day mobile service. Call 817-842-1751.',
};

const faqItems = [
  { question: 'Can you make car keys if I lost all of them?', answer: 'Yes — this is our specialty. We handle all-keys-lost situations for virtually every make and model. Our tools extract security data from your vehicle\'s modules and generate new keys from scratch, even with no original key available.' },
  { question: 'How much does it cost if I lost all my car keys?', answer: 'All-keys-lost pricing varies by vehicle. Domestic vehicles typically range from $200-$400, Japanese vehicles $250-$500, and European luxury vehicles $400-$800+. We provide exact upfront quotes before starting.' },
  { question: 'How long does it take to make keys when all are lost?', answer: 'Most all-keys-lost jobs are completed in 45-90 minutes on-site. Complex European vehicles may take 1-2 hours. We bring all necessary equipment to your location.' },
  { question: 'Do I need to tow my car to a dealer if I lost all keys?', answer: 'No. Our mobile service comes to your vehicle\'s location. We have all the equipment needed to create new keys on-site, eliminating the need for expensive towing.' },
];

export default function LostCarKeysPage() {
  return (
    <ServicePageTemplate
      title="Lost Car Keys Fort Worth"
      headline="Lost Car Keys? All Keys Lost Specialist in Fort Worth, TX"
      subheadline="Don't panic. We create new car keys from scratch — even when you've lost every key. Same-day mobile service to your location."
      schemaDescription="All keys lost car key specialist in Fort Worth TX. We create new keys from scratch for any vehicle using dealer-level tools. Same-day mobile service."
      faqItems={faqItems}
      relatedServices={[
        { label: 'Car Key Replacement', href: '/car-key-replacement-fort-worth' },
        { label: 'Key Fob Programming', href: '/key-fob-programming-fort-worth' },
        { label: 'Immobilizer Diagnostics', href: '/no-key-detected-immobilizer-fort-worth' },
        { label: 'Emergency Locksmith', href: '/emergency-locksmith-fort-worth' },
      ]}
      content={
        <>
          <h2>All Keys Lost? We Can Help.</h2>
          <p>Losing all your car keys is one of the most stressful vehicle situations you can face. Without a key, your vehicle is completely immobilized — and many people assume the only option is an expensive tow to the dealership followed by days of waiting. That&apos;s not the case.</p>
          <p>Fort Worth Expert Automotive Locksmith specializes in all-keys-lost situations. We create brand-new keys from scratch using your vehicle&apos;s security module data, and we do it on-site at your location — no towing required.</p>

          <h2>How All Keys Lost Programming Works</h2>
          <p>When all keys are lost, we can&apos;t simply copy an existing key. Instead, we must:</p>
          <ul>
            <li><strong>Access the vehicle&apos;s security module</strong> — This could be the BCM, CAS, EZS, instrument cluster, or other module depending on the make.</li>
            <li><strong>Extract encrypted key data</strong> — Using specialized diagnostic tools, we read the module&apos;s stored security information.</li>
            <li><strong>Generate new key files</strong> — Based on the extracted data, we create new key transponder codes.</li>
            <li><strong>Cut the physical key</strong> — We decode or read the lock to determine the correct key cut.</li>
            <li><strong>Program the new key</strong> — The new key&apos;s transponder is programmed to match the vehicle&apos;s security system.</li>
            <li><strong>Test everything</strong> — We verify start, lock/unlock, remote functions, and delete any compromised key data.</li>
          </ul>

          <h2>Vehicles We Handle for All Keys Lost</h2>
          <p>Our all-keys-lost service covers virtually every vehicle on the road today:</p>

          <h3>European Vehicles</h3>
          <p><Link href="/brands/bmw" className="text-bronze hover:text-gold">BMW</Link> (EWS, CAS, FEM/BDC systems), <Link href="/brands/mercedes-benz" className="text-bronze hover:text-gold">Mercedes-Benz</Link> (NEC/BGA, EZS/ESL), <Link href="/brands/audi" className="text-bronze hover:text-gold">Audi</Link> (IMMO3-IMMO5, KESSY), <Link href="/brands/volkswagen" className="text-bronze hover:text-gold">Volkswagen</Link>, <Link href="/brands/porsche" className="text-bronze hover:text-gold">Porsche</Link>, <Link href="/brands/jaguar" className="text-bronze hover:text-gold">Jaguar</Link> (KVM), and <Link href="/brands/land-rover" className="text-bronze hover:text-gold">Land Rover</Link> (KVM).</p>

          <h3>Japanese Vehicles</h3>
          <p><Link href="/brands/toyota" className="text-bronze hover:text-gold">Toyota</Link> (H-chip, G-chip, Smart Key), <Link href="/brands/lexus" className="text-bronze hover:text-gold">Lexus</Link> (Smart Access), <Link href="/brands/nissan" className="text-bronze hover:text-gold">Nissan</Link> (Intelligent Key, BCM), <Link href="/brands/infiniti" className="text-bronze hover:text-gold">Infiniti</Link>, <Link href="/brands/honda" className="text-bronze hover:text-gold">Honda</Link>, and <Link href="/brands/acura" className="text-bronze hover:text-gold">Acura</Link>.</p>

          <h3>Domestic Vehicles</h3>
          <p><Link href="/brands/ford" className="text-bronze hover:text-gold">Ford</Link> (PATS, Intelligent Access), <Link href="/brands/chevrolet" className="text-bronze hover:text-gold">Chevrolet</Link> (Theft Deterrent), <Link href="/brands/gmc" className="text-bronze hover:text-gold">GMC</Link>, <Link href="/brands/cadillac" className="text-bronze hover:text-gold">Cadillac</Link>, <Link href="/brands/dodge" className="text-bronze hover:text-gold">Dodge</Link> (Fobik, RF Hub), <Link href="/brands/chrysler" className="text-bronze hover:text-gold">Chrysler</Link>, and <Link href="/brands/jeep" className="text-bronze hover:text-gold">Jeep</Link>.</p>

          <h2>Why All Keys Lost Is Different From Key Replacement</h2>
          <p>When you have at least one working key, adding another is a relatively straightforward programming procedure. But when all keys are lost, the difficulty increases significantly because:</p>
          <ul>
            <li>There&apos;s no reference key to clone or use for security access</li>
            <li>The vehicle&apos;s security modules must be accessed directly</li>
            <li>Encrypted data must be extracted and decoded</li>
            <li>The key blade must be decoded from the lock rather than copied</li>
            <li>Some vehicles require PIN codes or security access tokens</li>
          </ul>
          <p>This is why all-keys-lost service requires specialized tools, training, and experience that general locksmiths often don&apos;t have.</p>

          <h2>What to Do When You&apos;ve Lost All Your Keys</h2>
          <ul>
            <li><strong>Don&apos;t panic</strong> — We handle these situations every day.</li>
            <li><strong>Have your VIN ready</strong> — The 17-digit Vehicle Identification Number (found on registration, insurance card, or visible through the driver&apos;s side windshield) helps us prepare the right equipment.</li>
            <li><strong>Know your vehicle&apos;s location</strong> — We come to you, so we need to know where the vehicle is parked.</li>
            <li><strong>Call us at 817-842-1751</strong> — We&apos;ll provide an upfront quote and schedule same-day service in most cases.</li>
          </ul>

          <h2>Cost Comparison: Us vs. the Dealer</h2>
          <p>Dealership all-keys-lost service typically involves: a tow ($100-$200+), dealer diagnostic fee ($150+), key and programming ($300-$1,000+), and wait time (2-5 business days). Total dealer cost can easily exceed $600-$1,500+.</p>
          <p>Our mobile service eliminates towing, reduces wait time to same-day, and offers competitive pricing — typically saving you 30-50% compared to the dealer experience.</p>
        </>
      }
    />
  );
}
