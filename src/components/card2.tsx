import { Container, Col } from "react-bootstrap";
import "@/assets/sass/_card2.scss"


interface CardTwoProps {
  product: {
    name: string;
    description?: string;
    price: number;
    image?: string;
  };
}
function CardTwo({ product }: CardTwoProps) {
    return(
<Container>
  <div className="row justify-content-center">
    <Col >
      <div className="card product-card border-0 rounded-4 ">
        <div className="position-relative">
          <div className="overflow-hidden">
            <img className="card-img-top product-image"
              src={ "https://images.unsplash.com/photo-1544237526-cae15a57ed1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkwNDY5NjB8&ixlib=rb-4.1.0&q=85"
              }
              alt={product.name}/>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title mb-3 fw-bold">{product.name}</h5>
          <p className="card-text text-muted mb-4">{product.description || ''}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="price">${product.price}</span>
            <button className="btn btn-custom text-white px-3 py-2 rounded-pill">
                Comprar
              </button>
          </div>
        </div>
      </div>
    </Col>
  </div>
</Container>
    )
}
export default CardTwo;