import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Col,Container} from "react-bootstrap"
import ProductAtribute from './../Molecules/ProductAtribute';
import axios from 'axios';
import './../Molecules/ProductAtribute.css';


export default function ProductList() {

  const[dataSet,setDataSet]=useState<any[]>([]);

  let products
  
  useEffect(() => { 
    axios.get("Product/GetAllProducts").then((res)=>{
      products=res.data
      setDataSet([...products])
      
     }).catch((err)=>{
       alert(err.message)
     })
  }, []);
  
  // console.log(dataSet);

  return (
 <div className="product">
    <Row xs={1} md={2} lg={4} className="g-3">
       {dataSet.map(item =>  ( 

         <Col key={item.productId}>
          <ProductAtribute {...item}/>
         </Col> 
 
       ))}
    </Row>
    </div>  
  )
}
