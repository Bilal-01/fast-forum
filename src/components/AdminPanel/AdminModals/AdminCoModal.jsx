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
  cid: yup
    .string('Enter CourseID')
  .required('This field is required')
  ,
  cname: yup
    .string('Enter course name')
  .required('This field is required')
  ,
  coordinator: yup
  .string('Enter course coordinator')
  .required('This field is required')
});
// const courses = [
//   ''
// ]
function AdminCoModal() {
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
      cid: '',
      cname: '',
      coordinator: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose()
      axios.post('http://localhost/forum/php/api/courses.php', values).then(function (response) {
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
        <DialogTitle>Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your Course details
          </DialogContentText>
          <TextField
            {...formik.getFieldProps('cid')}
            error={formik.touched.cid && Boolean(formik.errors.cid)}
            helperText={formik.touched.cid && formik.errors.cid}
            margin="dense"
            id="cid"
            label="CourseID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            {...formik.getFieldProps('cname')}
            error={formik.touched.cname && Boolean(formik.errors.cname)}
            helperText={formik.touched.cname && formik.errors.cname}
            margin="dense"
            id="cname"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            {...formik.getFieldProps('coordinator')}
            error={formik.touched.coordinator && Boolean(formik.errors.coordinator)}
            helperText={formik.touched.coordinator && formik.errors.coordinator}
            margin="dense"
            id="coordinator"
            label="Coordinator"
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
export default AdminCoModal;