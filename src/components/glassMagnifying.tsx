import { useState, useRef, useEffect } from "react";

interface Props {
  src: string;
  zoom?: number;
  size?: number;
}

const GlassMagnifying: React.FC<Props> = ({ src, zoom = 2, size = 250 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [imgDims, setImgDims] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (imgRef.current) {
      setImgDims({
        width: imgRef.current.clientWidth,
        height: imgRef.current.clientHeight,
      });
    }
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const { left, top } = imgRef.current.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;
    setShow(true);
    setPos({ x, y });
  };

  const getBgPosition = () => {
    if (!imgDims.width || !imgDims.height) return "0px 0px";

    const halfSize = size / 2;
    let bgX = pos.x * zoom - halfSize;
    let bgY = pos.y * zoom - halfSize;

    // Limitar bgX y bgY dentro de la imagen zoom
    bgX = Math.max(0, Math.min(imgDims.width * zoom - size, bgX));
    bgY = Math.max(0, Math.min(imgDims.height * zoom - size, bgY));

    return `-${bgX}px -${bgY}px`;
  };

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShow(false)}
    >
      <img ref={imgRef} src={src} alt="Product" className="img-fluid" />
      {show && (
        <div
          style={{
            position: "absolute",
            top: `${pos.y - size / 2}px`,
            left: `${pos.x - size / 2}px`,
            width: `${size}px`,
            height: `${size}px`,
            border: "2px solid rgba(0,0,0,0.3)",
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgDims.width * zoom}px ${
              imgDims.height * zoom
            }px`,
            backgroundPosition: getBgPosition(),
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default GlassMagnifying;
