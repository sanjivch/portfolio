import React from 'react';
import './projects.scss';
import { FaArrowCircleLeft, FaArrowCircleRight, FaLinkedin, FaGithubSquare,} from "react-icons/fa";
import { SiLinkedin, SiGithub, SiBuymeacoffee, SiReact, SiHtml5, SiCss3, SiYoutube, SiGmail, SiUdemy, SiCoursera, SiDatacamp}  from "react-icons/si";
import {ImMail} from "react-icons/im";
import { useState } from 'react';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const data = [1];
    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length-1) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 : 0)
    };
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      
    return (
        <div className='projects' id='certifications'>
            
           <div className='cert-providers'>
           
           <div className='cert-provider-item'>
                <SiUdemy className='cert-provider-icon'/>
                <h3> NLP with Python</h3>
                <button type="button" onClick={() => openInNewTab("https://www.udemy.com/certificate/UC-234c92fd-a73a-4b56-9910-9146263065fd/")}>View</button>
           </div>
           <div className='cert-provider-item'>
                <SiCoursera className='cert-provider-icon'/> 
                <h3>Python for Everybody</h3>
                <button type="button" onClick={() => openInNewTab("https://www.coursera.org/account/accomplishments/specialization/certificate/2BHMBN94EZP4")}>View</button>
           </div>
           <div className='cert-provider-item'>
                <SiDatacamp className='cert-provider-icon'/> 
                <h3>Data Scientist with Python</h3>
                <button type="button" onClick={() => openInNewTab("https://www.datacamp.com/statement-of-accomplishment/track/867633b360c4753f82bf2970109d27f9aa28f83b")}>View</button>
           </div>
           
           </div>
           
           {/* <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
            {data.map((d, i) => (
            <div className="container">
            
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="https://unsplash.it/200/200" alt="" />
                            </div>
                            <h2>Power Dashboard </h2>
                            <p>Bokeh and Flask
                                <br />
                                dashboard
                            </p>
                            
                        </div>
                    </div>
                    <div className="right">
                        <img src="assets/power_plant.png" alt="" />
                    </div>
                </div>

                
            </div>

            
            ))}
        </div>
        <FaArrowCircleLeft className='arrow left' onClick={() => handleClick("left")}/>
        <FaArrowCircleRight className='arrow right' onClick={() => handleClick("right")} />
            */}
        <div className="footer">
        <div className="footer-left">
            
            <p>&copy; Sanjiv Chemudupati 2017-{new Date().getFullYear()}. All rights reserved. All opinions and views expressed are personal.
            </p>
        </div>
        <div className="footer-right">
            
            <a href="mailto:sanjiv.ch09@gmail.com"><SiGmail /></a>
            <a href="https://www.linkedin.com/in/sanjivch09/"><SiLinkedin /></a>
            <a href="https://github.com/sanjivch"><SiGithub /></a>
            {/* <a href=" https://www.buymeacoffee.com/sanjivch09"><SiBuymeacoffee /></a>*/}
            
        </div>
        
        </div>
        
            </div>
    );
}

export default Projects;
