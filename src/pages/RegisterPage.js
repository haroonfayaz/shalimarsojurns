import {
  Box,
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import backgroundImage from "../assets/images/gulmarg.jpeg";
import { Field, Form } from "react-final-form";
import {
  composeValidators,
  minLength,
  validateEmail,
  validateNumber,
  validateRequired,
} from "../Utils";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import InfoIcon from "@mui/icons-material/Info";
import emailjs from "emailjs-com";

const RegisterPage = () => {
  const today = new Date();
  const onSubmit = (values, form) => {
    // EmailJS configuration
    const serviceID = "service_9etrh0f"; // Your EmailJS service ID
    const templateID = "template_cc749lq"; // Your EmailJS template ID
    const userID = "RhAZM3fTHPdwG3HWa"; // Your EmailJS user ID

    // Mapping form data to EmailJS template variables
    const templateParams = {
      to_name: "Shalimar Sojourns", // You can set a default recipient's name or collect it in the form
      from_name: `${values.firstname} ${values.lastname}`, // Sender's first and last name
      email: values.email, // Sender's email
      phone: values.dialCode + values.phoneNumber, // Sender's full phone number
      adults: values.adults, // Number of adults
      children: values.children, // Number of children
      date: values.date.toISOString().split("T")[0], // Format date to YYYY-MM-DD
    };

    // Sending email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you, we will get in touch!");
        form.reset(); // Reset form values upon successful submission
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      }
    );
  };

  return (
    <Grid height="99vh" container>
      <Grid item md={6} height="100%" display={{ xs: "none", md: "flex" }}>
        <img
          width="100%"
          height="100%"
          src={backgroundImage}
          alt="Shalimar Sojourns"
        />
      </Grid>

      <Grid item md={6} height="100vh" px="4rem" mt="6rem">
        <Stack>
          <Typography
            sx={{
              color: "#270082",
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              "&:hover": {
                color: "#8CC0DE",
              },
            }}
          >
            Register Here
          </Typography>
        </Stack>
        <Form
          initialValues={{}}
          onSubmit={onSubmit}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={4} mt={1}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    ml: "-16px !important",
                  }}
                >
                  <Grid item xs={12} md={6}>
                    <Field
                      name="firstname"
                      validate={composeValidators(validateRequired)}
                      render={({ input, meta }) => (
                        <TextField
                          label="First name"
                          {...input}
                          fullWidth
                          error={meta.touched && !!meta.error}
                          helperText={meta.touched && meta.error}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field
                      name="lastname"
                      validate={composeValidators(validateRequired)}
                      render={({ input, meta }) => (
                        <TextField
                          label="Last name"
                          {...input}
                          fullWidth
                          error={meta.touched && !!meta.error}
                          helperText={meta.touched && meta.error}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      name="email"
                      validate={composeValidators(
                        validateRequired,
                        validateEmail
                      )}
                      render={({ input, meta }) => (
                        <TextField
                          label="Email"
                          {...input}
                          fullWidth
                          error={meta.touched && !!meta.error}
                          helperText={meta.touched && meta.error}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field
                      name="phoneNumber"
                      validate={composeValidators(
                        validateRequired,
                        minLength(9, "Must be 9 characters or more")
                      )}
                      render={({ input, meta }) => (
                        <>
                          <PhoneInput
                            label="Phone No."
                            value={
                              form.getState().values?.dialCode + input.value
                            }
                            onChange={(phone, country) => {
                              form.change("dialCode", country?.dialCode || "");
                              form.change(
                                "phoneNumber",
                                phone?.slice(country?.dialCode.length) || ""
                              );
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
                          <FormHelperText
                            sx={{
                              mt: "0 !important",
                              px: 2,
                              color: "primary",
                            }}
                          >
                            {meta?.touched && meta?.error}
                          </FormHelperText>
                        </>
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field name="date" validate={validateRequired}>
                      {({ input, meta }) => (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <DatePicker
                            selected={input.value || null}
                            onChange={input.onChange}
                            placeholderText="Select Date"
                            minDate={today}
                            customInput={
                              <TextField
                                fullWidth
                                label="Date"
                                error={meta.touched && meta.error}
                                helperText={meta.touched && meta.error}
                              />
                            }
                          />
                        </Box>
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field
                      name="children"
                      validate={composeValidators(
                        validateRequired,
                        validateNumber
                      )}
                      render={({ input, meta }) => (
                        <TextField
                          label="Children"
                          {...input}
                          fullWidth
                          InputProps={{
                            inputProps: {
                              min: 0,
                              max: 3,
                            },
                            endAdornment: (
                              <InputAdornment position="end">
                                <Tooltip title="Total number of childrens travelling">
                                  <InfoIcon color="primary" />
                                </Tooltip>
                              </InputAdornment>
                            ),
                          }}
                          error={meta.touched && !!meta.error}
                          helperText={meta.touched && meta.error}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            if (
                              /^\d*$/.test(newValue) &&
                              newValue.length <= 2
                            ) {
                              input.onChange(e);
                            }
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field
                      name="adults"
                      validate={composeValidators(
                        validateRequired,
                        validateNumber
                      )}
                      render={({ input, meta }) => (
                        <TextField
                          label="Adults"
                          {...input}
                          fullWidth
                          error={meta.touched && !!meta.error}
                          helperText={meta.touched && meta.error}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Tooltip title="Total number of adults travelling">
                                  <InfoIcon color="primary" />
                                </Tooltip>
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            if (
                              /^\d*$/.test(newValue) &&
                              newValue.length <= 2
                            ) {
                              input.onChange(e);
                            }
                          }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
