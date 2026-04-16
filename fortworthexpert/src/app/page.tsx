import { FAQSchema } from '@/components/SchemaMarkup';
import HomepageClient from './HomepageClient';

const faqItems = [
  { question: 'Why does my car say "No Key Detected"?', answer: 'The "No Key Detected" message typically indicates a communication failure between your key fob and the vehicle\'s security module. Common causes include a dead key fob battery, a failed keyless vehicle module (KVM), body control module (BCM) issues, or antenna receiver failure. Our diagnostic scan identifies the exact cause so we can resolve it efficiently.' },
  { question: 'How much does car key replacement cost in Fort Worth?', answer: 'Car key replacement costs vary by vehicle make, model, and key type. Basic transponder keys start around $150, while smart/proximity keys range from $250-$600+. European luxury vehicles are typically at the higher end. We provide exact quotes upfront before any work begins.' },
  { question: 'Can you program car keys without the original key?', answer: 'Yes — this is one of our specialties. We handle all-keys-lost situations for virtually all makes and models. Our tools can extract security data from your vehicle\'s modules and generate new keys from scratch, even when no original key is available.' },
  { question: 'Do you come to my location?', answer: 'Absolutely. We are a 100% mobile service. Our fully-equipped vehicles come to your home, workplace, or roadside location throughout Fort Worth and surrounding areas. No towing required.' },
];

export default function Home() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <HomepageClient faqItems={faqItems} />
    </>
  );
}
