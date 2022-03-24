import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,  name, seller, ratings, price} =props.product
    return (
        <div className='product'>
          <img src={img} alt="" />
          <h6 className='product-name'>{name}</h6>
          <p>Price: ${price} </p>
          <p><small>Manufacturer : {seller}</small></p>
          <p><small>Rating : {ratings} start</small></p>
        </div>
    );
};

export default Product;