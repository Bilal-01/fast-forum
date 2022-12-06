import React from 'react';
import { Navbar, Footer, TextAndImageContainer, UserCard } from '../../components';
import aboutImg from '../../assets/about-us.jpeg';
import alligator from '../../assets/alligator.png';
import panda from '../../assets/panda.png';
import dino from '../../assets/dino.png';
import bilal from '../../assets/bilal.jpg';

import './about.css';

function About(){
    return(
        <>
            <Navbar />
            <TextAndImageContainer width="70%" height="70vh" src={aboutImg} />
            <div className='user-card-container'>
                <UserCard src={bilal} name="Bilal Aziz" description="" />
                <UserCard src={panda} name="Maryam Siddiqui" description="" />
                <UserCard src={dino} name="Sabah Mawani" description="" />
            </div>
            <Footer />
        </>
    );
}

export default About;