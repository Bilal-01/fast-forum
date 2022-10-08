import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderContent from './HeaderContent';
import CardContainer from './../CardContainer/CardContainer';
import './header.css';


function Header(){

    return (
        <>
            <Navbar />
            <HeaderContent />
        </>
    );
}

export default Header;

//props
//conditional rendering
//reusable components
//states