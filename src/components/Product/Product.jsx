import './Product.css'

const Product = (props) => {
    console.log(props.product);
     const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <h5 className='product-name'>{name}</h5>
            <h4 className='product-price'>price: ${price}</h4>
            <p className='product-dis'>Manufacturer: {seller}</p>
            <p className='product-dis'>Rating: {ratings}</p>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;