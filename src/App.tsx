
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";

import  PaymentBrick  from "@/modules/payments/mercadopago/paymentBrick";



function App() {
  return (
    <CartProvider>
      <PaymentBrick/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;