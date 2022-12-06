import React, { useContext } from 'react';
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
import UserContext from '../../UserContext';

const validationSchema = yup.object({
  tname: yup
    .string('Enter TeacherName')
  .required('This field is required')
  ,
  email: yup
    .string('Enter teacher email')
  .required('This field is required'),
  location: yup
  .string('Enter Location')
  .required('This field is required')
});
// const courses = [
//   ''
// ]
function AdminTModal() {
  const auth = useContext(UserContext);
  var stud = ''
  { auth.user ? stud = auth.user.id : stud = '' }
  const [open, setOpen] = React.useState(false);
  //project_id
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
  // var today = new Date(),
  // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const formik = useFormik({
    initialValues: {
      tname: '',
      email: '',
      cname: '',
      location: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose()
      axios.post('http://localhost/forum/php/api/teacher.php', values).then(function (response) {
        console.log(response.data);
      });
    },
  });

  return (
    <div>
      <div className='cp-form-btn-container'>
        <Button
          sx={{
            border: '1px solid #c5c3ce',
            fontFamily: 'Arial',
            fontSize: '14px',
            color: 'Black',
            background: '#c5c3ce'
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Fill the Form
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Teachers</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your teachers details
          </DialogContentText>
          <TextField
            {...formik.getFieldProps('tname')}
            error={formik.touched.tname && Boolean(formik.errors.tname)}
            helperText={formik.touched.tname && formik.errors.tname}
            margin="dense"
            id="tname"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            {...formik.getFieldProps('email')}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="dense"
            id="email"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            {...formik.getFieldProps('location')}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            margin="dense"
            id="location"
            label="Location"
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
export default AdminTModal;