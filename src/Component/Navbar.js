import React from 'react'
import logo from "./Pictures/nouriPhoto.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import AboutMe from './Pages/About'
// L

 const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className='container'>
    
  <a className="navbar-brand" href="/"><img className='logo' src={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars } style={{color:'white'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
    <ul className="navbar-nav ml-auto">
    <h1 style={{color:"orange",marginRight:"9rem"}}>Abdennour Hachemi</h1>

      <li className="nav-item active">
        <a className="nav-link" href="/about">About Me <span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#"style={{margin:"10px 10px"}}> Contact</a> 
      </li>
     
     
    </ul>
    
  </div>
  </div>
</nav>

       
  )
}

export default Navbar




// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
// import Home from './Pages/Home'
// import Contact from './Pages/Contact'
// import About from './Pages/About'
// import Contact from '../Pages/Contact'
// import ErrorPage from '../Pages/ErrorPage';
// import DidYouKnow from '../Pages/DidYouKnow';

// function Navbar() {
//   return (
//     <Router>
  
//     <Link to="/" style={{margin:"10px 10px"}}>Home</Link>
//     <Link to="/contact" style={{margin:"10px 10px"}}>Contact</Link>
//     <Link to="/about" style={{margin:"10px 10px"}}>About</Link>
     
    
    
      
   

//     <Routes>
//         <Route path='/' element={< Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//       </Routes>
//     </Router>
    
   
//   );
// }
// export default Navbar;
