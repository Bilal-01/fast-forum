import React, { useState } from 'react';
import QuizIcon from '@mui/icons-material/Quiz';
import './card.css'

function Card(props){

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    var styles={
        border: isHovering ? props.border : '1px solid transparent',
        transition: "0.3s all"
        
    }

    return(
        <div className="card-wrapper">
            <div className="card" style={styles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {props.icon}
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;