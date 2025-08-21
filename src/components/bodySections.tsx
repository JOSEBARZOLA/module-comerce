import "@/assets/sass/_body-section.scss";
import Categories from "./categories";
import ContainerVideo from "./containerVideo";

function BodySections() {
  return (
    <div className="wrapper">
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
        <h1>Esta es una sección</h1>
      </section>
      <section className="sectionBody">
        <div className="section-content has-padding" id="categ">
          <Categories />
        </div>
      </section>
      <section className="sectionBody">
        <div className="section-content has-diagonal"></div>
        <div className="section-mask bg-option-2 has-parallax">
          <div>
            <ContainerVideo />
          </div>
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
