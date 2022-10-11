import React from 'react';
import image from'./../../assets/Societies_image/Decs_logo.jpg'
import './society-details.css';

function SocietyDetails(props)
{  
    
    return(
        <div className='society-details-container'>
            <img src={props.src} alt='society' />

        </div>
    )
}
export default SocietyDetails;