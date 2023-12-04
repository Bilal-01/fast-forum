import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { fontSize } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import UserContext from "../../UserContext";

const validationSchema = yup.object({
  event_name: yup
    .string("Enter Event name")
    .max(150, "Maximum 150 characters allowed")
    .required("This field is required"),
  month: yup
    .string("Month")
    .max(30, "Maximum 30 characters allowed")
    .required("This field is required"),
  image_path: yup
    .string("Enter Image Path")
    .max(30, "Maximum 255 characters allowed")
    .required("This field is required"),
  society_id: yup
    .number("ID must be an integer")
    .required("This field is required"),
});

function AdminEModal() {
  const auth = useContext(UserContext);
  var stud = "";
  {
    auth.user ? (stud = auth.user.id) : (stud = "");
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const formik = useFormik({
    initialValues: {
      event_name: "",
      month: "",
      image_path: "",
      society_id: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose();
      axios
        .post("http://localhost/forum/php/api/event.php", values)
        .then(function (response) {
          console.log(response.data);
        });
    },
  });

  return (
    <div>
      <div className="cp-form-btn-container">
        <Button
          sx={{
            border: "1px solid #c5c3ce",
            fontFamily: "Arial",
            fontSize: "14px",
            color: "Black",
            background: "#c5c3ce",
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Fill the Form
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>event</DialogTitle>
        <DialogContent>
          <DialogContentText>Add your event details</DialogContentText>
          <TextField
            {...formik.getFieldProps("event_name")}
            error={
              formik.touched.event_name && Boolean(formik.errors.event_name)
            }
            helperText={formik.touched.event_name && formik.errors.event_name}
            margin="dense"
            id="event_name"
            label="Event Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            {...formik.getFieldProps("month")}
            error={formik.touched.month && Boolean(formik.errors.month)}
            helperText={formik.touched.month && formik.errors.month}
            margin="dense"
            id="month"
            label="event month"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            {...formik.getFieldProps("image_path")}
            error={
              formik.touched.image_path && Boolean(formik.errors.image_path)
            }
            helperText={formik.touched.image_path && formik.errors.image_path}
            margin="dense"
            id="image_path"
            label="Image_path"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            {...formik.getFieldProps("society_id")}
            error={
              formik.touched.society_id && Boolean(formik.errors.society_id)
            }
            helperText={formik.touched.society_id && formik.errors.society_id}
            margin="dense"
            id="society_id"
            label="Society ID"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AdminEModal;
