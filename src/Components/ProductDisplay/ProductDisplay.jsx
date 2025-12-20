import React from 'react'
import "./ProductDisplay.css" 
import star_icon from "../../assets/star_icon.png" 
import star_dull_icon from "../../assets/star_dull_icon.png"
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
            </div>  
            <div className="productdisplay-img">
                <img className='productdesplay-main-img' src={product.image} alt="" height="500px" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" height="20px" />
                <img src={star_icon} alt="" height="20px" />
                <img src={star_icon} alt="" height="20px" />
                <img src={star_icon} alt="" height="20px" /> 
                <img src={star_dull_icon} alt="" height="20px"/> 
                <p>(130)</p>
            </div> 
        </div>
    </div>
  )
}

export default ProductDisplay