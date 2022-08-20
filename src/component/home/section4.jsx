import style from "./section4.module.css"
import bg from "../../assets/background1.png"

function Section4(){
    return(
        <div className={style.sec4}>
            <div className={style.head}  style={{backgroundImage: `url(${bg})`}}>
           <h1>What you should Know About US</h1> 
           <h2>We provide fastest delivery services</h2>
           <p>Fast delivery to keep up with customers exceptation, <br />
           satisfaction and loyalty. with excellent customer <br />
           services, our client’s can trust us to deliver. we provide <br />
           home deliveryand Online reservation system for resturant.</p>

        <h3>Secure Payments</h3>
        <p>Your payment Process will be safe because we have follow <br />
        security standard to protect the privacy of our customers.</p>
        </div>

        <div className={style.head}>
            <h2 className={style.subhead}>User friendly App</h2>
            <p>Our app provide a great user experience to customers <br />
             Whether they are online or offline. Easy to navigate and <br />
             order goods with stress.</p>

             <h3>Easy to Order</h3>
             <p>Enjoy the convenience of your shopping with the various <br /> features available.</p>

        </div>
        </div>
    )
}
export default Section4;