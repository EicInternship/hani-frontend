import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getdetailsofProduct } from '../Service/Service';
import './produactdetailsstayle.css'


 function Productdetils() {
const params = useParams();
const[productDetails,setproductDetails]=useState([])
// console.log(params.id);
useEffect(()=>{
   getdetailsofProduct(params.id).then((res)=>{
     setproductDetails(res.data)
     console.log(res.data)
     console.log(productDetails.pname)
    })
},[productDetails])
  return (
    <div>        
 <div class = "main-wrapper">
        <div class = "container">
            <div class = "product-div">
                <div class = "product-div-left">
                    <div class = "img-container">
                    <img src={`http://localhost:8080/${productDetails.pimagename}`} alt="Card image"/>
                    </div> 
                </div>
                <div class = "product-div-right">
                    <span class = "product-name">{productDetails.pname}</span>
                    <span class = "product-price">Rs {productDetails.price}</span>
                    <div class = "product-rating">
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star-half-alt"></i></span>
                        <span>(350 ratings)</span>
                    </div>
                    <p class = "product-description">{productDetails.description}</p>
                    <div class = "btn-groups">
                        <button type = "button" class = "add-cart-btn"><i class = "fas fa-shopping-cart"></i>add to cart</button>
                        <button type = "button" class = "buy-now-btn"><i class = "fas fa-wallet"></i>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    </div>
  )
}
export default  Productdetils