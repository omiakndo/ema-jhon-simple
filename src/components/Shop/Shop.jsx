import { useState } from 'react';
import './shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
                <Cart cart ={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;