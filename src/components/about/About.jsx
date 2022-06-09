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
                <div className="hr3"></div>
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
                    <div className="hr3"></div>
                    <div className="skill-icon-card">
                        <h3>Data Analysis and Machine Learning</h3>
                        <img src="assets/Pandas_logo.svg" alt="pandas" width="100px" />
                        <img src="assets/Scikit_learn_logo_small.svg" alt="sklearn" width="80px" />
                        <img src="assets/Tensorflow_logo.svg" alt="tensorflow" width="40px" />
                        
                        <div className="hr3"></div>
                        <h3>Visualization</h3>
                        <img src="assets/Matplotlib_icon.svg" alt="matplotlib" width="40px" />
                        
                        <img src="assets/d3js-icon.svg" alt="d3js" width="40px" /> 
                        <img src="assets/plot_ly-icon.svg" alt="plotly" width="40px" />
                        <div className="hr3"></div>
                        <h3>Prototyping</h3>
                        
                        <img src="assets/streamlit-mark-color.svg" alt="streamlit" width="50px" />
                        <img src="assets/pinpng.com-dash-line-png-2658026.png" alt="dash" width="80px" />
                        <div className="hr3"></div>
                        <h3>Web Frameworks</h3>
                        <img src="assets/Flask_logo.svg" alt="flask" width="80px" />
                        <img src="assets/fastapi-1.svg" alt="fastapi" width="40px" />
                        <div className="hr3"></div>
                        <h3>Databases</h3>
                        <img src="assets/Postgresql_elephant.svg" alt="postgresql" width="40px" />
                        <img src="assets/SQLite370.svg" alt="sqlite" width="100px" />
                        
                        <div className="hr3"></div>
                        <h3>Miscellaneous</h3>
                        <img src="assets/Git-logo.svg" alt="git" width="80px" />
                        <img src="assets/docker-3.svg" alt="docker" width="120px" />
                        
                        
                        
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
