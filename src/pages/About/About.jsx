import React from 'react';
import { Navbar, Footer, TextAndImageContainer, UserCard } from '../../components';
import aboutImg from '../../assets/about-us.jpeg';
import alligator from '../../assets/alligator.png';
import panda from '../../assets/panda.png';
import dino from '../../assets/dino.png';

import './about.css';

function About(){
    return(
        <>
            <Navbar />
            <TextAndImageContainer width="70%" height="70vh" src={aboutImg} />
            <div className='user-card-container'>
                <UserCard src={alligator} name="Bilal Aziz" description="An admirable King" />
                <UserCard src={panda} name="Maryam Siddiqui" description="An idiot Panda. " />
                <UserCard src={dino} name="Sabah Mawani" description="A scary Dino" />
            </div>
            <Footer />
        </>
    );
}

export default About;