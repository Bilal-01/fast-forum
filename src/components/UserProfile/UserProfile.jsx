import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './user-profile.css'
import bgImage from '../../assets/profile-bg.jpg';
import profileIcon from '../../assets/user-profile-icon.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EditIcon from '@mui/icons-material/Edit';
import {Stack, IconButton} from '@mui/material';

function UserProfile(props){
    
    return(
        <>
            {!props.isLoggedIn && <Navigate to="/" replace={true} />}
            <div className='user-profile-background'>
                <img className='user-profile-bg-img' src={bgImage} alt="Background Image" />
                
                <div className='user-profile-container'>
                    <div className="user-profile-container-left">
                        <div className='user-profile-line'>
                            <div className="profile-icon-container">
                                <img src={profileIcon} alt="Profile Icon" />
                            </div>
                        </div>
                        <div>
                            <h1 className='user-profile-heading'>My Profile</h1>
                            
                            <div className="user-profile-line">
                                <h2 className='user-profile-name'>
                                    Bilal Aziz
                                </h2>
                                <p style={{marginTop: 0, textAlign: 'center', width: '100%'}}>
                                    k200397@nu.edu.pk
                                </p>
                            </div>
                            <div className='user-profile-desc'>
                                <div className='user-profile-line'>
                                    <p>
                                        Batch: 2020
                                        <br /> Status: Admin
                                    </p>
                                </div>
                                <div>
                                </div>
                                <Stack direction='row' spacing={2} sx={{justifyContent: 'center', marginTop: '14px'}}>
                                    <IconButton onClick={() => {
                                        <Navigate to="https://agentestudio.com/blog/design-user-profile-page"  replace={true} />
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
                                <IconButton>
                                    <EditIcon color='primary' fontSize='medium' />
                                </IconButton>
                            </h1>
                            <p className='user-personal-info'>
                                Full Name: Mohammad Bilal Aziz <br />
                                Department: Computer Science <br />
                                Domain: Web Development <br />
                                Most Prominent Skill: Web Designing <br />
                                <p style={{marginTop: '10px', textAlign: 'center', fontSize: '1.6rem'}}>
                                    <i> "The only journey is the one within "</i>
                                </p>
                            </p>
                        </div>
                        <div className="user-profile-about">
                            <h1 className="user-profile-heading">
                                About 
                                <IconButton>
                                    <EditIcon color='primary'></EditIcon>
                                </IconButton>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis sem ac finibus suscipit. Nam pellentesque, purus eu sodales semper, sem felis tempor tellus, non accumsan velit mauris vitae enim. Curabitur ac risus dignissim enim cursus finibus sed sed metus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default UserProfile;