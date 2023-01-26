import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import formatCurrency from "../utilities/formatCurrency"
import { cartContext,totalOrderValue } from '../context/CartContext';
import './CartItem.css';

type CartItemProps = {
    item : {
      id : number,
      productId : number,
      productName : string,
      totalPrice : number,
      quantity : number
      },
    index : number
    setTotal : any
    total : any
    productCount : any
    setProductCount :any
}

export default function CartItem ({item,index,setTotal,total,productCount,setProductCount}: CartItemProps){


  const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.checked){

      let totalPrice = total + item.totalPrice
      let count = productCount + item.quantity
      setTotal(totalPrice)
      setProductCount(count)
      
    }else{
     
      let totalPrice = total - item.totalPrice
      let count = productCount - item.quantity
      setTotal(totalPrice)
      setProductCount(count)
    }
    
  }


  return (


    <div>
      <cartContext.Provider value={totalOrderValue}>
      <Container>
        
        <div className=" row align-items-baseline justify-content-between shadow-sm" >
                    <span className="fs-4 col-2 text-center">{index+1}.</span>
                    <span className="fs-2 col-2 text-center">{item.productName}</span>
                    <span className="fs-4 text-muted col-2 text-center">{item.quantity}</span>
                    <span className="fs-4 text-muted col-2 text-center">{formatCurrency (item.totalPrice)}</span>
                    <span className="col-2 text-center"><input type="checkbox" className='checkbox' onChange={handleChange}/></span>
                                     
        </div>
        </Container>
        </cartContext.Provider>
    </div>
   
  )
  
}