import React from 'react';
import './projects.scss';
import { FaArrowCircleLeft, FaArrowCircleRight, FaLinkedin, FaGithubSquare,} from "react-icons/fa";
import { SiLinkedin, SiGithub, SiBuymeacoffee, SiReact}  from "react-icons/si";
import {ImMail} from "react-icons/im";
import { useState } from 'react';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const data = [[1,'1'], [2,'a'], [3,'c']];
    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length-1) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 : 0)
    };
    return (
        <div className='projects' id='projects'>
            
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
            {data.map((d, i) => (
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="https://unsplash.it/200/200" alt="" />
                            </div>
                            <h2>Power Dashboard {d[1]}{i}</h2>
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
            
        <div className="footer">
        <div className="footer-left">
            <h3>Sanjiv's personal website</h3>
            <p>&copy; Sanjiv Chemudupati. All rights reserved. All opinions and views expressed are personal.
            </p>
            <p>This site was made from scratch in <SiReact /></p>
        </div>
        <div className="footer-right">
            <a href="mailto:sanjiv.ch09@gmail.com"><ImMail /></a>
            <a href="https://www.linkedin.com/in/sanjivch09/"><SiLinkedin /></a>
            <a href="https://github.com/sanjivch"><SiGithub /></a>
            <a href=" https://www.buymeacoffee.com/sanjivch09"><SiBuymeacoffee /></a>
            
        </div>
        
        </div>
        
            </div>
    );
}

export default Projects;
