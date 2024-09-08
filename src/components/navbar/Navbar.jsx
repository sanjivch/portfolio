import React from 'react'
import './navbar.scss';
// const Navbar = ({ menuOpenHome, setMenuOpenHome, menuOpenAbout, setMenuOpenAbout,  menuOpenPortfolio, setMenuOpenPortfolio, menuOpenCertificates, setMenuOpenCertificates }) => {
const Navbar = ({ menuOpenHome, setMenuOpenHome,  menuOpenPortfolio, setMenuOpenPortfolio }) => {

    return (
        <div className='navbar'>
                
                <div className="nav-items">
                
                    <a className={"nav-item " + (menuOpenHome && "active")} onClick={()=>{setMenuOpenHome(true); setMenuOpenPortfolio(false)}} href="#intro">Home</a>
                    <a className={"nav-item " + (menuOpenPortfolio && "active")} onClick={()=>{setMenuOpenHome(false);  setMenuOpenPortfolio(true)}} href="#portfolio">Portfolio</a>

            
                </div>
                    
                    <div className="itemContainer">
                        
                       
                    </div>
                </div>
                
                
    );
}

export default Navbar;
