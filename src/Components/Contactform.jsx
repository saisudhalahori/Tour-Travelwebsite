import './Contactform.css';

function Contactform(){
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
             <form>
                <input placeholder='enter name'/>
                <input placeholder='enter email'/>
                <input placeholder='subject'/>
                <textarea placeholder='message' rows="4"></textarea>
                <button>send message</button>
             </form>
        </div>
    )
}
export default Contactform;