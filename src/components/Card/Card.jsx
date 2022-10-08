import React from 'react';
import QuizIcon from '@mui/icons-material/Quiz';
import './card.css'

function Card(props){
    return(
        <div className="card-wrapper">
            <div className="card">
                {props.icon}
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;