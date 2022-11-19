import React, {useState} from 'react';
import {Typography, TextField, Button} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from "yup";



function ResetLink(props){
    
    const [isEmailValid, setIsEmailValid] = useState(false);


    const validationSchema = yup.object({
        email: yup
            .string()
            .required('This field is required')
            .email('Enter a valid email'),
    });

    const formik = useFormik({
        initialValues: {
        email: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setIsEmailValid(true);
        },
    });

    return(
        <>
            {isEmailValid ? 
                <>
                    <Typography variant="h4" align='center' color='primary' sx={{my: 3, mx: 2}}>
                        A link has been sent to this email.
                    </Typography>
                </> 
                : 
                <>
                    <Typography variant='subtitle1' align='center'>
                        Enter email to verify its you
                    </Typography>
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

                    <Button 
                        onClick={() => {
                            formik.handleSubmit();
                        }} 
                        sx={{marginTop: 1, marginBottom: 1}}
                        variant="contained" 
                        type="submit" 
                        color="primary"
                        fullWidth
                    >
                        Send Reset Link
                    </Button>
                </>
            }

            <Button  
                onClick={props.onClick}
                id={props.id}
                sx={{marginTop: 1, marginBottom: 1}}
                variant="contained" 
                type="submit" 
                color="primary"
                fullWidth
            >
                Go back to Login Page
            </Button>

        </>

    )
}
export default ResetLink;