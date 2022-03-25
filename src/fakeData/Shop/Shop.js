import React, { useEffect, useState } from 'react';
import Cart from '../../Components/Cart/Cart';
import Product from '../../Components/Product/Product';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart = getStoreCart();
        const savedCart =[]
        for(const id in storedCart){
            const addproducts = products.find(product=> product.id === id);
         if(addproducts){
            const quantity = storedCart[id]
            addproducts.quantity = quantity
            
            savedCart.push(addproducts)
         }
        }
        setcart(savedCart)
    },[products])
    const [cart, setcart]=useState([])
    const handleToCart = (selectProduct)=>{
        let newCart= []
      const exits = cart.find(product => product.id ===selectProduct.id)
        if(!exits){
            selectProduct.quantity =1;
            newCart =[...cart, selectProduct]
        }
        else{
            const rest = cart.filter(product=> product.id !== selectProduct.id);
            exits.quantity = exits.quantity +1;
            newCart =[...rest, exits]
        }
       setcart(newCart)
       addToDb(selectProduct.id)
    }

    return (
        <div className='shop-container'>
            
            <div className='products-container'>
                {
                    products.map(product=> 
                    <Product
                        key={product.id} 
                        product={product}
                        handleToCart={handleToCart}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;