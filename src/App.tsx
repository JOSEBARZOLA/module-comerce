import Modal from "@/components/Modal";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";

function App() {
  return (
    <CartProvider>
      <Modal />
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}

export default App;
