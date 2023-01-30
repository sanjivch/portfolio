import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import './app.scss';



function App() {
  
  return (
    <div className="app">
       
       <Navbar />
       <div className="sections">
         <Intro/>
         <About/>
         <Portfolio/>
         <Projects/>
         
         
       </div>
       

    </div>
  );
}

export default App;
