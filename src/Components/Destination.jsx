import './Destination.css'
import Destinationdata from './Destinationdata';

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            
                <Destinationdata
                className = "first-des"
                desdata_heading="Santorini, Greece - A Beautiful Whitewashed Cityscape"
                desdata_paragraph="Santorini is a volcano island just 200 km away from mainland Greece. The place was formed after a large volcanic eruption that created a caldera. Santorini is famous for its amazing views, beautiful sunsets, destination weddings, and an active volcano. The white beach, red beach, and black pebble beach in Kamari are some places which should not be missed."
                desdata_img1="./images/pic6.jpg"
                desdata_img2="./images/pic2.jpg"
                />
                 <Destinationdata
                 className="first-des-reverse"
                desdata_heading="NewYork Is A Beautiful Whitewashed Cityscape"
                desdata_paragraph="All of it is pretty spectacular. But if you’re looking for an alternative to the touristy hot spots like the Golden Circle and the Blue Lagoon, then make a trip to Westfjords. They’re lesser-known and visited than other parts of the country because they’re vast, and far away from the major destinations like Jökulsárlón glacier lagoon, Lake Mývatn (yes, as featured on Game of Thrones) and the aforementioned Golden Circle."
                desdata_img1="./images/pic5.jpg"
                desdata_img2="./images/pic4.jpg"
                />
            </div>
       
    )
}
export default Destination;