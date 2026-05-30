import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { GlobalPresence } from "@/components/site/GlobalPresence";
import { Products } from "@/components/site/Products";

import { IndustrialGases } from "@/components/site/IndustrialGases";
import { WhyUs } from "@/components/site/WhyUs";
import { Clients } from "@/components/site/Clients";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Adhul Marketo India Pvt. Ltd. Gas Safety Equipment & Specialty Gases Mumbai",
      },
      {
        name: "description",
        content:
          "ISO 9001:2015 certified manufacturer of gas detectors, calibration gases, pressure regulators and industrial safety systems in Mumbai, India, delivering globally.",
      },
      { property: "og:title", content: "Adhul Marketo India Pvt. Ltd. Precision Gas Solutions" },
      {
        property: "og:description",
        content:
          "B2B specialists in in-house manufactured gas safety equipment, calibration & specialty gases, serving global industries.",
      },
    ],
  }),
});

function Index() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Adhul Marketo India Pvt. Ltd.",
    description:
      "ISO 9001:2015 certified manufacturer/exporter of precision gas brass & monel pressure regulators, automated auto-changeover manifolds, UHP calibration reference gases, and hazardous gas loops in Mumbai, India.",
    image:
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ce65eba1-9cdf-4048-89d9-dc7ab3592162/id-preview-79abc04e--de8d2d62-9f0a-479d-abaa-e32b34ea8ed6.lovable.app-1779295421616.png",
    "@id": "https://adhulmarketo.com",
    url: "https://adhulmarketo.com",
    telephone: "+91-22-2850-XXXX",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mumbai Manufacturing Complex, East Wing",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400072",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.076,
      longitude: 72.8777,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://twitter.com/AdhulMarketo"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Gas Safety Equipment & Reference Mixtures Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Precision Single & Double Stage Gas Pressure Regulators",
            description:
              "High purity gas regulation for brass, stainless steel, and monel corrosive safety gas lines.",
            category: "Gas Regulators",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Custom Analytical Calibration gases & Ethylene Fruit Ripening Mixtures",
            description: "Precise parts-per-million (PPM) reference calibration gas mixtures.",
            category: "Reference Gases & Ethylene",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Stainless Steel Sampling Systems & Gas Cylinder Manifolds",
            description: "High-durability continuous supply automatic changeover manifolds.",
            category: "Control Panels & Manifolds",
          },
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />

      <IndustrialGases />
      <WhyUs />
      <GlobalPresence />
      <Clients />
      <CtaBanner />
      <Footer />
    </main>
  );
}
