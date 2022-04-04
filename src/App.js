
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import Home from '../Component/Pages/Home'
// import About from '../Component/Pages/About'
// import Contact from '../Component/Pages/Contact'
// import Projects from '../Component/Pages/Projects'

import Navbar from "./Component/Navbar"
import Header from "./Component/Header";
import Partical from "./Component/Partical";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import React from 'react'
import logo from "./Component/Pictures/nouriPhoto.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavbarCom from "./Component/NavbarCom";






function App() {
  return (
    <>
    
    <NavbarCom/>
    <Partical/>
   

   
    </>
    
    
//     <div className="App">
//       <Router>

//    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
//       <div className='container'>
    
//   <a className="navbar-brand" href="/"><img className='logo' src={logo} alt="logo"/></a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//    <FontAwesomeIcon icon={faBars } style={{color:'white'}}/>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
//     <ul className="navbar-nav ml-auto">
//     <h1 style={{color:"orange",marginRight:"9rem"}}>Abdennour Hachemi</h1>

//       <li className="nav-item active">
//         <a className="nav-link" href="/about">About Me <span className="sr-only">(current)</span></a>
//       </li>
      
//       <li className="nav-item">
//         <a className="nav-link" href="#">Projects</a>
//       </li>
//       <li className="nav-item">
//       {/* <a className="nav-link" href="#"style={{margin:"10px 10px"}}> Contact</a>  */}
//       <Link to="/contact" style={{margin:"10px 10px"}}>Contact</Link>
//       </li>
     
     
//     </ul>
    
//   </div>
//   </div>
// </nav>
// {/* <Link to="/contact" style={{margin:"10px 10px"}}>Contact</Link>  */}

  
//   {/* <Link to="/" style={{margin:"10px 10px"}}>Home</Link>
 
//   {/* <Link to="/about" style={{margin:"10px 10px"}}>About</Link> */}
   
  
  
    
 

//   <Routes>
//   <Route path='/contact' element={<Contact/>}/>
//       {/* <Route path='/' element={< Home/>}/> */}
//       {/* <Route path='/about' element={<About/>}/> */}
//       {/* <Route path='/contact' element={<Contact/>}/>
//       <Route path='/didyouknow' element={<DidYouKnow/>}/>
//       <Route path='*' element={<ErrorPage/>}/> */}
//     </Routes>
//   </Router>
  
   
//      {/* <Partical/>
//       <Navbar/>
//      <Header/> */}
      
   // </div>

    
    
  );
}

export default App;
