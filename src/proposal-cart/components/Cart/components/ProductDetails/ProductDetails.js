import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content'
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  }
}));

export default function MaxWidthDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      open={open}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title">
      <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
      {console.log(open)}
      <DialogContent>
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
        <form className={classes.form} noValidate>
          {/* <FormControl className={classes.formControl}>
            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
            <Select
              autoFocus
              value={maxWidth}
              onChange={handleMaxWidthChange}
              inputProps={{
                name: 'max-width',
                id: 'max-width'
              }}>
              <MenuItem value={false}>false</MenuItem>
              <MenuItem value="xs">xs</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl> */}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
