
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Component/Navbar"
import Header from "./Component/Header";
import Particles from "react-tsparticles";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App">
     <Particles
    
      id="tsparticles"
    
      options={{
        background: {
          color: {
            value: "white",
          },
        },
        fpsLimit: 90,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 8,
              opacity: 0.8,
              size: 90,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
            
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}

     
     />
      <Navbar/>
      <Header/>
      
    </div>
  );
}

export default App;
