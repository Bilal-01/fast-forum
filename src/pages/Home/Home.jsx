import React from 'react';
import { Header, CardContainer, ExploreBlogsSection, Footer } from '../../components';
import {Button} from '@mui/material';

function Home(){
    return(
        <>
            <Header />
            <CardContainer />
            <ExploreBlogsSection />
            <Footer />
        </>

    );
}

export default Home;