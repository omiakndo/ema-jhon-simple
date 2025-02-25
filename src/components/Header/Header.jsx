import logo from'../../images/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
            <a className='a' href="Order">Order</a>
            <a className='a' href="Order Review">Order Review</a>
            <a className='a' href="Manage Inventory">Manage Inventory</a>
            <a className='a' href="Login">Login</a>
           </div>
        </nav>
    );
};

export default Header;