import { Products } from "./componets/products";
import {products as allProducts} from "./componets/data.json";
import { useState } from "react";
import { Header } from "./hearder";
export function App() {
const [filters, setFilters] = useState({
  filterCategory: 'all',
  minPrice: 0
})

function filteredProducts(products) {
  return products.filter(product=>{
    return (product.price >= filters.minPrice && (filters.filterCategory === 'all' || product.category === filters.filterCategory))
  })
}
  return (
    <>
      <Header/>
      <Products list={filteredProducts(allProducts)}></Products>
    </>
  )
}


