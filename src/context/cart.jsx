import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]) 

    const addToCart = product=>{
        const productInCartIndex = cart.findIndex(item => item._id === product._id)
        
         if (productInCartIndex >= 0) {
            const newCart= structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
         }

         //product isn't in cart
         setCart(prevState => ([
            ...prevState, {
                ...product,
                quantity: 1
            }
         ]))
        }
    const decreaseQuantity = product =>{
        const productInCartIndex = cart.findIndex(item => item._id === product._id)
        
         if (productInCartIndex >= 0) {
            const newCart= structuredClone(cart)
            if (newCart[productInCartIndex].quantity >= 1) {
                newCart[productInCartIndex].quantity -= 1
            }
            
            return setCart(newCart)
         }

         //product isn't in cart
         setCart(prevState => ([
            ...prevState, {
                ...product,
                quantity: 1
            }
         ]))
        }
    const removeFromCart = product=>{
        setCart(prevState => prevState.filter(item => item._id != product._id))
        
    }

    const clearCart = () =>{setCart([])}
    
    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,decreaseQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}