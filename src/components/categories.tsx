import "../assets/sass/_categories.scss";
import { DiAndroid } from "react-icons/di";

function Categories() {
  return (
    <section className="section">
      <div className="main-section categories-view1-full">
        {/* FancyTitle */}
        <div className="fancy-title-view1 fancy-title-view1-color">
          <h2>Categorias</h2>
          <p>
            Explora todo nuestro catalogo.
          </p>
        </div>
        <span className="light-transparent"></span>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Categories List */}
              <div className="categories categories-view1">
                <ul className="row">
                  <li className="col-md-4">
                    <div className="categories-view1-wrap">
                      <i><DiAndroid/></i>
                      <a href="#">Zapatillas</a>
                      <small>(3 Open Vacancies)</small>
                      <span>01</span>
                    </div>
                  </li>
                  <li className="col-md-4">
                    <div className="categories-view1-wrap">
                      <i><DiAndroid/></i>
                      <a href="#">Botines</a>
                      <small>(2 Open Vacancies)</small>
                      <span>02</span>
                    </div>
                  </li>
                  <li className="col-md-4">
                    <div className="categories-view1-wrap">
                      <i><DiAndroid/></i>
                      <a href="#">Ropa deportiva</a>
                      <small>(13 Open Vacancies)</small>
                      <span>03</span>
                    </div>
                  </li>
                  <li className="col-md-4">
                    <div className="categories-view1-wrap">
                      <div>
                        <i><DiAndroid/></i>
                        </div>
                      
                      <a href="#">Calzado femenino</a>
                      <small>(22 Open Vacancies)</small>
                      <span>04</span>
                    </div>
                  </li>
                  <li className="col-md-4">
                    <div className="categories-view1-wrap">
                      <i><DiAndroid/></i>
                      <a href="#">Indumentaria femenina</a>
                      <small>(18 Open Vacancies)</small>
                      <span>05</span>
                    </div>
                  </li>
                  <li className="col-md-4">
                    <div className="categories-view1-wrap">
                      <i><DiAndroid/></i>
                      <a href="#">Camisetas</a>
                      <small>(4 Open Vacancies)</small>
                      <span>06</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;