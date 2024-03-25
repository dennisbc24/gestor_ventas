import { useContext } from 'react'
import './footer.css'
import { ContextFilters } from './context/filters'
import { useCart } from './hooks/useCart'


export const Footer = () => {
    const {filters} = useContext(ContextFilters)
    const {cart} = useCart()
    return(
    <footer className="footer">
        {JSON.stringify(filters, null, 2)},
        {JSON.stringify(cart, null, 2)}
    </footer>
)
}