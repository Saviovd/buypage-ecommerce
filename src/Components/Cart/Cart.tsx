import './Cart.scss'
import data from "../../Data/mock.json";
import {  useContext, useState } from 'react';
import { CartContext } from '../../Contexts/CartContext';


const { Icons, Product } = data;

export interface ICartProducts{
    key: number
    image?: string
    title: string
    price: number
    qtd: number
    isVisible?: boolean
    counter: string
}


export let cartItems: any[]= []


function Cart() {
    const [items] = useState(cartItems)
    const [haveProducts, setHaveProducts] = useState(cartItems.length > 0 ? true : false);
    const {setNumber} = useContext(CartContext)

    function deleteItem(product: any) {
    
        const pos = items.indexOf(product)
        console.log(pos)
        cartItems.splice(pos, 1)
        setNumber(cartItems.length)
        
        if (cartItems.length === 0) {
            setHaveProducts(false)
        }
    }

    return (
        <div className='cart_menu'>
            <h4 className='cart_tile'>Cart</h4>

            {haveProducts &&
            <div className='products_box'>
                {cartItems.map((item) => (
                    <div className="product">
                        <img className='product_img' src={Product.miniatures.miniature_1} alt="Product" />
                        <p className='product_name'>{item.title}</p>
                        <p className='price'>${item.price}.00</p>
                        <span className='price_counter'>x {item.qtd}</span>
                        <p className='price_total'>${item.qtd * item.price}.00</p>
                        <img onClick={() => (deleteItem(item))} className='delete' src={Icons.delete} alt="delete" />
                    </div>
                ))}
                <a className='cart_button' href="./#">checkout</a>
            </div> 
            }  
            {haveProducts === false && <h5 className='empty_cart'>Your Cart is Empty.</h5>}  

        </div>
    );
}
    
export default Cart;
    