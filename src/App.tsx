import { ToastContainer } from 'react-toastify';
import Categories from './components/categories';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000}/>
      <Categories/>
    </>
  )
}
export default App;