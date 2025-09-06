import { useState } from "react";
import "@/assets/sass/_product-detail.scss"

interface Product {
  id: string;
  name: string;
  preview: string;
  photos: string[];
  description: string;
  size: number[];
  isAccessory: boolean;
  brand: string;
  price: number;
}

const productData: Product = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 25000,
};

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(productData.preview);

  return (
    
    <section id="product-detail">
      {/* Left Section */}
      <div id="left-section">
        <img
          id="image-preview"
          src={selectedImage}
          alt="Preview"
        />
      </div>

      {/* Right Section */}
      <div id="right-section">
        <h1 id="name">{productData.name}</h1>
        <h3 id="brand">{productData.brand}</h3>

        <h3 id="price-header">
          Price: $ <span id="price">{productData.price}</span>
        </h3>

        <h3>Detalles del producto</h3>
        <p id="description">{productData.description}</p>

        <h3>Product Preview</h3>
        <div id="thumbnail">
          {productData.photos.map((photo, index) => (
            <img
              key={index}
              id={`img${index}`}
              src={photo}
              alt={`preview${index}`}
              className={selectedImage === photo ? "border" : ""}
              onClick={() => setSelectedImage(photo)}
            />
          ))}
        </div>

        <div className="d-grid gap-1">
          <button className="btn btn-primary">
            <i className="fas fa-shopping-cart me-2"></i>Agregar
          </button>
          <button 
            className="btn btn-success">
            <i className="fas fa-wallet me-2"></i>Comprar
          </button>
        </div>
      </div>
    </section>
   
  );
}
