import React from 'react';
import image from'./../../assets/Societies_image/Society.gif'
import './SocietyContainerBottom.css';
function SocietyContainerBottom()
{
    return(
        <div className='society-container-bottom'>
            <img className='society-container-bottom-img'  src={image}/> 
        </div>
    )
}
export default SocietyContainerBottom;