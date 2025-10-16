import { useEffect, useRef, useState } from "react";
import "@/assets/sass/_hero-carousel-video.scss";

function HeroCarouselVideo() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const isUserInteracting = useRef(false);
  const [videoList, setVideoList] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 991px)").matches
      : false;

  useEffect(() => {
    const modules = import.meta.glob("/src/assets/vid/kim_activa/*.mp4", { eager: true });
    setVideoList(Object.values(modules).map((mod: any) => mod.default ?? mod));
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || videoList.length === 0) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const startAutoScroll = () => {
      if (scrollInterval.current) return;
      scrollInterval.current = setInterval(() => {
        if (!isUserInteracting.current && !isMobile) {
          carousel.scrollLeft -= 1;
          if (carousel.scrollLeft <= 0) carousel.scrollLeft = carousel.scrollWidth / 2;
        }
      }, 46);
    };
    const stopAutoScroll = () => scrollInterval.current && (clearInterval(scrollInterval.current), scrollInterval.current = null);

    // === Drag genérico ===
    const startDrag = (pageX: number) => { isDown = true; isUserInteracting.current = true; startX = pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; stopAutoScroll(); };
    const moveDrag = (pageX: number) => { if (!isDown) return; carousel.scrollLeft = scrollLeft - (pageX - startX) * 0.2; };
    const endDrag = () => { isDown = false; isUserInteracting.current = false; startAutoScroll(); };

    // Eventos mouse
    carousel.addEventListener("mousedown", e => startDrag(e.pageX));
    carousel.addEventListener("mousemove", e => moveDrag(e.pageX));
    ["mouseup", "mouseleave"].forEach(ev => carousel.addEventListener(ev, endDrag));

    // Eventos touch
    carousel.addEventListener("touchstart", e => startDrag(e.touches[0].pageX));
    carousel.addEventListener("touchmove", e => moveDrag(e.touches[0].pageX));
    carousel.addEventListener("touchend", endDrag);

    startAutoScroll();

    // IntersectionObserver mobile/tablet
    if (isMobile) {
      const videos = carousel.querySelectorAll("video");
      observerRef.current = new IntersectionObserver(
        entries => {
          let maxRatio = 0, centralVideo: HTMLVideoElement | null = null;
          entries.forEach(entry => { if (entry.intersectionRatio > maxRatio) { maxRatio = entry.intersectionRatio; centralVideo = entry.target as HTMLVideoElement; } });
          videos.forEach(v => v === centralVideo ? v.play().catch(() => {}) : v.pause());
        },
        { root: carousel, threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
      );
      videos.forEach(v => observerRef.current?.observe(v));
    }

    return () => {
      stopAutoScroll();
      ["mousedown","mousemove","mouseup","mouseleave","touchstart","touchmove","touchend"].forEach(ev => carousel.removeEventListener(ev as any, ev.includes("move") || ev.includes("start") ? moveDrag : endDrag));
      observerRef.current?.disconnect();
    };
  }, [videoList, isMobile]);

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
                  onMouseEnter={e => !isMobile && e.currentTarget.play()}
                  onMouseLeave={e => !isMobile && e.currentTarget.pause()}
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
