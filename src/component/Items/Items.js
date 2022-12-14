import React from 'react';
import './Items.css'

const Items = (props) => {

    const {age,title,picture,time,about}=props.item;
    return (
        <div className='card-item'>
            <div className='card-detail'>
                <img className='card-pic' src={picture} alt="" />
                <h1>{title}</h1>
                <p>{about}</p>
                <p>Age :{age}</p>
                <p>Time:{time} min</p>
            </div>
            <button onClick={()=>props.addTime(props.item)} className='btn-add-list'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Items;