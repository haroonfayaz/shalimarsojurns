import React from "react";
import { Form, Field } from "react-final-form";
import { TextField, MenuItem, Button, Grid, Box, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Validation function
const required = (value) => (value ? undefined : "This field is required");

const TripForm = () => {
  const onSubmit = async (values) => {
    console.log("Form Values:", values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Name"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#E2F6CA",
                    }}
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12} md={6}>
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Email"
                    type="email"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#E2F6CA",
                    }}
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12} md={6}>
              <Field name="phone" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Phone"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#E2F6CA",
                    }}
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12} md={6}>
              <Field name="date" validate={required}>
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
                      customInput={
                        <TextField
                          fullWidth
                          label="Date"
                          error={meta.touched && meta.error}
                          helperText={meta.touched && meta.error}
                          sx={{
                            backgroundColor: "#E2F6CA",
                          }}
                        />
                      }
                    />
                  </Box>
                )}
              </Field>
            </Grid>

            <Grid item xs={12} md={6}>
              <Field name="city" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="City"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#E2F6CA",
                    }}
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={6}>
              <Field name="adults" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Adults"
                    type="number"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#E2F6CA",
                    }}
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={6}>
              <Field name="children">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Children"
                    type="number"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                    sx={{
                      backgroundColor: "#E2F6CA",
                    }}
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "50px",
                    color: "#270082",
                    mt: 1,
                    fontWeight: 700,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default TripForm;
