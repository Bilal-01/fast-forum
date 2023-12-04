import React, { useState, useContext, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './user-profile.css'
import bgImage from '../../assets/profile-bg.jpg';
import profileIcon from '../../assets/user-profile-icon.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EditIcon from '@mui/icons-material/Edit';
import {Stack, IconButton} from '@mui/material';
import EditPersonalInfoModal from './EditPersonalInfoModal';
import UserContext from '../UserContext';
import axios from 'axios';


function UserProfile(props){
    const auth = useContext(UserContext);
    const params = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // useEffect( () => {
    //     console.log("Not logged in");
    //     if(!auth.isLoggedIn){
    //         console.log("Not logged in");
    //         navigate('/authentication');
    //     } 
    // }, [])

    useEffect(() => {
        getUser();
    }, [user]);

    function getUser(){
        axios.post('http://localhost/forum/php/api/profile.php', params).then(function(res){
            if(!res.data.results){
                navigate('/');
            }
            if(user !== res.data.results){
                
                res.data.results.forEach(element => {
                    if(params.id === element.uid){
                        let tempUser = element;
                        setUser(tempUser);
                    }
                });
            }
        });
    }

    return(
        <>
            <div className='user-profile-background'>
                <img className='user-profile-bg-img' src={bgImage} alt="Background Image" />
                
                <div className='user-profile-container'>
                    <div className="user-profile-container-left">
                        <div className="profile-icon-container">
                            <img src={profileIcon} alt="Profile Icon" />
                        </div>
                        <div style={{width: '100%'}}>
                            <h1 className='user-profile-heading'>My Profile</h1>
                            <h2 className='user-profile-name'>
                                {user && user.uname}
                            </h2>
                            <p style={{marginTop: 0, textAlign: 'center', width: '100%'}}>
                                {user && user.email}
                            </p>
                            <div className='user-profile-desc'>
                                <p>
                                    Batch: 20{user && user.id.substr(1, 2)}
                                    <br /> Status: {user && user.role == 0 ? 'Admin' : 'User'}
                                </p>
                                <Stack direction='row' sx={{justifyContent: 'center', marginTop: '14px'}}>
                                    <IconButton onClick={() => {
                                        
                                    return    <Navigate to="https://agentestudio.com/blog/design-user-profile-page"  replace={true} />
                                    }}>
                                        <LinkedInIcon fontSize='large' color='primary' sx={{cursor: 'pointer'}} />
                                    </IconButton>
                                    <IconButton>
                                        <GitHubIcon fontSize='large' color='dark' sx={{cursor: 'pointer'}} />
                                    </IconButton>
                                    <IconButton>
                                        <TwitterIcon fontSize='large' color='primary' sx={{cursor: 'pointer'}} />
                                    </IconButton>
                                </Stack>
                            </div>
                        </div>

                    </div>
                    <div className="user-profile-container-right">
                        <div className="user-profile-editable">
                            <h1 className='user-profile-heading'>
                                Personal Information 
                                {   
                                    auth.user.id && auth.user.id === params.id
                                    ?
                                    <EditPersonalInfoModal user={user} type="personal" />
                                    :
                                    null
                                }
                            </h1>
                            <p className='user-personal-info'>
                                Full Name: {user ? user.full_name : 'No name to show'} <br />
                                Department: {user ? user.department : 'No department to show'} <br />
                                Domain: {user ? user.domain : 'No domain to show'} <br />
                                Most Prominent Skill: {user ? user.skill : 'No Skill to show'} <br />
                                <p style={{marginTop: '7px', textAlign: 'center', fontSize: '1.3rem'}}>
                                    <i> "{user ? user.quote : 'No quote to show'}"</i>
                                </p>
                            </p>
                        </div>
                        <div className="user-profile-about">
                            <h1 className="user-profile-heading">
                                About
                            </h1>
                            <p>
                                {user ? user.about : 'No about to show'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default UserProfile;