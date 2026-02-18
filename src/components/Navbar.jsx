//import css
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import CartWidget from './CartWidget'

const Navbar =() => {

    return(   
            <nav className="nav-containter">
                <NavLink to="/">
                    <img className='brand-logo' src="../logo4.png" alt="logo" />
                </NavLink>
                <NavLink className='anchor-nav' to="/category/cascos">Cascos</NavLink>
                <NavLink className='anchor-nav' to="/category/chaqueta">Chaquetas</NavLink>
                <NavLink className='anchor-nav' to="/category/protectores">Protectores</NavLink>
                <NavLink  to="/cart"><CartWidget/></NavLink>

            </nav>
        

        
    )

}

export default Navbar