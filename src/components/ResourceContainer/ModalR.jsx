import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import UserContext from '../UserContext';

const validationSchema = yup.object({
  course_id: yup
    .string('Enter CourseId')
    .max(10, "Must have a maximum of 10 characters")
    .required('This field is required'),
  drive_link: yup
    .string('Enter google drive link')
    .max(100, "Must have a maximum of 100 characters")
    .required('This field is required')
     .matches(
            /((https?):\/\/)?[drive.google.com/]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct google drive url!'
        )
});

function ModalR() {
    const auth = useContext(UserContext);
    var stud=''
    {auth.user? stud=auth.user.id:stud=''}
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
        course_id: '',
        student_id: stud,
        drive_link: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        console.log(values);
        handleClose()
        axios.post('http://localhost/forum/php/api/resource.php', values).then(function (response) {
            console.log(response.data);
        });
        },
    });

  return (
    <div>
        {auth.user?
        <div className='r-form-btn-container'>
            <Button 
            sx={{
            border:'1px solid #c5c3ce',
            fontFamily:'Arial',
            fontSize:'14px' ,
            color:'Black' ,
            background:'#c5c3ce'
            }} 
            variant="outlined" 
            onClick={handleClickOpen}
            >
                Add Resource
            </Button>
        </div>:''}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Resource</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your resource details 
          </DialogContentText>
          <TextField
             {...formik.getFieldProps('course_id')}
             error={formik.touched.course_id && Boolean(formik.errors.course_id)}
             helperText={formik.touched.course_id && formik.errors.course_id}
            margin="dense"
            id="course_id"
            label="CourseID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('drive_link')}
             error={formik.touched.drive_link && Boolean(formik.errors.drive_link)}
             helperText={formik.touched.drive_link && formik.errors.drive_link}
            margin="dense"
            id="drive_link"
            label="DriveLink"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            formik.handleSubmit()
          }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ModalR;