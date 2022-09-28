import React from 'react';
import logo from "../../images/Logo.png"
import "./CardHeader.css"

const CardHeader = () => {
    return (
        <div className='header-section'>
           <div className='header'>
           <img src={logo} alt="" />
            <h1>PEAK PERFORMANCE</h1>
           </div>
           <h1>Select Today's Performance</h1>
        </div>
        
    );
};

export default CardHeader;