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
      .min(8, 'Must have a minimum of 8 characters')
  });



  
  function UserAuth(props){

    const data = useContext(UserContext);

    const [isRegister, setIsRegister] = useState(false);
    const [isResetEntered, setIsResetEntered] = useState(false);
    const navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log(values);
            axios.post('http://localhost/forum/php/index.php', values).then(function(response){
                if(response.data['status'] === 1){
                    let user = {
                        ...values,
                        role: 0,
                    }
                    data.setUser(values);
                    sessionStorage.setItem("user", JSON.stringify(values));
                    const tempUser = JSON.parse(sessionStorage.getItem('user'));
                    console.log('Session value');
                    console.log(tempUser);
                    // console.log(user);
                    if(user.role === 0){
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
                    {/* <Form onSubmit={formik.handleSubmit}> */}
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

                                <Typography align='right' variant='body2'>
                                    <Button variant="text" onClick={()=>{setIsResetEntered(true)}} >
                                        Forgot password?
                                    </Button>
                                </Typography> 
                                <FormControlLabel
                                    control={
                                        <Checkbox 
                                        name="checkedB"
                                        />
                                    }
                                    label="Remember me"
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
                    {/* </form> */}
                    
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
    )



}

export default UserAuth;