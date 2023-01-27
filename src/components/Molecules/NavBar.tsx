import 'bootstrap/dist/css/bootstrap.css';
import logo from "./../Atoms/logo.png";
import user from "./../Atoms/user.png";
import shopping_cart from "./../Atoms/shopping-cart.png";
import home_page from "./../Atoms/house.png";
import {Container,Nav,Navbar as NavbarBs} from "react-bootstrap"
import { NavLink, useNavigate } from 'react-router-dom';

export default function NavBar() {


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
                <Nav.Link to="/Cart" as={NavLink}>
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
