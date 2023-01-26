import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import {Routes,Route} from 'react-router-dom';
import {Container} from "react-bootstrap"
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';
import Payment from './pages/Payment';

function App() {
  return (
    <>

    <Routes>

          <Route path='/' element={<ProductsList/>}/>

          <Route path='/Cart/:userEmail' element={<CartPage/>}/>

          <Route path='/ProductDetail/:productId' element={<ProductDetail/>}/>

          <Route path='/Register' element={<SignUp/>}/>

          <Route path='/Login' element={<SignIn/>}/>

          <Route path='/CheckOut' element={<Payment/>}/>

    </Routes>
    <Footer/>
    </>

  );
}

export default App;
