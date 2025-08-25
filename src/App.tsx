
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import  Modal  from "@/components/modal";


function App() {
  return (
    <CartProvider>
      <Modal/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;