import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import './app.scss';



function App() {
  const [menuOpenHome, setMenuOpenHome] = useState(true)
  const [menuOpenAbout, setMenuOpenAbout] = useState(false)
  const [menuOpenPortfolio, setMenuOpenPortfolio] = useState(false)
  const [menuOpenCertificates, setMenuOpenCertificates] = useState(false)

  return (
    <div className="app">
       
       <Navbar menuOpenHome={menuOpenHome} setMenuOpenHome={setMenuOpenHome} menuOpenAbout={menuOpenAbout} setMenuOpenAbout={setMenuOpenAbout} menuOpenPortfolio={menuOpenPortfolio} setMenuOpenPortfolio={setMenuOpenPortfolio} menuOpenCertificates={menuOpenCertificates} setMenuOpenCertificates={setMenuOpenCertificates}/>
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
