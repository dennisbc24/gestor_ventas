import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart.jsx";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
    const decreaseQuantity = product => dispatch({
        type: 'DECREASE_QUANTITY',
       payload:product
    })
    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })
    const clearCart = () => dispatch({type: 'CLEAR_CART'})
    
    
    return(
        <CartContext.Provider value={{cart:state,addToCart,removeFromCart,decreaseQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

