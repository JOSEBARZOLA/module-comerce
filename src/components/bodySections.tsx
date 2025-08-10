import "../assets/sass/_bodySection.scss";
function BodySections() {
  return (
    <div className="wrapper">
      <section className="sectionBody">
        <h1>Esta es una sección</h1>
      </section>
      <section className="sectionBody">
        <div className="section-content has-diagonal">
          <h1>Esta es una sección en diagonal</h1>
          <p>aca puede ir un boton</p>
        </div>
        <div className="section-mask">
          <div className="mask-bg"></div>
        </div>
      </section>
      <section className="sectionBody">
        <div className="section-content has-padding">
          <h1>Esta es una sección normal</h1>
          <p>
            El contenido puede tener una altura automática.
          </p>
          <p>
            podemos tener un contenido dinámico que no rompa el estilo del
            diseño
            <br />
            sin importar el dispositivo con el que se acceda al sitio.
          </p>
        </div>
      </section>
      <section className="sectionBody">
        <div className="section-content has-diagonal">
          <h1>Esta es una sección con parallax</h1>
        </div>
        <div className="section-mask bg-option-2 has-parallax">
          <div className="mask-bg"></div>
        </div>
      </section>
      <section className="sectionBody">
        <div className="section-content has-padding">
          <h1>aca puede ir un footer</h1>
        </div>
      </section>
    </div>
  );
}
export default BodySections;
