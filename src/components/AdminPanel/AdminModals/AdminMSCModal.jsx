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
  name: yup
    .string("Enter Event name")
    .max(150, "Maximum 150 characters allowed")
    .required("This field is required"),
  description: yup
    .string("description")
    .max(30, "Maximum 30 characters allowed")
    .required("This field is required"),
    price: yup
    .number("ID must be an integer")
    .required("This field is required"),
    image_path: yup
      .string("Enter Image Path")
      .max(30, "Maximum 255 characters allowed")
      .required("This field is required"),
});

function AdminMSCModal() {
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
      name: "",
      description: "",
      image_path: "",
      price: "",
      canteen_id:2
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose();
      axios
        .post("http://localhost/forum/php/api/menu.php", values)
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
        <DialogTitle>Shawarma-Corner Menu</DialogTitle>
        <DialogContent>
          <DialogContentText>Add your menu</DialogContentText>
          <TextField
            {...formik.getFieldProps("name")}
            error={
              formik.touched.name && Boolean(formik.errors.name)
            }
            helperText={formik.touched.name && formik.errors.name}
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            {...formik.getFieldProps("description")}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            margin="dense"
            id="description"
            label="description"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            {...formik.getFieldProps("price")}
            error={
              formik.touched.price && Boolean(formik.errors.price)
            }
            helperText={formik.touched.price && formik.errors.price}
            margin="dense"
            id="price"
            label="price"
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
export default AdminMSCModal;
