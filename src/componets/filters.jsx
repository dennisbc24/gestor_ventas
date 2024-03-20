import { useState } from 'react'
import './filters.css'
export const Filters = () => {
    const[minPrice, setMinPrice] = useState(null)
    function handleMinPrice(event) {
        setMinPrice(event.target.value)
    }
    return(
        <>
        <section className="filters">
            <div>
            <label htmlFor="priceRange">Precio a partir de: </label>
            
            <input type="range" id="priceRange" min='0' max='700' onChange={handleMinPrice}/>
            <span>S/.{minPrice}</span>
            </div>
            <div>
            <label htmlFor="categories">Categoria</label>
            <select name="filtros" id="categories">
                <option value="all">Todas</option>
                <option value="roperos">Roperos</option>
                <option value="electro">Electro</option>
            </select>
            </div>
            
        </section>
            
        </>
    )
}