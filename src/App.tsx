
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import ModalOpen from "./components/modal";

function App() {
  return (
    <CartProvider>
    
     <ModalOpen/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;