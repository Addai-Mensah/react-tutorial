import styles from "./header.module.css"
import logo from "../../assets/logo.png"
function Nav (){
    return(
        <nav>
            <div className={styles.logo}><img src={logo} alt="" /></div>
            <ul className={styles.list}>
                <li><span><a href="/home">Home</a></span></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
             <button><a href="/Contact Us">Contact Us</a></button>

        </nav>
    )
}

export default Nav;