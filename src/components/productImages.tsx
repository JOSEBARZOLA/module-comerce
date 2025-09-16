import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import GlassMagnifying from "@/components/glassMagnifying";
import "@/assets/sass/_product-images.scss"

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <Col className="col-md-8" id="container-images">
      <Row>
        {/* Miniaturas */}
        <Col className="col-md-2 mini-preview">
          {images.map((img: string, index: number) => (
            <img
              key={index}
              className="img-fluid mb-2"
              src={img}
              alt={`Preview ${index + 1}`}
              onMouseEnter={() => setSelectedImage(img)}
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
  );
};
export default ProductImages;
