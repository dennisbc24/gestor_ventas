import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]) 

    const addToCart = (product)  =>{
        const newItem = {
            id_product:product.id_product,
            imageUrl:product.imageUrl,
            name:product.name,
            price:product.price,
            quantity: 6
        }
        
        if (product.id_product === newItem.id_product) {
            product.quantity = product.quantity + 1
            console.log('ya esta en el carrito');
        }else{
            setCart([...cart, newItem])
        }
     
    }
    const clearCart = () =>{
        setCart([])
    }
    return(
        <CartContext.Provider value={{cart,addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}