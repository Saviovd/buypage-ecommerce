import './BuySection.scss';
import { useContext, useState } from 'react';
import data from "../../Data/mock.json"
import { cartItems } from '../Cart/Cart';
import { CartContext } from '../../Contexts/CartContext';

const { Icons } = data

function BuySection() {
    
    const [key, setKey] = useState(cartItems.length)
    const {setNumber} = useContext(CartContext)

    const addProductToCart = (counter:number, key: number) => {
        console.log("click")

        if (counter > 0 && cartItems.length < 6 ) {
            cartItems.push({
                title: "Fall Limited Edition Sneakers",
                key: key,
                price: 125,
                qtd: counter,
                image: "images/image-product-1-thumbnail.jpg"
            })

            setKey(key + 1)
            setNumber(cartItems.length)
            setCounter(0)
        } 
        else if (counter < 1) {
            alert('Escolha um número de itens!')
        }

        console.log(cartItems)
    }
    
    const [counter, setCounter] = useState(0)


    function decrease() {
        setCounter( counter - 1)
        if (counter === 0) {
            setCounter(0)
        } 
    }
    function increase() {
        setCounter(counter + 1)
    }

    return (
        <div className="BuySection">
            
            <h4 className='about'>Sneaker Company</h4>

            <h2 className='about_title'>Fall Limited Edition Sneakers</h2>

            <p className='about_product'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            <p className='promotion_price'>$125.00</p>
            <span className='price'>$250.00</span>

            <div className='addToCart'>
                <div className='amount'>
                    <button className='less' onClick={decrease}>-</button>
                    <span className='counter'>{counter}</span>
                    <button className='more' onClick={increase}>+</button>
                </div>

                <button onClick={() => {
                    addProductToCart(counter, key)
                }} className='toBuy'><img className='cart' src={Icons.cart} alt="Add to Cart"/>Add to cart</button>
            </div>
        </div>
    );
}

export default BuySection;
