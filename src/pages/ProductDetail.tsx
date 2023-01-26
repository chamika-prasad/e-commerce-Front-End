import { type } from 'os'
import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import PageName from '../components/PageName'
import Product from '../components/Product'
import ProductDetails from '../components/ProductDetails'

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
