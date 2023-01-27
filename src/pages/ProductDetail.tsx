import { useParams } from 'react-router-dom'
import NavBar from '../components/Molecules/NavBar'
import PageName from '../components/Atoms/PageName'
import ProductDetails from '../components/Organisms/ProductDetails'

export default function ProductDetail() {

  let productId = useParams();
  
  return (
    <div>
        <NavBar/>
        <div className='my-2'>
          <PageName title ="Product Details"/>
        </div>
        <ProductDetails productId = {productId}/>

    </div>
  )
}
