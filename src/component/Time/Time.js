import React from 'react';
import './Time.css'

const Time = () => {
    return (
        <div>
            <h3>Exercise Details</h3>
            <div className='time'>
                <h4>Exercise Time</h4>
                <h4>min</h4>
            </div>
            <div className='time'>
                <h4>Break Time</h4>
                <h4>min</h4>
            </div>
        </div>
    );
};

export default Time;