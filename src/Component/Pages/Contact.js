import React from 'react'
import {useNavigate} from 'react-router-dom'

function Contact() {
    let navigate=useNavigate();
  return (
    <div>Profile
        <button onClick={()=>{navigate("/about")}}>click here</button>
        <h3>Email : nouri89@hotmail.com</h3>
        <h3>Github:nouri89</h3>
        <h3>LinkedIn:https://www.linkedin.com/in/abennour-hachemi-4317421a5/</h3>
    </div>
  )
}

export default Contact