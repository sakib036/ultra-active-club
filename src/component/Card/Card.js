import React, { useEffect, useState } from 'react';
import CardHeader from '../CardHeader/CardHeader';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';
import Items from '../Items/Items';
import Question from '../Question/Question';
import './Card.css'


const Card = () => {
    const [items, setItems]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    }, []);
    const [time, setTime]=useState(0);
    const addTime=(items)=>{
      const newTime=time+(items.time);
      setTime(newTime);
    }
    return (
        <div className='card'>
            <div className='card-container'>
                <CardHeader></CardHeader>
                 <div className='item-container'>
                     {
                    items.map(item=><Items
                    key={item.id}
                    item={item}
                    addTime={addTime}
                    ></Items>)
                   
                }
                  </div>
            </div>
            
            <div className='exercise-detail'>
                    <ExerciseDetail time={time}></ExerciseDetail>
            </div>
            <div>
                <Question></Question>
            </div>
        </div>
        

    );
};

export default Card;