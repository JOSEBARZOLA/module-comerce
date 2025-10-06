import "@/assets/sass/_info-header-product.scss"


function InfoProduct () {
return(
<div className="info-header">
<h1 className="product-title">{product.name}</h1>

        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item ">{product.description}</li>
          <li className="list-group-item pl-0 pr-0">
            <p className="product-price">
              {formatPrice(product.price)}{" "}
              {product.oldPrice && (
                <small>
                  <s className="price-old">{formatPrice(product.oldPrice)}</s>
                </small>
              )}
            </p>
          </li>
        </ul>
</div>

);

}

export default InfoProduct;