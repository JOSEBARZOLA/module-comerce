import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import GlassMagnifying from "@/components/glassMagnifying";
import "@/assets/sass/_product-images.scss"

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
   const validImages = Array.isArray(images) ? images : [];
const [selectedImage, setSelectedImage] = useState<string>(validImages[0] || "");



  // Actualizar selectedImage si cambian las imágenes (al cambiar de producto)
  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <Col className="col-md-8" id="container-images">
      <Row>
        {validImages.length > 0 ? (
  <>
    <Col className="col-md-2 mini-preview">
      {validImages.map((img, index) => (
        <img
          key={index}
          className="img-fluid mb-2"
          src={img}
          alt={`Preview ${index + 1}`}
          onMouseEnter={() => setSelectedImage(img)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </Col>
    <Col className="col-md-10">
      <div className="product-image">
        <GlassMagnifying src={selectedImage} zoom={2} size={250} />
      </div>
    </Col>
  </>
) : (
  <p>No hay imagen disponible</p>
)}
      </Row>
    </Col>
  );
};
export default ProductImages;
