import React, { useState } from 'react';
import { Drawer, Button } from '@material-ui/core';
import {
  Edit as EditIcon,
  SkipNext as SkipNextIcon,
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@material-ui/icons';
import Notifications from '../Notifications';

import useStyles from './FooterStyle';

import {
  useStore,
  SAVE_PROPOSAL,
  EDIT_PROPOSAL,
  CANCEL_PROPOSAL
} from '../../store';

const Footer = () => {
  const classes = useStyles();
  const [state, dispatch] = useStore();
  const [notification, setNotification] = useState(false);
  const { edit } = state;

  const handleNext = () => {
    if (state.nextStage.status) {
      console.log(state.proposal.id);
      console.log(state.proposal.type);
      window.history.pushState(
        { id: state.proposal.id, type: state.proposal.type },
        null,
        '/proposals/detail'
      );
    }
  };

  const handleEdit = async () => {
    await dispatch(EDIT_PROPOSAL);
  };

  const handleSave = async () => {
    await dispatch(SAVE_PROPOSAL);
  };

  const handleCancel = async () => {
    await dispatch(CANCEL_PROPOSAL);
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
      {/*{notification && <Notifications open={notification} />}*/}
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
