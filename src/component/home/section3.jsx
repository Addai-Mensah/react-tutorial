import React, {useEffect} from "react";
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.png"
import img8 from "../../assets/8.png"
import "./section3.css"
function Section3 (){

    let [cards,setCards] = React.useState("");

    React.useEffect(()=>{
        setTimeout(()=>{
            setCards([
                {id:1, image: img1, name:"Tomatoes"},
                {id:2, image: img2, name:"Potatoes"},
                {id:3, image: img3, name:"Apple"},
                {id:4, image: img4, name:"Meat"},
                {id:5, image: img5, name:"Oil"},
                {id:6, image: img6, name:"Pomo"},
                {id:7, image: img7, name:"Onions"},
                {id:8, image: img8, name:"Onions"}
            ])
        },3000)
    },[])

    return(
        <section className="sec33">
            <h2>Fresh quality fruits and vegetable for <br />your consumption</h2>
            <div className='sec'>
                    { cards ?
                    cards.map((item,index) =>{
                        return(
                            <div className="seccards" key={item.id}>
                            <img src={item.image} alt="" />
                            <h3>{item.name}</h3>
                            <p>(3.2% Review)</p>
                            <button className="btn">Order</button>
                        </div>
                        )
                    }): <div>loading ...</div>
                    }
                </div>
        </section>
    )
        
}
export default Section3;