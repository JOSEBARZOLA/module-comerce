import { ToastContainer } from 'react-toastify';
import Categories from './components/categories';
import CardSlider from './components/cardSlider';
import BodySections from './components/bodySections';
function App() {
  return (
    <>
    <CardSlider/>
      <Categories/>
      <BodySections/>
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}
export default App;