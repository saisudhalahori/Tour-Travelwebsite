import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

function About(){
   return(
    <>
       <Navbar/>
            <Hero
               cname="hero-mid"
               heroimg="./images/aboutpage.jpg"
               heading="About"
             
              
               btnclass="hide"
            
            />
    </>
   )
}
export default About;