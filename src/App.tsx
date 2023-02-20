import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'
import { Routes, Route } from 'react-router-dom'
import CartPage from './pages/CartPage'
import Footer from './components/Atoms/Footer'
import Payment from './pages/Payment'
import ProductSearch from './pages/ProductSearch'

// const App: React.FC = () => 
function App(){
	return (
		<>
			<Routes>
				<Route path="/" element={<ProductsList />} />

				<Route path="/Cart" element={<CartPage />} />

				<Route
					path="/ProductDetail/:productId"
					element={<ProductDetail />}
				/>

				<Route
					path="/SearchProduct/:searchName"
					element={<ProductSearch />}
				/>

				<Route path="/Register" element={<SignUp />} />

				<Route path="/Login" element={<SignIn />} />

				<Route
					path="/CheckOut/:userEmail/:productId/:totalPrice/:order"
					element={<Payment />}
				/>

				{/* <Route path='/Button' element={<BtnComponent/>}/> */}
			</Routes>
			<Footer />
		</>
	)
}

export default App
