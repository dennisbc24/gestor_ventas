import { useContext } from 'react'
import './footer.css'
import { ContextFilters } from './context/filters'


export const Footer = () => {
    const {filters} = useContext(ContextFilters)
    return(
    <footer className="footer">
        {JSON.stringify(filters, null, 2)}
    </footer>
)
}