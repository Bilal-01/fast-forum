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
  isbn: yup
    .string('Enter ISBN')
    .max(150, 'Maximum 150 characters allowed')
    .required('This field is required'),
  title: yup
    .string('Enter Book Title')
    .max(256, 'Maximum 256 characters allowed')
    .required('This field is required'),
  author: yup
    .string('Enter Author Name')
    .required('This field is required'),
  courseId: yup
    .string('Enter Course ID')
    .required('This field is required'),
  pages: yup
    .string('Enter this field')
    .required("This field is required"),
  available: yup
    .string('Enter availability')
    .required('This field is required')
    .max(1, 'Maximum 1 character allowed (0 or 1)')
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

  const formik = useFormik({
    initialValues: {
      isbn: '',
      title: '',
      author: '',
      courseId: '',
      pages: '',
      available: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose()
      axios.post('http://localhost/forum/php/api/library.php', values).then(function (response) {
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
          Add Book
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your Book details 
          </DialogContentText>
          <TextField
             {...formik.getFieldProps('isbn')}
             error={formik.touched.isbn && Boolean(formik.errors.isbn)}
             helperText={formik.touched.isbn && formik.errors.isbn}
            margin="dense"
            id="isbn"
            label="ISBN"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('title')}
             error={formik.touched.title && Boolean(formik.errors.title)}
             helperText={formik.touched.title && formik.errors.title}
            margin="dense"
            id="title"
            label="Book Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('author')}
             error={formik.touched.author && Boolean(formik.errors.author)}
             helperText={formik.touched.author && formik.errors.author}
            margin="dense"
            id="author"
            label="Author"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('courseId')}
             error={formik.touched.courseId && Boolean(formik.errors.courseId)}
             helperText={formik.touched.courseId && formik.errors.courseId}
            margin="dense"
            id="courseId"
            label="Course ID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('pages')}
             error={formik.touched.pages && Boolean(formik.errors.pages)}
             helperText={formik.touched.pages && formik.errors.pages}
            margin="dense"
            id="pages"
            label="Pages"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
             {...formik.getFieldProps('available')}
             error={formik.touched.available && Boolean(formik.errors.available)}
             helperText={formik.touched.available && formik.errors.available}
            margin="dense"
            id="available"
            label="Available"
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