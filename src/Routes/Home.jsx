import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
// import SignupForm from "../Components/SignupForm";
// import SIGNup from "./SIGNup";
function Home(){
    return(
        <>
        
         
            <Hero
               cname="hero"
               heroimg="./images/homepage.jpg"
               heading="Your Journey Your Trip"
               paragraph="Choose Your Favourite Destination"
               url="/"
               btnclass="show"
               btnname="Travel Plan"
            />
              <Destination/>
              <Trip/>
              {/* <SignupForm/> */}
              {/* <SIGNup/> */}
          
        </>
    )
}
export default Home;