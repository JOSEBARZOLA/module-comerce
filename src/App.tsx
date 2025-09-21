
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import ProductsListPage from "./pages/productsListPage";



function App() {
  return (
    <CartProvider>
     <ProductsListPage/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;