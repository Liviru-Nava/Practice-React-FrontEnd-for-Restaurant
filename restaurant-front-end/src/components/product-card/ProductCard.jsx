import React from "react";	
import './ProductCard.css';

const ProductCard = (props) => {
    const {title, imgUrl, price} = props.item
    return(
        <div className="single_product">
            <div className="product_img">
                <img src={imgUrl} alt="" className="w-100"/>
            </div>
            <div className="product_content">
                <div className="rating text-center">
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                </div>
                <h6>{title}</h6>
                <div className="d-flex align-items-center justify-content-center">
                    <span className="price d-flex align-items-center">Price: $<span>{price}</span></span>
                    <span className="shopping_icon"><i className="ri-shopping-cart-line"></i></span>
                </div>
            </div>
        </div>
    )
}
export default ProductCard
