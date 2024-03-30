import { useId } from "react"
import  cartIcon  from "../icons/cart.png";
import './cart.css'
import { useCart } from "../hooks/useCart";

function CartItem ({imageUrl, name, price, quantity, addToCart,decreaseQuantity}) {
    return(
<li>
    <img className="image_item_cart" 
        src={imageUrl} 
        alt={name} 
    />
    <div className="item_title">
        <strong>{name}</strong> - S/{price}
    </div>
    <footer className="footer_cart">    
        <small>Cantidad: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={decreaseQuantity}>-</button>
    </footer>
</li>
    )
}

export const Cart = () =>{
const idCart = useId()
const {cart, clearCart, addToCart, decreaseQuantity} = useCart()
    return(
        <>
        
        <label htmlFor={idCart} className="cart-button" >
            <img src={cartIcon} alt="cart" className="image_cart"/>
            </label>
            
            <input type="checkbox" id={idCart} hidden/>
            <aside className="cart">
                <ul>
                    {
                    cart.map( element => (
                        <CartItem 
                            key={element._id} 
                            addToCart={()=> addToCart(element)}
                            decreaseQuantity={()=>decreaseQuantity(element)}
                            {...element}
                        
                        />
                    ))
                    
                    }
                    
                </ul>
                <button onClick={clearCart}>
                    limpiar
                </button>
            </aside>
        
            
        </>
    )
}