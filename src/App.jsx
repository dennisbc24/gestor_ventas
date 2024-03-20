import { Products } from "./componets/products";
import {products as allProducts} from "./componets/data.json";
import { useCallback, useContext, useState } from "react";
import { Header } from "./hearder";
import {Footer} from './Footer'
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./componets/Cart";

export function App() {
const [products] = useState(allProducts)
const {filteredProducts} = useFilters()
  return (
    <>
      <Header/>
      <Cart/>
      <Products list={filteredProducts(products)}></Products>
      {IS_DEVELOPMENT && <Footer/>}
      
    </>
  )
}


