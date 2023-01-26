import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Col,Container} from "react-bootstrap"
import ProductDetail from "./../data/ProductDetails.json";
import { Card } from "react-bootstrap"
import formatCurrency from "../utilities/formatCurrency"
import axios from 'axios';
import Product from './Product';

type ProductDetailsProps =
{
  productId : any
}

export default function ProductDetails(props : ProductDetailsProps) {
  
  const[dataSet,setProduct]=useState<any>({});

  let id = Number(props.productId['productId'])
  
  
  useEffect(() => { 
    axios.get(`https://localhost:7225/api/Product/GetProduct/${id}`).then((res)=>{

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
