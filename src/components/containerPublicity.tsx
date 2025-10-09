import { useEffect, useRef, useState } from "react";
import "@/assets/sass/_container-publicity.scss";
import publicity01 from "@/assets/vid/ads/publicity01.mp4";


function ContainerPublicity() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showClose, setShowClose] = useState(false);
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50); // Aplica animación de entrada
    const playTimer = setTimeout(() => {
      // Inicia el video a los 2s
      videoRef.current?.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }, 2000);
    return () => clearTimeout(playTimer);
  }, []);
  useEffect(() => {
    // Bloquea scroll mientras el overlay esté visible
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);
  const handleVideoPlay = () => {
    // Cuando el video comienza a reproducirse
    const closeTimer = setTimeout(() => {
      setShowClose(true); // Inicia el temporizador de 4s para mostrar la X
    }, 4000);
    return () => clearTimeout(closeTimer);
  };
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setVisible(false), 500);
  };
  if (!visible) return null;

  return (
    <div className="video_overlay">
      <div
        className={`container_video ${animate ? "animate_fall" : "animate_up"}`}
      >
        <div className="video_controls">
          {!showClose ? (
            <div className="spinner_publicity"></div>
          ) : (
            <button className="close_btn" onClick={handleClose}>
              ✕
            </button>
          )}
        </div>
        <video
          ref={videoRef}
          loop
          className="video_publicity w-100"
          onPlay={handleVideoPlay}
        >
          <source src={publicity01} type="video/mp4" />
        </video>
      </div>
      
      <div className="text-piramide">
        <span className="word word1">TE</span>
        <span className="word word2">ESTAMOS</span>
        <span className="word word3">ESPERANDO</span>
      </div>
     
    </div>
  );
}
export default ContainerPublicity;
