import "../assets/sass/__productCards.scss"
import {
MDBBtn,
MDBCard,
MDBCardBody,
MDBCardImage,
MDBCardText,
MDBCol,
MDBContainer,
MDBIcon,
MDBInput,
MDBRow,
MDBTypography,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function ProductCard() {
return (

  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol size="12">
        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
          <MDBCardBody className="p-0">
            <MDBRow className="g-0">
              <MDBCol lg="8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                      Carrito de compras
                    </MDBTypography>
                    <MDBTypography className="mb-0 text-muted">
                      3 Productos
                    </MDBTypography>
                  </div>

                  <hr className="my-4" />

                  <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <MDBTypography tag="h6" className="text-muted">
                        Shirt
                      </MDBTypography>
                      <MDBTypography tag="h6" className="text-black mb-0">
                        Cotton T-shirt
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                      <MDBTypography tag="h6" className="mb-0">
                        $ 744.00
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                        <MDBIcon fas icon="trash" />
                      </a>
                    </MDBCol>
                  </MDBRow>

                  <hr className="my-4" />

                  <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <MDBTypography tag="h6" className="text-muted">
                        Shirt
                      </MDBTypography>
                      <MDBTypography tag="h6" className="text-black mb-0">
                        Cotton T-shirt
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                      <MDBTypography tag="h6" className="mb-0">
                        $ 644.00
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                        <MDBIcon fas icon="trash" />
                      </a>
                    </MDBCol>
                  </MDBRow>

                  <hr className="my-4" />

                  <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <MDBTypography tag="h6" className="text-muted">
                        Shirt
                      </MDBTypography>
                      <MDBTypography tag="h6" className="text-black mb-0">
                        Cotton T-shirt
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                      <MDBTypography tag="h6" className="mb-0">
                        $ 464.00
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                        <MDBIcon fas icon="trash" />
                      </a>
                    </MDBCol>
                  </MDBRow>
                  <hr className="my-4" />

                  <div className="pt-5">
                    <MDBTypography tag="h6" className="mb-0">
                      <MDBCardText tag="a" href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Seguir comprando
                      </MDBCardText>
                    </MDBTypography>
                  </div>
                </div>
              </MDBCol>
              <MDBCol lg="4" className="bg-grey">
                <div className="p-4">
                  <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                    Summary
                  </MDBTypography>
                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-5">
                    <MDBTypography tag="h5" className="text-uppercase">
                      Precio total
                    </MDBTypography>
                    <MDBTypography tag="h5">$ 137.00</MDBTypography>
                  </div>

                  <MDBBtn color="dark" block size="lg">
                    Comprar
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

);
}

export default ProductCard;