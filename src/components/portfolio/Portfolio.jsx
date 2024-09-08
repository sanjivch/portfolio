import React from 'react';
import './portfolio.scss';
import projectList from '../../projects.json';
//import { useNavigate } from 'react-router-dom';
import {FiVolume2} from 'react-icons/fi';
import {MdTranslate, MdCompress, MdTableView} from 'react-icons/md';
const Portfolio = () => {
    
    console.log(projectList)
    // https://www.codegrepper.com/code-examples/javascript/react+open+url+in+new+tab
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      
          
    
    return (
        <div className='portfolio' id='portfolio'>
            
            {/*<h3>Few of my personal projects...</h3><br /><br />
            <div className="container">
            {projectList.length &&
                projectList.map((project, i) => {
                    const projectTitle = project.title
                    const projectUrl = project.url
                    // console.log(projectUrl)
                    return (
                        <div className="item">
                            <h3>{project.title}</h3>
                            <p>{project.tags}</p>
                            <button type="button" onClick={() => openInNewTab(project.url)}>{project.button}</button>
                            

                        </div>
                    )
                })}
                
            </div>*/}
            <div className='portfolio-sections'>
            <h3><MdTranslate className='icon'/> Text</h3>
            <div className="container">
            {projectList.length &&
                projectList.map((project, i) => {
                    const projectTitle = project.title
                    const projectUrl = project.url
                    // console.log(projectUrl)
                    return (
                        <div className="item">
                            <h3>{project.title}</h3>
                            {/*<p>{project.tags}</p>*/}
                            <button type="button" onClick={() => openInNewTab(project.url)}>{project.button}</button>
                            <button type="button" onClick={() => openInNewTab(project.url)}>Demo</button>

                        </div>
                    )
                })}
                
            </div>
            <h3><FiVolume2 className='icon'/> Audio</h3>
            <div className="container">
            {projectList.length &&
                projectList.map((project, i) => {
                    const projectTitle = project.title
                    const projectUrl = project.url
                    // console.log(projectUrl)
                    return (
                        <div className="item">
                            <h3>{project.title}</h3>
                            {/*<p>{project.tags}</p>*/}
                            <button type="button" onClick={() => openInNewTab(project.url)}>{project.button}</button>
                            <button type="button" onClick={() => openInNewTab(project.url)}>Demo</button>

                        </div>
                    )
                })}
                
            </div>
            <h3><MdCompress className='icon'/> Model Compression</h3>
            <div className="container">
            {projectList.length &&
                projectList.map((project, i) => {
                    const projectTitle = project.title
                    const projectUrl = project.url
                    // console.log(projectUrl)
                    return (
                        <div className="item">
                            <h3>{project.title}</h3>
                            {/*<p>{project.tags}</p>*/}
                            <button type="button" onClick={() => openInNewTab(project.url)}>{project.button}</button>
                            <button type="button" onClick={() => openInNewTab(project.url)}>Demo</button>

                        </div>
                    )
                })}
                
            </div>
            <h3><MdTableView className='icon'/> Image/ Video</h3>
            <div className="container">
            {projectList.length &&
                projectList.map((project, i) => {
                    const projectTitle = project.title
                    const projectUrl = project.url
                    // console.log(projectUrl)
                    return (
                        <div className="item">
                            <h3>{project.title}</h3>
                            {/*<p>{project.tags}</p>*/}
                            <button type="button" onClick={() => openInNewTab(project.url)}>{project.button}</button>
                            <button type="button" onClick={() => openInNewTab(project.url)}>Demo</button>

                        </div>
                    )
                })}
                
            </div>
            </div>
        </div>
    );
}

export default Portfolio;
