import React from 'react';
import image from'./../../assets/Library/lib3.jpeg'
import './LibHeader.css';

function LibHeader()
{
    return(
        <div className='libHeader'>            
            <video src={image} autoPlay loop muted/>
            <img className='mainImg' src={image}/>
        </div>
    )
}
export default LibHeader;