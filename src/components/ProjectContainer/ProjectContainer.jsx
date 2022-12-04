import React from 'react';
import image from'./../../assets/Project/main.jpg'
import './ProjectContainer.css'
function ProjectContainer()
{
    return(
        <div className='ProjectContainer'>            
            <video src={image} autoPlay loop muted/>
            <img className='PImage' src={image}/>
        </div>
    )
}
export default ProjectContainer;