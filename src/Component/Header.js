import React from "react"
import Typed from "react-typed"

const Header = () => {
  return (

    <div className="header-wraper">
        <div className="main-info">
            <h1>Full Stack developer</h1>
            <Typed className="typed-text" strings={["UX","Web design","Front-end","Back-end","Database","Testing"]}
            typeSpeed={80}
            backSpeed={80}
            loop/>
            <a href="#" className="btn-main-offer">Contact me</a>


        </div>
       
    
      
    </div>
    
  )
}

export default Header