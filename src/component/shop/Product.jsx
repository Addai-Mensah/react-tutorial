import img from "../../assets/mage.png"
import styles from "./shop.module.css"
import Button from 'react-bootstrap/Button';
import {setStorage,getStoredValue} from "../../utils/storageHelper"
import { useState } from "react";

function Product ({product}){
    let {title,image,category,price,id} = product;

    // define a state, and use thr getStoredValue function to get the value from local storage,if not found,return {}
    let [carts,setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);


    let  handleClick = () =>{
        // create a new arrey and push the new product to the arrey
        let newCart = [...carts,{id, title, image, category, price, qty:1}];
        // add the new cart to storage
      console.log(  setStorage("cart", JSON.stringify(newCart)))


    //   update the state
    setcarts(newCart)
       
    };


                return(
                     <div className={styles.sectn} onClick={handleClick}>
                  <div className={styles.cards} >                 
                            <img src={image} alt="" className={styles.imgs}/>
                            <h4 className="text-danger">{title}</h4>
                            <h5>(3.2% Review)</h5>
                            <Button className={styles.btn}>Add Cart</Button>        
                        </div>
                     </div>
                    ) 

}
export default Product;