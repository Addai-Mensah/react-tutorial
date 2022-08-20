import img from "../../assets/mage.png"

function Product (){
return(
    <div className="seccards" >
                            <img src={img} alt="" />
                            <h3>Tomatoes</h3>
                            <p>(3.2% Review)</p>
                            <button className="btn">Order</button>
                        </div>
        ) 

}
export default Product;