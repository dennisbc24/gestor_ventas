import {useContext} from 'react'
import { ContextFilters } from "../context/filters";

export function useFilters() {
    const {filters} = useContext(ContextFilters)
  
    function filteredProducts(products) {
      return products.filter(product=>{
        return (product.price >= filters.minPrice && (filters.filterCategory === 'all' || product.category === filters.filterCategory))
      })
    }
    return {filters, filteredProducts}
  }