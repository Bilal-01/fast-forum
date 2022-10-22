import React from 'react';
import {UserProfile, Navbar, Footer} from '../../components';

function Profile(){
    return(
        <>
            <Navbar />
            <UserProfile isLoggedIn={true} />
            <Footer />
        </>
    )
}

export default Profile