import React, {useState,UseEffect} from "react"
import Nav from "../component/common/nav"
import Product from "../component/shop/Product"
function Shop (){
    let [products, setProducts] = useState([]);

    return(
        
        <div>
            <Nav/>

            <div>
                <Product/>
            </div>
        </div>
    )
}
export default Shop;