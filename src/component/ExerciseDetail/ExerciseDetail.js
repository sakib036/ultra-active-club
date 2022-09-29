import React from 'react';
import './ExerciseDetail.css'
import myPic from '../../images/Nazmus Sakib.jpg'
import Break from '../Break/Break';
import BodyDetail from '../BodyDetail/BodyDetail';

const ExerciseDetail = () => {
    return (
        <div className='exercise-details'>
            <div className='exercise-header'>
                <img src={myPic} alt="" />
                <h4>MD. NAZMUS SAKIB</h4>
            </div>
            <BodyDetail></BodyDetail>
            <Break></Break>
        </div>
    );
};

export default ExerciseDetail;