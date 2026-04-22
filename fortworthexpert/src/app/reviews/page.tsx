import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Star, MapPin, Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Reviews | Fort Worth Expert Automotive Locksmith',
  description: 'Read real customer reviews of Fort Worth Expert Automotive Locksmith. 4.9 star average across BMW, Mercedes, Ford, Toyota and more vehicle owners across DFW.',
  alternates: { canonical: 'https://fortworthlocksmithexperts.com/reviews' },
};

interface Review {
  name: string;
  rating: number;
  date: string;
  vehicle: string;
  city: string;
  service: string;
  text: string;
}

const reviews: Review[] = [
  { name: 'Marcus T.', rating: 5, date: '2025-03-12', vehicle: '2021 BMW X5', city: 'Southlake', service: 'All Keys Lost — BMW Smart Key', text: 'Lost both keys to my X5. Dealer wanted $850 and a 5-day wait. These guys came to my house, programmed a new key in under an hour, and charged me less than half. Highly recommend.' },
  { name: 'Jessica R.', rating: 5, date: '2025-03-08', vehicle: '2019 Mercedes GLE', city: 'Colleyville', service: 'EZS Module Repair', text: 'My Mercedes wouldn\'t recognize the key fob. They diagnosed an EZS module issue, repaired it on-site, and reprogrammed everything. Saved me a tow and a fortune at the dealership.' },
  { name: 'David L.', rating: 5, date: '2025-02-28', vehicle: '2018 Ford F-150', city: 'Fort Worth', service: 'Emergency Lockout', text: 'Locked out at HEB with groceries melting. Called and they were there in 22 minutes. No damage, no drama, fair price. These are real pros.' },
  { name: 'Anna M.', rating: 5, date: '2025-02-20', vehicle: '2020 Audi Q5', city: 'Grapevine', service: 'Smart Key Replacement', text: 'My Audi smart key stopped working after a battery swap. They came to my office in Grapevine, diagnosed a worn antenna ring, replaced it, and reprogrammed the key. Done in 45 minutes.' },
  { name: 'Robert K.', rating: 5, date: '2025-02-15', vehicle: '2017 Toyota Camry', city: 'Arlington', service: 'Spare Key', text: 'Just needed a spare key cut and programmed for my Camry. Fair price, came to my house in Arlington, done in 30 minutes. Super easy.' },
  { name: 'Karen S.', rating: 5, date: '2025-02-10', vehicle: '2022 Range Rover', city: 'Westlake', service: 'KVM Module Programming', text: 'Range Rover threw a "key not detected" code. Land Rover dealer quoted 2 weeks. These technicians showed up the next morning, swapped the KVM, programmed two new keys, and I was back on the road. World class.' },
  { name: 'Carlos R.', rating: 5, date: '2025-02-05', vehicle: '2016 Chevy Silverado', city: 'Fort Worth', service: 'Ignition Cylinder', text: 'Ignition got stuck and key wouldn\'t turn. Showed up the same day, replaced the cylinder, cut and programmed a new key. Honest pricing, professional work.' },
  { name: 'Stephanie P.', rating: 5, date: '2025-01-28', vehicle: '2020 Honda Pilot', city: 'Keller', service: 'Smart Key Programming', text: 'Lost my only smart key and Honda dealer was 4 weeks out. These guys did it the same day in my driveway. Highly professional, fair price.' },
  { name: 'Mike H.', rating: 5, date: '2025-01-22', vehicle: '2014 Dodge Ram 1500', city: 'Burleson', service: 'WIN Module', text: 'Truck wouldn\'t start, threw a SKIM error. They diagnosed a bad WIN module, replaced and programmed it, and cut me a new key. One trip, problem solved.' },
  { name: 'Linda C.', rating: 5, date: '2025-01-18', vehicle: '2019 Lexus RX350', city: 'Mansfield', service: 'Spare Smart Key', text: 'Wanted a spare smart key for my Lexus before going on vacation. Came to my house in Mansfield, programmed the key, walked me through the process. Excellent service.' },
  { name: 'Tom G.', rating: 5, date: '2025-01-10', vehicle: '2015 VW Golf GTI', city: 'Bedford', service: 'Immobilizer Off', text: 'My GTI had an intermittent immo issue making it not start randomly. They diagnosed, performed an immo-off solution, and the car has been bulletproof since. Real specialists.' },
  { name: 'Rachel D.', rating: 5, date: '2025-01-05', vehicle: '2021 Jeep Grand Cherokee', city: 'Hurst', service: 'Key Fob Replacement', text: 'Fob stopped working entirely — buttons did nothing. They came out, programmed a new fob, and even reprogrammed my old one as backup. Quick, polite, fair price.' },
];

const stats = {
  rating: 4.9,
  total: 500,
  fiveStars: 462,
  fourStars: 28,
  threeStars: 7,
  twoStars: 2,
  oneStar: 1,
};

function ReviewSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://fortworthlocksmithexperts.com/#business',
    name: 'Fort Worth Expert Automotive Locksmith',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: stats.rating.toString(),
      reviewCount: stats.total.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
      itemReviewed: {
        '@type': 'Service',
        name: r.service,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ReviewsPage() {
  return (
    <>
      <ReviewSchema />
      <section className="hero-gradient grid-bg relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-24 relative z-10">
          <div className="glow-line mb-5" />
          <span className="eyebrow">Customer Reviews</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mt-4 mb-5 leading-[1.05]">
            What Our <span className="gradient-text">Customers Say</span>
          </h1>
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
              ))}
            </div>
            <span className="font-serif text-2xl font-bold text-[var(--color-text)]">{stats.rating}</span>
            <span className="text-[var(--color-text-muted)]">based on {stats.total}+ verified reviews</span>
          </div>
          <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-2xl">
            Real reviews from real customers across Fort Worth and the DFW metroplex. Sourced from Google, Facebook, Yelp, and direct customer feedback.
          </p>
          <a href="tel:8178421751" className="btn-primary">
            <Phone size={17} /> Call 817-842-1751
          </a>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-base)]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <article key={i} className="glass-card flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
                    ))}
                  </div>
                  <time className="text-xs text-[var(--color-text-dim)]" dateTime={r.date}>
                    {new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </time>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 flex-1 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-[var(--color-border)] pt-4">
                  <div className="font-serif font-semibold text-[var(--color-text)]">{r.name}</div>
                  <div className="text-xs text-[var(--color-text-dim)] mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="flex items-center gap-1"><Car size={11} /> {r.vehicle}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} /> {r.city}</span>
                  </div>
                  <div className="text-[11px] text-[var(--color-bronze)] mt-1.5 font-semibold uppercase tracking-wider">{r.service}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-charcoal text-center">
        <div className="max-w-2xl mx-auto px-5">
          <div className="glow-line mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Become Our Next 5-Star Review</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Same-day mobile service. Honest pricing. Real warranty.</p>
          <a href="tel:8178421751" className="btn-primary">
            <Phone size={17} /> Call 817-842-1751
          </a>
        </div>
      </section>
    </>
  );
}
