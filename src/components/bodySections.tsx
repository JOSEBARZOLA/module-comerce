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
          <p>Es muy chida y además es responsiva...</p>
        </div>
        <div className="section-mask"></div>
      </section>
      <section className="sectionBody">
        <div className="section-content has-padding">
          <h1>Esta es una sección normal</h1>
          <p>
            Podemos notar que el contenido puede tener una altura automática.
          </p>
          <p>
            Con una altura automática podemos tener un contenido dinámico que no
            rompa el estilo del diseño
            <br />
            sin importar el dispositivo con el que se acceda al sitio.
          </p>
        </div>
      </section>
      <section className="sectionBody">
        <div className="section-content has-diagonal">
          <h1>Esta es una sección en diagonal y con parallax</h1>
        </div>
        <div className="section-mask bg-option-2 has-parallax"></div>
      </section>
      <section className="sectionBody">
        <div className="section-content has-padding">
          <h1>Gracias</h1>
        </div>
      </section>
    </div>
  );
}

export default BodySections;
