import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CartItems from './../Molecules/CartItem'
import './Cart.css'
import axios from 'axios'
import formatCurrency from '../../utilities/formatCurrency'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { UserState } from '../../Redux/userReducer'

export default function Cart() {
	const userLogin = useSelector<RootState, UserState>(
		(state: RootState) => state.userLogin
	)

	const { userInfo } = userLogin
	const userEmail = userInfo ? userInfo.Email : null

	const [cartProductList, setcartProductList] = useState<any[]>([]) //to colect checked product ids
	const [total, setTotal] = useState<any>(0) //to get total price
	const [productCount, setProductCount] = useState<any>(0) //to get total product count
	const [dataSet, setDataSet] = useState<any[]>([]) //to get data from backend
	const navigate = useNavigate()

	const handleChange = () => {
		axios
			.post(`Oder/PlaceOrderInCart/${userEmail}`, cartProductList)
			.then((res) => {
				console.log(userEmail, cartProductList)

				let state = res.data.state

				if (state === true) {
					alert('order placed successfully')
					navigate('/')
				} else {
					alert('order placed Faild')
					navigate('/')
				}
			})
			.catch((err) => {
				alert('order placed Faild')
				navigate('/')
			})
	}

	useEffect(() => {
		if (userEmail == null) {
			alert('You need to login first')
			console.log('test')

			navigate('/Login')
		} else {
			axios
				.get(`Oder/GetAllProductsInCart/${userEmail}`)
				.then((res) => {
					let products
					products = res.data
					setDataSet([...products])
				})
				.catch((err) => {
					alert('No any product in cart')
				})
		}
	}, [])

	return (
		<div>
			<div className="mx-5 cart">
				<Container>
					<Row className=" row align-items-baseline justify-content-between shadow-sm py-3">
						<Col className="fs-2 text-center">
							<b>No</b>
						</Col>
						<Col className="fs-2 text-center">
							<b>Product</b>
						</Col>
						<Col className="fs-2 text-center">
							<b>Quantity</b>
						</Col>
						<Col className="fs-2 text-center">
							<b>Price</b>
						</Col>
						<Col className="fs-2 text-center">
							<b>Check Out</b>
						</Col>
					</Row>
				</Container>

				{dataSet.map((item, index) => (
					<Row key={item.id} className="py-2">
						<CartItems
							item={item}
							index={index}
							setTotal={setTotal}
							total={total}
							productCount={productCount}
							setProductCount={setProductCount}
							setcartProductList={setcartProductList}
							cartProductList={cartProductList}
						/>
					</Row>
				))}

				<Row className="my-4">
					<Col className="fs-2 text-center ">
						<b></b>
					</Col>
					<Col className="fs-2 text-center">
						<b>Total</b>
					</Col>
					<Col className="fs-2 text-center">
						<b>{productCount}</b>
					</Col>
					<Col className="fs-2 text-center">
						<b>{formatCurrency(total)}</b>
					</Col>
					<Col className="fs-2 text-center">
						<b></b>
					</Col>
				</Row>

				<Row className="my-4 ">
					<div className="form-outline mb-4 d-flex flex-row-reverse">
						<Button
							type="submit"
							className="btn btn-success btn-block btn-lg w-25"
							onClick={handleChange}
							hidden
						>
							<b>Place Order</b>
						</Button>
					</div>
				</Row>
			</div>

			{total !== 0 ? (
				<div className="container mt-5 px-5">
					<div className="row">
						<div className="col">
							<div className="card p-3">
								<h1 className="text-uppercase">
									Payment details
								</h1>
								<div className="inputbox mt-3">
									<input
										type="text"
										name="name"
										className="form-control"
										placeholder="Name on card"
										required
									/>
								</div>

								<div className="row">
									<div className="col">
										<div className="inputbox mt-3 mr-2">
											<input
												type="text"
												name="name"
												className="form-control"
												required
												placeholder="Card Number"
											/>
										</div>
									</div>

									<div className="col">
										<div className="d-flex flex-row">
											<div className="inputbox mt-3 mr-2">
												<input
													type="text"
													name="name"
													className="form-control"
													required
													placeholder="Expiry"
												/>
											</div>

											<div className="inputbox mt-3 mr-2">
												<input
													type="text"
													name="name"
													className="form-control"
													required
													placeholder="CVV"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-4 mb-4 d-flex justify-content-between">
								<Button
									className="btn btn-success btn-block btn-lg w-100"
									type="submit"
									onClick={handleChange}
								>
									<h5>
										<b>Pay {formatCurrency(total)}</b>
									</h5>
								</Button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p className="default"></p>
			)}
		</div>
	)
}
