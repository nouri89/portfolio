import React from 'react'
import logo from "./abdennourPhoto.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

 const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className='container'>
    
  <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars } style={{color:'white'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
    <ul className="navbar-nav ml-auto">
    <h1 style={{color:"orange",marginRight:"8rem"}}>Abdennour Hachemi</h1>
      <li className="nav-item active">
        <a className="nav-link" href="#">About Me <span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
     
     
    </ul>
    
  </div>
  </div>
</nav>

   

  )
}

export default Navbar
