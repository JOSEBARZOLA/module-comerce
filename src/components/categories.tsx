import "@/assets/sass/_categories.scss";
import { DiAndroid } from "react-icons/di";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { name: "Zapatillas", products: 3, id: "01" },
    { name: "Botines", products: 2, id: "02" },
    { name: "Ropa deportiva", products: 13, id: "03" },
    { name: "Calzado femenino", products: 22, id: "04" },
    { name: "Indumentaria femenina", products: 18, id: "05" },
    { name: "Camisetas", products: 4, id: "06" },
  ];
  return (
    <section className="section">
      <div className="main-section categories-view1-full">
        {/* FancyTitle */}
        <div className="fancy-title-view1 fancy-title-view1-color text-center">
          <h2>Categorías</h2>
          <p>Explora todo nuestro catálogo</p>
        </div>
        <span className="light-transparent"></span>
        <div className="container">
          <div className="row">
            {categories.map((cat) => (
              <div className="col-md-4 mb-4" key={cat.id}>
                <div className="categories-view1-wrap text-center p-3">
                  <span role="img" aria-label={cat.name} className="icon mb-2">
                    <DiAndroid size={40} />
                  </span>
                  <h5>
                    <Link to={`${cat.id}`}>{cat.name}</Link>
                  </h5>
                  <small className="text-muted">
                    ({cat.products} productos)
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Categories;
