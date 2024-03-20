import { useId } from "react"
import  cartIcon  from "../icons/cart.png";

export const Cart = () =>{
const idCart = useId()
    return(
        <>
            <label htmlFor={idCart} className="cart-button" >
            <img src={cartIcon} alt="cart" />
            </label>
            
            <input type="checkbox" id={idCart} hidden/>
            <aside>
                <ul>
                    <li>
                        <img src="https://prueba1dennis.s3.sa-east-1.amazonaws.com/dibujos/20230106_232710.jpg" alt="ropero-item" />
                        <div>
                            <strong>Ropero</strong> - S/.100
                        </div>
                        <footer>    
                            <small>Cantidad: 1</small>
                        </footer>
                        <button>+</button>
                    </li>
                </ul>
                <button>
                    limpiar
                </button>
            </aside>
        </>
    )
}