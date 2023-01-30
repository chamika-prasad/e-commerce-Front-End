import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Col,Container} from "react-bootstrap"
import axios from 'axios';
import Product from './../Molecules/Product';


type ProductDetailsProps =
{
  productId : any
}

export default function ProductDetails(props : ProductDetailsProps) {
  
  const[dataSet,setProduct]=useState<any>({});

  let id = Number(props.productId['productId'])
  
  
  useEffect(() => { 
    axios.get(`Product/GetProduct/${id}`).then((res)=>{

    let temp={}
      temp=res.data
      setProduct({...temp});
      
     }).catch((err)=>{
       alert(err.message)
     })
  }, []);

  return (

    <div>
        <Col >
            <Product dataSet={dataSet}/>
        </Col>

    </div>
  )
}
