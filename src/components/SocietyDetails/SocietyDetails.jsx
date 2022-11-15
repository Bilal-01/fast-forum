import React from 'react';
import image from'./../../assets/Societies_image/Decs_logo.jpg'
import './society-details.css';
import {Box, Typography} from '@mui/material';
function SocietyDetails(props)
{  
    
    return(
        <div className='society-details-container'>
            <img className='society-details-img' src={props.src} alt='society' />
            <Box
                sx={{
                    width: 600,
                    height: 300,
                    margin: '20px auto'
                }}
            >
                <Typography variant='h1' align='center'>
                    DECS
                </Typography>
                <Typography variant='h5' align='center'>  
                    DECS has always been on the go in planning extra-curricular activities such as picnics for the FASTians which prove to be both exhilarating and exclusive.
                </Typography>
                <Typography>
                </Typography>

            </Box>

        </div>
    )
}
export default SocietyDetails;