import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,  name, seller, ratings, price} =props.product
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
          <p>Price: ${price} </p>
          <p><small>Manufacturer : {seller}</small></p>
          <p><small>Rating : {ratings} start</small></p>
          </div>
          <button onClick={()=>props.handleToCart(props.product)} className='product-btn'><h6 className='btn-text'>Add To Cart</h6>
          <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default Product;