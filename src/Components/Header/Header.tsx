import './Header.scss';
import { useContext, useState } from 'react';
import Cart from '../Cart/Cart';
import data from '../../Data/mock.json'
import { CartContext } from '../../Contexts/CartContext';

const { Icons, User } = data

function Header() {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const {number} = useContext(CartContext)

    const [isOpen, setIsOpen] = useState(false)
    const [isActived, setIsActived] = useState(`navigation isMenuInactive`)

    function toggleMenu () {
        setIsOpen(!isOpen)
        if (isOpen === true) {
            setIsActived(`navigation isMenuActive`)
        }
        else if (isOpen === false){
            setIsActived(`navigation isMenuInactive`)
        }
    }

    return (
        <div className="Header">
        
        <img src={Icons.menu} alt="menu bar" className='menu_bar' onClick={toggleMenu} />
        <img className="logo" src={Icons.logo} alt="logo" />


        <nav  onClick={toggleMenu} className={`${isActived}`}>
            <img src={Icons.close} alt="close icon" className='close_menu' onClick={() => setIsOpen(false)}/>
            <ul className='navigation_list'>
                <li className='navigation_list-item'>Collections</li>
                <li className='navigation_list-item'>Men</li>
                <li className='navigation_list-item'>Women</li>
                <li className='navigation_list-item'>About</li>
                <li className='navigation_list-item'>Contact</li>
            </ul>
        </nav>

        <div className='user'>
            <div data-descr={number} className='cart_section'>
                <img onClick={() => setIsCartOpen(!isCartOpen)}  className='cart' src={Icons.cart} alt="Cart" />
            </div>
            <img className='avatar' src={User.photo} alt="Avatar" />
        </div>

        {isCartOpen && 
            <Cart />
        }
    
        </div>);
}

export default Header;
