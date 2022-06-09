import React from 'react';
import "./portfolioList.scss";

const Portfoliolist = ({id, title, active, setSelected}) => {
    return (
        <li 
            className={active ? 'portfolioList active' : 'portfolioList'}
            onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}

export default Portfoliolist;
