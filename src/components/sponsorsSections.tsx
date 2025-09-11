import { useEffect, useRef } from "react";
import "@/assets/sass/_sponsors-section.scss";


// Import de imágenes
import adidasLogo from "@/assets/img/sponsors/adidasLogo.svg";
import converseLogo from "@/assets/img/sponsors/converseLogo.svg";
import diadoraLogo from "@/assets/img/sponsors/diadoraLogo.svg";
import dunlopLogo from "@/assets/img/sponsors/dunlopLogo.svg";
import hushPuppies from "@/assets/img/sponsors/hushPuppies.png";
import jordanAir from "@/assets/img/sponsors/jordanAir.svg";
import nikeLogo from "@/assets/img/sponsors/nikeLogo.svg";
import LeCoqLogo from "@/assets/img/sponsors/leCoqLogo.svg";
import vansLogo from "@/assets/img/sponsors/vansLogo.svg";

interface Sponsor {
  src: string;
  alt: string;
  tier: number;
}
const sponsors: Sponsor[] = [
  // Prioridad I
  { src: adidasLogo, alt: "CNC", tier: 1 },
  { src: converseLogo, alt: "Anestesiólogos", tier: 1 },
  { src: diadoraLogo, alt: "Traumatólogos", tier: 1 },
  { src: dunlopLogo, alt: "TSB Petróleo", tier: 1 },

  { src: hushPuppies, alt: "Merrell", tier: 2 },
  { src: jordanAir, alt: "Araikani", tier: 2 },
  { src: nikeLogo, alt: "Canelo", tier: 2 },

  { src: LeCoqLogo, alt: "Mervcik", tier: 3 },
  { src: vansLogo, alt: "Aqualic", tier: 3 },
  { src: converseLogo, alt: "Hidrata Estuardo Romero", tier: 3 },
  { src: adidasLogo, alt: "Frescos del Sur", tier: 3 },

  { src: LeCoqLogo, alt: "Hoka", tier: 4 },
  { src: hushPuppies, alt: "Dorhamann Bike", tier: 4 },
  { src: adidasLogo, alt: "Complejo Chacras", tier: 4 },

  { src: diadoraLogo, alt: "Pura Vida", tier: 5 },
  { src: converseLogo, alt: "Nexo Pie", tier: 5 },
];
function SponsorsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".sponsor-card");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // vuelve a ocultarse
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  const groupedSponsors = sponsors.reduce<Record<number, Sponsor[]>>(
    (acc, sponsor) => {
      if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
      acc[sponsor.tier].push(sponsor);
      return acc;
    },
    {}
  );
  return (
    <section id="sponsors" className="sponsors-section">

      <div className="sponsors-header">
        <div className="sponsors-icon">🏅</div>
        <h2 className="sponsors-title">SPONSORS</h2>
        <p className="sponsors-subtitle">
          Marcas que definen un estilo.
        </p>
      </div>
      <div ref={containerRef}>
        {Object.entries(groupedSponsors).map(([tier, sponsorsInTier]) => (
          <div key={tier} className="sponsors-group">
            {sponsorsInTier.map((sponsor, index) => (
              <div key={index} className={`sponsor-card tier-${sponsor.tier}`}>
                <img src={sponsor.src} alt={sponsor.alt} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
export default SponsorsSection;