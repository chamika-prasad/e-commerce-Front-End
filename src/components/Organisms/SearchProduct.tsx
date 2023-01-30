import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductAtribute from './../Molecules/ProductAtribute';
import './../Molecules/ProductAtribute.css';

type SearchProductProps =
{
    searchName : any
}

export default function SearchProduct(props : SearchProductProps) {

    const[dataSet,setProduct]=useState<any[]>([]);
    const navigate = useNavigate();

    let searchName = (props.searchName['searchName'])

    useEffect(() => { 
        axios.post("Product/SearchProduct",
        { 
            name:`${searchName}`
                    
        }).then((res)=>{
    
        let temp=res.data
          setProduct([...temp]);
          
         }).catch((err)=>{
          navigate('/');
         })
      }, []);


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
