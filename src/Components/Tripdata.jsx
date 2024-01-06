import './Trip.css'

function Tripdata(props){
    return(
        <div className="tripclass">
           <div className="tripimage">
            <img src={props.tripimg} alt="tripimg" />
           </div>
           <h4>{props.trip_heading}</h4>
           <p>{props.trip_paragraph}</p>
        </div>
    )
}
export default Tripdata;