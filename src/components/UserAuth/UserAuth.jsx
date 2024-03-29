import axios from "axios";
import React , { useState, useContext }  from 'react';
import './user-auth.css';
import ResetLink from './ResetLink';
import UserContext from '../UserContext';
import {Grid, Paper, Avatar, Typography, Checkbox, Button, TextField, FormControlLabel} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { deepPurple } from "@mui/material/colors";
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';



const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('This field is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Must have a minimum of 8 characters'),
  });



  
  function UserAuth(props){

    const data = useContext(UserContext);
    const [error, setError] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [isResetEntered, setIsResetEntered] = useState(false);
    const navigate = useNavigate();
    

    function getIdFromEmail(email){
        return email.substring(0, 7);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post('http://localhost/forum/php/index.php', values).then(function(response){
                if(response.data.status === 0){
                    alert('Error: ' + response.data.message);
                }
                if(isRegister){
                    values.name='';
                    values.email='';
                    values.password='';
                    setIsRegister(false);
                }
                
                if(response.data['status'] === 1){
                    data.setIsLoggedIn(true);
                    let user = response.data.user;
                    data.setUser(user);
                    sessionStorage.setItem("user", JSON.stringify(user));
                    const tempUser = JSON.parse(sessionStorage.getItem('user'));
                    console.log(user.role);
                    if(user.role == 0){
                        console.log("in admin");
                        navigate("/admin");
                    }
                    else{
                        navigate("/");
                    }
                }
            });
        },
    });

    return(
        <div className="auth-container">

            <Grid>
                <Paper 
                    elevation = {10} 
                    color = "#0093AB"
                    className="paper-style" 
                    sx={{
                        borderRadius: 5,    
                    }}
                >
                    <Grid align='center' sx={{marginBottom: 2}}>
                        <Avatar
                            style = {{margin: 10}}
                            sx = {{bgcolor: deepPurple[500]}}
                            >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography variant="h4" >
                            {isRegister ? "Register" : "Sign In"}
                        </Typography>
                    </Grid>
                
                {
                    isResetEntered ? <ResetLink onClick={()=>{setIsResetEntered(false)}} />
                    :
                    <>
                        {
                            isRegister &&
                            <TextField
                                {...formik.getFieldProps('name')}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name} 
                                id="name"
                                name="name"
                                label="Name" 
                                type="name"
                                variant="outlined" 
                                placeholder="Enter your name"
                                fullWidth
                                autoComplete='off'
                                required
                                sx={{marginBottom: 1, marginTop: 1}}
                            />
                        }

                        <TextField
                            {...formik.getFieldProps('email')}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email} 
                            id="email"
                            name="email"
                            label="Email" 
                            type="email"
                            variant="outlined" 
                            placeholder="Enter your email"
                            fullWidth
                            autoComplete='off'
                            required
                            sx={{marginBottom: 1, marginTop: 1}}
                        />


                        {
                            !isRegister && 
                            <>
                                <TextField
                                    {...formik.getFieldProps('password')}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password} 
                                    id="password"
                                    name="password"
                                    label="Password" 
                                    type="password"
                                    variant="outlined" 
                                    placeholder="Enter your password"
                                    fullWidth
                                    autoComplete='off'
                                    required
                                    sx={{marginBottom: 1, marginTop: 1}}
                                />
                            </>
                        }       
                        <Button 
                            id='register'
                            sx={{marginTop: 1, marginBottom: 1}}
                            variant="contained" 
                            type="submit" 
                            color="primary"
                            fullWidth
                            onClick={formik.handleSubmit}
                        >
                            {isRegister ? "Get Password" : "Sign In"}
                        </Button>

                        <Typography variant='subtitle1' sx={{marginTop: 1}}>
                            {isRegister ? "Already Registered?" : "Don't have an account?"} <br></br>
                            <Button variant="text" onClick={() => {setIsRegister(!isRegister)}}>{isRegister ? "Sign In" : "Register"}</Button>
                        </Typography>
                        
                    </>
                }
                    <Typography 
                        variant='body2' 
                        sx={{marginTop: 1}} 
                        align='center'
                    >
                        Ⓒ Copyright
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )



}

export default UserAuth;