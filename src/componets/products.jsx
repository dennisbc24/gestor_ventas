import "./data.json";
import "./products.css"
import addCartIcon from '../icons/addToCart.png'
import rmCartIcon from '../icons/removeToCart.png'

import { useCart } from '../hooks/useCart'



export const Products = ({list}) => {
    const {addToCart,removeFromCart, cart} = useCart()
    
    const checkProductInCart = product => {
        return cart.some(cartItem => cartItem._id === product._id)
    }



    return (
        <main className="list_products">
            <ul>
                {list.map(item => {
                    
                    const isProductInCart = checkProductInCart(item)
                   
                    return (<li key={item._id} className="card">
                                <div className="card_info">
                                    <h3>{item.name}</h3>
                                    <p>S/.{item.price}</p>
                                    <div>
                                        <img src={item.imageUrl} alt={item.name} className="card_image"/>
                                        
                                    </div>
                                    <div className="characteristics">
                                        {item.caracteristicas.map(carac =>{
                                            return(<p key={crypto.randomUUID()}>
                                                {carac}
                                            </p>)
                                        })}
                                    </div>
                                    <div>
                                        <button onClick={() => isProductInCart ? removeFromCart(item) : addToCart(item)}>
                                            <img src={isProductInCart ? rmCartIcon : addCartIcon} alt="add product to cart" />
                                            
                                        </button>
                                    </div>
                                </div>
                                
                            </li>
                    )
                    })
                }
            </ul>
        </main>
    )
}