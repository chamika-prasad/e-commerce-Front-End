import { useParams } from 'react-router-dom'
import CheckOut from '../components/Molecules/CheckOut'
import NavBar from '../components/Molecules/NavBar'

export default function Payment() {
	let params = useParams()

	let userEmail = params['userEmail']
	let productId = Number(params['productId'])
	let totalPrice = Number(params['totalPrice'])
	let quantity = Number(params['order'])

	return (
		<div>
			<NavBar />
			<CheckOut
				userEmail={userEmail}
				productId={productId}
				totalPrice={totalPrice}
				quantity={quantity}
			/>
		</div>
	)
}
