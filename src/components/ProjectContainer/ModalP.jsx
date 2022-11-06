import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fontSize } from '@mui/system';
function ModalP() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            autoFocus
            margin="dense"
            id="course-id"
            label="CourseID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="studentID"
            label="StudentID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="dateOfPost"
            label="DateOfPost"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="githubLink"
            label="GithubLink"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ModalP;