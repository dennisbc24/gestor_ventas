import {createContext, useState} from "react"

//crearmos el contexto
export const ContextFilters = createContext()

//crear provider
export function FiltersProvider({children}) {
    const [filters, setFilters] = useState({
        filterCategory: 'all',
        minPrice: 0
    })
    return(
        <ContextFilters.Provider value={{filters, setFilters}}>
            {children}
        </ContextFilters.Provider>
       

        
    )
}
