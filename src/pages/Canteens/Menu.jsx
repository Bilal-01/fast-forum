import React from 'react';
import {Navbar, MenuContainer} from '../../components/';
import { useParams } from 'react-router-dom';
function Menu()
{
    let {params} = useParams();
   console.log(params);
    return (
        <>
            <Navbar/>
            <MenuContainer canteenName={params}/>  
            
        </>
        
    );
}

export default Menu;