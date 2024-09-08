import React from 'react'
import './navbar.scss';
// const Navbar = ({ menuOpenHome, setMenuOpenHome, menuOpenAbout, setMenuOpenAbout,  menuOpenPortfolio, setMenuOpenPortfolio, menuOpenCertificates, setMenuOpenCertificates }) => {
const Navbar = ({ menuOpenHome, setMenuOpenHome,  menuOpenPortfolio, setMenuOpenPortfolio }) => {

    return (
        <div className='navbar'>
                
                <div className="nav-items">
                
                    <a className={"nav-item " + (menuOpenHome && "active")} onClick={()=>{setMenuOpenHome(true); setMenuOpenAbout(false); setMenuOpenPortfolio(false); setMenuOpenCertificates(false)}} href="#intro">Home</a>
                
{/*                 
                    <a className={"nav-item " + (menuOpenAbout && "active")} onClick={()=>{setMenuOpenHome(false); setMenuOpenAbout(true); setMenuOpenPortfolio(false); setMenuOpenCertificates(false)}} href="#about">About</a>
                
                 */}
                    <a className={"nav-item " + (menuOpenPortfolio && "active")} onClick={()=>{setMenuOpenHome(false); setMenuOpenAbout(false); setMenuOpenPortfolio(true); setMenuOpenCertificates(false)}} href="#portfolio">Portfolio</a>
                
{/*                 
                    <a className={"nav-item " + (menuOpenCertificates && "active")} onClick={()=>{setMenuOpenHome(false); setMenuOpenAbout(false); setMenuOpenPortfolio(false); setMenuOpenCertificates(true)}} href="#certifications">Certifications</a>
                     */}
                
            
                </div>
                    
                    <div className="itemContainer">
                        
                       
                    </div>
                </div>
                
                
    );
}

export default Navbar;
