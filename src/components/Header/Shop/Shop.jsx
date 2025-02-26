import { useState } from 'react';
import './shop.css'
import { useEffect } from 'react';
import Product from '../../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])

    const handelAddToCart = (product) => {
       const newCart = [...cart,product]
       setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>

            <div className="sumarry-container">
                <h1>sumary</h1>
                <h3>Selected Items: {cart.length}</h3>

            </div>
        </div>
    );
};

export default Shop;