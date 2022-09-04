import React,{useState}  from 'react';
import {BsCloudPlusFill} from "react-icons/bs";
import {BsFileMinusFill} from "react-icons/bs";
import  {setStorage,getStoredValue} from "../../utils/storageHelper"

function Counter({qty, id}) {
    // define a state, and use thr getStoredValue function to get the value from local storage,if not found,return []
    let [carts,setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);

    let [cartQty, setCartQty] =useState(qty || 1);


    // create a function to increase or decrease the value

    let handleValueChange = (action) => {

        let newCart = [...carts];
        
        setcarts(
            newCart.map((item,index) =>{
                if (item.id === id){
                    if (action === "increase") {
                        item.qty += 1;
                        }
                        else (item.qty -=1)
                }

                return item;
            })
        );

        setStorage("cart", JSON.stringify(carts));
       

    }; 

  return (
    <div>
    <BsCloudPlusFill  size={24} color="red"  onClick={() => handleValueChange("increase")}/>

        {/* how to get value from impute field */}
        <input type="number" placeholder='qty'value={cartQty} onChange={(e) => setCartQty(e.target.value)} />
        <BsFileMinusFill  size={24} color="red"  onClick={() => handleValueChange("reduce")} />
    </div>
  )
}

export default Counter;