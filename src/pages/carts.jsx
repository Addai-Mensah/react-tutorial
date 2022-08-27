import React from 'react';
import Nav from "../component/common/nav";
import { useState } from "react";
import { getStoredValue } from '../utils/storageHelper';
import Cart from '../component/cart/cart';

function cart() {
    let [carts,setcarts] = useState(JSON.parse(getStoredValue("cart")) || []);
    console.log(carts);

  return (
    <div>
        <Nav/>
        {carts.length > 0 
        ? carts.map((item,index) => <Cart product ={item}/>)
        : "No data found"}
    </div>
  )
}

export default cart;