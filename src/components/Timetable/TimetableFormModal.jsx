import React from 'react';
import { 
    Box,
    Button,
    Typography,
    Modal,
    TextField, 

} from '@mui/material';
import TimetableFormSelectCourses from './TimetableFormSelectCourses';
import { FileUpload } from '../../components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  border: '2px solid #006778',
  boxShadow: 24,
  p: 4,
};

export default function TimetableFormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{backgroundColor: '#006778', color: 'white'}} onClick={handleOpen}>Update Timetable</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h2 style={{
                color: '#006778',
                fontWeight: 'lighter',
                fontSize: '2rem',
                margin: '10px 0',
            }}>
                Select Your Courses
            </h2>
            <TimetableFormSelectCourses handleBtn={handleClose} />
            {/* <FileUpload text='Upload Timetable' /> */}
        </Box>
      </Modal>
    </div>
  );
}