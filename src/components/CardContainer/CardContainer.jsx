import React from 'react';
import Card from '../Card/Card';
import QuizIcon from '@mui/icons-material/Quiz';
import './card-container.css';

function CardContainer(){
    return(
        <div className='card-wrapper'>
            <div className="single-card">
                <Card 
                    icon = {<QuizIcon color='primary' fontSize='large'/>}
                    heading="Heading Text" 
                    description="Lorum ispum dolor sit amet consectuer" 
                    color="primary"
                    border="1px solid blue"
                />                
            </div>
            <div className="single-card">
                <Card 
                icon = {<QuizIcon color='primary' fontSize='large'/>}
                heading="Heading Text" 
                description="Lorum ispum dolor sit amet consectuer" 
                color="primary"
                border="1px solid green"
            />
            </div>
            <div className="single-card">
                <Card 
                icon = {<QuizIcon color='primary' fontSize='large'/>}
                heading="Heading Text" 
                description="Lorum ispum dolor sit amet consectuer" 
                color="primary"
                border="1px solid pink"
            />
            </div>
            <div className="single-card">
                <Card 
                icon = {<QuizIcon color='primary' fontSize='large'/>}
                heading="Heading Text" 
                description="Lorum ispum dolor sit amet consectuer" 
                color="primary"
                border="1px solid yellow"
            />
            </div>
            
            
            
            
        </div>
    );

}

export default CardContainer;