import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";



function About(){
    return(
        <>
         
          <Hero
          cname="hero-mid"
          heroimg="./images/baloonabout.jpg"
          heading="About"
          btnclass="hide"
          />
             <AboutUs/>
          
        </>
    )
}

export default About;