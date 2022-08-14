import styles from "./header.module.css"
import logo from "../../assets/logo.png"
function Nav (){
    return(
        <nav>
            <div className={styles.logo}><img src={logo} alt="" /></div>
            <ul className={styles.list}>
                <li><span>Home</span></li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
             <button>Contact Us</button>
        </nav>
    )
}

export default Nav;