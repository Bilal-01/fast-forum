import React, { useEffect, useState } from 'react';
import CImg from '../../assets/Canteen/main.gif'; 
import CImg1 from '../../assets/Canteen/main-left.gif';
import './CanteensContainer.css'

function CanteensContainer(){
    return (
        <>
        <div>
           <div className='canteen-main-image-body'>
           <img className='canteen-main-image-left' src={CImg1} alt="background" />
            <img className='canteen-main-image' src={CImg} alt="background" />
            <img className='canteen-main-image-left' src={CImg1} alt="background" />
           </div>
        </div>
       </>
   );
}


export default CanteensContainer;
