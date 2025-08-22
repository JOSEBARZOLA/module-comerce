import "@/assets/sass/_cards-marcas.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function CardsMarcas() {
  return (
    <>
      <div className="py-3 py-md-5 py-xl-8 bg-white">
        <div className="container overflow-hidden">
          <div className="row gy-4">
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="card border-dark">
                <div className="card-body px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                  <img
                    src="/src/assets/img/nikeLogo.svg"
                    alt="Logo"
                    height="70"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="card border-dark">
                <div className="card-body px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                  <img
                    src="/src/assets/img/adidasLogo.svg"
                    alt="Logo"
                    height="70"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="card border-dark">
                <div className="card-body px-4 py-3 px-md-2 py-md-4 px-lg-8 py-lg-5">
                  <img
                    src="/src/assets/img/pumaLogo.svg"
                    alt="Logo"
                    
                    height="70"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="card border-dark">
                <div className="card-body px-4 py-3 px-md-2 py-md-4 px-lg-8 py-lg-5">
                  <img
                    src="/src/assets/img/hushPuppies.png"
                    alt="Logo"
                    height="70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsMarcas;
