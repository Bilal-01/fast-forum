import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import ExploreBlogsSection from '../../components/ExploreBlogsSection/ExploreBlogsSection';
import BlogContainer from '../../components/BlogContainer/BlogContainer';

function Blog()
{
    return (
        <>
            <Navbar />
            <BlogContainer />
        </>
        
    );
}

export default Blog;