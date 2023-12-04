import React, { useState } from "react";
import { Typography, Box, Divider, TextField, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Navbar, Footer, ContactUs } from "../../components";
import aboutImg from "../../assets/about-us.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup
    .string("Enter a Subject")
    .max(40, "Subject cannot be over 40 characters")
    .required("Subject is required"),
  message: yup
    .string("Enter a Message")
    .max(256, "Message cannot be over 256 characters")
    .required("Message is required"),
});

const styles = {
  box: {
    p: 2,
  },
  field: {
    mt: 1.5,
    mb: 1.5,
  },
  heading_5: {
    mt: 5,
    mb: 5,
  },
  heading_3: {
    mt: 3,
    mb: 3,
  },
};

function Contact(props) {
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      subject: "",
      email: "fastdirectory01@gmail.com",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost/forum/php/api/contact.php", values)
        .then(function (res) {
          console.log(res.data);
          navigate("/");
        });
    },
  });

  return (
    <>
      <Navbar />
        <Box
            sx={{
            ...styles.box,
            backgroundColor: "#006778",
            color: "#FFFFFF",
            }}
        >
            <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{ ...styles.heading_3 }}
            >
            Contact Us
            </Typography>
        </Box>
      <Grid container sx={{padding: '20px 25px', height: '70vh'}}>

        <Grid item xs={4}
          sx={{
            ...styles.box,
            display: { xs: "block", md: "flex" },
          }}

        >
          <Box
            sx={{
              ...styles.box,
              backgroundColor: "#0093AB",
              color: "#FFFFFF",
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              textAlign="center"
              sx={{ ...styles.heading_3 }}
            >
              Contact Details
            </Typography>
            <Typography sx={{ ...styles.field }}>
              St-4, Sector 17-D، NH 5,
              <br />
              Shah Latif Town (on National Highway)
              <br />
              Karachi, Sindh, <br />
              PAKISTAN
            </Typography>
            <Typography sx={{ ...styles.field }}>
              Tel: 111 128 128 <br />
              Phone: (051) 831 4100-29
            </Typography>
            <Typography sx={{ ...styles.field }}>
              Fax: (051) 410 0619
            </Typography>
            <Typography sx={{ ...styles.field }}>
              Email: student.forum@fast.com
            </Typography>
            <Typography sx={{ ...styles.field }}>
              Website: https://fastdirectory.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}
          sx={{
            ...styles.box,
          }}
        >
          <Typography variant="h5" component="h3" sx={{ ...styles.heading_3 }}>
            Write to Us
          </Typography>

          <Box sx={{ ...styles.box }}>
            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
              <TextField
                sx={{ ...styles.field }}
                onChange={formik.handleChange}
                value={formik.values.subject}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
                id="subject"
                label="Subject"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                sx={{ ...styles.field }}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                disabled
              />
              <TextField
                sx={{ ...styles.field }}
                id="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />

              <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Submit
                </Button>
                {submit && (
                  <Typography
                    sx={{ "&.MuiTypography-root": { ml: "auto" } }}
                    color="green"
                  >
                    Form has been successfully submitted
                  </Typography>
                )}
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
export default Contact;
