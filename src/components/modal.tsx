import { useState } from "react";
import "./productCards";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
} from "mdb-react-ui-kit";
import ProductCard from "./productCards";

export default function ModalOpen() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <MDBContainer className="py-5 h-100 bg-transparent">
      <MDBBtn onClick={toggleOpen}>Modal carrito</MDBBtn>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex="-1">
        <ProductCard />
      </MDBModal>
    </MDBContainer>
  );
}
