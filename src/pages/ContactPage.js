import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  FormHelperText,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import backgroundImage1 from "../assets/images/location1.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { composeValidators, validateEmail, validateRequired } from "../Utils";
import emailjs from "emailjs-com";

const onSubmit = (values, form) => {
  // EmailJS configuration
  const serviceID = "service_9etrh0f"; // Your service ID
  const templateID = "template_1yq71w4"; // Your EmailJS template ID
  const userID = "RhAZM3fTHPdwG3HWa"; // Replace with your EmailJS user ID

  // Mapping form data to EmailJS template variables
  const templateParams = {
    to_name: "Shalimar Sojourns", // You can set a default recipient's name or collect it in the form
    from_name: `${values.firstName} ${values.lastName}`, // Sender's first name
    email: values.email, // Sender's email
    phone: values.phoneNumber, // Sender's phone number
    message: values.message, // The message content
  };

  // Sending email using EmailJS
  emailjs.send(serviceID, templateID, templateParams, userID).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Thank you, we will get in touch!");
      form.reset();
    },
    (error) => {
      console.error("FAILED...", error);
      alert("Failed to send email. Please try again later.");
    }
  );
};

const ContactPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Form
        onSubmit={(values, form) => onSubmit(values, form)}
        render={({ handleSubmit, form, submitting }) => (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "80%", md: "50%" },
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ textAlign: "center", mb: 2 }}
            >
              Get in Touch
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="firstName"
                  validate={validateRequired}
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        required
                        {...input}
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="lastName"
                  validate={validateRequired}
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        required
                        {...input}
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="email"
                  validate={composeValidators(validateRequired, validateEmail)}
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        required
                        {...input}
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  name="phoneNumber"
                  validate={validateRequired}
                  render={({ input, meta }) => (
                    <>
                      <PhoneInput
                        value={input.value}
                        onChange={(phone, country) => {
                          input.onChange(phone);
                        }}
                        country={"in"}
                        inputProps={{
                          style: {
                            width: "100%",
                            height: "54px",
                            borderColor:
                              meta.touched && !!meta.error ? "#d32f2f" : "",
                            borderRadius: "8px",
                            backgroundColor: "#E2F6CA",
                          },
                        }}
                      />
                      {meta.touched && meta.error && (
                        <FormHelperText
                          sx={{ mt: "0 !important", px: 2, color: "primary" }}
                        >
                          {meta.error}
                        </FormHelperText>
                      )}
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="message"
                  validate={validateRequired}
                  render={({ input, meta }) => (
                    <>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        {...input}
                        error={meta.touched && !!meta.error}
                        helperText={meta.touched && meta.error}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  disabled={submitting}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </Box>
  );
};

export default ContactPage;
