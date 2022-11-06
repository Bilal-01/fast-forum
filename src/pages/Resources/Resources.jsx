import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ResourceContainer from '../../components/ResourceContainer/ResourceContainer';
import ResourceContentContainer from '../../components/ResourceContentContainer/ResourceContentContainer';
function Resources()
{
    return (
        <>
            <Navbar/>
            <ResourceContainer />
            <ResourceContentContainer/>
        </>
        
    );
}

export default Resources;