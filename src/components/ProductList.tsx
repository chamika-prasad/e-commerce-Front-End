import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Col,Container} from "react-bootstrap"
import productList from "./../data/ProductList.json";
import ProductAtribute from './ProductAtribute';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function ProductList() {

  const[dataSet,setDataSet]=useState<any[]>([]);

  let products
  
  useEffect(() => { 
    axios.get("https://localhost:7225/api/Product/GetAllProducts").then((res)=>{
      products=res.data
      setDataSet([...products])
      
     }).catch((err)=>{
       alert(err.message)
     })
  }, []);
  
  // console.log(dataSet);

  return (
 <>
    
    <Row xs={1} md={2} lg={4} className="g-3">
       {dataSet.map(item =>  ( 

         <Col key={item.productId}>
          <ProductAtribute {...item}/>
         </Col> 
 
       ))}


 </Row>
    </> 

  //   <>
  //  <button onClick={getUser}>button</button>
  //   </>

    
  )
}
