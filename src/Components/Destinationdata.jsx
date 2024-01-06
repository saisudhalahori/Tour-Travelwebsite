import { Component } from 'react';
import './Destination.css'

class Destinationdata extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.desdata_heading}</h2>
                    <p>{this.props.desdata_paragraph}</p>
                </div>
                <div className="image-des">
                    <img src= {this.props.desdata_img1} alt="image_des" />
                    <img src= {this.props.desdata_img2} alt="image_des" />
                    
                </div>
            </div>
            

        )
    }
}
export default Destinationdata;