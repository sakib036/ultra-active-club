import React from 'react';
import './Break.css'

const Break = ({breakTime}) => {
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='break-time'>
                <button onClick={()=>breakTime(10)}>10 m</button>
                <button onClick={()=>breakTime(15)}>15 m</button>
                <button onClick={()=>breakTime(20)}>20 m</button>
                <button onClick={()=>breakTime(25)}>25 m</button>
               
            </div>
        </div>
    );
};

export default Break;