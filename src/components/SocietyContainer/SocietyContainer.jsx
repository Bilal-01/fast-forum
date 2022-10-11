import React from 'react';
import image from'./../../assets/Societies_image/Star.mp4'
import './SocietyContainer.css';
function SocietyContainer()
{
    return(
        <div className='Society-Container'>
            <video src={image} autoPlay loop muted/>
            <h1>STUDENT SOCIETIES</h1>
            <p>"The Difference Between Ordinary
            And Extraordinary Is That Little Extra."
            ~Jimmy Johnson</p>
        </div>
    )
}
export default SocietyContainer;