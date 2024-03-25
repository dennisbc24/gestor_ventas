import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]) 

    const addToCart = product  =>{
        cart.map((item)=>{
            if (item.id_product != product.id_product) {
                setCart([...cart, product])
            }
        })}
    const clearCart = () =>{
        setCart([])
    }
    return(
        <CartContext.Provider value={{cart,addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}