import React from 'react';
import Card from '../Card/Card';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './explore.css';

function ExploreBlogsSection(){
    return(
        <>
            <div className="explore-blogs-container">
                <Card 
                    icon={<AutoStoriesIcon fontSize='large' color='success' />}
                    heading="Title"
                    description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Card 
                    icon={<AutoStoriesIcon fontSize='large' color='success' />}
                    heading="Title"
                    description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </>

    );

}

export default ExploreBlogsSection