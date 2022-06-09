import React from 'react';
import { init } from 'ityped';
import './intro.scss';
import {MdWavingHand, MdOutlineWavingHand,MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { FaPython, FaDatabase , FaGithubSquare, FaLinkedin, FaGitAlt, FaKaggle, FaTwitterSquare} from 'react-icons/fa';


const Intro = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 100000,
            backSpeed: 60,
            disableBackTyping: false,
            strings: ['Data Scientist \u2727 MLOps \u2727 Python Developer' ] 
        })
    }, []);
    return (
        <div className='intro' id='intro'>
             
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2> 
                    <h1>Sanjiv Chemudupati</h1>
                    <h3>&nbsp;<span ref={textRef}></span></h3>

                    
                    {/*<a href="https://github.com/sanjivch">
                    <FaGithubSquare className='icon'/>
                    </a>
                    <a href="https://www.linkedin.com/in/sanjivch09/">
                    <FaLinkedin className='icon'/>
    </a>*/}
                    
                    

                    <a href="#about">
                        <MdKeyboardArrowDown className="arrow" />
    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;
