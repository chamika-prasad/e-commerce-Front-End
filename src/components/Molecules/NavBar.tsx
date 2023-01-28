import 'bootstrap/dist/css/bootstrap.css';
import logo from "./../Atoms/logo.png";
import user from "./../Atoms/user.png";
import shopping_cart from "./../Atoms/shopping-cart.png";
import log_out from "./../Atoms/logout.png";
import home_page from "./../Atoms/house.png";
import {Container,Nav,Navbar as NavbarBs} from "react-bootstrap"
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { UserState } from '../../Redux/userReducer';

export default function NavBar() {

    const navigate = useNavigate();

    const userLogin = useSelector<RootState, UserState>(
        (state: RootState) => state.userLogin
      );
    
      const { userInfo } = userLogin;
      const Email = userInfo ? userInfo.Email:null;

      const logoutHandler = () => {
        localStorage.removeItem("userInfo")
      };


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

            {Email ? (
              <Nav.Link onClick={logoutHandler}>
                <img className="px-2" src={log_out}  alt=""/>
              </Nav.Link>
            ) : 
            (
                <Nav.Link to="/Login" as={NavLink}>
                    <img className="px-2" src={user}  alt=""/>
                </Nav.Link>
            )}
        </Nav>               
        </Container>
    </NavbarBs>
  )
}
