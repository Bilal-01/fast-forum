import React from 'react';
import Card from '../Card/Card';
import QuizIcon from '@mui/icons-material/Quiz';
import './card-container.css';
import { useNavigate } from 'react-router-dom';

function CardContainer(){

    const navigate = useNavigate()
    return(
        <div className='card-wrapper'>
            <div className="single-card" onClick={() => navigate('/project')}>
                <Card 
                    icon = {<QuizIcon color='primary' fontSize='large'/>}
                    heading="Project" 
                    description="Get full access to amazing project ideas according to your courses." 
                    color="primary"
                    border="1px solid blue"
                />                
            </div>
            <div className="single-card" onClick={() => navigate('/resources')} >
                <Card 
                icon = {<QuizIcon color='primary' fontSize='large'/>}
                heading="Resources" 
                description="Get access to  the assignments quizzes and past papers." 
                color="primary"
                border="1px solid green"
            />
            </div>
            <div className="single-card" onClick={() => navigate('/societies')}>
                <Card 
                icon = {<QuizIcon color='primary' fontSize='large'/>}
                heading="Societies" 
                description="Explore the exciting societies and see what they contain" 
                color="primary"
                border="1px solid pink"
            />
            </div>
            <div className="single-card" onClick={() => navigate('/timetable')}>
                <Card 
                icon = {<QuizIcon color='primary' fontSize='large'/>}
                heading="Timetable" 
                description="Customize your own timetable with just one click" 
                color="primary"
                border="1px solid yellow"
            />
            </div>
            
            
            
            
        </div>
    );

}

export default CardContainer;