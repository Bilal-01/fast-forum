import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import exploreImg from './../../assets/bg-home1.jpeg';
import BImg from './../../assets/blog-1.jpg';
import './blogcont.css';

function BlogContainer()
{
    return(
        <>
            <div className="b-container">
                <img className='bbg-img' src={BImg} alt="background" />
                <div className="bimg-shadow"></div>
            </div>
            <div className='b-main'>
                <div className="blog-container">
                    <article class="left-to-right-cont">
                        <header className='text-container'>
                            <h2>
                                "Lorem ipsum"
                            </h2>
                            <div>
                                Unknown 
                            </div>
                            <div>
                                9th October 2022
                            </div>
                        </header>
                        <div>
                            Lorem ipsum dolor sit amet. Id provident consequatur et sint minus sit quam quia et dolores itaque. Vel cumque voluptas cum nisi Quis ad eius impedit. Et nobis saepe aut impedit maiores qui suscipit eligendi nam magni quam ut explicabo internos sit autem maxime sed sequi cumque. Et quidem voluptatem est reiciendis delectus sed laborum nisi non molestias eligendi At ipsam dolore.
                        </div>
                    </article>
                </div>
                <div className="blog-container">
                    <article class="left-to-right-cont">
                        <header className='text-container'>
                            <h2>
                                "Lorem ipsum"
                            </h2>
                            <div>
                                Unknown 
                            </div>
                            <div>
                                9th October 2022
                            </div>                   
                        </header>
                        <div className='content-container'>
                            Lorem ipsum dolor sit amet. Id provident consequatur et sint minus sit quam quia et dolores itaque. Vel cumque voluptas cum nisi Quis ad eius impedit. Et nobis saepe aut impedit maiores qui suscipit eligendi nam magni quam ut explicabo internos sit autem maxime sed sequi cumque. Et quidem voluptatem est reiciendis delectus sed laborum nisi non molestias eligendi At ipsam dolore.
                        </div>
                    </article>
                </div>
                <div className="blog-container">
                    <article class="left-to-right-cont">
                        <header className='text-container'>
                            <h2>
                                "Lorem ipsum"
                            </h2>
                            <div>
                                Unknown 
                            </div>
                            <div>
                                9th October 2022
                            </div>
                        </header>
                        <div className='content-container'>
                            Lorem ipsum dolor sit amet. Id provident consequatur et sint minus sit quam quia et dolores itaque. Vel cumque voluptas cum nisi Quis ad eius impedit. Et nobis saepe aut impedit maiores qui suscipit eligendi nam magni quam ut explicabo internos sit autem maxime sed sequi cumque. Et quidem voluptatem est reiciendis delectus sed laborum nisi non molestias eligendi At ipsam dolore.
                        </div>
                    </article>
                </div>
            </div>
            <Box className='b-add' sx={{ flexGrow: 1, marginBottom: '64px' }}>
            <Fab color='primary' aria-label='add blog' >
                <AddIcon />
            </Fab>
            </Box>
        </>
        
        
    );
}

export default BlogContainer;