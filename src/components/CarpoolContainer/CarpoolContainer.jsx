import React from 'react';
import image from'./../../assets/Carpool/top.jpg'
import './CarpoolContainer.css';

function CarpoolContainer()
{
    return(
        <div className='CarpoolContainer'>            <video src={image} autoPlay loop muted/>
            <img className='mainImg' src={image}/>
        </div>
    )
}
export default CarpoolContainer;