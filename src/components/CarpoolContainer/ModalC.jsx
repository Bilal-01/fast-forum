import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fontSize } from '@mui/system';
function ModalC() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{position:'center', border:'none',fontFamily:'Arial',fontSize:'14px' ,color:'Black' ,background:'#f6cb7e'}} variant="outlined" onClick={handleClickOpen}>
        Fill the Form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Carpool Service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your details 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="pick_up"
            label="Pick_Up"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="drop_off"
            label="Drop_Off"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="route"
            label="Route"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="captionID"
            label="CaptionID"
            type="text"
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            margin="dense"
            id="phoneN0"
            label="PhoneNo"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="time"
            label="Time"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="day"
            label="Day"
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
export default ModalC;