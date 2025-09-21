import "@/assets/sass/_header-product-page.scss"


interface HeaderProductPageProps {
  onCartClick: () => void;
}
function HeaderProductPage({ onCartClick }: HeaderProductPageProps){
    return(
<section>
    <img src="https://i.postimg.cc/T1McCF79/image1.png" id="left" alt=""/>
    <img src="https://i.postimg.cc/Sxsc7mQ4/image2.png" id="right" alt=""/>

    <nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tienda</a></li>
        <li><button 
              className="cart-btn" id="btn_cart"
              onClick={onCartClick}
            >
              Carrito
            </button></li>
        <li><a href="#">LogIn/LogOut</a></li>
      </ul>
    </nav>
</section>
    );
}

export default HeaderProductPage;