import { Container, Row, Col } from "react-bootstrap";
import "@/assets/sass/_product-page.scss";
import ProductImages from "@/components/productImages";
import SizeSelector from "@/components/buttonGroupSize";
import QuantitySelector from "@/components/quantitySelector";
import ColorSelector from "@/components/colorSelector";
import AdditionalDetails from "@/components/additionalDetailsProduct";
import products from "@/data/products/products.json";


function ProductPage() {
  const product = products.find((p) => p.id === 1)!;
  

  const productColors = [
    { src: "/img/blanco-rojo.png", label: "Blanco/Rojo" },
    { src: "/img/blanco-azul.png", label: "Blanco/Azul" },
    { src: "/img/negro-blanco.png", label: "Negro/Blanco" },
    { src: "/img/rojo-blanco.png", label: "Rojo/Blanco" },
    { src: "/img/blanco-negro.png", label: "Blanco/Negro" },
  ];
const detailsTabs = [
    {
      key: "description",
      label: "Descripción",
      content: (
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          magni assumenda consectetur facere eius.
        </div>
      ),
    },
    {
      key: "features",
      label: "Características",
      content: (
        <div className="characteristics">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            excepturi nam sequi perspiciatis recusandae.
          </p>
        </div>
      ),
    },
    {
      key: "specifications",
      label: "Especificaciones",
      content: (
        <div className="specification">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            consequatur deleniti nihil dolor.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Container className="my-3" id="container-product">
        <Row className="details-snippet1">
          <ProductImages images={product.images || []} />
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
                <SizeSelector />
                <ColorSelector colors={productColors} />
                <QuantitySelector />

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
        <AdditionalDetails tabs={detailsTabs} />
      </Container>
    </>
  );
}

export default ProductPage;
