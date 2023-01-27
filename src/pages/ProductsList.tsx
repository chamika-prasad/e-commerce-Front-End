import {Container} from "react-bootstrap"
import NavBar from '../components/Molecules/NavBar'
import ProductList from '../components/Organisms/ProductList'
import SubNav from '../components/Molecules/SubNav'

export default function ProductsList() {
  return (
    <div>
    <NavBar/>
    <Container fluid className='my-3'>
        <SubNav pageName = "Product List"/>
        <ProductList/>
    </Container>
    
    </div>
  )
}
