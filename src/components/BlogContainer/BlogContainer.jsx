import { Box, colors, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import React, { useState,useEffect } from 'react';
import BImg from './../../assets/blog-1.jpg';
import './blogcont.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import UserContext from '../UserContext';
import { useContext } from 'react';

function BlogContainer()
{
    const auth = useContext(UserContext);
    var stud=''
    {auth.user? stud=auth.user.id:stud=''}
    const [rows, setRows] = useState([])
    useEffect(() => {
    refreshBlog();
    }, [])
    function deleteEntry(id){
        let Bid= id
        axios.delete('http://localhost/forum/php/api/blog.php', {data: Bid}).then(function(response){
            refreshBlog();
        })
    }
    function refreshBlog() {
        axios.get('http://localhost/forum/php/api/blog.php').then(function(response){
            setRows([...response.data.results])
            // rows.map((row, i) => {
            // console.log(row.Bid +
            // row.Heading +
            // row.post_by +
            // row.date_of_post +
            // row.description);
            // })
        })
    }
    return(
        <>
            <div className="b-container">
                <img className='bbg-img' src={BImg} alt="background" />
                <div className="bimg-shadow"></div>
            </div>
            <div className='b-main'>
                {rows.map((row, i) => (
                    <div className="blog-container" key={row.Bid}>
                        <article className="left-to-right-cont">
                            <header className='text-container'>
                                <h2>{row.Heading}</h2>
                                <div>
                                <Link to ={'/profile/'+ row.post_by}>{row.post_by}</Link>
                                </div>
                                <div>
                                    {row.date_of_post}
                                </div>
                            </header>
                            <div>
                                {row.description}
                            </div>
                        {stud === row.post_by ? <Button variant="contained" onClick={(event)=>deleteEntry(row.Bid)}>Delete</Button>: ''}
                        </article>
                    </div>
                ))}
            </div>
            {auth.user?
            <Box className='b-add' sx={{ flexGrow: 1, marginBottom: '64px' }}>
                <Fab color='primary' aria-label='add blog' >
                    <Link to="/blog/forms"><AddIcon sx={{fontSize:45 ,color:'white', position:'center'}}/></Link>
                </Fab>
            </Box>
            :''}
        </>
        
        
    );
}

export default BlogContainer;