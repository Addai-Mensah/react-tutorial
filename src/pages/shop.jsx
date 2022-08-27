import React, {useState,UseEffect, useEffect} from "react"
import Nav from "../component/common/nav"
import Product from "../component/shop/Product"
import styles from "../component/shop/shop.module.css"
function Shop (){
    let [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            setProducts(json)
        })
         
    },[])
    return(
        
        <div>
            <Nav/>

            <div className={styles.container}>
                {
                  products.length > 0 ? (
                    products.map((item) =>(
                        <Product product ={item}/>
                    ))
                  ) : (
                    <div>loading...</div>
                  )
                }   
            </div>
        </div>
    )
}
export default Shop;