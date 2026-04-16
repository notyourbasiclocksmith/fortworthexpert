export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: 'Fort Worth Expert Automotive Locksmith',
    description: 'Advanced automotive locksmith services in Fort Worth, TX. Car key programming, immobilizer diagnostics, module programming, and emergency locksmith services.',
    telephone: '817-842-1751',
    url: 'https://fortworthlocksmithexperts.com',
    areaServed: [
      { '@type': 'City', name: 'Fort Worth', addressRegion: 'TX' },
      { '@type': 'City', name: 'Arlington', addressRegion: 'TX' },
      { '@type': 'City', name: 'North Richland Hills', addressRegion: 'TX' },
      { '@type': 'City', name: 'Hurst', addressRegion: 'TX' },
      { '@type': 'City', name: 'Bedford', addressRegion: 'TX' },
      { '@type': 'City', name: 'Euless', addressRegion: 'TX' },
      { '@type': 'City', name: 'Grapevine', addressRegion: 'TX' },
      { '@type': 'City', name: 'Keller', addressRegion: 'TX' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort Worth',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7555,
      longitude: -97.3308,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '22:00',
    },
    priceRange: '$$',
    image: 'https://fortworthlocksmithexperts.com/og-image.jpg',
    serviceType: [
      'Car Key Programming',
      'Car Key Replacement',
      'Key Fob Programming',
      'Ignition Repair',
      'Immobilizer Diagnostics',
      'Module Programming',
      'Emergency Locksmith',
    ],
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ name, description }: { name: string; description: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Locksmith',
      name: 'Fort Worth Expert Automotive Locksmith',
      telephone: '817-842-1751',
      url: 'https://fortworthlocksmithexperts.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Fort Worth',
      addressRegion: 'TX',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
