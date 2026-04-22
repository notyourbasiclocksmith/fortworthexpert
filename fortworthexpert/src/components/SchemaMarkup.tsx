import { serviceAreas, SERVICE_RADIUS_MILES } from '@/data/serviceAreas';

const SITE_URL = 'https://fortworthlocksmithexperts.com';
const PHONE = '817-842-1751';
const TEXT_PHONE = '817-586-9634';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Locksmith', 'AutomotiveBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: 'Fort Worth Expert Automotive Locksmith',
    alternateName: 'Fort Worth Expert',
    description:
      'Specialist mobile automotive locksmith in Fort Worth, TX. Dealer-grade car key programming, smart-key generation, immobilizer diagnostics, and module programming for all makes and models. Service within a 25-mile radius of Fort Worth.',
    telephone: PHONE,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Apple Pay, Google Pay, Venmo, Zelle',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort Worth',
      addressRegion: 'TX',
      postalCode: '76102',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7555,
      longitude: -97.3308,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 32.7555,
        longitude: -97.3308,
      },
      geoRadius: `${SERVICE_RADIUS_MILES * 1609.34}`, // miles → meters
    },
    areaServed: serviceAreas.map((c) => ({
      '@type': 'City',
      name: c.name,
      addressRegion: 'TX',
      addressCountry: 'US',
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE,
        contactType: 'customer service',
        areaServed: 'US-TX',
        availableLanguage: ['English', 'Spanish'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: TEXT_PHONE,
        contactType: 'sales',
        areaServed: 'US-TX',
        availableLanguage: ['English', 'Spanish'],
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    serviceType: [
      'Automotive Locksmith',
      'Car Key Programming',
      'Car Key Replacement',
      'Smart Key Programming',
      'Key Fob Programming',
      'Transponder Key Programming',
      'Ignition Repair',
      'Ignition Cylinder Replacement',
      'Immobilizer Diagnostics',
      'Module Programming',
      'BCM Programming',
      'KVM Module Repair',
      'BMW FEM/CAS Programming',
      'Mercedes EZS/ESL Repair',
      'European Car Locksmith',
      'Emergency Lockout Service',
      'All Keys Lost Programming',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automotive Locksmith Services',
      itemListElement: [
        { '@type': 'Offer', name: 'Car Key Replacement', price: '150', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Smart Key Programming', price: '250', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Ignition Repair', price: '180', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Module Programming', price: '250', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Emergency Lockout', price: '65', priceCurrency: 'USD' },
      ],
    },
    sameAs: [
      'https://www.google.com/maps',
      'https://www.facebook.com/',
      'https://www.yelp.com/',
    ],
    knowsAbout: [
      'Automotive Security Systems',
      'Vehicle Immobilizers',
      'Transponder Key Programming',
      'CAN-bus Diagnostics',
      'BMW FEM CAS EWS Modules',
      'Mercedes EZS ESL FBS',
      'Audi VW Component Protection',
      'Push-to-Start Smart Keys',
    ],
    slogan: 'Dealer-level automotive locksmith. Mobile. Same-day. Within 25 miles of Fort Worth.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.faq-question', '.faq-answer'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  priceFrom,
  priceTo,
}: {
  name: string;
  description: string;
  priceFrom?: number;
  priceTo?: number;
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Locksmith',
      '@id': `${SITE_URL}/#business`,
      name: 'Fort Worth Expert Automotive Locksmith',
      telephone: PHONE,
      url: SITE_URL,
    },
    serviceType: name,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 32.7555,
        longitude: -97.3308,
      },
      geoRadius: `${SERVICE_RADIUS_MILES * 1609.34}`,
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Vehicle Owners',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Fort Worth Metropolitan Area, TX',
      },
    },
  };

  if (priceFrom) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: priceFrom,
        maxPrice: priceTo ?? priceFrom,
      },
      availability: 'https://schema.org/InStock',
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Fort Worth Expert Automotive Locksmith',
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
