
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Component/Navbar"
import Header from "./Component/Header";
import Partical from "./Component/Partical";
import Contact from "./Component/Pages/Contact";

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Link to="/Contact" style={{margin:"10px 10px"}}>Contact</Link>
     <Partical/>
      <Navbar/>
      <Header/>
      
    </div>

    <Routes>
        <Route path='/' element={< Contact />}/>
        {/* <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/didyouknow' element={<DidYouKnow/>}/>
        <Route path='*' element={<ErrorPage/>}/> */}
      </Routes>
    </Router>
    
  );
}

export default App;
