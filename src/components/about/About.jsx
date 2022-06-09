import React from 'react';
import './about.scss';
import { FaPython, FaDatabase , FaGitAlt} from 'react-icons/fa';
import { SiFlask, SiFastapi } from 'react-icons/si';
import { MdKeyboardArrowDown} from 'react-icons/md';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="left-content">
                <div className="portfolio-image">
                    <img src="assets/sanjiv-avatar.png" alt="Sanjiv" />
                </div>
                
                <h2>About me</h2>
                <hr></hr>
                <div className="text-content">
                    <p>I'm a chemical engineer turned data scientist working in the field of Industrial AI. 
                    My work involves solving process and manufacturing problems, at scale, using machine learning/ 
                    deep learning. I predominantly work with timeseries data in the areas of anomaly detection, 
                    forecasting and process optimization.  
                    </p>
                    <br />
                    
                    <p>
                    At the beginning of 2017, while working as a process simulation engineer I stumbled across the Python programming language. I instantly fell in love with its syntax (coming from a C-programming background building mathematical models of process equipment). This led me to delve deeper on the art of possible with python, and I discovered machine learning. By this time, I moved into another company as an Advanced Process Control Engineer. This job involved working with huge amounts of data, and one thing led to another and I utimately transitioned into a data scientist.
                    My interests other than Data Science include Process Analytics, Dashboarding and Advanced Process Control.</p>
                    <br />
                    <p>
                    A few interesting things about me. I love to build new things using tech. Lastly, I love learning. Every day I push myself to learn something new and try to better than yesterday. 
  
                    </p>
                    <br />
                </div>
                <br />
            </div>
            <div className="right-content">
                
                <div className="skills">
                    <h2>Skills</h2>
                    
                    <div className="skill-icon">
                        <h3>Machine Learning</h3>
                        sklearn
                        tensorflow
                        pytorch
                        <h3>Visualization</h3>
                        d3js Plotly 
                        <h3>prototyping</h3>
                        Streamlit 
                        Dash
                        <h3>Web Frameworks</h3>
                        <SiFlask className='icon'/>
                        <SiFastapi className='icon'/>
                        <h3>Misc</h3>
                        <FaGitAlt className='icon'/>
                        <FaPython className='icon'/>
                        Docker
                        
                        <FaDatabase className='icon'/>
                        
                    </div>
                    
                </div>
                
                
            </div>
            <a href="#portfolio">
            <MdKeyboardArrowDown className="arrow" />
            </a>
        </div>
    );
}

export default About;
