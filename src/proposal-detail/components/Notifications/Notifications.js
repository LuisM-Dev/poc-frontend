import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import useStyles from './NotificationsStyle';

const Notifications = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(props.open);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        open={open}>
        <SnackbarContent
          className={classes.error}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
              This is an error message!
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleClose}>
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]}
        />
      </Snackbar>
    </div>
  );
};

export default Notifications;
