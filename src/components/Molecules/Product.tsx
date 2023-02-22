import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import formatCurrency from '../../utilities/formatCurrency'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { UserState } from '../../Redux/userReducer'

type ProductProps = {
	dataSet: {
		categoryId: number
		categoryName: string
		description: string
		name: string
		price: number
		productId: number
		stock: number
	}
}

export default function Product({ dataSet }: ProductProps) {
	const userLogin = useSelector<RootState, UserState>(
		(state: RootState) => state.userLogin
	)

	const { userInfo } = userLogin
	const userEmail = userInfo ? userInfo.Email : null

	const [order, setOrder] = useState(0)
	const navigate = useNavigate()

	const increaseOrder = () => {
		setOrder(order + 1)
	}

	const decreaseOrder = () => {
		setOrder(order - 1)
	}

	const buyNow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()

		if (userEmail == null) {
			alert('You need to login first')
			navigate('/Login')
		} else if (order == 0) {
			alert('Add more product')
		} else {
			let totalPrice = order * dataSet.price

			navigate(
				`/CheckOut/${userEmail}/${dataSet.productId}/${totalPrice}/${order}`
			)
		}
	}

	const addToCart = () => {

		if (userEmail == null) {
			alert('You need to login first')
			navigate('/Login')
		} else if (order == 0) {
			alert('Add more product')
		} else {
			axios
				.post(
					`Oder/AddToCart/${dataSet.productId}/${userEmail}/${order}`
				)
				.then(function (response) {
					if (response.status == 200) {
						alert('Product added to cart successfully')
						navigate('/Cart')
					} else {
						alert(response)
						navigate('/Cart')
					}
				})
				.catch(function (error) {
					if (error.response.status == 400) {
						alert(error.response.data.message)
						navigate('/Cart')
					} else {
						alert(error)
						navigate('/Cart')
					}
				})
		}
	}

	return (
		<Container>
			<Card className="card-style my-3 shadow-lg">
				<Row>
					<Col>
						<Card.Img
							className="mx-5 my-5"
							variant="top"
							src="https://picsum.photos/1000/667"
							height="500px"
							style={{ objectFit: 'cover' }}
						/>
					</Col>
					<Col>
						<Card.Body className="my-4 mx-5">
							<Card.Title className="fs-1 mb-4">
								Product Name -
								<span className="text-muted">
									{dataSet.name}
								</span>
							</Card.Title>
							<Card.Subtitle className="fs-2  mb-4">
								Product Category -{' '}
								<span className="text-muted">
									{dataSet.categoryName}
								</span>
							</Card.Subtitle>
							<Card.Subtitle className="fs-2">
								Description -{' '}
							</Card.Subtitle>
							<Card.Text className="mx-5 text-muted mb-4">
								<span>{dataSet.description}</span>
							</Card.Text>
							<Card.Subtitle className="fs-2 mb-4">
								Quantity -{' '}
								<span className="text-muted">
									{dataSet.stock}
								</span>
							</Card.Subtitle>
							<Card.Subtitle className="fs-2 mb-4">
								Price -{' '}
								<span className="text-muted">
									{formatCurrency(dataSet.price)}
								</span>
							</Card.Subtitle>

							<Card.Subtitle
								className="d-flex align-items-center mb-4"
								style={{ gap: '2rem' }}
							>
								<span className="fs-4">Add Count</span>
								{order <= 0 ? (
									<div>
										<Button className="btn-lg px-4 disabled">
											-
										</Button>
									</div>
								) : (
									<div>
										<Button
											className="btn-lg px-4"
											onClick={decreaseOrder}
										>
											-
										</Button>
									</div>
								)}

								<span className="fs-3">{order}</span>

								{order >= dataSet.stock ? (
									<div>
										<Button
											className="btn-lg px-4"
											disabled
										>
											+
										</Button>
									</div>
								) : (
									<div>
										<Button
											className="btn-lg px-4"
											onClick={increaseOrder}
										>
											+
										</Button>
									</div>
								)}
							</Card.Subtitle>
							<div className="d-flex justify-content-between align-items-baseline ">
								<span>
									<a href="/CheckOut">
										<Button
											className="w-100"
											variant="success mt-4"
											size="lg"
											onClick={buyNow}
										>
											Buy Now
										</Button>
									</a>
								</span>
								<span>
									<Button
										variant="primary mt-4"
										size="lg"
										onClick={addToCart}
									>
										Add to Cart
									</Button>
								</span>
							</div>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}
