import './Product.css'

const Product = (props) => {
    console.log(props.product);
     const {img, name, seller, quantity, price} = props.product;
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>price: ${price}</h4>
            <p>{seller}</p>
        </div>
    );
};

export default Product;