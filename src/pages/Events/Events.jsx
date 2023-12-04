import React from 'react';
import {Navbar, EventsContainer,Footer} from '../../components';
import { useParams } from 'react-router-dom';

function Events()
{
    return (
        <>
            <Navbar/>
            <div style={{padding:"50px"}}>
            <EventsContainer/>  
            </div>
            <Footer/>
            
        </>
        
    );
}

export default Events;