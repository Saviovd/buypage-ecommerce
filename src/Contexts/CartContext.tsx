import { createContext, useState } from "react";
import { cartItems } from "../Components/Cart/Cart";

type CartContextType = {
    number: number
    setNumber: any
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({children}: any) => {

    const [number, setNumber] = useState(cartItems.length)
    

    
    return (
        <CartContext.Provider value={{number, setNumber}}>
            {children}
        </CartContext.Provider>
    )
}