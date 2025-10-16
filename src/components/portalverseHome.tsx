import { useState } from "react";
import "@/assets/sass/_portal-verse.scss";

function PortalverseHome() {
  const [entering, setEntering] = useState(false);

  const handleClick = () => {
    setEntering(true);

    // Simulamos la duración de la animación del portal
    setTimeout(() => {
      alert("Has ingresado con éxito");
      setEntering(false); // Opcional: reset para volver al estado inicial
    }, 2000); // 2 segundos de animación
  };

  return (
    <section className={`background-universe ${entering ? "entering" : ""}`}>
      <div className="background-portal">
        <div className="portalgate-container">
          <div className="portal-sphere">
            <button className="portal-btn" onClick={handleClick}></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortalverseHome;
