import React from 'react';
import Card from '../Card/Card';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import exploreImg from './../../assets/bg-home1.jpeg';
import './blogcont.css';

function BlogContainer()
{
    return(
        <>
            <div className="blog-container">
                <article class="left-to-right-cont">
                    <header className='text-container'>
                        <h2>
                            "Why Bilal is an idiot"
                        </h2>
                        <div className='Author-container'>
                            <div>
                                Unknown 
                            </div>
                            <div>
                                9th October 2022
                            </div>
                        </div>
                    </header>
                    <div>
                        Because he's a cheating alligator, a dumb alligator, a scary alligator,Mean alligator,Big Alligator,Idiot Alligator,Annoying Alligator,Ginormous Gator,Matlabi Alligator,Selfish Alligator,Bad Alligator,Stupid Alligator,Unkind Alligator,Boring Gator,Old Alligator,Short Alligator,Irritating Alligator,Infuriating Alligator,Exasperating Alligator,Thickheaded Alligator,Goofball Gator,Git Gator
                    </div>
                    <div>
                        <img className="explore-img-container" src={exploreImg} alt="" />
                    </div>
                </article>
            </div>
            <div className="blog-container">
                <article class="left-to-right-cont">
                    <header className='text-container'>
                        <h2>
                            "Why Bilal is an idiot"
                        </h2>
                        <div className='Author-container'>
                            <div>
                                Unknown 
                            </div>
                            <div>
                                9th October 2022
                            </div>
                        </div>
                    </header>
                    <div>
                        <img className="explore-img-container" src={exploreImg} alt="" />
                    </div>
                    <div className='content-container'>
                        Because he's a cheating alligator, a dumb alligator, a scary alligator,Mean alligator,Big Alligator,Idiot Alligator,Annoying Alligator,Ginormous Gator,Matlabi Alligator,Selfish Alligator,Bad Alligator,Stupid Alligator,Unkind Alligator,Boring Gator,Old Alligator,Short Alligator,Irritating Alligator,Infuriating Alligator,Exasperating Alligator,Thickheaded Alligator,Goofball Gator,Git Gator
                    </div>
                </article>
            </div>
            <div className="blog-container">
                <article class="left-to-right-cont">
                    <header className='text-container'>
                        <h2>
                            "Why Bilal is an idiot"
                        </h2>
                        <div className='Author-container'>
                            <div>
                                Unknown 
                            </div>
                            <div>
                                9th October 2022
                            </div>
                        </div>
                    </header>
                    <div>
                        Because he's a cheating alligator, a dumb alligator, a scary alligator,Mean alligator,Big Alligator,Idiot Alligator,Annoying Alligator,Ginormous Gator,Matlabi Alligator,Selfish Alligator,Bad Alligator,Stupid Alligator,Unkind Alligator,Boring Gator,Old Alligator,Short Alligator,Irritating Alligator,Infuriating Alligator,Exasperating Alligator,Thickheaded Alligator,Goofball Gator,Git Gator
                    </div>
                    <div>
                        <img className="explore-img-container" src={exploreImg} alt="" />
                    </div>
                </article>
            </div>
        </>
        
        
    );
}

export default BlogContainer;