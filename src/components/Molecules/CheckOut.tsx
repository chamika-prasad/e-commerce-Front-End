import './CheckOut.css'
import formatCurrency from '../../utilities/formatCurrency'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { UserState } from '../../Redux/userReducer'
import { RootState } from '../../Redux/store'

type checkOutProps = {
	userEmail: any
	productId: number
	totalPrice: number
	quantity: number
}

export default function CheckOut({
	userEmail,
	productId,
	totalPrice,
	quantity,
}: checkOutProps) {
	const navigate = useNavigate()

	const makePayment = () => {
		if (userEmail == null) {
			alert('You need to login first')
			navigate('/Login')
		}

		axios
			.post(`Oder/PlaceOrdersDirectly/${productId}`, {
				userEmail: `${userEmail}`,
				quantity: `${quantity}`,
			})
			.then((res) => {
				let temp = res.data.state

				if (temp == true) {
					alert('order placed successfully')
					navigate('/')
				} else {
					alert('order placed Faild')
					navigate('/')
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<div className="checkout">
				<div className="container p-0 wrapbox">
					<div className="card px-4 checkoutbox">
						<p className="h8 py-3 details">Payment Details</p>
						<div className="row gx-3">
							<div className="col-12">
								<div className="d-flex flex-column">
									<p className="text mb-1 paragraph words">
										Person Name
									</p>
									<input
										className="form-control mb-3 inputfied"
										type="text"
										placeholder="Name"
									/>
								</div>
							</div>
							<div className="col-12">
								<div className="d-flex flex-column">
									<p className="text mb-1 paragraph words">
										Card Number
									</p>
									<input
										className="form-control mb-3 inputfied"
										type="text"
										placeholder="1234 5678 1234 5678"
									/>
								</div>
							</div>
							<div className="col-6">
								<div className="d-flex flex-column">
									<p className="text mb-1 paragraph words">
										Expiry
									</p>
									<input
										className="form-control mb-3 inputfied"
										type="text"
										placeholder="MM/YYYY"
									/>
								</div>
							</div>
							<div className="col-6">
								<div className="d-flex flex-column">
									<p className="text mb-1 paragraph words">
										CVV/CVC
									</p>
									<input
										className="form-control mb-3 pt-2 inputfied"
										type="password"
										placeholder="***"
									/>
								</div>
							</div>
							<div className="col-12">
								<button
									className="btn btn-primary mb-3 payment"
									type="submit"
									onClick={makePayment}
								>
									<span className="ps-3">
										Pay <>{formatCurrency(totalPrice)}</>{' '}
									</span>
									<span className="fas fa-arrow-right arrow"></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
