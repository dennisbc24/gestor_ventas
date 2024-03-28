import "./data.json";
import "./products.css"
import addCartIcon from '../icons/addToCart.png'
import { useCart } from '../hooks/useCart'

export const Products = ({list}) => {
    const {addToCart} = useCart()
    const prueba  = () => { 
        console.log(addToCart);
        console.log('hola')}
    return (
        <main className="list_products">
            <ul>
                {list.map(item => (
                    <li key={item._id} className="card">
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
                                <button onClick={() => addToCart(item)}>
                                    <img src={addCartIcon} alt="add product to cart" />
                                </button>
                            </div>
                        </div>
                            
                    </li>
                    ))
                }
            </ul>
        </main>
    )
}