
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import CardsMarcas from "./components/cardsMarcas";


function App() {
  return (
    <CartProvider>
      <CardsMarcas />
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}

export default App;
