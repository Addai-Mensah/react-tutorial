import HeroSection from "../component/home/herosection"
import Nav from "../component/common/nav";
import Section2 from "../component/home/section2"
import Section3 from "../component/home/section3"
function Home (){
    return(
       <div>
        <Nav/>
        <HeroSection/>
        <Section2/>
        <Section3/>
       </div>
    )
}
export default Home;