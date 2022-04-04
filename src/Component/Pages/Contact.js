import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Contact() {
    
  return (

    <div className='about' style={{color:"white",fontFamily: "Poppins",display:
       "flex", borderRadius:"2rem",
       flexDirection:"column", width:"50vw",padding:"4rem 5rem 3rem ",margin:"5rem 4rem 5rem 12rem",backgroundColor:"rgba(0,0,0,0.4)"}}>
       <div style={{display:"flex"}} ><FontAwesomeIcon  style={{margin:"1rem",height:"8vh",paddingRight:"1rem"}}icon={faEnvelope} /> <h3 style={{textDecoration: "none", margin:"1rem",fontWeight:"bold"}}>Email</h3><h3 style={{textDecoration: "none", margin:"1rem",color:"orange",fontWeight:"bold"}}>nouri89@hotmail.com</h3></div>   
       <div style={{display:"flex"}}> <FontAwesomeIcon  style={{margin:"1rem",height:"8vh",paddingRight:"1rem"}}icon={faLinkedin}/><h3 style={{fontWeight:"bold",padding:"1rem"}} >LinkedIn<a style={{textDecoration: "none", margin:"1rem",color:"orange",fontWeight:"bold"}}  target="_blank"  href='https://www.linkedin.com/in/abennour-hachemi-4317421a5/'>nouri_LinkedIn</a> </h3></div> 
       <div style={{display:"flex"}}> <FontAwesomeIcon style={{margin:"1rem",height:"8vh",paddingRight:"1rem"}} icon={ faGithub} /> <h3 style={{fontWeight:"bold",padding:"1rem"}}>Github<a style={{textDecoration: "none", margin:"1rem",color:"orange",fontWeight:"bold"}} target="_blank" href='https://github.com/nouri89/'>nouri_Github</a> </h3></div>
         
    </div>
    
    )
    
  
}

export default Contact