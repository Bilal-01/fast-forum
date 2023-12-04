import React from 'react';
import {Navbar, EventsContainer,Footer} from '../../components';

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