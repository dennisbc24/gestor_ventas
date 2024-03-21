import { useId } from "react"
import  cartIcon  from "../icons/cart.png";
import './cart.css'
export const Cart = () =>{
const idCart = useId()
    return(
        <>
        
        <label htmlFor={idCart} className="cart-button" >
            <img src={cartIcon} alt="cart" className="image_cart"/>
            </label>
            
            <input type="checkbox" id={idCart} hidden/>
            <aside className="cart">
                <ul>
                    <li>
                        <img className="image_item_cart" src="https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230106_232710.jpg" alt="ropero-item" />
                        <div className="item_title">
                            <strong>Ropero</strong> - S/.100
                        </div>
                        <footer className="footer_cart">    
                            <small>Cantidad: 1</small>
                            <button>+</button>
                        <button>-</button>
                        </footer>
                        

                    </li>
                </ul>
                <button>
                    limpiar
                </button>
            </aside>
        
            
        </>
    )
}