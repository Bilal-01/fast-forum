import React from 'react';
import {Navbar, CanteensContainer,CanteensCard} from '../../components/';
import { useParams } from 'react-router-dom';

function Canteens()
{
    let {canteenName} = useParams();
    console.log(canteenName);
    return (
        <>
            <Navbar/>
            <CanteensContainer/>  
            <div style={{padding:"20px"}}>
            <CanteensCard />
            </div>
            
        </>
        
    );
}

export default Canteens;