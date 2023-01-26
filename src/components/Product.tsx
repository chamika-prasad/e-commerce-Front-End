import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card,Col,Container, Row } from "react-bootstrap"
import formatCurrency from "../utilities/formatCurrency"
import {Routes,Route,useNavigate} from 'react-router-dom';

type ProductProps = {

    dataSet:{
        categoryId: number
        categoryName:string
        description: string
        name: string
        price:number
        productId: number
        stock: number
    }
}

    export default function Product({dataSet} : ProductProps){
        const [order,setOrder] = useState(0);
        const navigate = useNavigate();

        const increaseOrder = () => {
            setOrder(order+1)
        }

        const decreaseOrder = () => {
            setOrder(order-1)
        }

        const addToCart = () => {

            var userEmail = "user@example.com"

            if(userEmail == ""){

                alert('You need to login first')
                navigate('/Login');

            }else if(order == 0)
            {
                alert('Add more product')

            }else{
                    
                axios.post(`https://localhost:7225/api/Oder/AddToCart/${dataSet.productId}/${userEmail}/${order}`)
                    .then(function (response) {
                        console.log(response);
                     })
                    .catch(function (error) {
                        console.log(error);
                     });

                     alert('Product added to cart successfully')
                }
        }

    return (
        
        <Container>
            <Card className="card-style my-3 shadow-lg">
                <Row>
                    <Col>
                        <Card.Img className='mx-5 my-5'  variant="top" 
                                src='https://picsum.photos/1000/667' 
                                height="500px"
                                style={{objectFit:"cover"}} />
                    </Col>
                    <Col>
                        <Card.Body className='my-4 mx-5'>
                            <Card.Title className='fs-1 mb-4'>Product Name -<span className="text-muted">{dataSet.name}</span></Card.Title>
                            <Card.Subtitle className='fs-2  mb-4'>Product Category - <span className="text-muted">{dataSet.categoryName}</span></Card.Subtitle>
                            <Card.Subtitle className='fs-2'>Description - </Card.Subtitle>
                            <Card.Text className='mx-5 text-muted mb-4'><span>{dataSet.description}</span></Card.Text>
                            <Card.Subtitle className='fs-2 mb-4'>Quantity - <span className="text-muted">{dataSet.stock}</span></Card.Subtitle>
                            <Card.Subtitle className='fs-2 mb-4'>Price - <span className="text-muted">{formatCurrency (dataSet.price)}</span></Card.Subtitle>

                                <Card.Subtitle className='d-flex align-items-center mb-4' style={{gap:"2rem"}}>
                                    <span className='fs-4'>Add Count</span>
                                   {order<=0 ?
                                    <div>                                       
                                        <Button className='btn-lg px-4 disabled'>-</Button>
                                    </div>
                                    :
                                    <div>
                                        <Button className='btn-lg px-4' onClick={decreaseOrder}>-</Button>                                        
                                    </div>}


                                    <span className='fs-3'>{order}</span>

                                    {order>=dataSet.stock ?
                                    <div>                                                                              
                                        <Button className='btn-lg px-4' disabled>+</Button>
                                    </div>
                                    :
                                    <div>
                                        <Button className='btn-lg px-4' onClick={increaseOrder}>+</Button>                                        
                                    </div>}                                                        
                                </Card.Subtitle>     
                                <div className='d-flex justify-content-between align-items-baseline '>
                                    <span><a href="/CheckOut"><Button className='w-100' variant="success mt-4" size='lg'>Buy Now</Button></a></span>
                                    <span><Button variant="primary mt-4" size='lg' onClick={addToCart}>Add to Cart</Button></span>
                                </div>                                                          
                        </Card.Body>                                                
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}
