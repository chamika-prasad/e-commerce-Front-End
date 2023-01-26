import React from 'react'
import { useParams } from 'react-router-dom';
import Cart from '../components/Cart'
import NavBar from '../components/NavBar'
import PageName from '../components/PageName'

export default function CartPage() {

  let userEmail = useParams();

  return (
    <div>
        <NavBar/>
        <div className='my-2 mx-5'>
          <PageName title ="Cart"/>
        </div>
        <Cart userEmail = {userEmail}/>
    </div>
  )
}
