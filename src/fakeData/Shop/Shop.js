import React, { useEffect, useState } from 'react';
import Product from '../../Components/Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            
            <div className='products-container'>
                {
                    products.map(product=> <Product
                        key={product.id} product={product}
                    ></Product>)
                }
            </div>
            <div className='order-container'>Order summary</div>
        </div>
    );
};

export default Shop;