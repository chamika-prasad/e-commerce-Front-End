import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartProducts from "./../data/CartProducts.json"
import CartItems from "./CartItem"
import './Cart.css';
import axios from 'axios';
import formatCurrency from '../utilities/formatCurrency';

type CartProps =
{
  userEmail : any
}

export default function Cart(props : CartProps) {


  const [total,setTotal] = useState<any>(0)
  const [productCount,setProductCount] = useState<any>(0)
  const[dataSet,setDataSet]=useState<any[]>([])

  let userEmail = props.userEmail['userEmail']

  useEffect(() => { 
    axios.get(`https://localhost:7225/api/Oder/GetAllProductsInCart/${userEmail}`).then((res)=>{

    let products
    products=res.data
    setDataSet([...products]);
      
     }).catch((err)=>{
       alert(err.message)
     })
  }, []);
  
  return (
    
    <div>
        <div className='mx-5 cart'>
        <Container>
            <Row className=" row align-items-baseline justify-content-between shadow-sm py-3">
                <Col className="fs-2 text-center"><b>No</b></Col>
                <Col className="fs-2 text-center"><b>Product</b></Col>
                <Col className="fs-2 text-center"><b>Quantity</b></Col>
                <Col className="fs-2 text-center"><b>Price</b></Col>
                <Col className="fs-2 text-center"><b>Check Out</b></Col>
            </Row>
        </Container>

        {dataSet.map((item,index) => (
          

            <Row key={item.id} className="py-2">
              <CartItems item={item} index={index} setTotal={setTotal} total={total} productCount={productCount} setProductCount={setProductCount}/>
            </Row>

        ))}

            <Row className='my-4'>
                <Col className="fs-2 text-center "><b></b></Col>
                <Col className="fs-2 text-center"><b>Total</b></Col>
                <Col className="fs-2 text-center"><b>{productCount}</b></Col>
                <Col className="fs-2 text-center"><b>{formatCurrency (total)}</b></Col>
                <Col className="fs-2 text-center"><b></b></Col>
            </Row>
    </div>
    </div>
  )
}
