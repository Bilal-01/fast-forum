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
                    <div className='text-container'>
                        <div className="text">
                            <h3 className="text-heading">
                                Explore
                            </h3>
                            <p className='text-content'>
                                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
                            </p>

                            
                            <h3 className="text-heading">
                                Explore
                            </h3>
                            <p className='text-content'>
                                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default ExploreBlogsSection