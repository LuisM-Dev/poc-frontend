import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AssetInfo = props => {
  const { open, handleClose, title, body } = props;

  return (
    <Dialog
      aria-describedby="alert-dialog-slide-description"
      aria-labelledby="alert-dialog-slide-title"
      disableBackdropClick
      keepMounted
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}>
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssetInfo;
