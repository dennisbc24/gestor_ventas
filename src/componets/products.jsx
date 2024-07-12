import "./data.json";
import "./products.css"
import addCartIcon from '../icons/addToCart.png'
import rmCartIcon from '../icons/removeToCart.png'

import { useCart } from '../hooks/useCart'
import { useState } from "react";



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
                    const[detailsProduct, setDetails] = useState(true)
                    return (<li key={item._id} className="card">
                                <div className="card_info">
                                    
                                    <div className="box_img_product">
                                        <img src={item.imageUrl} alt={item.name} className="card_image"/>
                                        
                                    </div>
                                    <h3>{item.name}</h3>
                                    <div className="product_info">
                                    <p>Precio Sugerido: S/.{item.price}</p>
                                    <button onClick={()=>setDetails(!detailsProduct)
                                    }>Más Detalles</button>
                                    <>
                                    {detailsProduct ? <></> : <><div className="details">
                                        {item.caracteristicas.map(carac =>{
                                            return(<p key={crypto.randomUUID()}>
                                                {carac}
                                            </p>)
                                        })}
                                    </div></>}
                                    </>
                                    {/* <div className="details">
                                        {item.caracteristicas.map(carac =>{
                                            return(<p key={crypto.randomUUID()}>
                                                {carac}
                                            </p>)
                                        })}
                                    </div> */}
                                    
                                    </div>
                                    
                                    
                                    <div>
                                        <button onClick={() => isProductInCart ? removeFromCart(item) : addToCart(item)} className={isProductInCart ? 'offTheList' : 'onTheList'}>
                                        {isProductInCart ? 'Quitar' : 'Agregar'}
                                            <img src={isProductInCart ? rmCartIcon : addCartIcon} alt="add product to cart" className="icon_button"/>
                                            
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