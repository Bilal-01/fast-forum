import React from 'react';
import './guidecont.css';
import gImg from './../../assets/campus-bg-1.jpg';

function GuideContainer()
{
    return(
            <>
            <div className="guide-container">
                    <img className='gbg-img' src={gImg} alt="background" />
                    <div className="gimg-shadow"></div>
                    <h1>
                        Campus Guide
                    </h1>
                </div>
            </>
    )
}

export default GuideContainer;