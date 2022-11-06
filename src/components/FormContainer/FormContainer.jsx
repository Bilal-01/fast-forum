import React from 'react';
import fImg from './../../assets/form-bg-1.jpg';
import './formcont.css';
import { Button, TextField } from '@mui/material';

function FormContainer()
{
    return(
        <>
            <div className='form-background'>
                <img className='form-bg-img' src={fImg} alt="Background Image" />
                <div className='form-container'>
                    <div className='heading-cont'>
                        <div className='form-heading'>
                            Blog Form
                        </div>
                        <p className='input-type'>Heading:</p>
                        <TextField className='form-len'
                            id="outlined-multiline-static"
                            multiline
                            rows={1}
                            defaultValue="Blog Title"
                            style={{paddingLeft: 50}}
                        />
                        <p className='input-type'>Description:</p>
                        <TextField className='form-len'
                            id="outlined-multiline-static"
                            multiline
                            rows={9}
                            defaultValue="Blog Description"
                            style={{paddingLeft: 50}}
                        />
                        <div className='submit'>
                            <Button variant='contained'>Submit</Button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
        
        
    );
}

export default FormContainer;