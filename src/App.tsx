import { ToastContainer } from 'react-toastify';
import ProductCard from './components/productCards.tsx';
function App() {
  return (
    <>
    <ProductCard/>
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}
export default App;