import React from 'react';
import logo from "../../images/Logo.png"
import "./CardHeader.css"

const CardHeader = () => {
    return (
        <div className='header-section'>
           <div className='header'>
           <img src={logo} alt="" />
            <h3>PEAK PERFORMANCE</h3>
           </div>
           <h3>Select Today's Performance</h3>
        </div>
        
    );
};

export default CardHeader;