import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Contactform from "../Components/Contactform";
function Contact(){
    return(
     <>
   
        <Hero
        cname="hero-mid"
        heroimg="./images/contactpage.jpg"
        heading="Contact"

        />
           <Contactform/>
          
     </>
    )
 }
 export default Contact;