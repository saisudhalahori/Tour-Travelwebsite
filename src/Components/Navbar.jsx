import {Component} from 'react'
import './NavbarStyles.css';
import {Menuitem} from './Menuitem'
import { Link } from 'react-router-dom'


class Navbar extends Component {
  state= {clicked:false};

handleclick = () => {
  this.setState({clicked: !this.state.clicked})
}

  render(){
  return (
  <nav className="navbar-items">
    <h1 className="navbar-logo">Make Your Trip</h1>
    <div className="menu-icons" onClick={this.handleclick}>
    <i className={this.state.clicked ? "fa-solid fa-xmark":"fa-solid fa-bars"}></i>
  
    </div>
    <ul className={this.state.clicked? "nav-menu active": "nav-menu"}>
      {Menuitem.map((item, index)=>{
        return(
          <li key={index}>
          <Link className={item.cname} to={item.url}><i className={item.icon}>  { item.title}</i></Link>
        
        </li>
        )
      })}
        {/* <button>Sign Up</button> */}
    </ul>
  </nav>
  )
    }
}
export default Navbar;
