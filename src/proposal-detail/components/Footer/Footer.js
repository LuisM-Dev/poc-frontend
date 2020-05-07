import React, { useState } from 'react';
import { Drawer, Button } from '@material-ui/core';
import {
  Edit as EditIcon,
  SkipNext as SkipNextIcon,
  SkipPrevious as SkipPreviousIcon,
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@material-ui/icons';
import Notifications from '../Notifications';

import useStyles from './FooterStyle';

import {
  useStore,
  EDIT_ASSET,
  SAVE_PROPOSAL,
  CANCEL_PROPOSAL,
  VALIDATE_PROPOSAL
} from '../../store';

const Footer = () => {
  const classes = useStyles();
  const [state, dispatch] = useStore();
  const [notification, setNotification] = useState(false);
  const { edit } = state;

  const handleNext = () => {
    console.log('clicked next state ', state.nextStage);
    // dispatch(VALIDATE_PROPOSAL);
    if (state.nextStage.status) {
      window.history.pushState(
        { id: state.proposal.id, type: state.proposal.type },
        null,
        '/proposals/cart'
      );
    }
  };

  const handleBack = () => {
    window.history.pushState(null, null, '/proposals/new');
  };

  const handleEdit = () => {
    dispatch(EDIT_ASSET);
  };

  const handleSave = () => {
    dispatch(SAVE_PROPOSAL);
  };

  const handleCancel = () => {
    dispatch(CANCEL_PROPOSAL);
  };

  const editProposal = () => (
    <>
      <Button
        className={classes.button}
        data-test={'footer-save'}
        onClick={handleSave}>
        <SaveIcon className={classes.icon} />
        Save
      </Button>
      <Button
        className={classes.button}
        data-test={'footer-cancel'}
        onClick={handleCancel}>
        <CancelIcon className={classes.icon} />
        Cancel
      </Button>
    </>
  );

  const savedProposal = () => (
    <>
      <Button
        className={classes.button}
        data-test={'footer-edit'}
        onClick={handleEdit}>
        <EditIcon className={classes.icon} />
        Edit
      </Button>
      <Button onClick={handleBack} className={classes.button}>
        <SkipPreviousIcon className={classes.icon} />
        Back
      </Button>
      <Button
        className={classes.button}
        color="primary"
        data-test={'footer-next'}
        onClick={handleNext}>
        <SkipNextIcon className={classes.icon} />
        Next
      </Button>
    </>
  );

  return (
    <>
      {notification && <Notifications open={notification} />}
      <Drawer
        anchor="bottom"
        className={classes.footerContainer}
        data-test={'footer'}
        open
        variant="persistent">
        <div className={classes.footer} role="presentation">
          {edit.status ? editProposal() : savedProposal()}
        </div>
      </Drawer>
    </>
  );
};

export default Footer;
