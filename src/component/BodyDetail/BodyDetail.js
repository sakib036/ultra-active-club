import React from 'react';
import './BodyDetail.css'

const BodyDetail = () => {
    return (
        <div>
            <div className='body-details'>
                <div>
                    <h4>75 kg</h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>5.4 </h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>32</h4>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default BodyDetail;