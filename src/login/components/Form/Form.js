import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import useStyles from './FormStyle';

const Form = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = event => {
    const updateForm = { ...form, [event.target.name]: event.target.value };
    setForm(updateForm);
  };

  const handleSubmit = event => {
    event.preventDefault();
    window.history.pushState(null, null, '/dashboard/overview');
  };

  return (
    <form data-test="form-submit" onSubmit={handleSubmit}>
      <TextField
        autoComplete="email"
        className={classes.inputFields}
        data-test="form-email-label"
        fullWidth
        inputProps={{ 'data-test': 'form-email-input' }}
        label="Email address"
        margin="normal"
        name="email"
        onChange={handleChange}
        type="email"
        value={form.email}
        variant="outlined"
      />
      <TextField
        autoComplete="current-password"
        className={classes.inputFields}
        data-test="form-password-label"
        fullWidth
        inputProps={{ 'data-test': 'form-password-input' }}
        label="Password"
        margin="normal"
        name="password"
        onChange={handleChange}
        type="password"
        value={form.password}
        variant="outlined"
      />
      <Button
        className={classes.button}
        color="primary"
        data-test="form-signIn-button"
        fullWidth
        size="large"
        type="submit"
        variant="contained">
        Sign In
      </Button>
    </form>
  );
};

export default Form;
