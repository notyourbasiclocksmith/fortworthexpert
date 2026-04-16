import type { Metadata } from 'next';
import Link from 'next/link';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Ignition Repair Fort Worth | Switch & Cylinder Specialist',
  description: 'Ignition repair in Fort Worth TX. Ignition switch, cylinder, steering lock repair for all vehicles. Mercedes EZS/ESL specialist. Call 817-842-1751.',
};

const faqItems = [
  { question: 'How do I know if my ignition needs repair?', answer: 'Common signs include: key won\'t turn or is hard to turn, key gets stuck in ignition, dashboard lights flicker when turning key, engine cranks intermittently, or steering wheel won\'t unlock. Electronic symptoms include "steering lock defective" messages and ignition switch fault codes.' },
  { question: 'Can you repair a Mercedes ignition (EZS)?', answer: 'Yes. We specialize in Mercedes EZS (Electronic Ignition Switch) repair and replacement, including key programming and ESL (steering lock) service. This is one of our most common repair services.' },
  { question: 'How much does ignition repair cost?', answer: 'Ignition repair costs vary significantly by vehicle and issue. Mechanical cylinder repairs start around $150-$300. Electronic ignition switch repairs (like Mercedes EZS) range from $400-$1,200. We provide exact quotes after diagnosis.' },
  { question: 'Do you replace ignition cylinders on-site?', answer: 'Yes. We carry replacement cylinders and switches for common vehicles and can perform most ignition repairs on-site at your location.' },
];

export default function IgnitionRepairPage() {
  return (
    <ServicePageTemplate
      title="Ignition Repair Fort Worth"
      headline="Ignition Repair & Replacement in Fort Worth, TX"
      subheadline="Expert ignition system repair — from stuck ignition cylinders to electronic ignition switch failures. Mechanical and electronic solutions for all vehicles."
      schemaDescription="Ignition repair services in Fort Worth TX. Ignition switch, cylinder, steering lock repair and replacement for all vehicle makes and models."
      faqItems={faqItems}
      relatedServices={[
        { label: 'Car Key Replacement', href: '/car-key-replacement-fort-worth' },
        { label: 'Module Programming', href: '/module-programming-fort-worth' },
        { label: 'No Key Detected / Immobilizer', href: '/no-key-detected-immobilizer-fort-worth' },
        { label: 'Mercedes ESL/EZS Specialist', href: '/european-car-locksmith-fort-worth' },
      ]}
      content={
        <>
          <h2>Comprehensive Ignition System Repair in Fort Worth</h2>
          <p>The ignition system is the gateway between your key and your engine. When it fails, your vehicle is completely disabled. Our mobile service diagnoses and repairs both mechanical ignition cylinders and electronic ignition switches at your location throughout Fort Worth.</p>
          <p>Modern ignition systems have evolved from purely mechanical lock-and-tumbler designs to sophisticated electronic modules that authenticate your key through encrypted communication. We handle both types with precision.</p>

          <h2>Types of Ignition Problems We Repair</h2>

          <h3>Mechanical Ignition Cylinder Issues</h3>
          <p>The ignition cylinder is the physical component where you insert and turn your key. Over time, internal wafers and springs wear out, causing:</p>
          <ul>
            <li>Key difficult or impossible to turn</li>
            <li>Key gets stuck and won&apos;t come out</li>
            <li>Key turns but doesn&apos;t engage the starter</li>
            <li>Worn key no longer matches worn cylinder</li>
            <li>Ignition cylinder spins freely</li>
          </ul>

          <h3>Electronic Ignition Switch Failures</h3>
          <p>The electronic ignition switch reads your key&apos;s transponder signal and authorizes the engine to start. Failures include:</p>
          <ul>
            <li><strong>Mercedes EZS/ESL</strong> — The <Link href="/brands/mercedes-benz" className="text-bronze hover:text-gold">Mercedes EZS</Link> (Electronic Ignition Switch) and ESL (Electronic Steering Lock) are common failure points, especially on C-Class, E-Class, and ML/GLE models.</li>
            <li><strong>BMW CAS/FEM</strong> — The <Link href="/brands/bmw" className="text-bronze hover:text-gold">BMW CAS</Link> (Car Access System) manages ignition authorization and can fail electronically.</li>
            <li><strong>Steering Lock Faults</strong> — Many vehicles have electronic steering locks that can jam mechanically or fail electronically, preventing the key from turning or the engine from starting.</li>
          </ul>

          <h3>Push-Button Start Issues</h3>
          <p>Vehicles with push-button start rely on electronic modules to detect the key&apos;s presence and authorize engine start. When the button doesn&apos;t respond, the issue may be:</p>
          <ul>
            <li>Start button switch failure</li>
            <li>Key detection module failure</li>
            <li>Brake switch malfunction (safety interlock)</li>
            <li>Power supply issue to the start system</li>
          </ul>

          <h2>Our Ignition Repair Process</h2>
          <ul>
            <li><strong>Diagnosis</strong> — We determine whether the issue is mechanical (cylinder), electronic (switch/module), or both.</li>
            <li><strong>Repair Assessment</strong> — We explain the issue, provide options (repair vs. replace), and quote the cost upfront.</li>
            <li><strong>Repair or Replacement</strong> — We perform the work on-site using quality parts.</li>
            <li><strong>Key Matching</strong> — If the cylinder is replaced, we can either match it to your existing key or provide new keys.</li>
            <li><strong>Programming</strong> — Electronic components require programming to your vehicle&apos;s security system after installation.</li>
            <li><strong>Verification</strong> — We test the complete start sequence and all related functions.</li>
          </ul>

          <h2>European Ignition Specialist</h2>
          <p>European vehicles — particularly Mercedes-Benz and BMW — have some of the most complex ignition systems in the automotive industry. Our expertise in these systems sets us apart from general locksmiths who may not have the specialized tools or knowledge to handle them properly.</p>
          <p>See our dedicated pages for <Link href="/european-car-locksmith-fort-worth" className="text-bronze hover:text-gold">European Car Locksmith services</Link> and specific brand expertise.</p>
        </>
      }
    />
  );
}
