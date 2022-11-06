import React from 'react';
import RImg from './../../assets/resources-bg-1.jpeg';
import './resourcecont.css';

function ResourceContainer()
{
    return(
            <>
                <div className="resource-container">
                    <img className='rbg-img' src={RImg} alt="background" />
                    <div className="rimg-shadow"></div>
                    <h1>
                        Resources
                    </h1>
                </div>
                
            </>
    );
}

export default ResourceContainer;