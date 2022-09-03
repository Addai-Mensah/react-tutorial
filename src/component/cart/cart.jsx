import img from "../../assets/mage.png"
import Button from 'react-bootstrap/Button';
import {setStorage,getStoredValue} from "../../utils/storageHelper"
import styles from "../shop/shop.module.css";
import { useState } from "react";
import Counter from "./counter";

function Cart ({product}){
    let {title,image,category,price,id,qty} = product;

    // define a state, and use thr getStoredValue function to get the value from local storage,if not found,return []
    let [carts,setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);


    let  handleClick = () =>{
        // create a new arrey and push the new product to the arrey
        let newCart = [...carts,];

        // loop over newCart to remove the current object using filter function
       let newerCart = newCart.filter((item) => item.id !== id);
        // add the new cart to storage
      console.log(  setStorage("cart", JSON.stringify(newCart)));


    //   update the state
    setcarts(newerCart);
       
    };


                return(
                     <div className={styles.sectn}>
                  <div className={styles.cards} >                 
                            <img src={image} alt="" className={styles.imgs}/>
                            <h4 className="warning">{title}</h4>
                            <h5>(3.2% Review)</h5>
                            <small>category : {category}</small>
                            <small>category : {price}</small>
                            <small>qty : {qty}</small>
                            <Button className={styles.btn}  onClick={handleClick}>remove item</Button>  
                             {/* pass qty and id prop to counter components to allow us interact with the card item */}
                            <Counter qty={qty} id ={id}/>
                        </div>
                     </div>
                    ) 

}
export default Cart;