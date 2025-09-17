import React from "react";
import SizeSelector from "@/components/buttonGroupSize";
import QuantitySelector from "@/components/quantitySelector";
import ColorSelector from "@/components/colorSelector";
import "@/assets/sass/_product-purchase-card.scss"
import PaymentInfo from "@/components/modalPaymentInfo";

interface Product {
  id: number;
  name: string;
  description: string;
  descriptionFull?: string;
  price: number;
  oldPrice?: number;
}

interface Props {
  product: Product;
}

const formatPrice = (price: number) => {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
};


const productColors = [
  { src: "https://imgs.search.brave.com/aTi_YgouFz-JJzsW3VcW7JtMsjdjppV0ddrWVkangh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mdXRib2xtYW5p/YS5jb20vbWVkaWEv/Y2F0YWxvZy9wcm9k/dWN0L2NhY2hlLzEv/c21hbGxfaW1hZ2Uv/MzAweC85ZGY3OGVh/YjMzNTI1ZDA4ZDZl/NWZiOGQyNzEzNmU5/NS9KL1IvSlIwNDQx/X2JvdGFzLWRlLWZ1/dGJvbC1hZGlkYXMt/cHJlZGF0b3ItcHJv/LWZ0LWZnLWNvbG9y/LXJvam9fbWluaWF0/dXJhLmpwZw", label: "Blanco/Rojo" },
  { src: "https://imgs.search.brave.com/c1nES0DRa0AEakxutN1TqiaNA3oyg2Vbb_QwqWbR4J8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuc29sb2RlcG9y/dGVzLmNvbS5hci9t/ZWRpYS9jYXRhbG9n/L3Byb2R1Y3QvY2Fj/aGUvN2M0ZjliMzkz/ZjBiOGNiNzVmMmI3/NGZlNWU5ZTUyYWEv/Yi9vL2JvdGluZXMt/ZGUtZnV0Ym9pLWFk/aWRhcy1wcmVkYXRv/ci1lZGdlLTMtZmct/YmxhbmNvLTEwMDAx/MGd3MjI3MzAwMS0x/LmpwZw", label: "Blanco/Azul" },
  { src: "https://imgs.search.brave.com/U9071IbBpYcJ4aDb_EFAd8OrZZ9M8EP6vUje9B1yENw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcm9k/dWN0aW9uLmNkbi52/YXlwb2wuY29tL3Zh/cmlhbnRzLzhwenhp/Y3NnN3J2ZmNtYnli/MWlnaHg4cHljbmMv/ZTgyYzhkNjE3MWRk/MjViYjUzOGYyZTcy/NjNiNWJjN2RmYzZh/NzkzNTJkODU5MjMw/NzRiZTc2ZGY1M2Zi/YzZmNA", label: "Negro/Blanco" },
  { src: "https://imgs.search.brave.com/PvBSPzQHU4V_hevqd71lUXXdb3GW_5wX_DNhhJ_vnYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnV0Ym9sZW1vdGlv/bi5jb20vaW1hZ2Vz/YXJ0aWN1bG9zLzI0/ODE4My9tZWRpYW5h/cy9ib3RhLWFkaWRh/cy1wcmVkYXRvci1l/bGl0ZS1sbC1mZy1s/dWNpZC1yZWQtd2hp/dGUtY29yZS1ibGFj/ay0xLndlYnA", label: "Rojo/Blanco" },
  { src: "https://imgs.search.brave.com/1-BOeep07lpWqNjsiEAKNry2ALCprBM06D0Zl_3vN48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuc29sb2RlcG9y/dGVzLmNvbS5hci9t/ZWRpYS9jYXRhbG9n/L3Byb2R1Y3QvY2Fj/aGUvM2NiN2Q3NWJj/MmE2NTIxMTQ1MWU5/MmM1MzgxMDQ4ZTkv/Yi9vL2JvdGluZXMt/ZGUtZnV0Ym9sLWFk/aWRhcy1wcmVkYXRv/ci1hY2N1cmFjeS0z/LWZnLWJsYW5jby0x/MDAwMTBnejAwMTQw/MDEtMS5qcGc", label: "Blanco/Negro" },
];

const ProductPurchaseCard: React.FC<Props> = ({ product}) => {
  return (
    <div className="card purchase-card">
      <div className="card-body">
        <h1 className="product-title">{product.name}</h1>

        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item ">
            {product.description}
          </li>
          <li className="list-group-item pl-0 pr-0">
            <p className="product-price">
              {formatPrice(product.price)}{" "}
              {product.oldPrice && (
                <small>
                  <s className="price-old">{formatPrice(product.oldPrice)}</s>
                </small>
              )}
            </p>
            <PaymentInfo />
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
  );
};

export default ProductPurchaseCard;
