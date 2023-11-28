import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Typography, Modal, IconButton, TextField, TextareaAutosize } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../UserContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    borderTop: '5px solid #1976d2',
    borderBottom: '5px solid #1976d2',
    borderRadius: '20px',
    boxShadow: 16,
    p: 4,
};

function EditPersonalInfoModal(props){
    const auth = useContext(UserContext);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            uid: auth.user.id,
            fullName: '',
            department: '',
            domain: '',
            skill: '',
            quote: '',
            about: '',
        },
        onSubmit: (values) => {
            console.log(values);
            axios.post('http://localhost/forum/php/api/userProfile.php', values).then(function(res){
                console.log(res.data);
            })

            handleClose();
        }

    })


    return (
        <>
            <IconButton onClick={handleOpen}>
                <EditIcon color='primary' fontSize='medium' />
            </IconButton>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                {props.type == "personal"  ?
                <Box sx={style}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <Typography id="modal-modal-title" variant="h6" component="h1" color = "#1976d2">
                        Edit Personal Details
                    </Typography>
                    <TextField
                        {...formik.getFieldProps('fullName')}
                        sx ={{ margin: '20px 0' }} 
                        id="fullName" 
                        label="Full Name" 
                        variant="outlined" 
                        fullWidth 
                    />
                    <TextField
                        {...formik.getFieldProps('department')}
                        sx={{ width: '48%' }} 
                        id="department" 
                        label="Department" 
                        variant="outlined"  
                    />
                    <TextField
                        {...formik.getFieldProps('domain')}
                        sx={{ width: '48%', marginLeft: '16px' }} 
                        id="domain" 
                        label="Domain" 
                        variant="outlined"  
                    />
                    <TextField
                        {...formik.getFieldProps('skill')}
                        sx ={{ margin: '20px 0' }} 
                        id="skill" 
                        label="Most Prominent Skill" 
                        variant="outlined" fullWidth 
                    />
                    <TextareaAutosize
                        {...formik.getFieldProps('quote')}
                        aria-label="empty textarea"
                        id='quote'
                        minRows={2}
                        placeholder="Write your Quote here ..."
                        style={{ width: '100%', padding: '15px 20px' }}
                    />
                    <Button 
                        variant="contained"
                        fullWidth
                        type="submit"
                        onClick={formik.handleSubmit}
                        sx={{marginTop: '20px'}}
                    >
                        Submit
                    </Button>
                </Box>   
                :
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h1" color = "#1976d2">
                        Edit Your About
                    </Typography>
                    <TextareaAutosize
                        {...formik.getFieldProps('about')}
                        id="about"
                        aria-label="minimum height"
                        minRows={15}
                        placeholder="Tell us About Yourself..."
                        style={{ width: '100%', padding: '15px 20px', marginTop: '20px' }}
                    />
                    <Button 
                        variant="contained"
                        fullWidth
                        type="submit"
                        onClick={formik.handleSubmit}
                        sx={{marginTop: '20px'}}
                    >
                        Submit
                    </Button>

                </Box>
                }
            </Modal>
        </>
    )
}

export default EditPersonalInfoModal;