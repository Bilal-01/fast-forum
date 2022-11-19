import React , { useState }  from 'react';
import './user-auth.css';
import ResetLink from './ResetLink';
import {Grid, Paper, Avatar, Typography, Checkbox, Button, TextField, FormControlLabel} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { deepPurple } from "@mui/material/colors";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";



const validationSchema = yup.object({
    firstName: yup.string('Enter your first name')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required'),
   lastName: yup.string('Enter your last name')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required'),
    dateOfBirth: yup.string()
        .required('This field is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('This field is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Must have a minimum of 8 characters')
      .required('This field is required'),
    confirmPassword: yup
      .string('Enter a Message')
      .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .required('This field is required'),
  });

  
  function UserAuth(props){
      const [isRegister, setIsRegister] = useState(false);
      const [isResetEntered, setIsResetEntered] = useState(false);
      const navigate = useNavigate();
      
      const formik = useFormik({
          initialValues: {
              email: '',
              password: '',
              confirmPassword: ''
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                //do something
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
                    {isRegister ? "Sign Up" : "Sign In"}
                </Typography>
            </Grid>
            
            {
                isResetEntered ? <ResetLink onClick={()=>{setIsResetEntered(false)}} />
                :
                <>
                    {
                        isRegister &&
                        <>
                            <TextField
                                {...formik.getFieldProps('firstName')}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName} 
                                id="firstName"
                                name="firstName"
                                label="First Name" 
                                type="text"
                                variant="outlined" 
                                placeholder="First name"
                                autoComplete='off'
                                sx={{marginBottom: 1, marginTop: 1, maxWidth: '48%', marginRight: '2%'}}
                            />
                            <TextField
                                {...formik.getFieldProps('lastName')}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName} 
                                id="lastName"
                                name="lastName"
                                label="Last Name" 
                                type="text"
                                variant="outlined" 
                                placeholder="Last name"
                                autoComplete='off'
                                sx={{marginBottom: 1, marginTop: 1, maxWidth: '48%', marginLeft: '2%'}}
                            />
                            <TextField
                                id="dob"
                                label="Date of Birth"
                                type="date"
                                defaultValue=""
                                sx={{ width: '48%', marginTop: 1, marginBottom: 1 }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            
                        </>
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

                    {
                        !isRegister && 
                        <>
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

                    { 
                        isRegister && 
                        <TextField
                        
                        {...formik.getFieldProps('confirmPassword')}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} 
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password" 
                        type="password"
                        placeholder="Enter your email"
                        variant="outlined" 
                        fullWidth
                        autoComplete='off'
                        required
                            sx={{marginBottom: 1, marginTop: 1}}
                        /> 
                        }

                        
                        <Button 
                            id='register'
                            onClick={props.onClick}
                            id={props.id}
                            sx={{marginTop: 1, marginBottom: 1}}
                            variant="contained" 
                            type="submit" 
                            color="primary"
                            fullWidth
                        >
                            {isRegister ? "Sign Up" : "Sign In"}
                        </Button>

                        <Typography variant='subtitle1' sx={{marginTop: 1}}>
                            {isRegister ? "Already have an account?" : "Don't have an account?"} <br></br>
                            <Button variant="text" onClick={() => {setIsRegister(!isRegister)}}>{isRegister ? "Sign In" : "Create One"}</Button>
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
    )



}

export default UserAuth;