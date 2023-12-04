import React from 'react';
import image from'./../../assets/Carpool/top.jpg'
import './CarpoolContainer.css';

function CarpoolContainer()
{
    return(
        <div className='CarpoolContainer'>            
            <img className='cp-mainImg' src={image}/>
        </div>
    )
}
export default CarpoolContainer;