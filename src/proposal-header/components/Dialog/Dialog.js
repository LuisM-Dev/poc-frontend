import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { RadioInput } from './components';

import { useStore, CREATE_PROPOSAL } from '../../store';
import { Loading } from '../Loading';

const DialogInput = () => {
  const [open, setOpen] = useState(true);
  const [proposalType, setProposalType] = useState('');
  const dispatch = useStore()[1];

  const handleProposalTypeSelection = event => {
    setProposalType(event.target.value);
  };

  const handleClose = event => {
    const dialogAction = event.currentTarget.id;
    if (dialogAction !== 'dialog-next') {
      window.history.pushState(null, null, '/proposals/all');
    } else if (proposalType) {
      dispatch(CREATE_PROPOSAL, proposalType);
      setOpen(false);
    }
  };

  return (
    <>
      {open ? (
        <Dialog
          aria-describedby="alert-dialog-slide-description"
          aria-labelledby="alert-dialog-slide-title"
          data-test={'dialogInput'}
          disableBackdropClick
          fullWidth
          keepMounted
          maxWidth={'sm'}
          onClose={handleClose}
          open={open}>
          <DialogTitle data-test={'dialogInput-title'}>
            {'Select Proposal Type'}
          </DialogTitle>
          <DialogContent>
            <RadioInput handleChange={handleProposalTypeSelection} />
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              data-test={'dialogInput-button-cancel'}
              id={'dialog-cancel'}
              onClick={handleClose}
              variant="contained">
              Cancel
            </Button>
            <Button
              color="primary"
              data-test={'dialogInput-button-next'}
              id={'dialog-next'}
              onClick={handleClose}
              variant="contained">
              Next
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DialogInput;
