import {useState} from "react"
import styles from "./header.module.css"
import logo from "../../assets/logo.png"
import  {getStoredValue} from "../../utils/storageHelper"


function Nav (){
    let [carts,setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);

    return(
        <nav>
            <div className={styles.logo}><img src={logo} alt="" /></div>
            <ul className={styles.list}>
                <li><span><a href="/">Home</a></span></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/shops">Shops</a></li>
                <li><a href="/carts">Carts {carts.length}</a></li>
            </ul>
             <button><a href="/shop">Shop Now</a></button>

        </nav>
    )
}

export default Nav;