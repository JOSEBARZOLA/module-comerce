import { useEffect, useRef, useState } from "react";
import "@/assets/sass/_images-carousel.scss";

// Cargamos las imágenes de la carpeta


function ImagesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const isUserInteracting = useRef(false);
  const [images, setImages] = useState<string[]>([]);


    useEffect(() => {
    const modules = import.meta.glob("/src/assets/img/kim-activa-img/*.png", { eager: true });
    const imgs: string[] = Object.values(modules).map((mod: any) => mod.default ?? mod);
    setImages(imgs);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || images.length === 0) return;

    const startAutoScroll = () => {
      if (scrollInterval.current) return;
      scrollInterval.current = setInterval(() => {
        if (!isUserInteracting.current) {
          carousel.scrollLeft += 1;

          // cuando llega a la mitad, vuelve al inicio
          if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
          }
        }
      }, 32); // más fluido (~120fps)
    };

    const stopAutoScroll = () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
    };

    // === Drag scroll (desktop) ===
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
      const walk = (x - startX) * .2;
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
  }, [images]);

  return (
     <div className="carousel--images" ref={carouselRef}>
      {[...images, ...images].map((img, i) => (
        <div
          key={i}
          className="carousel--item"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
    </div>
  );
}

export default ImagesCarousel;
