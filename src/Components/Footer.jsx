import './Footer.css';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                  <div>
                  <h1>Make Your Trip</h1>
                  <p>Choose Your Favorite Destiation</p>
                 </div>
                 <div>
                    <a href="/">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-square-behance"></i>
                    </a>
                 </div>
            </div>
            <div className="bottom"> 
            <div>
            <h4>Project</h4>    
             <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
            </div>
            <div>
            <h4>Community</h4>    
             <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
            </div>
            <div>
            <h4>Help</h4>    
             <a href="/">Support</a>
            <a href="/">troubleshooting</a>
            <a href="/">Contact Us</a>
            
            </div>
            <div>
            <h4>Others</h4>    
             <a href="/">Terms Of services</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
           
            </div>
            </div>
        </div>
    )
}
export default Footer;