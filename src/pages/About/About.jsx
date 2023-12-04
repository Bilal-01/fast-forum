import React from 'react';
import { Navbar, Footer, TextAndImageContainer, UserCard } from '../../components';
import aboutImg from '../../assets/about-us.jpeg';
import userIcon from '../../assets/user-icon.png';

import './about.css';

function About(){
    return(
        <>
            <Navbar />
            <TextAndImageContainer width="70%" height="70vh" src={aboutImg} />
            <div className='user-card-container'>
                <UserCard src={userIcon} name="Bilal Aziz" description="" />
                <UserCard src={userIcon} name="Maryam Siddiqui" description="" />
                <UserCard src={userIcon} name="Imtiaz" description="" />
            </div>
            <Footer />
        </>
    );
}

export default About;