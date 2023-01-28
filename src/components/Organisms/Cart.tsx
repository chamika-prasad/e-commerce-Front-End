import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CartItems from "./../Molecules/CartItem"
import './Cart.css';
import axios from 'axios';
import formatCurrency from '../../utilities/formatCurrency';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';


export default function Cart() {

  const[cartProductList,setcartProductList] = useState<any[]>([]) //to colect checked product ids
  const [total,setTotal] = useState<any>(0) //to get total price
  const [productCount,setProductCount] = useState<any>(0) //to get total product count
  const[dataSet,setDataSet]=useState<any[]>([]) //to get data from backend
  const navigate = useNavigate();
  //console.log(cartProductList);

  // productsList[] : `${cartProductList}`,
      // userEmail : `${userEmail}`,

  const handleChange = () => {

    var userEmail = Cookies.get('user_email')

    axios.post(`https://localhost:7225/api/Oder/PlaceOrderInCart/${userEmail}`,cartProductList)
    .then((res)=>{

    let state =res.data.state
    
    if(state === true){
      alert('order placed successfully')
      navigate('/');
    }else{
      alert('order placed Faild')
      navigate('/');
    }

     }).catch((err)=>{

      alert('order placed Faild')
        navigate('/');
     })
  }


  useEffect(() => { 

    var userEmail = Cookies.get('user_email')

    if(userEmail == null){
    
      alert('You need to login first')
      navigate('/Login');

    }else{

    axios.get(`https://localhost:7225/api/Oder/GetAllProductsInCart/${userEmail}`).then((res)=>{

    let products
    products=res.data
    setDataSet([...products]);

     }).catch((err)=>{
        navigate('/Login');
     })
    }   
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
              <CartItems item={item} index={index} setTotal={setTotal} total={total} productCount={productCount} setProductCount={setProductCount}  setcartProductList={setcartProductList} cartProductList={cartProductList}/>
          
            </Row>

        ))}

            <Row className='my-4'>
                <Col className="fs-2 text-center "><b></b></Col>
                <Col className="fs-2 text-center"><b>Total</b></Col>
                <Col className="fs-2 text-center"><b>{productCount}</b></Col>
                <Col className="fs-2 text-center"><b>{formatCurrency (total)}</b></Col>
                <Col className="fs-2 text-center"><b></b></Col>
            </Row>

            <Row className='my-4 '>
                <div className="form-outline mb-4 d-flex flex-row-reverse">
                    <Button type="submit" className="btn btn-success btn-block btn-lg w-25" onClick={handleChange}><b>Place Order</b></Button>
                </div> 
            </Row>
    </div>
    </div>
  )
}
