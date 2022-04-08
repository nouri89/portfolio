
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Partical from "./Component/Partical";
import React , { useEffect }from 'react'
import NavbarCom from "./Component/NavbarCom";






function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
    
    <NavbarCom/>
    <Partical/>
   

   
    </>
    
    
    
  );
}

export default App;
