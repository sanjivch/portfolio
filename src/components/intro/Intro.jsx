import React from 'react';
import Particle from '../particle/Particle';
import { init } from 'ityped';
import './intro.scss';
import {MdWavingHand, MdOutlineWavingHand,MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { FaPython, FaDatabase , FaGithubSquare, FaLinkedin, FaGitAlt, FaKaggle, FaTwitterSquare} from 'react-icons/fa';
import {GrLinkedinOption, GrGithub, GrDocumentPdf} from 'react-icons/gr';
import { HiDocumentText } from "react-icons/hi";
import {FiGithub, FiLinkedin, FiFileText} from 'react-icons/fi';

const Intro = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 100000,
            backSpeed: 60,
            disableBackTyping: false,
            loop: false,
            strings: ['Data Science \u2727 Machine Learning' ] 
        })
    }, []);
    return (
        <div className='intro' id='intro'>
            
                <div className="main-body">
                
                    <div className="wrapper">
                        <h2>Hello, I'm</h2> 
                        <h1>Sanjiv Chemudupati</h1>
                        {/*<h3><span ref={textRef}></span></h3>*/}
                        <h3>Data Science  &#9679; Machine Learning</h3>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/sanjivch">
                        <FiGithub className='icon'/>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/sanjivch09/">
                        <FiLinkedin className='icon'/>
                        </a>

                        <a href="https://www.linkedin.com/in/sanjivch09/">
                        <FiFileText className='icon'/>
                        </a>

                        {/*<a href="">
                        <HiDocumentText className='icon'/>
                        </a>*/}
                        
                    </div> 
                    {/*<div className="arrow-wrapper">
                        <a href="#about">
                        <MdKeyboardArrowDown className="arrow" />
                        </a>
                    </div>*/}
                
                </div>
             
                    

                    
                
            
        </div>
    );
}

export default Intro;
