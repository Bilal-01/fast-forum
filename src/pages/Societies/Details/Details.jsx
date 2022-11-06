import React from "react";
import {Navbar, Footer } from '../../../components';
import SocietyDetails from "../../../components/SocietyDetails/SocietyDetails";
import societyLogo from '../../../assets/Societies_image/Decs_logo.jpg';

function Details(){
    return(
        <>
            <Navbar />
            <SocietyDetails src={societyLogo} />
            <Footer />

        </>
    );

}
export default Details;