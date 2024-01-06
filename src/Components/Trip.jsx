import './Trip.css'
import Tripdata from './Tripdata';
function Trip(){
    return(
       <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Map</p>
        <div className="maintrip">
            <Tripdata
            tripimg="./images/pic9.jpg"
            trip_heading="Westfjords, Iceland"
            trip_paragraph="To be honest, we could easily just say Iceland and leave it at that. All of it is pretty spectacular. But if you’re looking for an alternative to the touristy hot spots like the Golden Circle and the Blue Lagoon, then make a trip to Westfjords. They’re lesser-known and visited than other parts of the country because they’re vast, and far away from the major destinations like Jökulsárlón glacier lagoon, Lake Mývatn (yes, as featured on Game of Thrones) and the aforementioned Golden Circle."
            />
             <Tripdata
            tripimg="./images/pic12.jpg"
            trip_heading=" Santorini, Greece"
            trip_paragraph="Most people are familiar with blue domes and bright whitewashed homes that jut out over Santorini’s blue seas. But there’s plenty more to explore on this Greek Island, including a place believed to be the lost city of Atlantis. Over 3000 years ago, a huge volcanic eruption devastated Santorini. The middle of the island disappeared deep into the ocean and left a massive caldera (crater) in the cliffs, so make a trip"
            />
             <Tripdata
            tripimg="./images/pic13.jpg"
            trip_heading=" Utrecht, Netherlands"
            trip_paragraph="Daytrippers often go to Utrecht from Amsterdam, but there’s plenty of reasons to visit for longer. It’s less crowded for a start. The city is over 2000 years old –  the Romans built a fortress at what is now Dom Square, and buildings from the middle ages still stand in the city centre. It has all the charming Dutch canals of the capital (and according to travel search engine GoEuro, it’s the most beautiful canal city in Europe). As well as canalside wandering, Utrecht also has gothic architecture, pretty streets and great cafes, restaurants and bars."
            />
        </div>
       </div>
       
    )
}
export default Trip;