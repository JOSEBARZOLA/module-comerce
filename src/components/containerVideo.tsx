import { Container } from "react-bootstrap";
import { useCallback, useRef } from "react";
import "@/assets/sass/_containerVideo.scss";

function ContainerVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  return (
    <Container>
      <video
        ref={videoRef}
        loop
        className="w-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source
          src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
          type="video/mp4"
        />
      </video>
      <div className="containerTitle">
        <h1>TE ESTAMOS ESPERANDO...</h1>
      </div>
    </Container>
  );
}

export default ContainerVideo;
