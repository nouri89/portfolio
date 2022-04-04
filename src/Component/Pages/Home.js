import React from "react"
import Typed from "react-typed"
import './Home.css'

const Home = () => {
  return (

    <div className="header-wraper">
        <div className="main-info">
          
            <h1 style={{fontWeight:"bold" }}>Full Stack developer</h1>
            <Typed className="typed-text" strings={["UX-UI","Web design","Front-end","Back-end","Database","Testing"]}
            typeSpeed={80}
            backSpeed={80}
            loop/>
            
        </div>
    
    </div>
    
  )
}

export default Home