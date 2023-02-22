import 'bootstrap/dist/css/bootstrap.css'
import logo from './../Atoms/logo.png'
import user from './../Atoms/user.png'
import shopping_cart from './../Atoms/shopping-cart.png'
import log_out from './../Atoms/logout.png'
import home_page from './../Atoms/house.png'
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { UserState } from '../../Redux/userReducer'
import './NavBar.css'
import { useEffect, useState } from 'react'

export default function NavBar() {
	const [popup, setPopup] = useState<HTMLElement>(Object)

	const userLogin = useSelector<RootState, UserState>(
		(state: RootState) => state.userLogin
	)

	const { userInfo } = userLogin
	const Email = userInfo ? userInfo.Email : null

	const logoutHandler = () => {
		popup.classList.add('open-popup')
	}

	const logOut = () => {
		popup.classList.remove('open-popup')

		localStorage.removeItem('userInfo')
		alert('Logout successfully')
		window.location.reload()
	}

	const stayLogin = () => {
		popup.classList.remove('open-popup')
	}

	useEffect(() => {
		let str = document.getElementById('popup')
		if (str != null) {
			setPopup(str)
		}
	}, [])
	return (
		<>
			<NavbarBs
				sticky="top"
				className="navbar navbar-light bg-light shadow-sm"
			>
				<Container fluid>
					<Nav className="me-auto">
						<img className="logo" src={logo} alt="" />
					</Nav>
					<Nav>
						<Nav.Link to="/" as={NavLink}>
							<img className="px-2" src={home_page} alt="" />
						</Nav.Link>
						<Nav.Link to="/Cart" as={NavLink}>
							<img className="px-2" src={shopping_cart} alt="" />
						</Nav.Link>

						{Email ? (
							<Nav.Link onClick={logoutHandler}>
								<img className="px-2" src={log_out} alt="" />
							</Nav.Link>
						) : (
							<Nav.Link to="/Login" as={NavLink}>
								<img className="px-2" src={user} alt="" />
							</Nav.Link>
						)}
					</Nav>
				</Container>
			</NavbarBs>

			<div className="popup shadow-lg" id="popup">
				<img src="images/logout.png" alt="" />
				<h2>Do you really need to logout</h2>
				<button className="yes" type="button" onClick={logOut}>
					Yes
				</button>
				<button className="no" type="button" onClick={stayLogin}>
					No
				</button>
			</div>
		</>
	)
}
