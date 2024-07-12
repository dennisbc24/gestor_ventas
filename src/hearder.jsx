import { Filters } from "./componets/filters";

export const Header = ()=>{
    return(
        <header>
            <h1>Registro de Venta</h1>
            <p>Iniciar Sesion</p>
            <input type="search" name="" id="" />
            <h2 >Resultados para: "licua"</h2>
            <Filters/>
        </header>
    )
}