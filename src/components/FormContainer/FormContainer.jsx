import React,{useContext} from 'react';
import fImg from './../../assets/form-bg-1.jpg';
import './formcont.css';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import UserContext from '../UserContext';
import axios from 'axios';
import * as yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
    Heading: yup
      .string('Enter your pick up point')
      .max(100, "Must have a maximum of 100 characters")
      .required('This field is required'),
    description: yup
      .string('Enter your drop off point')
      .max(255, "Must have a maximum of 255 characters")
      .required('This field is required'),
  });

function FormContainer(props)
{
    const auth = useContext(UserContext);
    const formik = useFormik({
        initialValues: {
          Heading: '',
          post_by: auth.user.id,
          description: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(values);
          axios.post('http://localhost/forum/php/api/blog.php', values).then(function (response) {
            console.log(response.data);
          });
        },
    });
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
                            {...formik.getFieldProps('Heading')}
                            error={formik.touched.Heading && Boolean(formik.errors.Heading)}
                            helperText={formik.touched.Heading && formik.errors.Heading}
                            id="Heading"
                            multiline
                            rows={1}
                            // defaultValue="Blog Title"
                            style={{paddingLeft: 50}}
                        />
                        <p className='input-type'>Description:</p>
                        <TextField className='form-len'
                            {...formik.getFieldProps('description')}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                            id="description"
                            multiline
                            rows={9}
                            //defaultValue="Blog Description"
                            style={{paddingLeft: 50}}
                        />
                        <div className='btn'>
                            <Link to="/blog">
                                <Button className='back' variant='contained'>Back</Button>
                                <Button className='submit' variant='contained'onClick={() => {
                                    formik.handleSubmit()
                                    }}>Submit</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
        
        
    );
}

export default FormContainer;