
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import ProductsListPage from "@/pages/productsListPage";
import ProductPage from "@/pages/productPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <CartProvider>
      
     <Router> 
        <Routes>
          <Route path="/" element={<ProductsListPage />} />
          <Route path="/product/:id" element={<ProductPage/>}/>
          
        </Routes>
      </Router>
      <ToastContainer position="top-left" autoClose={2000} />
    </CartProvider>
  );
}
export default App;