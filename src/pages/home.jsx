import HeroSection from "../component/home/herosection"
import Nav from "../component/common/nav";
import Section2 from "../component/home/section2"
import Section3 from "../component/home/section3"
import Section4 from "../component/home/section4"
import Footer from "../component/home/footer"
function Home (){
    return(
       <div>
        <Nav/>
        <HeroSection/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
       </div>
    )
}
export default Home;