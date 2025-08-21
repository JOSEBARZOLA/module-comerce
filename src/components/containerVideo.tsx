import { MDBContainer } from "mdb-react-ui-kit";
import { useCallback, useRef } from "react";
import "../assets/sass/_containerVideo.scss"

 function ContainerVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = useCallback(() => {
      videoRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
      videoRef.current?.pause();
  }, []);

  return (
    <MDBContainer>   
      <video
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
        loop
        className="w-100"
      >
        <source
          src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
          type="video/mp4"
        />
      </video>
      <div className="containerTitle"><h1>TE ESTAMOS ESPERANDO...</h1></div>
    </MDBContainer>
  );
}
export default ContainerVideo;