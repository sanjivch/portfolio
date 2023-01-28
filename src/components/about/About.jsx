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
                
                <h2>About</h2>
                <div className="hr3"></div>
                <div className="text-content">
                    <p className="intro-para"><span class="first-letter">I'</span>m a data scientist/ machine learning engineer. 
                    My work involves building Speech-NLP models and optimizing the models for deployment. I have previously worked in industrial AI, solving process and manufacturing problems, at scale, using machine learning/ 
                    deep learning techniques.   
                    </p>
                    <br />
                    
                    <p>
                    <span class="first-letter">I</span> love building stuff(read web apps) in Python. Every day I push myself to learn something new and try to better than yesterday. 
  I also love to cartoon and I'm into sketch-noting.
                    </p>
                    <br />
                </div>
                <br />
            </div>

            <a href="#portfolio">
            <MdKeyboardArrowDown className="arrow" />
            </a>
        </div>
    );
}

export default About;
