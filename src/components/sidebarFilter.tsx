import "@/assets/sass/_sidebarfilter.scss";
import CardTwo from "@/components/card2";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import FilterSection from "@/components/filterProps";
import productsData from "@/data/products/products.json"; 
import type { Product } from "@/types/Product";




function ProductsPage() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const products: Product[] = productsData as Product[];
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);


  useEffect(() => {
    // Selecciona 28 productos aleatorios sin repetir
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 28);
    setRandomProducts(selected);
  }, [products]);

  return (
    <section>

      
      <div id="main-demo">
        <section className="my-1 my-md-1">
          <Container>
            <Row className="gy-3 row_card">
              {randomProducts.map((product) =>(
                <Col  className="col-12 col-md-4 col-xl-3">
                  <CardTwo key={product.id} product={product} />
                </Col>
              ))}
            </Row>
          </Container>  
        </section>
      </div>
      <aside
        className="bsb-sidebar-1 offcanvas offcanvas-start"
        tabIndex={-1}
        id="bsbSidebar1"
        aria-labelledby="bsbSidebarLabel1"
      >
        <div className="offcanvas-header">
          <h5 className="">Filtros</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body pt-0">
          <hr className="sidebar-divider m-1" />
          <FilterSection title="Categorias">
            <form>
              <div className="form-group nav-link-icon">
                <input type="checkbox" />
                <label className="nav-link-text">Botines</label>
              </div>
              <div className="form-group nav-link-icon">
                <input type="checkbox" />
                <label className="nav-link-text">Calzado Femenino</label>
              </div>
              <div className="form-group nav-link-icon">
                <input type="checkbox" />
                <label className="nav-link-text">Zapatillas Masculinas</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">Camisetas</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">Ropa Casual</label>
              </div>
              <div className="form-group nav-link-icon">
                <input type="checkbox" />
                <label className="nav-link-text">Camperas Deportivas</label>
              </div>
            </form>
          </FilterSection>
          <FilterSection title="Talles">
            <form>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">M</label>
              </div>
              <div className="form-group nav-link-icon">
                <input type="checkbox" />
                <label className="nav-link-text">L</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">S</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">X</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">XL</label>
              </div>
            </form>
          </FilterSection>
          <FilterSection title="Rango de precio">
            <div className="mb-3">
              <label className="nav-link-text">
                Precio mínimo: ${minPrice}
              </label>
              <Form.Range
                min={0}
                max={5000}
                step={10}
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <label className="nav-link-text">
                Precio máximo: ${maxPrice}
              </label>
              <Form.Range
                min={5000}
                max={10000}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </FilterSection>
          <FilterSection title="Numero">
            <form>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">41</label>
              </div>
              <div className="form-group nav-link-icon">
                <input type="checkbox" />
                <label className="nav-link-text">42</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">43</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">44</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">45</label>
              </div>
            </form>
          </FilterSection>
          <div className=" col-10 ms-3" id="busc-btn">
            <button className="btn text-white col-12 col-mb-6" id="btn-buscar">
              Buscar
            </button>
          </div>
        </div>
      </aside>
      <button
        className="btn btn-primary position-fixed top-0 start-0 m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#bsbSidebar1"
        aria-controls="bsbSidebar1"
      >
        <i className="bi bi-filter-left"></i> Filtros
      </button>
    </section>
  );
}
export default ProductsPage;