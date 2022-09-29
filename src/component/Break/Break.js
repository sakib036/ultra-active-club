import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='break-time'>
                <button>10 m</button>
                <button>15 m</button>
                <button>20 m</button>
                <button>25 m</button>
               
            </div>
        </div>
    );
};

export default Break;