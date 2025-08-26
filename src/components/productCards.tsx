import "@/assets/sass/_product-cards.scss";
import { Row, Col, Card, Container } from "react-bootstrap";
import pumaLogo from "@/assets/img/sponsors/pumaLogo.svg";
const products = [pumaLogo];

function ProductCard() {
  return (
    <>
      <Row className="justify-content-center align-items-center h-100">
        <Col>
          <Card className="no-border-card shadow p-4">
            <Row className="align-items-center">
              <Container className="col-md-3 col-lg-1 cl-  justify-content-center align-items-center h-100" >
                {products.map((logo) => (
                <div  key={logo}>
                  {" "}
                  <img className="img-products"  src={logo}  />
                </div>
              ))}
              </Container >
              
              <Col className="col-md-6 ">
                <div className="info-main">
                  <a href="#" className="h5 title">
                    {" "}
                    Apple Watch Series 3{" "}
                  </a>
                  <p>
                    Monitor your health. Track your workouts. Get the motivation
                    you need to achieve your fitness goals. And stay connected
                    to the people and information you care about.
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-md-3">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="h5 mb-0 text-gray text-through me-2">
                    $299.00
                  </span>
                </div>
                
                <div className="d-grid gap-2 mt-4">
                  <a className="btn btn-tertiary btn-sm" href="#">
                    Detalles
                  </a>
                  <a href="#" className="btn btn-tertiary btn-sm">
                    <span className="fa fa-trash me-1"></span>
                    Quitar del carrito
                  </a>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default ProductCard;
