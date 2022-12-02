import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fontSize } from '@mui/system';
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import UserContext from '../UserContext';

const validationSchema = yup.object({
  course_id: yup
    .string('Enter CourseId')
    .max(10, "Must have a maximum of 10 characters")
    .required('This field is required'),
  // student_id: yup
  //   .string('Enter your drop off point')
  //   .max(50, "Must have a maximum of 50 characters")
  //   .required('This field is required'),
  // date_of_post: yup
  //   .string('Enter route from pick up to drop off')
  //   .max(100, "Must have a maximum of 100 characters")
  //   .required('This field is required'),
  github_link: yup
    .string('Enter github link')
    .max(100, "Must have a maximum of 100 characters")
    .required('This field is required')
     .matches(
            /((https?):\/\/)?[github.com/]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct github url!'
        )
});
// const courses = [
//   ''
// ]
function ModalP() {
  const [open, setOpen] = React.useState(false);
  const auth = useContext(UserContext); //project_id
  // const [course, courses] = React.useState(''); //courses
  // const handleChange = (event) => {
  //   setCourses(event.target.value);
  // };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const formik = useFormik({
    initialValues: {
      course_id: '',
      student_id: 'K200434',
      date_of_post: date,
      github_link: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose()
      axios.post('http://localhost/forum/php/api/project.php', values).then(function (response) {
        console.log(response.data);
      });
    },
  });

  return (
    <div>
      <div className='cp-form-btn-container'>
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
          Fill the Form
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your project details 
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
             {...formik.getFieldProps('github_link')}
             error={formik.touched.github_link && Boolean(formik.errors.github_link)}
             helperText={formik.touched.github_link && formik.errors.github_link}
            margin="dense"
            id="github_link"
            label="GithubLink"
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
export default ModalP;