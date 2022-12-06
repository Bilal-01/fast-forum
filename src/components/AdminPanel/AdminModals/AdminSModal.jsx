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
import UserContext from '../../UserContext';

const validationSchema = yup.object({
  sname: yup
    .string('Enter Society Name')
    .required('This field is required'),
  sdescription: yup
    .string('Enter society description')
    .required('This field is required'),
  headID: yup
    .string('Enter Head ID')
    .required('This field is required'),
  presidentID: yup
    .string('Enter President ID')
    .required('This field is required'),
  mediaLink: yup
    .string('Enter social media link')
    .matches(
      /((https?):\/\/)?[facebook.com/]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct facebook link!')
    .required('This field is required'),
});

function AdminSModal() {
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
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const formik = useFormik({
    initialValues: {
      sname: '',
      sdescription: '',
      headID: -1,
      presidentID: '',
      mediaLink: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose()
      axios.post('http://localhost/forum/php/api/society.php', values).then(function (response) {
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
        <DialogTitle>Society</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your Society details 
          </DialogContentText>
          <TextField
             {...formik.getFieldProps('sname')}
             error={formik.touched.sname && Boolean(formik.errors.sname)}
             helperText={formik.touched.sname && formik.errors.sname}
            margin="dense"
            id="sname"
            label="Society Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('sname')}
             error={formik.touched.sname && Boolean(formik.errors.sname)}
             helperText={formik.touched.sname && formik.errors.sname}
            margin="dense"
            id="sname"
            label="Society Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('sdescription')}
             error={formik.touched.sdescription && Boolean(formik.errors.sdescription)}
             helperText={formik.touched.sdescription && formik.errors.sdescription}
            margin="dense"
            id="sdescription"
            label="Society Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('headID')}
             error={formik.touched.headID && Boolean(formik.errors.headID)}
             helperText={formik.touched.headID && formik.errors.headID}
            margin="dense"
            id="headID"
            label="Head ID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('presidentID')}
             error={formik.touched.presidentID && Boolean(formik.errors.presidentID)}
             helperText={formik.touched.presidentID && formik.errors.presidentID}
            margin="dense"
            id="presidentID"
            label="President ID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('mediaLink')}
             error={formik.touched.mediaLink && Boolean(formik.errors.mediaLink)}
             helperText={formik.touched.mediaLink && formik.errors.mediaLink}
            margin="dense"
            id="mediaLink"
            label="Social Media Link"
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
export default AdminSModal;