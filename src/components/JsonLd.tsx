import React from 'react';

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dailysignal.app/#organization",
        "name": "DailySignal",
        "url": "https://dailysignal.app",
        "logo": "https://dailysignal.app/logo.png",
        "sameAs": [
          "https://github.com/Seykarim/DailySignal"
        ],
        "description": "Capa de inteligencia diaria y proveedor Data-as-a-Service para nichos especializados."
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://dailysignal.app/#software",
        "name": "DailySignal Platform",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Dataset",
        "@id": "https://dailysignal.app/#dataset",
        "name": "Daily Curated Intelligence Feed",
        "description": "Dataset estructurado de tendencias, regulación de IA y análisis financiero.",
        "license": "https://dailysignal.app/terms",
        "creator": {
          "@id": "https://dailysignal.app/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
