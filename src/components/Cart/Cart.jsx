/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart);

    let total = 0;
    let shipping =0;
    let quantity = 0
    for(const product of cart ){
        // if(product.quantity === 0){
        //     product.quantity = 1
        // };
        quantity = quantity +product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping  * product.quantity;

    }

    const tax = total*7/100;
    const grandTotal = total + shipping + tax;
    return (
       
        <div className='cart'>
             
        <h1>Order Summary</h1>
           <p>Selected Items: {quantity}</p>
           <p>Total Price: ${total}</p>
           <p>Total Shipping Charge: ${shipping}</p>
           <p>Tax: ${parseInt(tax)}</p>
           <h2>Grand Total: ${parseInt(grandTotal)}</h2>
           <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
           <button className='review-btn'>Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
   </div>
    );
};

export default Cart;