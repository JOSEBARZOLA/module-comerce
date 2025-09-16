import { Container, Row, Col } from "react-bootstrap";
import "@/assets/sass/_product-page.scss";
import { useState } from "react";
import GlassMagnifying from "@/components/glassMagnifying";
import SizeSelector from "@/components/buttonGroupSize"
import QuantitySelector from "@/components/quantitySelector"

function ProductPage() {
  const images = [
    "https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858754_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/24/18/37/model-858748_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858753_960_720.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]); // primera por defecto

  return (
    <>
      <Container className="my-3" id="container-product">
        <Row className="details-snippet1">
          <Col className="col-md-8" id="container-images">
            <Row>
              {/* Miniaturas */}
              <Col className="col-md-2 mini-preview">
                {images.map((img, index) => (
                  <img
                    key={index}
                    className="img-fluid mb-2"
                    src={img}
                    alt={`Preview ${index + 1}`}
                    onMouseEnter={() => setSelectedImage(img)} // cambia al pasar el mouse
                    style={{ cursor: "default" }}
                  />
                ))}
              </Col>

              {/* Imagen principal */}
              <Col className="col-md-10">
                <div className="product-image">
                  <GlassMagnifying src={selectedImage} zoom={2} size={250} />
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-4 ">
            <div className="card">
              <div className="card-body">
                <h1>Apple iPhone 10 Pro Max</h1>
                <div className="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item pl-0 pr-0 pt-2 pb-2">
                    Brand: <a href="#">Apple</a>
                  </li>
                  <li className="list-group-item pl-0 pr-0 pt-2 pb-2">
                    Model: 10 Pro Max
                  </li>

                  <li className="list-group-item pl-0 pr-0 pt-2 pb-2">
                    Availability: In Stock
                  </li>

                  <li className="list-group-item pl-0 pr-0">
                    <p className="m-0 h4">
                      $1.827,82{" "}
                      <small>
                        <s className="price-small">$2.127,82</s>
                      </small>
                    </p>
                  </li>
                </ul>

                
                  <SizeSelector/>
                  <Row className="mini-preview">
                    <h5>Color: (el del producto)</h5>
                    {images.map((img, index) => (
                      <img
                        key={index}
                        className="img-fluid mb-2"
                        src={img}
                        alt={`Preview ${index + 1}`}
                        style={{ cursor: "default" }}
                      />
                    ))}
                  </Row>
                <QuantitySelector/>

                <div className="btn-group btn-group-lg col-12 mb-2">
                  <button className="btn btn-agregar">
                    <i className="me-2"></i>Agregar al carrito
                  </button>
                </div>
                <div className="btn-group btn-group-lg col-12">
                  <button className="btn btn-comprar">
                    <i className="me-2"></i>Comprar ahora
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="additional-details my-5 text-center">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-tabs">
              <a
                className="nav-link active"
                data-toggle="tab"
                data-bs-toggle="tab"
                href="#home"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                data-bs-toggle="tab"
                href="#menu1"
              >
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                data-bs-toggle="tab"
                href="#menu2"
              >
                Specifications
              </a>
            </li>
          </ul>

          <div className="tab-content mt-4 mb-3">
            <div className="tab-pane container active" id="home">
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident magni assumenda consectetur facere eius. Minus
                reprehenderit placeat ullam vel ab eaque sequi impedit, ipsum
                soluta temporibus fugit ipsa. Dolor libero modi molestiae dicta,
                vitae minus laborum error cum consequatur autem minima eveniet
                porro obcaecati quibusdam possimus eos, debitis sint magnam,
                explicabo accusantium aspernatur ipsa repellat tempore nihil.
                Cum placeat voluptate dignissimos dicta harum consectetur, nemo
                debitis tempore. Quod culpa perspiciatis unde natus. Modi
                expedita, ab repellendus reiciendis sed voluptate, culpa laborum
                ad, consectetur quas tempora quo? Quibusdam doloribus magnam
                maxime, accusamus officiis odit reiciendis labore laudantium.
                Molestiae corporis temporibus ad?.
              </div>
            </div>
            <div className="tab-pane container fade" id="menu1">
              <div className="review">
                <p>PUT REVIEWS DESIGN HERE</p>
              </div>
            </div>
            <div className="tab-pane container fade" id="menu2">
              <div className="specification">
                <p>PUT SPECIFICATIONS HERE</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
