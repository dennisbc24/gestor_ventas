import { useContext, useState } from 'react'
import './filters.css'
import { ContextFilters } from '../context/filters'


export const Filters = () => {
    const {filters, setFilters} = useContext(ContextFilters)
    
    

    function handleMinPrice(event) {
        
        setFilters(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    function handleChoseCategory(event) {
        
        setFilters(prevState => ({
            ...prevState, 
            filterCategory: event.target.value
        }))
    }
    return(
        <>
        <section className="filters">
            <div>
            <label htmlFor="priceRange">Precio a partir de: </label>
            <input type="range" id="priceRange" min='0' max='300' onChange={handleMinPrice} value={filters.minPrice}/>
            <span>S/.{filters.minPrice}</span>
            </div>
            <div>
            <label htmlFor="categories">Categoria</label>
            <select name="filtros" id="categories" onChange={handleChoseCategory}>
                <option value="all">Todas</option>
                <option value="roperos">Roperos</option>
                <option value="electro">Electro</option>
                <option value="termos">Termos</option>
                <option value="cocina">Cocina</option>
                <option value="electro">Electro</option>

            </select>
            </div>
            
        </section>
            
        </>
    )
}