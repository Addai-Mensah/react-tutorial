import styles from "./section1.module.css"
import band1 from "../../assets/upband.png"
import band from "../../assets/downband.png"
import girl from "../../assets/mage.png"
import bgimg from "../../assets/background.png"

function HeroSection(){
    return(
        
        <div className={styles.container} style={{backgroundImage: `url(${bgimg})`}}>
        
            <div className={styles.area1}>
            <h1>Fresh grocery delivery services<br /> we bring the store to your <br />door step.</h1>

            <p>We serve the best of fresh, delicious, nutrient, rich <br />and healthy food.Fastest delivery and easy pickup.</p>

            <button className={styles.btn}>Show Now</button>

             <div className={styles.sec1div}>
             <p><img src={band1} alt="" /></p>
              <p className={styles.img}><img src={band} alt="" /></p>
             </div>

             {/* <p className={styles.para}>For Better Services Download now</p> */}
        </div>
        <img src={girl} className={styles.girlimg} alt="" />
    </div>
    )
}

export default HeroSection;