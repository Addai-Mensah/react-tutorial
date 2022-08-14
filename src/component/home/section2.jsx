import React from "react";
import "./section2.css"
import img1 from "../../assets/Ellipse 1.png"
import img2 from "../../assets/Ellipse 2.png"
import img3 from "../../assets/Ellipse 3.png"
import img4 from "../../assets/Ellipse 4.png"
import img5 from "../../assets/Ellipse 5.png"
import img6 from "../../assets/Ellipse 6.png"
import img8 from "../../assets/Ellipse 8.png"
import img9 from "../../assets/Ellipse 9.png"
import guy from "../../assets/image 6.png"

function Section2() {

    // const [value, setValue] = React.useState("tosin");
    // const changevalue = () => {
    //     setValue("charles");
    // };

    // React.useEffect(() =>{
    //     setTimeout(()=>{
    //         changevalue();
    //     }, 3000);
    // }, []);



    const [Popular, setPopular] = React.useState("");
   

    React.useEffect(() =>{
        setTimeout(()=>{
            setPopular([
                {id:1, name:"tomatoes", image: img1},
                {id:2, name:"carrot", image: img2},
                {id:3, name:"cucumbers", image: img3},
                {id:4, name:"pepper", image: img4},
                {id:5, name:"orange", image: img5},
                {id:6, name:"apple", image: img6},
                {id:7, name:"grapes", image: img8},
                {id:8, name:"strawberries", image: img9},

            ]);
        }, 3000);
    }, []);

  return (
    <section className='sec1'>
        <section>
            <h2 id='head'>Popular items{value}</h2>
            <div className='imageholder'>
                <div className='hold'>
                    <img src={img1}  alt="" className='img' />
                    <h3>Tomato</h3>
                </div>
                <div className='hold' >
                    <img src={img2} alt=""  className='img'/>
                    <h3>Carrots</h3>
                </div>
                <div  className='hold'>
                    <img src={img3} alt=""  className='img'/>
                    <h3>Cucumbers</h3>
                </div>
                <div className='hold' >
                    <img src={img4} alt=""  className='img'/>
                    <h3>Pepper</h3>
                </div>
                <div  className='hold'>
                    <img src={img5} alt=""  className='img'/>
                    <h3>Orange</h3>
                </div>
                <div  className='hold'>
                    <img src={img6} alt=""  className='img'/>
                    <h3>Apple</h3>
                </div>

                <div  className='hold'>
                    <img src={img8} alt=""  className='img'/>
                    <h3>Grapes</h3>
                </div>
                <div  className='hold'>
                    <img src={img9} alt=""  className='img'/>
                    <h3>Strwaberries</h3>
                </div>

            </div>
        </section>
        <section className='sec2'>
            <div>
               <div className='bg'>
               <img src={guy} alt="" />
               </div>
            </div>

            <div>
                <h1>Why you should use <br /> our services?</h1>
               <div className='subsec2'>
               <div className='sec2round'>

                   
                </div>
                <div><p>Fast and reliable delivery<br /> services for all our customers</p></div>
               </div>

               <div className='subsec2'>
               <div className='sec2round'>
                
                </div>
                <div><p>No additional fees for orders</p></div>
               </div>

               <div className='subsec2'>
               <div className='sec2round'>
                    
                </div>
                <div><p>User friendly app</p></div>
               </div>
            </div>
            
        </section>
    </section>
  )
}

export default Section2