
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import ProductsPage from "@/components/sidebarFilter";


function App() {
  return (
    <CartProvider>
      <ProductsPage/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;