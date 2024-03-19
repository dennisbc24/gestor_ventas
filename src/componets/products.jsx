import "./data.json";

export const Products = ({list}) => {
    return (
        <main>
            <ul>
                {
                    list.map(item => (
                        <li key={item.id_product}>
                            <p>{item.name}</p>
                            <p>{item.cost}</p>
                            <p>{item.lowest_price}</p>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}