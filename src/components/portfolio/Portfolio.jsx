import React from 'react';
import './portfolio.scss';
import { useEffect, useState } from 'react';
import Portfoliolist from './portfolioList/portfolioList';

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },

        {
            id: "dataCleaning",
            title: "Data Cleaning"
        },

        {
            id: "dataVisualization",
            title: "Data Visualization"
        },

        {
            id: "modeling",
            title: "Modeling"
        },

        {
            id: "modelDeployment",
            title: "Model Deployment"
        }
                
    ];

    return (
        <div className='portfolio' id='portfolio'>
            <h2>Portfolio</h2>
            <br /><br /><br /><br />
            <div className="container">
                <div className="item">
                    <img src="https://picsum.photos/200/300?random=1" alt="" />
                    <h3>Bank Market Classification</h3>
                    <p>test</p>
                    
                </div>
                <div className="item">
                    <img src="https://picsum.photos/200/300?random=1" alt="" />
                    <h3>Heart Disease Classification</h3>
                </div>
                <div className="item">
                    <img src="https://picsum.photos/200/300?random=1" alt="" />
                    <h3>App #1</h3>
                </div>
                <div className="item">
                    <img src="https://picsum.photos/200/300?random=1" alt="" />
                    <h3>App #1</h3>
                </div>
                <div className="item">
                    <img src="https://picsum.photos/200/300?random=1" alt="" />
                    <h3>App #1</h3>
                </div>
                <div className="item">
                    <img src="https://picsum.photos/200/300?random=1" alt="" />
                    <h3>App #1</h3>
                </div>

            </div>
        </div>
    );
}

export default Portfolio;
