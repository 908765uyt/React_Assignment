import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required').min(5, 'First Name should be at least 5 characters'),
  lastName: yup.string().required('Last Name is required').min(5, 'Last Name should be at least 5 characters'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  mobile: yup.string().required('Mobile is required'), // Add mobile validation
  address1: yup.string().required('Address 1 is required'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),
  zipCode: yup.number().required('Zip Code is required').integer('Zip Code must be an integer'),
  // Add more validation for other fields
});

function UserForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address1: '',
      state: '',
      city: '',
      country: '',
      zipCode: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile"
            variant="outlined"
            fullWidth
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address 1"
            variant="outlined"
            fullWidth
            name="address1"
            value={formik.values.address1}
            onChange={formik.handleChange}
            error={formik.touched.address1 && Boolean(formik.errors.address1)}
            helperText={formik.touched.address1 && formik.errors.address1}
          />
        </Grid>
        <Grid item xs={6}>
          {/* Add State Field */}
        </Grid>
        <Grid item xs={6}>
          {/* Add City Field */}
        </Grid>
        <Grid item xs={6}>
          {/* Add Country Field */}
        </Grid>
        <Grid item xs={6}>
          {/* Add Zip Code Field */}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UserForm;
