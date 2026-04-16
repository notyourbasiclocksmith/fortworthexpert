import type { Metadata } from 'next';
import Link from 'next/link';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Automotive Locksmith Fort Worth TX | Car Key Experts',
  description: 'Full-service automotive locksmith in Fort Worth TX. Car key programming, replacement, ignition repair, module diagnostics. Dealer-level mobile service. Call 817-842-1751.',
};

const faqItems = [
  { question: 'What automotive locksmith services do you offer in Fort Worth?', answer: 'We offer comprehensive automotive locksmith services including car key replacement, key fob programming, smart key programming, ignition repair, immobilizer diagnostics, module programming (BCM, KVM, FEM, CAS), all keys lost solutions, and emergency lockout service for all vehicle makes and models.' },
  { question: 'Do you service all car brands?', answer: 'Yes. We service all major automotive brands including BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Jaguar, Land Rover, Lexus, Toyota, Nissan, Infiniti, Ford, Chevrolet, GMC, Cadillac, Dodge, Chrysler, Jeep, Honda, and Acura.' },
  { question: 'Are you a mobile locksmith?', answer: 'Yes, we are 100% mobile. Our fully-equipped service vehicles come to your home, workplace, or roadside location anywhere in Fort Worth and surrounding areas. No towing needed.' },
  { question: 'How fast can you get to me?', answer: 'We offer same-day service throughout the Fort Worth metro area. Response times vary based on location and current workload, but we prioritize emergency situations and strive for the fastest possible response.' },
];

export default function AutomotiveLocksmithPage() {
  return (
    <ServicePageTemplate
      title="Automotive Locksmith Fort Worth TX"
      headline="Automotive Locksmith Services in Fort Worth, TX"
      subheadline="Comprehensive car key and vehicle security solutions from Fort Worth's most trusted automotive locksmith. Dealer-level capabilities with mobile convenience."
      schemaDescription="Full-service automotive locksmith in Fort Worth TX providing car key programming, replacement, ignition repair, module diagnostics, and emergency lockout service."
      faqItems={faqItems}
      relatedServices={[
        { label: 'Lost Car Keys', href: '/lost-car-keys-fort-worth' },
        { label: 'Car Key Replacement', href: '/car-key-replacement-fort-worth' },
        { label: 'Key Fob Programming', href: '/key-fob-programming-fort-worth' },
        { label: 'Ignition Repair', href: '/ignition-repair-fort-worth' },
        { label: 'Module Programming', href: '/module-programming-fort-worth' },
        { label: 'Emergency Locksmith', href: '/emergency-locksmith-fort-worth' },
      ]}
      content={
        <>
          <h2>Fort Worth&apos;s Advanced Automotive Locksmith Service</h2>
          <p>When your vehicle&apos;s security system fails, you need more than a basic locksmith — you need a specialist who understands modern automotive technology. Fort Worth Expert Automotive Locksmith provides dealer-level car key programming, immobilizer diagnostics, and module repair services throughout the Fort Worth metropolitan area.</p>
          <p>Today&apos;s vehicles are sophisticated computers on wheels. The key in your pocket communicates with multiple electronic modules through encrypted signals before your engine will start. When any component in this security chain fails, you&apos;re left stranded. That&apos;s where our expertise makes the difference.</p>

          <h2>Our Automotive Locksmith Services</h2>
          <p>We offer a complete range of automotive locksmith services designed to handle everything from simple key replacements to complex module-level diagnostics:</p>

          <h3>Car Key Replacement & Duplication</h3>
          <p>Whether you need a spare key or have lost all your keys, we cut and program replacement keys on-site for all vehicle makes and models. Our mobile service brings key cutting machines and programming equipment directly to your location.</p>

          <h3>Key Fob & Smart Key Programming</h3>
          <p>Modern vehicles use sophisticated key fobs and smart keys that require electronic programming to communicate with your vehicle. We program all types including proximity keys, push-to-start fobs, and traditional transponder keys.</p>

          <h3>Ignition System Repair</h3>
          <p>From mechanical ignition cylinder issues to electronic ignition switch failures (like the Mercedes EZS), we diagnose and repair ignition problems that prevent your vehicle from starting.</p>

          <h3>Module Programming & Diagnostics</h3>
          <p>When the issue goes beyond the key itself, we diagnose and program vehicle security modules including BCM (Body Control Module), KVM (Keyless Vehicle Module), FEM (Front Electronics Module), CAS (Car Access System), and more.</p>

          <h3>Immobilizer Diagnostics</h3>
          <p>If your vehicle&apos;s immobilizer system is preventing the engine from starting, our diagnostic tools identify the exact failure point — whether it&apos;s the key transponder, antenna ring, control module, or wiring.</p>

          <h3>Emergency Lockout Service</h3>
          <p>Locked your keys in the car? We provide fast, damage-free vehicle entry throughout Fort Worth. Our technicians use professional tools designed to open vehicles without causing any damage to the door, lock, or paint.</p>

          <h2>Why Choose a Specialist Automotive Locksmith?</h2>
          <p>General locksmiths handle residential and commercial locks — that&apos;s their primary expertise. Automotive security systems are an entirely different field requiring specialized knowledge, tools, and ongoing training. Here&apos;s why choosing a specialist matters:</p>
          <ul>
            <li><strong>Specialized Equipment</strong> — We invest in the same diagnostic and programming tools used by dealership service departments.</li>
            <li><strong>Brand-Specific Knowledge</strong> — Each manufacturer uses different security architectures. We understand the nuances of every major brand.</li>
            <li><strong>Module-Level Expertise</strong> — We go beyond key cutting to diagnose and resolve electronic module failures that other locksmiths can&apos;t handle.</li>
            <li><strong>All Keys Lost Capability</strong> — Creating keys when no original exists requires extracting security data from vehicle modules — a specialized skill.</li>
            <li><strong>Continuous Training</strong> — Automotive security technology evolves constantly. We stay current with the latest systems and programming methods.</li>
          </ul>

          <h2>Vehicles We Service</h2>
          <p>Our automotive locksmith services cover all major brands including European luxury vehicles (BMW, Mercedes-Benz, Audi, Volkswagen, Porsche, Jaguar, Land Rover), Japanese brands (Toyota, Lexus, Nissan, Infiniti, Honda, Acura), and domestic manufacturers (Ford, Chevrolet, GMC, Cadillac, Dodge, Chrysler, Jeep).</p>
          <p>We handle vehicles from the early 2000s through the latest models, covering every generation of security system technology including transponder keys, smart keys, proximity fobs, and keyless entry systems.</p>

          <h2>Service Areas</h2>
          <p>We provide mobile automotive locksmith services throughout the Fort Worth metropolitan area including <Link href="/service-areas/arlington" className="text-bronze hover:text-gold">Arlington</Link>, <Link href="/service-areas/north-richland-hills" className="text-bronze hover:text-gold">North Richland Hills</Link>, <Link href="/service-areas/grapevine" className="text-bronze hover:text-gold">Grapevine</Link>, <Link href="/service-areas/keller" className="text-bronze hover:text-gold">Keller</Link>, <Link href="/service-areas/hurst" className="text-bronze hover:text-gold">Hurst</Link>, <Link href="/service-areas/bedford" className="text-bronze hover:text-gold">Bedford</Link>, <Link href="/service-areas/euless" className="text-bronze hover:text-gold">Euless</Link>, and surrounding communities.</p>
        </>
      }
    />
  );
}
