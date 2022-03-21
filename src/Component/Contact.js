// import React from 'react'

// function Contact(sendEmail) {
//   return (
//     <div className='container' style={{width:"100vh",higth:"100vw",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center"}} >

//         <form onSubmit={
//   Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );}  style={{backgroundColor:"white",display:"flex",flexDirection:"column",padding:"2vw 4vw",width:"90%",borderRadius:"10px"}}>
//             <h3>Get in touch</h3>
//             <input type="text"  id="name" placeholder='Your name'/>
//             <input type="email"  id="email" placeholder='Your email'/>
//             <input type="text"  id="phone" placeholder='Your Phone Number'/>
//             <textarea id="message" rows="4" placeholder='Your message'></textarea>
//             <button type ="submit">Send</button>
//         </form>
//     </div>

//   )
// }

// export default Contact