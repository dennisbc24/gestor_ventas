import { Products } from "./componets/products";
import {products} from "./componets/data.json";
export function App() {

  return (
    <>
      <p>hola</p>
      <Products list={products}></Products>
    </>
  )
}


