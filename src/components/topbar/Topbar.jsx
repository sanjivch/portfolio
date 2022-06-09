import React from 'react';
import './topbar.scss';
import {MdHome,MdOutlineMail } from 'react-icons/md';

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={'topbar'}>
            
                
                    
                    <div className="itemContainer">
                        
                        <ul>
                            <li >
                                <a href="#intro">Home</a>
                            </li>
                            <li >
                                <a href="#about">About</a>
                            </li>
                            <li >
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li >
                                <a href="#projects">Projects</a>
                                
                            </li>
                            <li >
                                <a href="#contact">Contact</a>

                            </li>
                        </ul>
                    </div>
                </div>
                
                
    );
}

export default Topbar;
