import './Hero.css';

function Hero(props){
    return(
        <>
    <div className={props.cname}>
        <img src={props.heroimg} alt='heroimage'/>
        <div className="hero-text">
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
        <a href={props.url} className={props.btnclass}>
           {props.btnname}
        </a>
        </div>
       
    </div>
        </>
    )
}

export default Hero;