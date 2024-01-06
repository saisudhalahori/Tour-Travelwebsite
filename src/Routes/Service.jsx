import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
function Service(){
    return(
     <>
     
       <Hero
          cname="hero-service"
          heroimg="./images/servicepage.jpg"
          heading="Service"
        

   />
      <Trip/>
      
     </>
    )
 }
 export default Service;