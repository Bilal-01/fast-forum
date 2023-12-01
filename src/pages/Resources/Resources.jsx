import React from 'react';
import {Navbar, Footer, ResourceContainer,ModalR,TableR} from '../../components';
import './resources.css'

function Resources()
{
    return (
        <>
            <Navbar/>
            <ResourceContainer />
            <ModalR/>
            <div className='table-container'>
                <TableR/>
            </div>
            <Footer></Footer>
        </>
        
    );
}

export default Resources;