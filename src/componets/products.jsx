import "./data.json";
import "./products.css"
export const Products = ({list}) => {
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
                        </div>
                            
                    </li>
                    ))
                }
            </ul>
        </main>
    )
}