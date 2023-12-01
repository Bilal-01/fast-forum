import React from 'react';
import {Navbar, EventsContainer} from '../../components';
import { useParams } from 'react-router-dom';

function Events()
{
    let {canteenName} = useParams();
    console.log(canteenName);
    return (
        <>
            <Navbar/>
            <EventsContainer/>  
            <div style={{padding:"20px"}}>
        
            </div>
            
        </>
        
    );
}

export default Events;