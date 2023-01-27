import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import NavBar from '../components/Molecules/NavBar'
import SearchProduct from '../components/Organisms/SearchProduct'
import SubNav from '../components/Molecules/SubNav'

export default function ProductSearch() {

    let searchName = useParams();
  return (
    <div>
        <NavBar/>
    <Container fluid className='my-3'>
        <SubNav pageName = "Product List"/>
        <SearchProduct searchName = {searchName}/>
    </Container>
    </div>
  )
}
