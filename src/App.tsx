
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import ProductPage from "./pages/productPage";


function App() {
  return (
    <CartProvider>
      <ProductPage/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;