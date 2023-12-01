import React from "react";
import {LibHeader, Navbar,TableL, ModalC, Footer, ModalL } from '../../components';
function Library()
{
    return(
        <>
        
        <Navbar />
        <LibHeader />
        {/* <ModalL /> */}
        <TableL />
        <Footer />
    </>
    )
}
export default Library;