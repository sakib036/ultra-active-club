import React, { useEffect, useState } from 'react';
import CardHeader from '../CardHeader/CardHeader';
import Items from '../Items/Items';
import './Card.css'


const Card = () => {
    const [items, setItems]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    }, []);
    return (
        <div>
            <CardHeader></CardHeader>
            <div className='item-container'>
                {
                    items.map(item=><Items
                    key={item.id}
                    item={item}
                    ></Items>)
                   
                }
            </div>
        </div>
        

    );
};

export default Card;