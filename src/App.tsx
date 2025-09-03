
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import VerMas from "@/components/modalVerMas";



function App() {
  return (
    <CartProvider>
      <VerMas/>
     
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;