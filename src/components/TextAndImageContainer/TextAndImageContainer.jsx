import React from 'react';
import {Card, CardMedia, CardActions} from '@mui/material';
import './txt-img.css';

function TextAndImageContainer(props){
    const styles={
        width: props.width,
        height: props.height,
        margin: "50px auto",
    }

    return (
        <div className='txt-img-container' style={styles}>
            <div className="txt-container">
                <div className="txt-container-heading">
                    <h1>Get all your problems solved here!</h1>
                </div>
                <div className="txt-container-txt">
                <p>
                    Educating and empowering the SEO community by providing the freshest news and latest best practices via the industry’s smartest practitioners.

Launched in 2003, SEJ is unique in its community-based approach to search marketing content. Virtually all of our contributed articles come from real online marketing experts, both independent and in-house. SEJ is owned by Alpha Brand Media.


                    </p>
                </div>
            </div>
            <div className="img-container">
                <img className='img-container-img' src={props.src} alt="Image" />
            </div>

        </div>
    )
}

export default TextAndImageContainer;