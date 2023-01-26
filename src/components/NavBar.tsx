import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./../assets/images/logo.png";
import home_page from "./../assets/images/house.png";
import user from "./../assets/images/user.png";
import shopping_cart from "./../assets/images/shopping-cart.png";
import {Container,Nav,Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    var userEmail = "user@example.com"
  return (
    <NavbarBs sticky='top' className="navbar navbar-light bg-light shadow-sm">
        <Container fluid>            
            <Nav className='me-auto'>
                <img className="logo" src={logo}  alt=""/>
            </Nav>                 
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                    <img className="px-2" src={home_page}  alt=""/>
                </Nav.Link>
                <Nav.Link to={`/Cart/${userEmail}`} as={NavLink}>
                    <img className="px-2" src={shopping_cart}  alt=""/>
                </Nav.Link>
                <Nav.Link to="/Login" as={NavLink}>
                    <img className="px-2" src={user}  alt=""/>
                </Nav.Link>
            </Nav>                
        </Container>
    </NavbarBs>
  )
}
