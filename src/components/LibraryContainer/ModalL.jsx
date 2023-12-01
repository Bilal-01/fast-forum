import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fontSize } from '@mui/system';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useFormik, setFieldValue } from 'formik';
import * as yup from "yup";
import axios from 'axios';
import UserContext from '../UserContext';




const validationSchema = yup.object({
  pick_up: yup
    .string('Enter your pick up point')
    .max(50, "Must have a maximum of 50 characters")
    .required('This field is required'),
  drop_off: yup
    .string('Enter your drop off point')
    .max(50, "Must have a maximum of 50 characters")
    .required('This field is required'),
  route: yup
    .string('Enter route from pick up to drop off')
    .max(100, "Must have a maximum of 100 characters")
    .required('This field is required'),
  phoneNo: yup
    .string('Enter your phone No')
    .max(20, "Must have a maximum of 20 characters")
    .required('This field is required'),
  time: yup
    .string('Enter your pick up point')
    .required('This field is required'),
  day: yup
    .string('Enter Day')
    .required('This field is required'),
});

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

function ModalL() {
  const auth = useContext(UserContext);
    var stud=''
    {auth.user? stud=auth.user.id:stud=''}
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState('');

  // const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));   
  // const handleChangeT = (newValue) => {
  //   setValue(newValue);
  //   formik.setFieldValue('time', newValue);
  //   console.log("NEw: "+ newValue.time);
  // };
  const handleChange = (event) => {
    setDay(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const formik = useFormik({
    initialValues: {
      pick_up: '',
      drop_off: '',
      route: '',
      captain_id: stud,
      phoneNo: '',
      time: '',
      day: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // values.time =values.time.split(/T(.*)\./g)[1];
     console.log("Values" + values.time);
      handleClose()
       axios.post('http://localhost/forum/php/api/carpool.php', values).then(function (response) {
         console.log(response.data);
      });
    },
  });
  return (
    <div>
      <div className='cp-form-btn-container'>
        <Button
          sx={{
            border: '1px solid #f6cb7e',
            fontFamily: 'Arial',
            fontSize: '14px',
            color: 'black',
            background: 'indianred',
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          View Reserved Books
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Carpool Service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your details
          </DialogContentText>
          <TextField
            margin="dense"
            id="pick_up"
            label="Pick_Up"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps('pick_up')}
            error={formik.touched.pick_up && Boolean(formik.errors.pick_up)}
            helperText={formik.touched.pick_up && formik.errors.pick_up}
          />
          <TextField
            margin="dense"
            id="drop_off"
            label="Drop_Off"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps('drop_off')}
            error={formik.touched.drop_off && Boolean(formik.errors.drop_off)}
            helperText={formik.touched.drop_off && formik.errors.drop_off}
          />
          <TextField
            margin="dense"
            id="route"
            label="Route"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps('route')}
            error={formik.touched.route && Boolean(formik.errors.route)}
            helperText={formik.touched.route && formik.errors.route}
            />
          <TextField
            margin="dense"
            id="phoneNo"
            label="PhoneNo"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps('phoneNo')}
            error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
            helperText={formik.touched.phoneNo && formik.errors.phoneNo}
          />
          <TextField
            margin="dense"
            id="time"
            label="Time"
            type="time" 
            min="06:00" 
            max="16:30"
            fullWidth
            variant="standard"
            {...formik.getFieldProps('time')}
            error={formik.touched.time && Boolean(formik.errors.time)}
            helperText={formik.touched.time && formik.errors.time}
          />
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Day</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={day}
              label="Day"
              onChange={handleChange}
              {...formik.getFieldProps('day')}
              error={formik.touched.day && Boolean(formik.errors.day)}
              helperText={formik.touched.day && formik.errors.day}
            >
              {days.map((day) => (
                <MenuItem
                  key={day}
                  value={day}
                >
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
export default ModalL;