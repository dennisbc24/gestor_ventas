import { useId } from "react"
import  cartIcon  from "../icons/cart.png";
import './cart.css'
import { useCart } from "../hooks/useCart";

export const Cart = () =>{
const idCart = useId()
const {cart, clearCart} = useCart()
    return(
        <>
        
        <label htmlFor={idCart} className="cart-button" >
            <img src={cartIcon} alt="cart" className="image_cart"/>
            </label>
            
            <input type="checkbox" id={idCart} hidden/>
            <aside className="cart">
                <ul>
                    {
                    cart.map( element =>(
                        <li key={crypto.randomUUID()}>
                            <img className="image_item_cart" src={element.imageUrl} alt={element.name} />
                        <div className="item_title">
                            <strong>{element.name}</strong> - S/{element.price}
                        </div>
                        <footer className="footer_cart">    
                            <small>Cantidad: {element.quantity}</small>
                            <button>+</button>
                            <button>-</button>
                        </footer>
                        </li>
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