import React, { useEffect, useState } from 'react';
import './ExerciseDetail.css'
import myPic from '../../images/Nazmus Sakib.jpg'
import Break from '../Break/Break';
import BodyDetail from '../BodyDetail/BodyDetail';
import Time from '../Time/Time';



const ExerciseDetail = ({time}) => {
    const [rest,setRest]=useState(0);
    const breakTime=(breakTime)=>{
       
    const rest=(breakTime);
    localStorage.setItem('restTime', JSON.stringify(rest));
    setRest(rest);   
    }
    useEffect(() => {
        const rest = JSON.parse(localStorage.getItem('restTime'));
        if (rest) {
         setRest(rest);
        }
      }, []);
   
    return (
        <div className='exercise-details'>
            <div className='exercise-header'>
                <img src={myPic} alt="" />
                <h4>MD. NAZMUS SAKIB</h4>
            </div>
            <BodyDetail></BodyDetail>
            <Break  breakTime={breakTime}></Break>
            <Time 
            time={time}
            rest={rest}
             ></Time>
        </div>
    );
};

export default ExerciseDetail;