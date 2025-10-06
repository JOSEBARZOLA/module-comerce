import { useEffect, useRef, useState } from "react";
import "@/assets/sass/_hero-carousel-video.scss";

function HeroCarouselVideo() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const isUserInteracting = useRef(false);
  const [videoList, setVideoList] = useState<string[]>([]);

  useEffect(() => {
    // Cargar videos
    const modules = import.meta.glob("/src/assets/vid/kim_activa/*.mp4", {
      eager: true,
    });
    const vids: string[] = Object.values(modules).map(
      (mod: any) => mod.default ?? mod
    );
    setVideoList(vids);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || videoList.length === 0) return;

    const startAutoScroll = () => {
      if (scrollInterval.current) return;
      scrollInterval.current = setInterval(() => {
        if (!isUserInteracting.current) {
          carousel.scrollLeft -= 1; // 👈 al revés que las imágenes
          if (carousel.scrollLeft <= 0) {
            carousel.scrollLeft = carousel.scrollWidth / 2;
          }
        }
      }, 32);
    };

    const stopAutoScroll = () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
    };

    // === Drag scroll ===
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      isUserInteracting.current = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      stopAutoScroll();
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
      isUserInteracting.current = false;
      startAutoScroll();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 0.2;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mousemove", handleMouseMove);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mousemove", handleMouseMove);
    };
  }, [videoList]);

  return (
    <section className="hero">
      <div className="hero__video-wrapper">
        <div className="hero__player-wrapper" ref={carouselRef}>
          <div className="hero__carousel-track">
            {[...videoList, ...videoList].map((vid, i) => (
              <div className="hero__carousel-item" key={i}>
                <video
                  src={vid}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="hero__video"
                  onMouseEnter={(e) => {
                    e.currentTarget.play(); // se reproduce desde donde estaba
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause(); // se pausa en el frame actual
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero__overlay"></div>
    </section>
  );
}

export default HeroCarouselVideo;
