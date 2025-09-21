import { Container, Row, Col } from "react-bootstrap";
import "@/assets/sass/_product-page.scss";
import ProductImages from "@/components/productImages";
import AdditionalDetails from "@/components/additionalDetailsProduct";
import products from "@/data/products/products.json";
import HeaderProductPage from "@/components/headerProductPage";
import ProductPurchaseCard from "@/components/productPurchaseCard";
import ModalOpen from "@/components/cartModal";
import { useState } from "react";


function ProductPage() {
  const product = products.find((p) => p.id === 1)!;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
 
  const detailsTabs = [
    {
      key: "description",
      label: "Descripción",
      content: (
        <div className="description">
          Descubrí la diferencia entre aspirar a marcar y saber que lo harás con
          los botines adidas Predator, diseñados para marcar goles. Los botines
          League tienen un exterior Hybridfeel que incorpora una textura 3D
          integral y aletas Strikescale de gran agarre para ayudarte a dominar
          la pelota en cada disparo. La suela de caucho con taco bajo te
          mantiene estable en campos de césped artificial.
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
      <HeaderProductPage onCartClick={openCart}/>
      
      <Container className="my-3" id="container-product">
        <Row className="details-snippet1">
          <ProductImages images={product.images || []} />
          <Col className="col-md-4 ">
            <ProductPurchaseCard product={product} />
          </Col>
        </Row>  
        <AdditionalDetails tabs={detailsTabs} />
        <ModalOpen isOpen={isCartOpen} onClose={closeCart} />
      </Container>
    </>
  );
}

export default ProductPage;
