/* eslint-disable react/prop-types */
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  
     const {img, name, seller, ratings, price} = props.product;
    
     
     const handelAddToCart = props.handelAddToCart
     
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <h5 className='product-name'>{name}</h5>
            <h4 className='product-price'>price: ${price}</h4>
            <p className='product-dis'>Manufacturer: {seller}</p>
            <p className='product-dis'>Rating: {ratings}</p>
            <button onClick={()=>handelAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;