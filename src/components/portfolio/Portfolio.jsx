import React from 'react';
import './portfolio.scss';
import projectList from '../../projects.json';

const Portfolio = () => {
    
    console.log(projectList)
    return (
        <div className='portfolio' id='portfolio'>
            <h2>Portfolio</h2>
            <br /><br /><br /><br />
            <div className="container">
            {projectList.length &&
                projectList.map((project, i) => {
                    return (
                        <div className="item">
                            <img src="https://picsum.photos/200/300?random=1" alt="" />
                            <h3>{project.title}</h3>
                            <p>Tagged under: {project.tags} <br /> <br /><a class="button" href={project.url}>View on GitHub</a></p>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
}

export default Portfolio;
