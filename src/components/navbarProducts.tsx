import "@/assets/sass/_navbar-product.scss";
import { useEffect, useState } from "react";


function NavbarProducts() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // bajando -> ocultar
        setShow(false);
      } else {
        // subiendo -> mostrar
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  return (
    <nav className={`navbar bsb-navbar bsb-navbar-caret ${show ? "show" : "hide"}`}>
      <div className="container position-relative justify-content-center">
        <div className="wrap">
          <div className="search">
            <input type="text" placeholder=" " />
            <div>
              <svg>
                <use xlinkHref="#path" />
              </svg>
            </div>

            {/* Definición del símbolo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
              <symbol viewBox="0 0 160 28" id="path">
                <path
                  d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
                  transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
                ></path>
              </symbol>
            </svg>
          </div>
        </div>
        <button
          className="navbar-toggler position-absolute start-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#bsbSidebar1" // 👈 apunta al ID de tu Sidebar real
          aria-controls="bsbSidebar1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill={"#ffffffff"}
            viewBox="0 0 24 24"
          >
            {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
            <path d="M3 6H21V8H3z"></path>
            <path d="M6 11H18V13H6z"></path>
            <path d="M9 16H15V18H9z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
export default NavbarProducts;
