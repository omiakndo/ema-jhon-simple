import { useState } from 'react';
import './shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
           
            console.log(addedProduct);
        }
        setCart(savedCart)
    },[products])

    const [cart, setCart] = useState([])

    const handelAddToCart = (product) => {
    //    const newCart = [...cart,product]
        let newCart = [];
        const exists = cart.find(pd=> pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];

        }
        else{
            exists.quantity = exists.quantity + 1;
            const remainning = cart.filter(pd => pd.id !== product.id);
            newCart = [...remainning, exists]
        }
       setCart(newCart)
       addToDb(product.id)
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