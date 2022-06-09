import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import './app.scss';
import { useState } from "react";



function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);
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
