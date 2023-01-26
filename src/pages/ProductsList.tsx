import React from 'react'
import {Container} from "react-bootstrap"
import NavBar from '../components/NavBar'
import PageName from '../components/PageName'
import ProductList from '../components/ProductList'
import SubNav from '../components/SubNav'

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
