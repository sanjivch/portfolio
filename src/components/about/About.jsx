import React from 'react';
import './about.scss';
import { FaPython, FaDatabase , FaGithubSquare, FaLinkedin, FaGitAlt, FaKaggle, FaTwitterSquare} from 'react-icons/fa';
import { SiFlask, SiFastapi } from 'react-icons/si';
import {MdWavingHand, MdOutlineWavingHand,MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="left-content">
            <h2>About me</h2>
            <div className="textContent">
            <p>I'm a chemical engineer turned data scientist working in the field of Industrial Artificial Intelligence. My work involves solving process and manufacturing problems, at scale, using Python and few other machine learning/ deep learning libraries.

                I predominantly work with timeseries data in the areas of anomaly detection, forecasting and process optimization. 
                
            </p>
            <br />
            <p>My interests other than Data Science include Process Analytics, Dashboarding and Advanced Process Control.</p>
            
            </div>
            <br />
            
 
            </div>
                       <div className="iconContent">
                
                <div className="skillIcons">
                    <h2>Skills</h2>
                    
                    <div className="skillItem">
                        <FaPython className='icon'/>
                        <FaGitAlt className='icon'/>
                        <FaDatabase className='icon'/>
                        <SiFlask className='icon'/>
                        <SiFastapi className='icon'/>
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
