import { Products } from "./componets/products";
import {products as allProducts} from "./componets/data.json";
import { useState } from "react";
import { Header } from "./hearder";
import {Footer} from './Footer'
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./componets/Cart";
import { CartProvider } from "./context/cart";

export function App() {
const [products] = useState(allProducts)
const {filteredProducts} = useFilters()
  return (
    
    <CartProvider>
    <Header>
       
       </Header>
       <Cart/>
       <Products list={filteredProducts(products)}></Products>
       {IS_DEVELOPMENT && <Footer/>}
       
    </CartProvider>
      
  
  )
}


