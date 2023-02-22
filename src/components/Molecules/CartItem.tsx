import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import formatCurrency from "../../utilities/formatCurrency"
import './CartItem.css';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../Redux/store';
import { UserState } from '../../Redux/userReducer';

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

    setcartProductList: any
    cartProductList: any
}

export default function CartItem ({item,index,setTotal,total,productCount,setProductCount,setcartProductList,cartProductList}: CartItemProps){

  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );

  const { userInfo } = userLogin;
  const userEmail = userInfo ? userInfo.Email:null;

  const navigate = useNavigate();
  
  if(userEmail == null){
    
    alert('You need to login first')
    navigate('/Login');
  }

  const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.checked){

      let totalPrice = total + item.totalPrice
      let count = productCount + item.quantity
      setTotal(totalPrice)
      setProductCount(count)

      //add item when checked
      setcartProductList([...cartProductList,item.id])

   
      
    }else{
     
      let totalPrice = total - item.totalPrice
      let count = productCount - item.quantity
      let itemId = item.id
      setTotal(totalPrice)
      setProductCount(count)

      //remove item when unchecked
      var index = cartProductList.indexOf(itemId)
      cartProductList.splice(index, 1);
      setcartProductList(cartProductList)

    }
    
  }

  return (
    <div>
      {/* <cartContext.Provider value={totalOrderValue}> */}
      <Container>
        
        <div className=" row align-items-baseline justify-content-between shadow-sm" >
                    <span className="fs-4 col-2 text-center">{index+1}.</span>
                    <span className="fs-2 col-2 text-center">{item.productName}</span>
                    <span className="fs-4 text-muted col-2 text-center">{item.quantity}</span>
                    <span className="fs-4 text-muted col-2 text-center">{formatCurrency (item.totalPrice)}</span>
                    <span className="col-2 text-center"><input type="checkbox" className='checkbox' onChange={handleChange}/></span>
                                     
        </div>
        </Container>
        {/* </cartContext.Provider> */}
    </div>
   
  )
  
}


