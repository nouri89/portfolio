import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from '../Component/Pages/Home'
import About from '../Component/Pages/About'
import Contact from '../Component/Pages/Contact'
import Projects from '../Component/Pages/Projects'
import Logo from './Pictures/nouriPhoto.jpg'
import Image from 'react-bootstrap/Image'

import './NavbarCom.css'


function NavbarCom() {
  return (
    <>
   
    <Router>
    
  <Navbar style={{backgroundColor:"rgba(0,0,0,0.1)"}}>
  <Container fluid>
     <Navbar.Brand href="#"><Image className="logo" src={Logo} rounded /></Navbar.Brand>
    
    
     <h1 className="nouri">Abdennour Hachemi</h1> 

    <Navbar.Collapse >
   
      <Nav style={{ margin:"1rem 0 1rem 10rem",fontWeight:"bold"}} defaultActiveKey="/home" as="ul">
      <Nav.Item as="li"  style={{ fontFamily:"Poppins"}} >
    <Nav.Link as= {Link} to ={"/home"}>Home</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
    <Nav.Link as= {Link} to ={"/about"}>About Me</Nav.Link>
  </Nav.Item>
  
  <Nav.Item as="li">
    <Nav.Link as= {Link} to ={"/projects"}>Projects</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link as= {Link} to ={"/contact"}>Contact Me</Nav.Link>
  </Nav.Item>
</Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
<Routes>
         
         <Route path='/' element={< Home/>}/>
         <Route path='/home' element={< Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
   
</Router>
</>
  )
}

export default NavbarCom