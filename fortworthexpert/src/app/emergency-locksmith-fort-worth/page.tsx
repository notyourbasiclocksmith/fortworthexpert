import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Emergency Locksmith Fort Worth TX | Same-Day Mobile Service',
  description: 'Emergency automotive locksmith in Fort Worth TX. Locked out? Keys lost? Car won\'t start? Same-day mobile response. Call 817-842-1751 now.',
};

const faqItems = [
  { question: 'How fast can you respond to an emergency?', answer: 'We offer same-day service throughout Fort Worth and surrounding areas. For true emergencies (locked out, stranded), we prioritize response and aim to reach you as quickly as possible based on current availability and your location.' },
  { question: 'Can you unlock my car without damaging it?', answer: 'Yes. We use professional lockout tools specifically designed for vehicle entry without damage. Our tools and techniques open vehicles without harming the door, lock, weatherstripping, or paint.' },
  { question: 'I\'m locked out and my keys are inside — can you help?', answer: 'Absolutely. Vehicle lockout is one of our most common emergency calls. We can open virtually any vehicle quickly and without damage, then retrieve your keys.' },
  { question: 'Do you charge extra for emergency service?', answer: 'We maintain fair, transparent pricing for all services including emergencies. While emergency situations may involve travel to your location, we don\'t add excessive "emergency fees." We provide pricing upfront before starting.' },
];

export default function EmergencyLocksmithPage() {
  return (
    <ServicePageTemplate
      title="Emergency Locksmith Fort Worth TX"
      headline="Emergency Automotive Locksmith in Fort Worth, TX"
      subheadline="Locked out? Keys lost? Vehicle won't start? Our emergency mobile service responds same-day throughout Fort Worth — getting you back on the road fast."
      schemaDescription="Emergency automotive locksmith in Fort Worth TX. Vehicle lockout, lost keys, no-start emergencies. Same-day mobile response."
      faqItems={faqItems}
      relatedServices={[
        { label: 'Lost Car Keys', href: '/lost-car-keys-fort-worth' },
        { label: 'Car Key Replacement', href: '/car-key-replacement-fort-worth' },
        { label: 'No Key Detected / Immobilizer', href: '/no-key-detected-immobilizer-fort-worth' },
        { label: 'Ignition Repair', href: '/ignition-repair-fort-worth' },
      ]}
      content={
        <>
          <h2>Fort Worth Emergency Automotive Locksmith Service</h2>
          <p>Vehicle emergencies don&apos;t wait for business hours. Whether you&apos;re locked out at a parking lot, stranded with a broken key, or facing a sudden no-start condition, Fort Worth Expert Automotive Locksmith provides same-day mobile response throughout the Fort Worth metropolitan area.</p>
          <p>Our mobile service vehicles carry a full inventory of key blanks, programming equipment, lockout tools, and diagnostic scanners — everything needed to resolve your situation on-site without towing.</p>

          <h2>Emergency Situations We Handle</h2>

          <h3>Vehicle Lockout</h3>
          <p>Locked your keys inside the car? Our professional lockout tools open virtually any vehicle quickly and without damage. We use manufacturer-approved entry techniques that protect your vehicle&apos;s door, lock mechanism, weatherstripping, and paint.</p>

          <h3>Lost All Keys</h3>
          <p>Lost every key to your vehicle? Don&apos;t call a tow truck. We create new keys from scratch at your vehicle&apos;s location using dealer-level key cutting and programming equipment. Most all-keys-lost emergencies are resolved in 45-90 minutes on-site.</p>

          <h3>Broken Key in Ignition</h3>
          <p>If your key has broken off inside the ignition cylinder, we extract the broken piece and create a new key — all on-site. We also assess the ignition cylinder for damage and repair or replace it if necessary.</p>

          <h3>Sudden No-Start Condition</h3>
          <p>When your vehicle suddenly won&apos;t start and you suspect a key or immobilizer issue (security light flashing, &quot;No Key Detected&quot; message), our diagnostic equipment identifies the cause quickly. Whether it&apos;s a dead key fob battery, failed module, or immobilizer malfunction, we resolve it on-site.</p>

          <h3>Key Fob Failure</h3>
          <p>If your key fob suddenly stops working — buttons don&apos;t respond, vehicle doesn&apos;t detect the key — we can diagnose and replace or reprogram the fob at your location.</p>

          <h2>Emergency Service Areas</h2>
          <p>Our emergency service covers the entire Fort Worth metropolitan area including:</p>
          <ul>
            <li>Fort Worth (all neighborhoods and districts)</li>
            <li>Arlington, North Richland Hills, Hurst, Bedford, Euless</li>
            <li>Grapevine, Keller, Benbrook, White Settlement</li>
            <li>Saginaw, Lake Worth, River Oaks</li>
            <li>And surrounding communities</li>
          </ul>

          <h2>What to Do in a Vehicle Emergency</h2>
          <ul>
            <li><strong>Stay safe</strong> — If you&apos;re roadside, move to a safe location away from traffic.</li>
            <li><strong>Call us at 817-842-1751</strong> — We&apos;ll ask about your situation, vehicle, and location.</li>
            <li><strong>Have your VIN ready</strong> — If possible, locate your Vehicle Identification Number (on registration, insurance card, or visible through the driver&apos;s side windshield base).</li>
            <li><strong>Stay with your vehicle</strong> — We&apos;ll come to your exact location.</li>
          </ul>

          <h2>Why Call Us Instead of a Tow Truck?</h2>
          <p>For most automotive locksmith emergencies, calling a tow truck is unnecessary and expensive:</p>
          <ul>
            <li><strong>No towing cost</strong> — Save $100-$300+ on towing fees</li>
            <li><strong>No dealer wait</strong> — Avoid 2-5 day dealership wait times</li>
            <li><strong>On-site resolution</strong> — We fix the problem where your vehicle sits</li>
            <li><strong>Faster overall</strong> — Tow + dealer service = days. Our service = hours.</li>
          </ul>

          <h2>Available 7 Days a Week</h2>
          <p>We understand that emergencies happen any day of the week. Our service is available Monday through Sunday to ensure you&apos;re never left stranded for long. Call <strong>817-842-1751</strong> for immediate assistance.</p>
        </>
      }
    />
  );
}
