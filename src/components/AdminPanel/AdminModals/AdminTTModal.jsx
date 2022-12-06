import React, { useContext } from 'react';
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
import UserContext from '../../UserContext';

const validationSchema = yup.object({
  day: yup
    .string('Enter TeacherName')
  .required('This field is required')
  ,
  code: yup
    .string('Enter teacher email')
  .required('This field is required')
  ,
  room: yup
    .string('Enter teacher email')
  .required('This field is required')
  ,
  timeslot: yup
  .string('Enter time slot')
  .required('This field is required')
});
// const courses = [
//   ''
// ]
function AdminTTModal() {
  const auth = useContext(UserContext);
  var stud = ''
  { auth.user ? stud = auth.user.id : stud = '' }
  const [open, setOpen] = React.useState(false);
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
      day: '',
      code: '',
      room: '',
      timeslot: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose()
      axios.post('http://localhost/forum/php/api/timetable.php', values).then(function (response) {
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
        <DialogTitle>Timetable</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your timetable details
          </DialogContentText>
          <TextField
            {...formik.getFieldProps('day')}
            error={formik.touched.day && Boolean(formik.errors.day)}
            helperText={formik.touched.day && formik.errors.day}
            margin="dense"
            id="day"
            label="Day"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            {...formik.getFieldProps('code')}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
            margin="dense"
            id="code"
            label="Code"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            {...formik.getFieldProps('room')}
            error={formik.touched.room && Boolean(formik.errors.room)}
            helperText={formik.touched.room && formik.errors.room}
            margin="dense"
            id="room"
            label="Room"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            {...formik.getFieldProps('timeslot')}
            error={formik.touched.timeslot && Boolean(formik.errors.timeslot)}
            helperText={formik.touched.timeslot && formik.errors.timeslot}
            margin="dense"
            id="timeslot"
            label="Timeslot"
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
export default AdminTTModal;