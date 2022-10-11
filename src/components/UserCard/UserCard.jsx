import React , { useState } from 'react';
import { Avatar } from '@mui/material';
import './user-card.css';

function UserCard(props){

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const styles = {
        cursor: isHovering ? 'pointer' : '',

    }

    return(
        <div className='user-card' style={styles}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Avatar
                    imgProps= {{
                        sx: {
                            borderRadius: '100%'
                        }
                    }}
                    variant='circle' 
                    alt={props.name} 
                    src={props.src}
                    sx={{
                        borderRadius: '100%', 
                        padding: '10px',
                        height: 84, 
                        width: 84, 
                        border: isHovering ? '3px solid #1976d2': '3px solid white' ,
                        transition: "0.3s all",
                    }}
                />
            </div>
            <div className="admin-description">
                <h3>{props.name}</h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default UserCard;