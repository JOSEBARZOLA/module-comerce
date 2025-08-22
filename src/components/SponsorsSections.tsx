// src/components/Website/SponsorsSection.tsx
import * as React from "react";

interface Sponsor {
  src: string;
  alt: string;
  tier: number;
}

const sponsors: Sponsor[] = [
  // Prioridad I
  { src: "/assets/img/sponsors/logo-cnc.webp", alt: "CNC", tier: 1 },
  { src: "/assets/img/sponsors/logo-anestesiologos.webp", alt: "Anestesiólogos", tier: 1 },
  { src: "/assets/img/sponsors/logo-action.webp", alt: "Traumatólogos", tier: 1 },
  { src: "/assets/img/sponsors/logo-tsb.webp", alt: "TSB Petróleo", tier: 1 },

  // Prioridad II
  { src: "/assets/img/sponsors/logo-merrell.webp", alt: "Merrell", tier: 2 },
  { src: "/assets/img/sponsors/logo-araikani.webp", alt: "Araikani", tier: 2 },
  { src: "/assets/img/sponsors/logo-canelo.webp", alt: "Canelo", tier: 2 },
  // { src: "/assets/img/sponsors/logo-agrigento.webp", alt: "Agrigento", tier: 2 },

  // Prioridad III
  { src: "/assets/img/sponsors/logo-mervick.webp", alt: "Mervcik", tier: 3 },
  { src: "/assets/img/sponsors/logo-aqualic.webp", alt: "Aqualic", tier: 3 },
  { src: "/assets/img/sponsors/logo-hidrata-romero.webp", alt: "Hidrata Estuardo Romero", tier: 3 },
  { src: "/assets/img/sponsors/logo-frescos-del-sur.webp", alt: "Frescos del Sur", tier: 3 },

  // Prioridad IV
  // { src: "/assets/img/sponsors/logo-peninsula.webp", alt: "Peninsula", tier: 4 },
  { src: "/assets/img/sponsors/logo-hoka.webp", alt: "Hoka", tier: 4 },
  { src: "/assets/img/sponsors/logo-dorhamann-bike.webp", alt: "Dorhamann Bike", tier: 4 },
  { src: "/assets/img/sponsors/logo-complejo-chacras.webp", alt: "Complejo Chacras", tier: 4 },

  // Prioridad V
  { src: "/assets/img/sponsors/logo-pura-vida.webp", alt: "Pura Vida", tier: 5 },
  { src: "/assets/img/sponsors/logo-nexo-pie.webp", alt: "Nexo Pie", tier: 5 },
];

const SponsorsSection: React.FC = () => {
  const groupedSponsors = sponsors.reduce<Record<number, Sponsor[]>>((acc, sponsor) => {
    if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-header">
        <div className="sponsors-icon">🏅</div>
        <h2 className="sponsors-title">SPONSORS</h2>
        <p className="sponsors-subtitle">
          Empresas que hacen posible La Estrella Azul
        </p>
      </div>

      {Object.entries(groupedSponsors).map(([tier, sponsorsInTier]) => (
        <div key={tier} className="sponsors-group">
          {sponsorsInTier.map((sponsor, index) => (
            <div key={index} className={`sponsor-card tier-${sponsor.tier}`}>
              <img src={sponsor.src} alt={sponsor.alt} loading="lazy" />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default SponsorsSection;
