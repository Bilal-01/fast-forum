import React from 'react';
import Card from '../Card/Card';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import exploreImg from './../../assets/bg-home1.jpeg';
import './explore.css';

function ExploreBlogsSection(){
    return(
        <>
            <div className="explore-blogs-container">
                <div className="explore-card">
                    <div className="explore-img-container">
                        <img className="explore-img" src={exploreImg} alt="" />
                    </div>
                    <div className='explore-text-container'>
                        <div className="text">
                            <h3 className="text-heading">
                                Explore
                            </h3>
                            <p className='text-content'>
                                The National University of Computer & Emerging Sciences has the honor of being the first multi-campus private sector university set up under the Federal Charter granted by Ordinance No.XXIII of 2000, dated July 01, 2000.
                            </p>   
                            <h3 className="text-heading">
                                Why FAST?
                            </h3>
                            <p className='text-content'>
                                Founded as a Federally Chartered University in July 2000, the National University of Computer and Emerging Sciences is a premier University of Pakistan, renowned for quality and impact of its students in the development of local software and other industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default ExploreBlogsSection