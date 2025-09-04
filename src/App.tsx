
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import ProductsPage from "@/pages/productsPage";



function App() {
  return (
    <CartProvider>
      <ProductsPage/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;