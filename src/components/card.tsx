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
        <div className="feats">
          <span className="feat">4K Display</span>
          <span className="feat">16-Hour Battery</span>
          <span className="feat">Thunderbolt 4</span>
        </div>
        <div className="bottom">
          <div className="price">
            <span className="old">$2,499</span>
            <span className="new">$1,999</span>
          </div>
        </div>
        <div className="meta">
          <div className="rating">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFD700"
              stroke="#FFD700"
              strokeWidth="0.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFD700"
              stroke="#FFD700"
              strokeWidth="0.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFD700"
              stroke="#FFD700"
              strokeWidth="0.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFD700"
              stroke="#FFD700"
              strokeWidth="0.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FFD700"
              stroke="#FFD700"
              strokeWidth="0.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="rcount">245 Reviews</span>
          </div>
          <div className="stock">In Stock</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
