import React from 'react'
import {Card} from 'react-bootstrap'
import card1photo from '../Pictures/Hackathon.png'
import card2photo from '../Pictures/finalproject.png'
import card3photo from '../Pictures/vwparts.png'
import card4photo from '../Pictures/cyfhotel.png'
import './Projects.css'

function Projects() {
  return (
    <div  className="cards" style={{display:"flex",justifyContent:"spaceBetween" ,paddingLeft:"8rem"}} >
     <Card  className="card" style={{ width: '18rem'}}>
  <Card.Img variant="top" src={card1photo} />
  <Card.Body>
    <Card.Title>Student Home work Club </Card.Title>
    <Card.Text>
      A Hackathon project Aims to help students and volunteers to book upcoming sessions for a home work club, I have developed and implemented the volunteer section.
    </Card.Text>
  </Card.Body>
  
  <Card.Body >
  <Card.Link  style={{textDecoration:"none"}}target="_blank" href="https://capgemini-homeworkclub.herokuapp.com/">Visit website </Card.Link>
    <Card.Link  style={{textDecoration:"none"}}target="_blank" href="https://github.com/muratdemirtas2001/capgemini-hackhaton">Code link</Card.Link>
  
  </Card.Body>
</Card>

<Card className="card"  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={card3photo} />
  <Card.Body>
    <Card.Title>Car parts Shop</Card.Title>
    <Card.Text>
    A car parts shop advertising the business and informing the clients about the products, opening hours, location and services.
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Card.Link style={{textDecoration:"none"}} target="_blank" href="http://vw-rachid.herokuapp.com/">visit website</Card.Link>
    <Card.Link style={{textDecoration:"none"}} target="_blank" href="https://github.com/nouri89/vwparts">code link</Card.Link>
  </Card.Body>
</Card>

<Card  className="card"    style={{ width: '18rem',color:"white" }}>
  <Card.Img variant="top" src={card2photo} />
  <Card.Body>
    <Card.Title>Class Planner</Card.Title>
    <Card.Text>
    A platform which make easier for volunteer to sing up for classes 
 Tech used: React,  Node.js, Express.js 
My Role was to code the database using PostgresSQL.

    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Card.Link style={{textDecoration:"none"}}  target="_blank" href="https://cyf-finalproject-class-planner.herokuapp.com/">visit Website</Card.Link>
    <Card.Link style={{textDecoration:"none"}} target="_blank" href="https://github.com/nouri89/cyf-final-project-Lesson-planner">Code link</Card.Link>
  </Card.Body>
</Card>

<Card className="card"  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={card4photo} />
  <Card.Body>
    <Card.Title>CYF Hotel Booking</Card.Title>
    <Card.Text>
    A template booking system for a virtual hotel. This was my first individual project using react Framework.
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Card.Link style={{textDecoration:"none"}} target="_blank" href="https://nouri89-cyf-hotel-react.netlify.app/">visit website</Card.Link>
    <Card.Link style={{textDecoration:"none"}}target="_blank" href="https://github.com/nouri89/cyf-hotel-react">code link</Card.Link>
  </Card.Body>
</Card>




    </div>
  )
}

export default Projects