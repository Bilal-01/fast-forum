import React from 'react';
import Header from '../../components/Header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import ExploreBlogsSection from '../../components/ExploreBlogsSection/ExploreBlogsSection';
import Footer from '../../components/Footer/Footer';
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