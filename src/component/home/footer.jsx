import logo from "../../assets/logo.png"
import  "./footer.css"
function Footer () {
   return(
    <div className="foot">

    <div className="foot1">
        <img src={logo} alt="" />
        <p>
        With alot of unique feature you <br />
        can easy order your good at the <br />
        confort of your home
        </p>
    </div>
    <div className="foot2">
        <h3>About us</h3>
        <h6>Features</h6>
        <h6>Secure Payment</h6>
        <h6>Services</h6>
        <h6>Cover</h6>
     </div>

     <div className="foot3">
        <h3>About us</h3>
        <h6>Support</h6>
        <h6>Customer Service</h6>
        <h6>Feedback</h6>
        <h6>Accessibility</h6>

     </div>

     <div className="foot4">
         <h3>Useful link</h3>
         <h6>Payment and Tax</h6>
         <h6>Terms of services</h6>
         <h6>Privacy policy</h6>
     </div>
    </div>
   )
}

export default Footer;