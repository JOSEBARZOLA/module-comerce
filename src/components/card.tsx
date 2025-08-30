import "@/assets/sass/_card.scss";

function Card() {
  return (
    <div className="card card--small">
      <div className="badge">HOT SALE</div>
      <div className="tilt">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1544237526-cae15a57ed1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkwNDY5NjB8&ixlib=rb-4.1.0&q=85"
            alt="Premium Laptop"
          />
        </div>
      </div>
      <div className="info">
        <div className="cat">High-Performance Laptop</div>
        <h2 className="title">UltraBook Pro X</h2>
        <p className="desc">
          Cutting-edge performance with Intel Core i9, 32GB RAM, and a 1TB SSD
          in a sleek, lightweight design.
        </p>
        <div className="bottom">
          <div className="price">
            <span className="old">$2,499</span>
            <span className="new">$1,999</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;