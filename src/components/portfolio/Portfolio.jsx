import React from 'react';
import './portfolio.scss';
import projectList from '../../projects.json';
//import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    
    console.log(projectList)
    // https://www.codegrepper.com/code-examples/javascript/react+open+url+in+new+tab
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      
          
    
    return (
        <div className='portfolio' id='portfolio'>
            
            <h3>Few of my personal projects...</h3><br /><br />
            <div className="container">
            {projectList.length &&
                projectList.map((project, i) => {
                    const projectTitle = project.title
                    const projectUrl = project.url
                    console.log(projectUrl)
                    return (
                        <div className="item">
                            <h3>{project.title}</h3>
                            <p>Made with: <strong><i>{project.tags}</i></strong> </p>
                            <button type="button" onClick={() => openInNewTab(project.url)}>{project.button}</button>
                            

                        </div>
                    )
                })}
                
            </div>
        </div>
    );
}

export default Portfolio;
