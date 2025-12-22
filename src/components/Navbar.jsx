//import css
import '../css/Navbar.css'
import CartWidget from './CartWidget'

const Navbar =() => {

    return(   
            <nav className="nav-containter">
                <a href="#">
                    <img className='brand-logo' src="../logo4.png" alt="logo" />
                </a>
                <a className='anchor-nav' href="">Cascos</a>
                <a className='anchor-nav' href="">Chaquetas</a>
                <a className='anchor-nav' href="">Protectores</a>
                <CartWidget/>

            </nav>
        

        
    )

}

export default Navbar